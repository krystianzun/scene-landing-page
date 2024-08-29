import React from "react";
import Image from "next/image";
import SceneGif from "../public/assets/scene-3.gif";

const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <Image src={SceneGif} alt="scene gif" width={200} />
      </div>
    </section>
  );
};

export default HeroSection;
