import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info"></div>
            <h3>Room Name</h3>
            <p>This is the last message</p>
        </div>
    )
}

export default SidebarChat
