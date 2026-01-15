"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useTypewriter } from "@/hooks/useTypewriter";

const index = () => {
  const displayedText = useTypewriter(
    ["Software Dev", "UI/UX Designer", "Civic Technologist"],
    100,
    50,
    2000
  );

  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-4xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Lina</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1 className="xl:text-6xl 2xl:text-7xl min-h-[1.2em]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Creative and detail-oriented software engineer and UI/UX designer with hands-on experience in designing digital platforms and creating engaging content.
            </p>
          </div>
          <Image
            src={getImgPath("/images/home/hero-img.jpg")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/hero-img.jpg")}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
