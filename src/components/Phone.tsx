import React from "react";

const Phone: React.FC = () => {
  return (
    <div className="phone-container relative">
      <div className="phone-case w-[316px] h-[616px] bg-[#333333] rounded-[48px] p-2">
        <div className="phone w-[300px] h-[600px] bg-white rounded-[40px] overflow-hidden relative border-[8px] border-black">
          <div className="notch w-[150px] h-[30px] bg-black absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-[15px] z-10"></div>
          <div className="screen bg-white p-4 h-full flex flex-col justify-between">
            <h1 className="text-black text-4xl font-bold mt-8">
              <span className="underline-animation">Hello</span>
              <br />
              there,
              <br />
              People!
            </h1>
            <div className="avatar-container flex justify-center items-center flex-grow">
              <img
                src="https://boycottx.fr/assets/images/chedy.svg"
                alt="Avatar"
                className="w-64 h-64 bounce-squeeze-width"
              />
            </div>
            <div className="flex justify-center mb-4">
              <button className="color-changing-button text-white font-bold py-2 px-6 rounded-full text-lg">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
