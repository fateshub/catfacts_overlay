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
            console.log(extra.sinceLastCommand.any)
         if(extra.sinceLastCommand.any > 120000 || extra.sinceLastCommand.any === 0 ) 
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
