"use client";
import { useEffect, useState } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const words: string[] = [
  'स्वागत हे',  // Welcome (Marathi/Hindi devanagari)
  'Hello',
  'Bonjour',
  'Ciao',
  'Olà',
  'やあ',
  'Hallå',
  'Guten tag',
  'Hallo',
];

const PreLoader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    preLoaderAnim(setIndex, words.length);  // Pass setter and total count to animation
  }, []);

  return (
    <div className="preloader overflow-hidden">
      <div className="texts-container flex h-60 items-center justify-center overflow-hidden text-[14px] font-extrabold text-[#e4ded7] opacity-0 sm:text-[16px] md:text-[18px] lg:text-[20px]">
        <span>{words[index]}</span>
      </div>
    </div>
  );
};

export default PreLoader;
