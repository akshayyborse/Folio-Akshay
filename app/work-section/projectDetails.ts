export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Custom Font Editor",
    description:
      "Website for Custom font use in image, an  UI/UX designer crafting unique, user-friendly photos.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "https://custom-font-editor.vercel.app/",
    image: require(".//../../public/projects/odunsi-mobile.png"),
    available: true,
  },
  {
    id: 1,
    name: "URLshortner",
    description:
      "This is a website for short the url of any website.",
    technologies: ["HTML", "CSS", "Framer Motion", "JavaScript"],
    demo: "https://urlshortner-akshay.vercel.app/",
    image: require(".//../../public/projects/interlock.png"),
    available: true,
  },
  {
    id: 2,
    name: "Emoji Downloader",
    description:
      "A user-friendly platform designed for downloading emojis effortlessly. Perfect for developers and designers looking to integrate emojis into their projects.",
    technologies: ["React", "HTML 5","CSS3", "JS"],
    demo: "https://emoji0.vercel.app/",
    image: require(".//../../public/projects/synthetix-flip.png"),
    available: true,
  },
  // {
  //   id: 3,
  //   name: "Propellent",
  //   description:
  //     "A website built for a software startup and small business, to showcase their services and mark their online presence.",
  //   technologies: ["React", "Tailwind CSS", "Framer Motion"],
  //   demo: "https://propellent.vercel.app/",
  //   image: require(".//../../public/projects/propellent-new.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Flixify",
  //   description:
  //     "Flixify lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages. It offers user authentication along with a theme switch.",
  //   technologies: ["Next.js", "Typescript", "Prisma"],
  //   demo: "https://flixify.victorwilliams.me/",
  //   image: require(".//../../public/projects/flixify.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost with them.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
