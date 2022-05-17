import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorder } from "@mui/icons-material";
import db from "./firebase";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
function Chat() {
  const [roomDetails, setRoomDetails] = useState(null);
  const [messages, setMessages] = useState([]);
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
      
  }, [roomId]);
  console.log("room detailssssss===>",roomDetails);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorder />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>

      <div className="chat__message">
        {messages?.map((messages) => (
          <Messages
            message={messages.message}
            userImage={messages.userimage}
            username={messages.user}
            timestamp={messages.timestamp}
          />
        ))}
      </div>
      <div className="chat__input">
        <ChatInput channelName={roomDetails?.name} channelId={roomId}/>


      </div>
    </div>
  );
}

export default Chat;
