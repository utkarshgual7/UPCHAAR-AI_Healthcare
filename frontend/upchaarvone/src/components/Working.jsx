import React from "react";

const Working = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pl-8 text-center">
        <div className="text-5xl font-bold text-orange-500 ">
          <span className="border-b-2 border-blue-500 font-bold ">
            How UPCHAAR Works
          </span>
        </div>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center w-full pb-14">
        <div className="w-full md:w-1/2 px-4 md:px-0">
          <h2 className="text-3xl pr-5 font-bold text-gray-800 mb-4">
            Features of UPCHAAR
          </h2>
          <ul className="list-disc pl-6">
            <li className="text-gray-800 text-lg font-semibold mb-2">
              Personalized Chat bot - Vaidya.
            </li>
            <li className="text-gray-800 text-lg font-semibold mb-2">
              Highly Experienced doctor.
            </li>
            <li className="text-gray-800 text-lg font-semibold mb-2">
              Scan your reports for free and get an assessment in one click!.
            </li>
            <li className="text-gray-800 text-lg font-semibold mb-2">
              Click on the video to know working of UPCHAAR
            </li>
          </ul>
        </div>
        <div className="w-full md:w-max mt-8 md:mt-0">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/qOO6lVMhmGc"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
