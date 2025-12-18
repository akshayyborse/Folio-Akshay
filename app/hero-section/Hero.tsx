import Link from "next/link";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('../public/hero.png')] bg-cover bg-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      {/* Overlay */}
      <motion.div className="absolute inset-0 h-full w-full bg-[#0E1016] mix-blend-color" />

      {/* Top bar */}
      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://drive.google.com/file/d/1tjXPuN2gkjxedCIcMO7EM7kzBDoh3wJ6/view"
            target="_blank"
            aria-label="VIEW RESUME"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block md:text-[16px]"
              variants={bodyAnimation}
            >
              VIEW RESUME
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14">
          {[
            { label: "GH", url: "https://github.com/akshayyborse" },
            { label: "LN", url: "https://www.linkedin.com/in/akshay-borse-069400277/" },
            { label: "TW", url: "https://x.com/Akshayyborse" },
          ].map((item) => (
            <Link key={item.label} href={item.url} target="_blank">
              <motion.p
                className="text-[16px] font-bold"
                variants={bodyAnimation}
              >
                {item.label}
              </motion.p>
            </Link>
          ))}
        </div>
      </div>

      {/* Center title */}
      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="AKSHAY BORSE"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-10 flex items-center justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between">
        <motion.div
          className="max-w-[350px] md:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Frontend Engineer and Web Designer, currently available for work.
          </p>
        </motion.div>

        <motion.div
          className="hidden max-w-[420px] lg:block"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Focused on interfaces and experiences, working remotely, India.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
