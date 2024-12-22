import { StaticImageData } from "next/image";
import tushar from "../../public/tushar.jpg";
import divyesh from "../../public/divyesh.jpg";
import kamlesh from "../../public/kamlesh.jpg";
import akshay from "../../public/akshay.jpg";
import honey from "../../public/honey.jpg";
import harsh from "../../public/harsh.jpg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};


export const reviewDetails = [
  { 
    name: "Tushar Shirsat",
    role: "CEO",
    company: "Ocean Monks",
    profileImg: tushar,
    testimonial:
      "Working with Akshay Borse has been a highly rewarding experience. As a tech expert, his deep understanding of complex technologies and innovative problem-solving abilities have been crucial to the success of our projects. His ability to lead and guide the team through technical challenges has been invaluable.",
  },
  {
    name: "Divyesh Shirsat",
    role: "CTO",
    company: "Ocean Monks",
    profileImg: divyesh,
    testimonial:
      "Akshay Borse has been a key contributor to our tech initiatives. His technical expertise and hands-on approach in solving intricate problems have been instrumental in delivering cutting-edge solutions. I’ve always been impressed by his ability to think outside the box and lead the team to achieve remarkable results.",
  },
  {
    name: "Kamlesh Prajapati",
    role: "Engineer",
    company: "Ocean Monks",
    profileImg: kamlesh,
    testimonial:
      "Working alongside Akshay Borse has been a fantastic learning experience. His technical knowledge and problem-solving skills have guided me through some of the most challenging tasks. Akshay’s leadership and mentorship have made a significant impact on both my professional growth and the success of our projects.",
  },
  //{
  //  name: "Akshay Borse",
 //   role: "Full Stack Developer",
 //   company: "Ocean Monks",
 //   profileImg: akshay,
 //   testimonial:
 //     "My experience as a Full Stack Developer at Ocean Monks has been incredibly rewarding. I've contributed to creating robust, scalable applications and user-friendly interfaces that have significantly enhanced our clients' digital capabilities.",
//  },
 // {
  //  name: "Honey R.",
  //  role: "HR",
  //  company: "Ocean Monks",
  //  profileImg: honey,
   // testimonial:
    //  "As the HR representative, I've witnessed firsthand the exceptional talent and dedication of our team. Our collaborative culture and focus on professional growth have been key factors in attracting and retaining top-tier professionals in the tech industry.",
 // },
 // {
 //   name: "Harsh P.",
 //   role: "Sales Specialist",
  //  company: "Ocean Monks",
  //  profileImg: harsh,
  //  testimonial:
  //    "In my role as Sales Specialist, I've had the privilege of connecting clients with our innovative solutions. The consistent positive feedback we receive is a testament to our team's technical expertise and commitment to delivering outstanding results.",
 // },
];

