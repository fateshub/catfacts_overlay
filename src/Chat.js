import React, { useEffect } from "react";
var ComfyJS = require("comfy.js");
let params = new URL(document.location).searchParams;
let channel = params.get("Channel");

const Chat = ({
    update , setUpdate
}) => {
  // eslint-disable-next-line
  

  useEffect(() => {
    ComfyJS.onCommand = (user, command, message, flags, extra) => {
        if (command === "catfact") {
         if(extra.sinceLastCommand.any > 600000) 
         {setUpdate(!update)
          console.log(update);}
        }
    };

    return () => {};
    // eslint-disable-next-line
  }, [update]);

  useEffect(() => {
    ComfyJS.Init(channel);
    return () => {};
    // eslint-disable-next-line
  }, []);

  return <></>;
};

export default Chat;
