import React from "react";
import Image from "next/image";
import SceneGif from "../public/assets/scene-3.gif";

const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-12 h-96">
        <Image src={SceneGif} alt="scene gif" width={100} />
        <div className="flex w-full max-w-[380px] flex-col items-center gap-4 px-4">
          <h1 className="text-4xl text-center font-bold text-neutral-900">
            Share and view 3D quick and easy
          </h1>
          <p className="text-xl text-center text-neutral-500 font-medium">
            Unlimited tool to share your creations with the world
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
