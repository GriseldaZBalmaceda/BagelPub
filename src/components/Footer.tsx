"use client";
import Image from "next/image";
export const Footer = () => {
  // Now you can destructure the hero data

  return (
    <div className="flex flex-row w-full">
      <div className="flex row w-1/2 ">
        <Image
          alt="footer"
          width="200"
          height="150"
          src="/footer-logo.png"
          className="p-5"
        />
        <div className="flex flex-col justify-center space-evenly w-1/2 p-10 max-w-[300px]">
          <p>This ones on the house</p>
          <p>Stay in touch and score special deals.</p>
          <input
            className="bg-[#F1E7D0] h-[40px]"
            type="text"
            id="firstName"
            defaultValue="Pedro Duarte"
          />
          <button>hi</button>
        </div>
      </div>
      <div className="flex w-1/2 flex-row justify-items-start p-10 gap-4">
        <ol>
          <li>Menu</li>
          <li>About Us</li>
          <li>Catering</li>
        </ol>
        <ol>
          <li>Menu</li>
          <li>About Us</li>
          <li>Catering</li>
        </ol>
      </div>
    </div>
  );
};
