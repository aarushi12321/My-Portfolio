gsap.registerPlugin(ScrollTrigger);

const treeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".internships",
    scrub: 2,
    start: "20% 45%",
    end: "bottom 90%",
    toggleActions: "restart pause reverse pause",
    onLeave: () => gsap.to("#section-2-tree", { opacity: 0, duration: 0.1 }),
    onEnterBack: () =>
      gsap.to("#section-2-tree", { opacity: 1, duration: 0.2 }),
  },
});

treeTimeline.to("#section-2-tree", { x: "-40vw", duration: 0.8 });

const girlTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-papers",
    scrub: 2,
    start: "50% 60%",
    end: "bottom 90%", // Adjust this to control when the animation ends
    toggleActions: "restart pause reverse pause",
    onLeave: () => gsap.to("#section-3-girl", { opacity: 0, duration: 0.1 }),
    onEnterBack: () =>
      gsap.to("#section-3-girl", { opacity: 1, duration: 0.2 }),
  },
});

girlTimeline.to("#section-3-girl", { x: "-42vw", duration: 0.8 });

const computerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".dive-deep",
    scrub: 2,
    start: "50% 60%",
    end: "bottom 90%",
    toggleActions: "restart pause reverse pause",
    onLeave: () => gsap.to("#section-4-girl", { opacity: 0, duration: 0.1 }),
    onEnterBack: () =>
      gsap.to("#section-4-girl", { opacity: 1, duration: 0.2 }),
  },
});

girlTimeline.to("#section-4-girl", { y: "-35vh", duration: 0.8 });

gsap.fromTo(
  "#section2-title",
  {
    opacity: 0,
  },
  {
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: ".internships",
      scrub: 2,
      start: "5% 60%",
      end: "10 60%",
      toggleActions: "restart reverse resume reset",
    },
  }
);

gsap.fromTo(
  "#section-2-dropdown",
  {
    opacity: 0,
    y: -200,
  },
  {
    duration: 0.8,
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".internships",
      scrub: 2,
      start: "5% 60%",
      end: "10,60%",
      toggleActions: "restart reverse resume reset",
    },
  }
);

gsap.fromTo(
  "#internships-content",
  {
    opacity: 0,
  },
  {
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: ".internships",
      scrub: 2,
      start: "5% 60%",
      end: "10 60%",
      toggleActions: "restart reverse resume reset",
    },
  }
);

gsap.fromTo(
  ".section-3-content",
  {
    opacity: 0,
  },
  {
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: ".projects-papers",
      scrub: 2,
      start: "5% 60%",
      end: "10 60%",
      toggleActions: "restart reverse resume reset",
    },
  }
);

gsap.fromTo(
  ".section-4-content",
  {
    opacity: 0,
  },
  {
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: ".dive-deep",
      scrub: 2,
      start: "5% 60%",
      end: "10 60%",
      toggleActions: "restart reverse resume reset",
    },
  }
);

const gradientsToggleButton = {
  section2: "linear-gradient(to bottom, rgb(20, 11, 104), rgb(165, 53, 244))",
  section3: "linear-gradient(to top, rgb(17,140,177), rgb(240,209,107))",
  section4:
    "linear-gradient( to top, rgb(245, 214, 94), rgba(242, 137, 52, 0.8) )",
  section5: "linear-gradient(to top, rgb(245 158 94), rgb(242 52 153 / 80%))",
};

const gradientsSideNav = {
  section2:
    "linear-gradient(to bottom, rgba(122, 65, 207, 0.6), rgba(203, 149, 218, 0.5), rgba(255, 255, 255, 0.5))",
  section3:
    "linear-gradient(to bottom, rgba(16, 183, 222, 0.6), rgba(200, 218, 149, 0.5), rgba(210, 205, 160, 0.5))",
  section4:
    "linear-gradient(to bottom, rgba(242, 137, 52, 0.2), rgb(245, 214, 94, 0.2)",
  section5:
    "linear-gradient(to top, rgb(242 95 203 / 10%), rgb(245 181 94 / 10%))",
};

const sections = document.querySelectorAll(".colorChange");

const button = document.querySelector("#toggleNavButton");
const sideNav = document.querySelector("#sideNav");

sections.forEach((section) => {
  const gradientButton = gradientsToggleButton[section.id];
  const gradientSideNav = gradientsSideNav[section.id];

  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      button.style.backgroundImage = gradientButton;
      sideNav.style.backgroundImage = gradientSideNav;
    },
    onLeaveBack: () => {
      button.style.backgroundImage =
        "linear-gradient(to bottom, rgb(20, 11, 104), rgb(165, 53, 244))";
      sideNav.style.backgroundImage =
        "linear-gradient(to bottom, rgba(122, 65, 207, 0.6), rgba(203, 149, 218, 0.5), rgba(255, 255, 255, 0.5))";
    },
  });
});
