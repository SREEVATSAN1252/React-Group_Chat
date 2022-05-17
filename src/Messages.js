
import { Avatar } from "@mui/material";
import React from "react";
import "./Messages.css"
function Messages({ message, username, userImage, timestamp }) {
  console.log("See the Message=====>", message);
  console.log("timestamp===>",{timestamp});
  return (
    <div className="message">
      <Avatar src={userImage}/>
      <div className="message__info">
        <h4>{username} <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
        <p>{message && message}</p>
      </div>
    </div>
  );
}

export default Messages;
