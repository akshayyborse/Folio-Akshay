import { reviewProps } from "./reviewDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import profile from "../../public/samuel.avif";
import slash from "../../public/review-slash.svg";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";

interface ReviewCardProps {
  name: string;
  role: string;
  company: string;
  profileImg: string;
  testimonial: string;
  index: number;
}

const ReviewCard = ({
  name,
  role,
  company,
  profileImg,
  testimonial,
  index,
}: ReviewCardProps) => {
  const abbreviateName = (name: string): string => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName} ${lastName[0]}.`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{ once: true }}
      className="flex flex-col rounded-lg bg-[#1A1B1F] p-6 transition-all duration-300 hover:bg-[#212531]"
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={profileImg}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 48px) 100vw, 48px"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#e4ded7]">{name}</h3>
          <p className="text-sm text-[#e4ded7]/70">
            {role} at {company}
          </p>
        </div>
      </div>
      <AnimatedBody
        text={testimonial}
        className="text-[15px] leading-relaxed text-[#e4ded7]/90"
      />
    </motion.div>
  );
};

export default ReviewCard;
