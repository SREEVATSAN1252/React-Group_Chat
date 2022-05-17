import { Add, Apps, Bookmark, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from "@mui/icons-material";

import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useStateValue } from "./StateProvider";
function Sidebar() {
  const [{user}] = useStateValue();
  const [channels, setChannels] = useState([])
  useEffect(() => {
   db.collection("rooms").onSnapshot(snapshot=>(
     setChannels(snapshot.docs.map(doc=>({
       id:doc.id,
       name:doc.data().name
     })))
   ))
  }, [])

  
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Slack-chat...</h2>
          <h3>
            <FiberManualRecord />
            {user.displayName}
            
          </h3>
        </div>
        <Create/>
       
       
      </div>
      <SidebarOption Icon={InsertComment} tittle="Threads"/>
      <SidebarOption Icon={Inbox} tittle="Mentions & reactions"/>
      <SidebarOption Icon={Drafts} tittle="Saved items"/>
      <SidebarOption Icon={Bookmark} tittle="Channel browser"/>
      <SidebarOption Icon={PeopleAlt} tittle="People & user groups"/>
      <SidebarOption Icon={Apps} tittle="Apps"/>
      <SidebarOption Icon={FileCopy} tittle="File browser"/>
      <SidebarOption Icon={ExpandLess} tittle="Show less"/>
      <hr/>
      <SidebarOption Icon={ExpandMore} tittle="Channels"/>
      <hr/>
      <SidebarOption Icon={Add} addChannelOption tittle="Add Channel"/>

      {channels.map(channel=>(
        <SidebarOption tittle={channel.name} id={channel.id}/>
      ))}
      
    </div>
  );
}

export default Sidebar;
