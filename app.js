var timeline = gsap.timeline({ duration: 10, repeat: 0 });
timeline.from(".orga", { xPercent: 40, duration: 1 }, 0);
timeline.from(".orga", { skewX: 45, duration: 0.9 }, 0.5);
timeline.from(".letter-n", { xPercent: 19000, duration: 0.6 }, 0.5);
timeline.to(".letter-n", { xPercent: -70, duration: 0.3 }, 1.1);
timeline.to(".letter-n", { xPercent: 0, duration: 0.3 }, 1.4);
timeline.to(".letter-n", { fill: "red", duration: 0.2 }, 1.5);
timeline.from(".letter-i", { xPercent: -19000, duration: 0.6 }, 0.5);
timeline.to(".letter-i", { xPercent: 90, duration: 0.3 }, 1.1);
timeline.to(".letter-i", { xPercent: 0, duration: 0.3 }, 1.4);
timeline.to(
  ".letter-z",
  { rotation: "+=360", transformOrigin: "50% 50%", duration: 0.4 },
  1.1
);
timeline.to(".letter-z", { fill: "red", duration: 0.2 }, 1.5);

timeline.from(
  ".circle",
  { y: 350, ease: Bounce.easeOut, durtation: 1.2 },
  1.25
);
timeline.from(".circle", { x: "+=150", duration: 1 }, 1.5);
timeline.to(".circle", { fill: "red", duration: 0.3 }, 2);
