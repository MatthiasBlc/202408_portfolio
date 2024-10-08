"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",

        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  listLogos,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  listLogos?: Array<string>;
}) => {
  const [copied, setcopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const mail = {
    part1: "mat.bouloc",
    part2: "@wanadoo",
    part3: ".fr",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(mail.part1 + mail.part2 + mail.part3);

    setcopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   gradient generate from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 3 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 `}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 3 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40  px-5 p-5 lg:p-10 "
          )}
        >
          <div className="font-sans font-extralight lg:text-base text-sm text-[#C1C2D3] z-10 ">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 `}
          >
            {title}
          </div>
          {id === 1 && (
            <div className=" grow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2 md:gap-3 lg:gap-5 ">
              {/* up => grid position 
absolute -right-3 lg:right-20 bottom-3 lg:top-20
gap-x-20 
              flex items-center justify-center lg:mt-16 flex-wrap w-5/6 md:w-full xl:w-5/6
              To check
              */}
              {listLogos?.map((logo, i) => (
                <div key={i}>
                  <img
                    src={logo}
                    alt={logo}
                    className="max-w-20 md:max-w-15  lg:max-w-20"
                  />
                </div>
              ))}

              {/* tech stack lists */}
            </div>
          )}

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="mt-5 ">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "E-mail copié !" : "Mon adresse e-mail"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
