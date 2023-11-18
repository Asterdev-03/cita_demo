import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-white">
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 flex flex-col items-center justify-center h-screen">
          <h1 className="text-white text-6xl font-bold">CITA</h1>
          <p className="text-white text-lg">
            The most powerful conversational AI ever created.
          </p>
          <button className="bg-white text-purple-500 px-4 py-2 rounded-md font-bold">
            Get started
          </button>
        </div>
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center">Features</h2>
          <div className="flex flex-wrap justify-center mt-8">
            <div className="w-1/3 p-4">
              <h3 className="text-2xl font-bold">Generate text</h3>
              <p>
                Create text, translate languages, write different kinds of
                creative content, and answer your questions in an informative
                way.
              </p>
              <Image src="/images/fulllogo.png" height={200} width={400} />
            </div>
            <div className="w-1/3 p-4">
              <h3 className="text-2xl font-bold">Answer questions</h3>
              <p>
                Answer your questions in an informative way, even if they are
                open ended, challenging, or strange.
              </p>
            </div>
            <div className="w-1/3 p-4">
              <h3 className="text-2xl font-bold">Complete requests</h3>
              <p>
                Complete your requests thoughtfully, even if they are open
                ended, challenging, or strange.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-purple-400 flex flex-col items-center justify-center h-screen">
          <h2 className="text-white text-6xl font-bold">Try CITA today</h2>
          <p className="text-white text-lg">It's free to get started.</p>
          <button className="bg-white text-purple-500 px-4 py-2 rounded-md font-bold">
            Sign up
          </button>
        </div>
        <div className="bg-gray-800 text-white py-4">
          <div className="container mx-auto">
            <p className="text-center">Copyright © 2023 CITA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
