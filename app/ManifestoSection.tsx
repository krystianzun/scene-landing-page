import React from "react";
import Image from "next/image";
import DiscordIcon from "../public/assets/discord-icon.svg";

const ManifestoSection = () => {
  return (
    <section>
      <div className="text-center flex flex-col gap-8 text-xl mb-12">
        <p>
          We believe the internet needs a straightforward, non-commercial 3D
          viewer—a tool that lets anyone share and view 3D models with ease.
        </p>
        <p>
          Our world is 3D, yet we&apos;re still stuck sharing and viewing
          content on flat, 2D screens. It doesn&apos;t make sense.
        </p>
        <p>
          Current tools for sharing 3D content are either too complicated or too
          limited. Whether you&apos;re a creator showcasing your work or a user
          exploring, the barriers are frustrating. With AI-generated 3D models
          and XR technologies on the rise, the need for easy 3D sharing is only
          growing. But there&apos;s a huge gap—a lack of simple, intuitive tools
          for bringing these creations to life online.
        </p>
        <p>
          We&apos;re here to change that. Our mission is clear: to create a
          platform that makes sharing and viewing 3D models quick and easy. No
          complicated software, no confusing interfaces—just a clean, powerful
          tool anyone can use. We want to make it effortless for creators to
          share their vision and for users to dive into 3D content.
        </p>
      </div>
      <div className="text-center flex flex-col gap-8 text-xl items-center justify-center">
        <p>Join our Discord to try it out and follow the progress!</p>
        <a
          href="https://www.youtube.com/"
          rel="noopener noreferrer"
          target="_blank"
          className=" text-white font-medium px-6 py-3 bg-[rgb(88,101,242)] drop-shadow-[0_16px_40px_rgba(88,101,242,0.75)] text-center hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
        >
          <Image
            src={DiscordIcon}
            alt="Discord Icon"
            className="w-6 h-6 fill-white"
          />
          Join
        </a>
      </div>
    </section>
  );
};

export default ManifestoSection;
