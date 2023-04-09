import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import messages from "../images/messages.png"
import friend from "../images/friends.png"

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="container-fluid vh-100 bg-color1">
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-lg-8 col-md-10 col-sm-10">
          <div className="card" style={{overflow: "hidden"}}>
            <div className="card-body p-0">
            <button
                className={`d-md-none toggle-btn 
                ${showSidebar ? "bg-color3" : "bg-color4"}`}
                onClick={handleToggleSidebar}
                style={{color: showSidebar ? "#213d4e" : "#D8F0F4"}}
                >
                {showSidebar ? <img src={messages} className="toggle-img"/> : <img src={friend} className="toggle-img"/>}
                {showSidebar ? "Messages" : "Sidebar"}
            </button>
              <div className="row message-screen">
                <div
                  className={`col-lg-4 col-md-4 col-xs-10 bg-color4 p-0 ${
                    showSidebar ? "" : "collapse d-md-block"
                  }`}
                >
                  <Sidebar/>
                </div>
                <div
                  className={`col-lg-8 col-md-8 col-xs-10 bg-color3 ${
                    showSidebar ? "d-none d-md-block" : ""
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
