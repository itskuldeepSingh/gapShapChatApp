import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import messages from "../images/messages.png"
import friend from "../images/friends.png"
import { ChatContext } from "../context/ChatContext";

const Home = () => {
  const { data } = useContext(ChatContext)
  const { dispatch } = useContext(ChatContext)

  const handleToggleSidebar = () => {
    dispatch({type: "TOGGLE_SIDEBAR"})
  };

  return (
    <div className="container-fluid vh-100 bg-color1">
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-lg-8 col-md-10 col-sm-10">
          <div className="card w-100">
            <div className="card-body p-0" style={{overflow: "hidden"}}>
            <button
                className={`d-md-none toggle-btn 
                ${data.showSidebar ? "bg-color3" : "bg-color4"}`}
                onClick={handleToggleSidebar}
                style={{color: data.showSidebar ? "#213d4e" : "#D8F0F4"}}
                >
                {data.showSidebar ? <img src={messages} className="toggle-img"/> : <img src={friend} className="toggle-img"/>}
                {data.showSidebar ? "Messages" : "Sidebar"}
            </button>
              <div className="row message-screen">
                <div
                  className={`col-lg-4 col-md-4 col-xs-10 bg-color4 ${
                    data.showSidebar ? "" : "collapse d-md-block"
                  }`}
                  style={{paddingRight: "0px"}}
                >
                  <Sidebar/>
                </div>
                <div
                  className={`col-lg-8 col-md-8 col-xs-10 bg-color3 py-0 px-sm-2 px-md-0 ${
                    data.showSidebar ? "d-none d-md-block" : ""
                  } main-screen`}
                >
                  <Chat/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
