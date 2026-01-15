"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Latest Works</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData?.map((value: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 xl:gap-6"
                  >
                    <div className="relative w-full aspect-[570/414]">
                      <Image
                        src={getImgPath(value?.image)}
                        alt="image"
                        fill
                        className={`rounded-lg object-cover ${value.objectPosition || "object-center"}`}
                      />
                      <Link
                        href={value.slug}
                        target={value.slug.startsWith("http") ? "_blank" : "_self"}
                        className="absolute top-0 left-0 backdrop-blur-sm bg-black/60 w-full h-full hidden group-hover:flex rounded-lg p-6 items-center justify-center text-center transition-all duration-300"
                      >
                        <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                          {value.description || "View Project"}
                        </p>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-0 xl:gap-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={value.slug}
                          target={value.slug.startsWith("http") ? "_blank" : "_self"}
                        >
                          <h5>{value?.title}</h5>
                        </Link>
                      </div>
                      <p>Client: {value?.client}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
