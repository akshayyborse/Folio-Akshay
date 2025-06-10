import ReviewCard from "./ReviewCard";
import { reviewDetails } from "./reviewDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center text-center md:mb-12">
          <AnimatedWords2
            title="TESTIMONIALS"
            style={`${monaSans.className} text-[clamp(40px,8vw,80px)] font-extrabold uppercase leading-[0.9em] text-[#e4ded7]`}
          />
          <AnimatedBody
            text="Couldn't be happier with the results!!!!"
            className="mt-4 text-[14px] font-semibold uppercase text-[#e4ded7] md:text-[16px]"
          />
        </div>

        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.44, 0, 0.22, 0.99],
            },
          }}
          viewport={{ once: true }}
        >
          {reviewDetails.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              role={review.role}
              company={review.company}
              profileImg={review.profileImg.src}
              testimonial={review.testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
