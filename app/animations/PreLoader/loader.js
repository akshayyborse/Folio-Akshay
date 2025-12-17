import gsap from "gsap";

const tl = gsap.timeline();

export const preLoaderAnim = (setIndex, totalWords) => {
  // Initial setup: make container visible
  tl.to(".texts-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut",
  });

  // Animate in the first word (from bottom with skew for style)
  tl.from(".texts-container span", {
    duration: 1.2,
    y: 100,
    skewY: 7,
    ease: "Power3.easeOut",
  });

  // Cycle through the remaining words
  if (totalWords > 1) {
    tl.addLabel("cycleStart");

    for (let i = 1; i < totalWords; i++) {
      tl.to(".texts-container span", {
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: "Power3.easeIn",
      })
      .add(() => setIndex(i))  // Update React state to change text
      .to(".texts-container span", {
        duration: 0.8,
        opacity: 1,
        y: 0,
        skewY: 0,
        ease: "Power3.easeOut",
      }, "-=0.4");  // Overlap for smoother feel
    }
  }

  // After cycling, fade out last word and collapse preloader
  tl.to(".texts-container span", {
    duration: 1,
    y: 70,
    skewY: -10,
    opacity: 0,
    ease: "Power3.easeOut",
  }, "+=0.5")
  .to("body", {
    duration: 0.01,
    css: { overflowY: "scroll" },
  })
  .to(".preloader", {
    duration: 1.5,
    height: "0vh",
    ease: "Power3.easeOut",
    onComplete: mobileLanding,
  }, "-=1")
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
