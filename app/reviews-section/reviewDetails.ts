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
  profileImg: string;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  { 
    name: "Tushar",
    role: "CEO",
    company: "Ocean Monks",
    profileImg: tushar,
    testimonial:
      "As CEO of Ocean Monks, I have had the pleasure of working closely with Akshay Borse. His technical leadership and innovative mindset have played a pivotal role in driving our company's success and delivering exceptional results for our clients.",
  },
  {
    name: "Divyesh ",
    role: "CEO",
    company: "The Advertisement",
    profileImg: divyesh,
    testimonial:
      "As the CEO of The Advertisement, I can confidently say that Akshay Borse's expertise in web development and creative problem-solving has elevated our digital presence. His dedication and professionalism make him an invaluable asset to any project.",
  },
  {
    name: "Kamlesh Prajapati",
    role: "Editor",
    company: "Personal Folio",
    profileImg: kamlesh,
    testimonial:
      "As Editor for Personal Folio, collaborating with Akshay Borse has been an inspiring experience. His attention to detail and technical proficiency have greatly enhanced the quality and impact of our portfolio projects.",
  },
  // {
  //   name: "Akshay Borse",
  //   role: "Full Stack Developer",
  //   company: "Ocean Monks",
  //   profileImg: akshay,
  //   testimonial:
  //     "As a Full Stack Developer at Ocean Monks, I have contributed to building robust, scalable applications that empower our clients. The collaborative environment and challenging projects have fueled my growth and passion for technology.",
  // },
  // {
  //   name: "Honey R.",
  //   role: "HR",
  //   company: "Ocean Monks",
  //   profileImg: honey,
  //   testimonial:
  //     "As HR at Ocean Monks, I have witnessed Akshay's commitment to teamwork and professional growth. His positive attitude and technical skills have made a significant impact on our company culture and success.",
  // },
  // {
  //   name: "Harsh P.",
  //   role: "Sales Specialist",
  //   company: "Ocean Monks",
  //   profileImg: harsh,
  //   testimonial:
  //     "As a Sales Specialist at Ocean Monks, I have seen firsthand how Akshay's technical solutions drive client satisfaction. His ability to translate business needs into innovative products is truly impressive.",
  // },
];
