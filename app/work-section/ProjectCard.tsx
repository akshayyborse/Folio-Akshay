"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectProps } from "./projectDetails";
import { DesktopPreview } from "livecard";
import { useState } from "react";

const ProjectCard = ({
  name,
  description,
  technologies,
  demo,
  image,
  available,
}: ProjectProps) => {
  const [isLive, setIsLive] = useState(false);
  const useImagePreview = technologies.some(tech => tech.toLowerCase() === "shopify");

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.44, 0, 0.22, 0.99] }}
      className="w-full border-b border-white/10"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] items-start">

          {/* LEFT — Project Info */}
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              {name}
            </h3>

            <p className="text-lg leading-relaxed text-white/60 max-w-xl">
              {description}
            </p>

            <div className="text-sm uppercase tracking-widest text-white/40">
              {technologies.join(" · ")}
            </div>

            {available ? (
              <Link
                href={demo}
                target="_blank"
                className="inline-block text-sm font-medium text-white/70 transition hover:text-white"
              >
                View Live Project →
              </Link>
            ) : (
              <span className="text-sm text-white/40">Coming soon</span>
            )}
          </div>

          {/* RIGHT — Live Preview (DEFAULT SIZE) */}
          <div className="relative flex justify-center [&>div]:!bg-black">
            {available ? (
              useImagePreview ? (
                <Image
                  src={image}
                  alt={name}
                  className="rounded-xl border border-white/10 object-cover w-full h-auto"
                  priority
                />
              ) : (
                <DesktopPreview
                  url={demo}
                  title={name}
                  isLive={isLive}
                  onToggle={() => setIsLive(!isLive)}
                />
              )
            ) : (
              <div className="flex h-[300px] w-full items-center justify-center text-white/40 border border-white/10 rounded-xl">
                Preview unavailable
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
