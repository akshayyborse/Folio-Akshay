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
      "As CEO, I've had the pleasure of overseeing Ocean Monks' growth. Our team's dedication and innovative approach have consistently delivered exceptional results for our clients, positioning us as a leader in the digital solutions space.",
  },
  {
    name: "Divyesh Shirsat",
    role: "CTO",
    company: "Ocean Monks",
    profileImg: divyesh,
    testimonial:
      "In my role as CTO, I've led the development of cutting-edge technologies that have transformed our clients' digital presence. Our solutions have consistently driven significant increases in website traffic and conversion rates.",
  },
  {
    name: "Kamlesh Prajapati",
    role: "Engineer",
    company: "Ocean Monks",
    profileImg: kamlesh,
    testimonial:
      "As an engineer at Ocean Monks, I've had the opportunity to work on challenging projects that push the boundaries of web development. Our team's ability to deliver high-quality solutions in tight timeframes has been crucial to our clients' success.",
  },
  {
    name: "Akshay Borse",
    role: "Full Stack Developer",
    company: "Ocean Monks",
    profileImg: akshay,
    testimonial:
      "My experience as a Full Stack Developer at Ocean Monks has been incredibly rewarding. I've contributed to creating robust, scalable applications and user-friendly interfaces that have significantly enhanced our clients' digital capabilities.",
  },
  {
    name: "Honey R.",
    role: "HR",
    company: "Ocean Monks",
    profileImg: honey,
    testimonial:
      "As the HR representative, I've witnessed firsthand the exceptional talent and dedication of our team. Our collaborative culture and focus on professional growth have been key factors in attracting and retaining top-tier professionals in the tech industry.",
  },
  {
    name: "Harsh P.",
    role: "Sales Specialist",
    company: "Ocean Monks",
    profileImg: harsh,
    testimonial:
      "In my role as Sales Specialist, I've had the privilege of connecting clients with our innovative solutions. The consistent positive feedback we receive is a testament to our team's technical expertise and commitment to delivering outstanding results.",
  },
];

