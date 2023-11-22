"use client";

import {
  AudioMutedOutlined,
  SendOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import Image from "next/image";

// import React, { useState, useEffect, useRef } from "react";
// import Webcam from "react-webcam";

// export default function MockTestPage() {
//   const webcamRef = useRef(null);
//   const [videoStream, setVideoStream] = useState(null);

//   useEffect(() => {
//     startVideoStream();
//   }, []);

//   async function startVideoStream() {
//     if (
//       typeof webcamRef.current !== "undefined" &&
//       webcamRef.current !== null &&
//       webcamRef.current.video.readyState === 4
//     ) {
//       const video = webcamRef.current.video;
//       const videoWidth = webcamRef.current.video.videoWidth;
//       const videoHeight = webcamRef.current.video.videoHeight;

//       // Set video to be displayed based on the actual width and height of the direct video from camera
//       webcamRef.current.video.width = videoWidth;
//       webcamRef.current.video.height = videoHeight;
//     }
//   }

//   return (
//     <div>
//       <Webcam
//         ref={webcamRef}
//         muted={true} // this mutes the audio feed
//         audio={false}
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       />
//       {/* {videoStream && <video srcObject={videoStream} autoPlay />} */}
//     </div>
//   );
// }

export default function MockTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-100">
      <nav className="p-3 flex justify-between items-center bg-white/70 border border-b-3 border-gray-200">
        <Image src="/images/fulllogo.png" height={60} width={110} />
        <Avatar size={40} icon={<UserOutlined />} />
      </nav>
      <div className="flex flex-row p-5 gap-4 min-h-[90vh]">
        <div className="w-1/4 p-4 border-2 rounded-2xl bg-zinc-50">
          <div className="grid grid-cols-1 h-full">
            <h2 className="font-[1000] text-[50px]">Hello Ken,</h2>
            <p className="text-xl">
              You are being interviewed for <br />
              <span className="font-black text-left text-[40px] text-purple-800 leading-10">
                Junior Software Engineer
              </span>
            </p>
            <div>
              <h3 className="font-semi-bold text-lg">Time elapsed:</h3>
              <h4 className="font-black text-[50px]">00:23:46</h4>
            </div>
            <button className="p-3 bg-red-400 hover:bg-red-300 transition duration-300 text-white rounded-full">
              End Session
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full border-2 rounded-2xl bg-white p-4 gap-y-2">
          <div className="flex gap-x-2">
            <div className="relative h-[450px] w-2/3 bg-gray-100 rounded-2xl overflow-hidden">
              <Image src="/images/avatar.png" fill className="" />
              <div className="absolute min-h-[50px] h-fit bottom-0 text-center w-full backdrop-blur-md bg-gray-50/50 p-4">
                <p>
                  What are your expectations on working at our company in the
                  long run?
                </p>
              </div>
            </div>
            <div className="h-[450px] w-1/3 bg-gray-100 rounded-2xl flex flex-col">
              <div className="h-4/5 flex items-center justify-center">
                <Avatar size={200} icon={<UserOutlined />} />
              </div>
              <div className="flex items-center justify-center grow gap-x-5">
                <button className="bottom-0 bg-red-400 hover:bg-red-500 transition duration-300 h-12 w-12 rounded-full">
                  <AudioMutedOutlined />
                </button>
                <button className="bottom-0 bg-blue-400 hover:bg-blue-500 transition duration-300 h-12 w-12 rounded-full">
                  <VideoCameraOutlined />
                </button>
              </div>
            </div>
          </div>
          <div className="grow w-full border-2 bg-gray-50 rounded-3xl px-3 flex items-center justify-between">
            <textarea
              className="w-full border-none bg-inherit outline-none overflow-hidden mx-2 resize-none"
              rows={2}
            />
            <button className="bg-zinc-500 hover:bg-zinc-700 transition duration-300 h-12 w-12 rounded-full text-white">
              <SendOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
