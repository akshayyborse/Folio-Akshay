// ProjectCard.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectProps } from "./projectDetails";

const ProjectCard = ({
  name,
  description,
  technologies,
  demo,
  available,
}: ProjectProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.44, 0, 0.22, 0.99] }}
      className="w-full border-b border-white/10"
    >
      {/* Full width row */}
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-24 md:flex-row md:items-start md:justify-between">

        {/* Left content */}
        <div className="max-w-3xl">
          <h3 className="text-[40px] font-semibold tracking-tight text-white md:text-[56px]">
            {name}
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-white/60">
            {description}
          </p>

          <div className="mt-8 text-sm uppercase tracking-widest text-white/40">
            {technologies.join(" · ")}
          </div>
        </div>

        {/* Right CTA */}
        <div className="mt-6 md:mt-0">
          {available ? (
            <Link
              href={demo}
              target="_blank"
              className="text-base font-medium text-white/60 transition hover:text-white"
            >
              View Project →
            </Link>
          ) : (
            <span className="text-base text-white/40">
              Coming soon
            </span>
          )}
        </div>

      </div>
    </motion.article>
  );
};

export default ProjectCard;
