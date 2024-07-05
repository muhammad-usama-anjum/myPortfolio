

// GSAP animations
gsap.from(".hero-text", { opacity: 0, y: 100, duration: 1, delay: 0.5 });
gsap.from(".hero-subtext", { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from(".hero-button", { opacity: 0, y: 50, duration: 1, delay: 1.5 });

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
    scrub: 1
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1.5,
});

gsap.from(".project-image", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse",
    scrub: 1
  },
  opacity: 0,
  scale: 0.8,
  duration: 1,
  ease: "back",
  delay: 1,
});

gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
});

gsap.from(".about-text-2", {
  scrollTrigger: {
    trigger: ".about-text-2",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
});

gsap.from(".skills-text", {
  scrollTrigger: {
    trigger: ".skills-text",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
});

gsap.from(".skill-item", {
  scrollTrigger: {
    trigger: ".skill-item",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
});
