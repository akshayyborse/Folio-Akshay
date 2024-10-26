export type blogProps = {
  title: string;
  image: string;
  date: string;
  url: string;
  available: boolean;
  index: number;
};

export const blogDetails = [
  {
    title: "How AI is Transforming Investments",
    image: require(".//../../public/ai_digital_transformation.webp"),
    date: "MAY 2024",
    url: "https://www.linkedin.com/posts/tushar-shirsath_i-started-investing-with-ai-and-saw-great-activity-7250467859489800193-sHfz?utm_source=share&utm_medium=member_desktop",
    available: true,
  },
  {
    title: "The Impact of Generative AI on Your Business",
    image:
      "https://github.com/victorcodess/folio-v1/assets/84178696/05656547-3206-42af-b081-83247f9a1063",
    date: "MAY 2024",
    url: "https://www.linkedin.com/posts/tushar-shirsath_the-impact-of-generative-ai-on-your-business-ugcPost-7239233793440546817-X4ld?utm_source=share&utm_medium=member_desktop",
    available: true,
  },
  {
    title:
      "Integrating AI Chatbots into Your Business",
    image:
      "https://github.com/victorcodess/folio-v1/assets/84178696/c2693469-e5c6-43ad-a857-693bbbfe7b9a",
    date: "APR 2024",
    url: "https://www.sundevs.com/blog/integrating-ai-chatbots-with-existing-systems-a-seamless-implementation-guide",
    available: true,
  },
];
