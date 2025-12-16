import ProjectGrid from "./ProjectGrid";

const Work = () => {
  return (
    <section
      id="work"
      className="w-full bg-black"
    >
      {/* Section intro */}
      <div className="mx-auto max-w-[1400px] px-6 py-32">
        <h2 className="text-[56px] font-extrabold tracking-tight text-white md:text-[72px]">
          Work
        </h2>
        <p className="mt-4 max-w-xl text-white/60">
          Selected projects and long-term explorations.
        </p>
      </div>

      {/* Full-width projects */}
      <ProjectGrid />
    </section>
  );
};

export default Work;
