import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

function Index(user,userFollowStats) {
 // console.log({user,userFollowStats});
 useEffect(() => {
  document.title = `Welcome`;
}, []);


  return(
     <div>
    Homepage
  </div>
  );
}

export default Index;
