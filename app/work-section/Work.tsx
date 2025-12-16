// Work.tsx
import ProjectGrid from "./ProjectGrid";

const Work = () => {
  return (
    <section id="work" className="w-full bg-black">
      {/* Section intro */}
      <div className="mx-auto max-w-[1400px] px-6 pt-32 pb-20 text-center">
        <h2 className="text-[56px] font-extrabold tracking-tight text-white md:text-[72px]">
          Work
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          A selection of recent work.
        </p>
      </div>

      {/* Full-width projects */}
      <ProjectGrid />
    </section>
  );
};

export default Work;
