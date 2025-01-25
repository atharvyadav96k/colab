import React from 'react';
import {  useParams } from 'react-router-dom';
import Tools from './Tools';
import { useState } from 'react';
import Chat from './Chat';
import VideoChat from './VideoChat';
export default function SpaceView() {
    const { id } = useParams();
    const [drawer, setDrawer] = useState(false);
    const [videoChat, setVideo] = useState(false);
    const sendMessage = (message)=>{
        alert(message);
    }
    const handelDrawer = () => {
        setDrawer(!drawer);
    };
    const handelVideoChat = () =>{
        setVideo(!videoChat);
    }
    return (
        <div>
            {
                videoChat ? <VideoChat /> : <></>
            }
            {drawer ? (
                <div className="fixed w-64 h-full bg-white top-0 left-0 shadow-xl">
                    <div className="flex justify-between">
                        <span className="p-2">Chats</span>
                        <span
                            onClick={handelDrawer}
                            className="p-2 cursor-pointer"
                        >
                            ✕
                        </span>
                    </div>
                    <Chat sendMessage={sendMessage}/>
                </div>
            ) : (
                <></>
            )}
            Space {id}
            <Tools handelDrawer={handelDrawer} handelVideoChat={handelVideoChat}/>
        </div>
    );
}
