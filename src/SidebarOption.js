import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import db from './firebase';
import "./SidebarOption.css"
function SidebarOption({Icon,tittle,addChannelOption,id}) {
  const history = useHistory();
  const selectChannel=()=>{
    if(id) history.push(`/room/${id}`)
    else history.push(tittle)
  }
  const addChannel=()=>{
    const channelName = prompt("Enter Channel Name")
    if(channelName){
      db.collection("rooms").add({
        name:channelName
      })
    }
  
  }

  
  return (
    <div className='sidebarOption' onClick={addChannelOption?addChannel:selectChannel}>
        {Icon&&<Icon className="sidebarOption__icon"/>}
        {Icon?<h3>{tittle}</h3>:<h3 className='sidebarOption__channel'>
           <span className='sidebarOption__hash'>#</span> {tittle}
            </h3>}
    </div>
  )
}

export default SidebarOption