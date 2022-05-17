import React, { useState } from "react";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from 'firebase/compat/app';
import "./ChatInput.css"

function ChatInput({ channelName, channelId }) {
  const [value, setValue] = useState("");
  const [{ user }] = useStateValue();

  console.log("here you goo", firebase.firestore.Timestamp.now());

  const buttonHandler = (e) => {
    e.preventDefault();
    if(channelId){
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName, 
            userimage: user.photoURL,
           
          });
          setValue("");
    }
 
  };
  return (
    <div className="chatinput">
      <form >
        <input className="chat__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`   Message  # ${channelName?.toLowerCase()}`}
        />
        <button className="chat__button" type="submit" onClick={buttonHandler}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
