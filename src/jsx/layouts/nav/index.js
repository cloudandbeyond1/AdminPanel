import React, { Fragment, useState } from "react";
import SideBar from "./SideBar";
import NavHader from "./NavHader";
import Header from "./Header";
import ChatBox from "../ChatBox";

const KokiNav = ({ title }) => {
   const [toggle, setToggle] = useState("");
   const onClick = (name) => setToggle(toggle === name ? "" : name);
   return (
      <Fragment>
         <NavHader />
         <SideBar />
         <Header
            onNote={() => onClick("chatbox")}
            onActivity={() => onClick("activity")}
            onNotification={() => onClick("notification")}
            onProfile={() => onClick("profile")}
            toggle={toggle}
            title={title}
         />
         <ChatBox onClick={() => onClick("chatbox")} toggle={toggle} />
      </Fragment>
   );
};

export default KokiNav;
