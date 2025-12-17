import gsap from "gsap";

const tl = gsap.timeline();

export const preLoaderAnim = (setIndex, totalWords) => {
  // Make container visible instantly
  tl.to(".texts-container", {
    duration: 0,
    opacity: 1,
  });

  // First word: animate in
  tl.from(".texts-container span", {
    duration: 0.6,
    y: 100,
    skewY: 8,
    ease: "Power3.easeOut",
  });

  // Cycle through next 4 words (indices 1 to 4 → 5 words total shown)
  const wordsToShow = 5; // Adjust if you want more/fewer
  for (let i = 1; i < wordsToShow && i < totalWords; i++) {
    tl.to(".texts-container span", {
      duration: 0.4,
      opacity: 0,
      y: 40,
      ease: "Power3.easeIn",
    })
    .add(() => setIndex(i)) // Change text
    .to(".texts-container span", {
      duration: 0.5,
      opacity: 1,
      y: 0,
      skewY: 0,
      ease: "Power3.easeOut",
    }, "-=0.3"); // Overlap for smooth flow
  }

  // Final fade out + collapse
  tl.to(".texts-container span", {
    duration: 0.5,
    y: -60,
    opacity: 0,
    ease: "Power3.easeIn",
  }, "+=0.3") // Brief pause on last word
  .to("body", {
    duration: 0.01,
    css: { overflowY: "scroll" },
  })
  .to(".preloader", {
    duration: 0.8,
    height: "0vh",
    ease: "Power3.easeInOut",
    onComplete: mobileLanding,
  }, "-=0.6")
  .to(".preloader", {
    duration: 0,
    css: { display: "none" },
  });
};

export const mobileLanding = () => {
  if (window.innerWidth < 763) {
    gsap.from(".landing__main2", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
  }
};
