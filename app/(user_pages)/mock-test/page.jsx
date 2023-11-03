"use client";
import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

export default function MockTestPage() {
  const webcamRef = useRef(null);
  const [videoStream, setVideoStream] = useState(null);

  useEffect(() => {
    startVideoStream();
  }, []);

  async function startVideoStream() {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video to be displayed based on the actual width and height of the direct video from camera
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
    }
  }

  return (
    <div>
      <Webcam
        ref={webcamRef}
        muted={true} // this mutes the audio feed
        audio={false}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* {videoStream && <video srcObject={videoStream} autoPlay />} */}
    </div>
  );
}
