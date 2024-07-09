"use client";
import React, { useState } from "react";
import cover from "/public/banner-1566274.jpg";
import Image from "next/image";
import avatar from "/public/guy-sunset-sun-dahl-2f676177305108381c8b0c146fb3127d.jpg";

export default function ThemeChanger() {
  const [foreground, setforeGround] = useState("white");
  const [themes, setThemes] = useState("white");
  return (
    <div className="flex justify-between">
      <div className="">
        <div className="">
          <p>Solids</p>
          <div className=" grid grid-cols-7 gap-2">
            <div
              className="w-12 h-12 border border-grey-900 bg-black"
              onClick={() => setThemes("black")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 bg-slate-200"
              onClick={() => setThemes("slate-200")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 bg-white"
              onClick={() => setThemes("white")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 bg-emerald-300"
              onClick={() => setThemes("emerald-300")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 bg-yellow-400"
              onClick={() => setThemes("yellow-400")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 bg-sky-600"
              onClick={() => setThemes("sky-600")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 bg-red-500"
              onClick={() => setThemes("red-500")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 bg-fuchsia-400"
              onClick={() => setThemes("fuchsia-400")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 bg-purple-300"
              onClick={() => setThemes("purple-300")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 bg-amber-200"
              onClick={() => setThemes("amber-200")}
            ></div>
          </div>
        </div>
        <div>
          <p>Linear Gradients</p>
          <div className=" grid grid-cols-7 gap-2">
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-amber-100 to-sky-500"
              onClick={() =>
                setThemes("gradient-to-r from-amber-100 to-sky-500")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-purple-100 to-purple-600"
              onClick={() =>
                setThemes("gradient-to-r from-purple-100 to-purple-600")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-emerald-500 to-emerald-100"
              onClick={() =>
                setThemes("gradient-to-r from-emerald-500 to-emerald-100")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-red-300 to-sky-500"
              onClick={() => setThemes("gradient-to-r from-red-300 to-sky-500")}
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-sky-400 to-purple-400"
              onClick={() =>
                setThemes("gradient-to-r from-sky-400 to-purple-400")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-emerald-200 to-sky-500"
              onClick={() =>
                setThemes("gradient-to-r from-emerald-200 to-sky-500")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-amber-100 to-pink-400"
              onClick={() =>
                setThemes("gradient-to-r from-amber-100 to-pink-400")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-orange-100 to-amber-400"
              onClick={() =>
                setThemes("gradient-to-r from-orange-100 to-amber-400")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-green-500 to-teal-300"
              onClick={() =>
                setThemes("gradient-to-r from-green-500 to-teal-300")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-purple-300 to-fuchsia-500"
              onClick={() =>
                setThemes("gradient-to-r from-purple-300 to-fuchsia-500")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-stone-500 to-pink-300"
              onClick={() =>
                setThemes("gradient-to-r from-stone-500 to-pink-300")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-purple-400 to-blue-500"
              onClick={() =>
                setThemes("gradient-to-r from-purple-400 to-blue-500")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-fuchsia-600 to-purple-700"
              onClick={() =>
                setThemes("gradient-to-r from-fuchsia-600 to-purple-700")
              }
            ></div>
            <div
              className="w-12 rounded-sm h-12 border border-grey-900 bg-gradient-to-r from-yellow-400 to-amber-700"
              onClick={() =>
                setThemes("gradient-to-r from-yellow-400 to-amber-700")
              }
            ></div>
          </div>
        </div>
        <div>
          <p>Radial Gradient</p>\
          <div className=" grid grid-cols-7 gap-2">
            <div
              className="w-12 h-12 border border-grey-900 rd-1 "
              onClick={() => setThemes(" rd-1")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-2"
              onClick={() => setThemes(" rd-2")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-3"
              onClick={() => setThemes(" rd-3")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-4"
              onClick={() => setThemes(" rd-4")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-5"
              onClick={() => setThemes(" rd-5")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-6"
              onClick={() => setThemes(" rd-6")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-7"
              onClick={() => setThemes(" rd-7")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-8"
              onClick={() => setThemes(" rd-8")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-9"
              onClick={() => setThemes(" rd-9")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-10"
              onClick={() => setThemes(" rd-10")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-11"
              onClick={() => setThemes(" rd-11")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-12"
              onClick={() => setThemes(" rd-12")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-13"
              onClick={() => setThemes(" rd-13")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 rd-14"
              onClick={() => setThemes(" rd-14")}
            ></div>
          </div>
        </div>
        <div>
          <p>Foreground Color</p>
          <div className=" grid grid-cols-7 gap-2">
            <div
              className="w-12 h-12 border border-grey-900 bg-black"
              onClick={() => setforeGround("black")}
            ></div>
            <div
              className="w-12 h-12 border border-grey-900 bg-white"
              onClick={() => setforeGround("white")}
            ></div>
          </div>
        </div>
      </div>

      <div
        className={` w-3/5  bg-${foreground}  rounded border border-slate-700`}
      >
        <div className={`border-2 border-slate-400 ml-12 mt-8 bg-${themes}`}>
          <div className="relative h-56 ml-8 mt-4 z-10 overflow-hidden">
            <div className="p-2 pr-0 bg-white border-2 border-dashed border-slate-400  rounded-lg">
              <Image
                className="z-0 rounded-lg"
                src={cover}
                width={700}
                height={30}
                alt="afkj"
              />
            </div>
            <div className="absolute top-24 left-16 bg-white p-2 border-2 border-dashed border-slate-400 rounded-full">
              <Image className="rounded-full" src={avatar} width={100} />
            </div>
          </div>
          <div
            className={`pl-20 ${
              foreground == "black" ? "text-black" : "text-white"
            }`}
          >
            <p className="text-2xl ">Mason Parker</p>
            <p>Graphics & UI/UX Designer</p>
            <p>Denver, United States</p>
            <div className="p-2 mr-56 mt-4 border-2 border-dashed border-slate-400 rounded-lg bg-white">
              <p className="text-xs text-black">
                I am a visionary Graphics and Ui/UX Designer, seamlessly
                blending artistic flair with technical expertise With a degre in
                Graphic design. I consistently deliver visually stunning and
                user-centric solutions, leaving an indelible mark on the digital
                landscape As a trusted collaborator , I am dedicated to crafting
                pixel-perfect UIs capitvating graphics that elevate user
                experience
              </p>
            </div>
            <p className="m-4">Biography</p>
          </div>
        </div>
      </div>
    </div>
  );
}
