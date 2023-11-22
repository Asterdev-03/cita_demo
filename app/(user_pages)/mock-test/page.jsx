"use client";

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
      <nav className="p-3 flex justify-between bg-white/70 border border-b-3 border-gray-200">
        <Image src="/images/fulllogo.png" height={60} width={110} />
        <div className="bg-gray-300 h-10 w-10 rounded-full" />
      </nav>
      <div className="flex flex-row p-5 gap-4 min-h-[90vh]">
        <div className="w-1/4 border-2 rounded-2xl bg-zinc-50">hello</div>
        <div className="relative flex flex-col w-full border-2 rounded-2xl bg-white p-4 gap-y-2">
          <div className="h-[430px] w-full bg-gray-100 rounded-2xl"></div>
          <div className="grow w-full border-2 bg-gray-50 rounded-full px-3 flex items-center justify-between">
            <h1 className="text-gray-400">Conversation</h1>
            <div className="bg-blue-600 h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
