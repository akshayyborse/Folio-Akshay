import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 w-full overflow-hidden bg-black pt-20 pb-56"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center lg:max-w-[1212px]">

        <AnimatedTitle
          text="I MAKE BRANDS BEAUTIFUL, WEBSITES POWERFUL AND CONTENT CAPTIVATING."
          className="mb-16 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-white sm:text-[45px] md:text-[60px] lg:text-[80px]"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.001em]"
        />

        <div className="flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-24">

          {/* Left */}
          <div className="mb-16 flex w-full flex-col gap-6 text-[18px] font-medium leading-relaxed text-white/70 md:text-[20px] lg:text-[24px]">
            <AnimatedBody text="I specialize in crafting high-converting landing pages and websites for SaaS, Web3 & AI startups." />
            <AnimatedBody text="Beyond my work as a frontend developer, I love experimenting with new technologies." />
            <AnimatedBody text="When I'm not coding, you’ll find me discovering new music or watching anime." />
          </div>

          {/* Right */}
          <div className="mb-16 flex w-full flex-col gap-8 text-[16px] leading-relaxed text-white/50 lg:max-w-[30%]">

            <div>
              <AnimatedTitle
                text="Frontend Tools"
                className="text-[20px] text-white"
                wordSpace="mr-[0.25em]"
                charSpace="mr-[0.01em]"
              />
              <AnimatedBody text="JavaScript, React, Next.js, TypeScript, Redux, Git/GitHub." />
            </div>

            <div>
              <AnimatedTitle
                text="UI Libraries"
                className="text-[20px] text-white"
                wordSpace="mr-[0.25em]"
                charSpace="mr-[0.01em]"
              />
              <AnimatedBody text="Tailwind CSS, Framer Motion, GSAP, Chart.js." />
            </div>

            <div>
              <AnimatedTitle
                text="Design Tools"
                className="text-[20px] text-white"
                wordSpace="mr-[0.25em]"
                charSpace="mr-[0.01em]"
              />
              <AnimatedBody text="Figma, Framer, Adobe XD, Photoshop." />
            </div>

          </div>
        </div>

        <div className="mt-24 flex flex-col items-center">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some tunes"
            className="mt-10 text-center text-sm font-semibold uppercase text-white/60"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
