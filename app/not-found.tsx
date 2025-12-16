import Link from "next/link";
import Image from "next/image";

export default function NotFound(): JSX.Element {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#0E1016] text-[#e4ded7] gap-5">
      <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase text-center">
        The page you are looking for does not exist.
      </p>

      <Image
        src="https://raw.githubusercontent.com/akshayyborse/akshayyborse/main/notfound.gif"
        alt="Not Found"
        width={858}
        height={483}
        className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]"
        priority
      />

      <Link
        href="/"
        className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase"
      >
        Head back to my{" "}
        <span className="underline underline-offset-2">Portfolio</span>
      </Link>
    </div>
  );
}
