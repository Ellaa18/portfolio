// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate header elements on page load
// Animate header h1 with movement, rotation, scale, and glow
gsap.from("header h1", {
  duration: 2,
  x: -200,
  y: -100,
  opacity: 0,
  rotation: -35,   
  scale: 1,       
  ease: "elastic.out(1, 0.5)",
  onComplete: () => {
    // After the main animation, add a gentle glow pulse loop
    gsap.to("header h1", {
      boxShadow: "0 0 15px #00ffe5, 0 0 30px #00ffe5",
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power0.1.inOut"
    });
  }
});



gsap.from("header .animated-subtitle", {
  duration: 1,
  x: -200,
  opacity: 0,
  delay: 0.4,
  ease: "power2.out"
});

// Animate navigation links staggered from left to right
gsap.from(".nav-link", {
  duration: 0.8,
  x: -50,
  opacity: 0,
  
  
  ease: "power4.out"
});

// Animate section headings with ScrollTrigger when they enter viewport
gsap.utils.toArray("section h2").forEach((heading) => {
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power3.out"
  });
});

// Animate paragraphs inside sections
gsap.utils.toArray("section p").forEach((para) => {
  gsap.from(para, {
    scrollTrigger: {
      trigger: para,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    duration: 1.2,
    x: -80,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out"
  });
});

// Animate project cards with a nice stagger and scale bounce on hover effect
gsap.utils.toArray(".project").forEach((project, i) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: project,
      start: "top 90%",
      toggleActions: "play none none none"
    },
    duration: 1,
    x: -120,
    opacity: 0,
    delay: i * 0.15,
    ease: "power3.out"
  });

  // Add hover scale effect using GSAP timeline
  project.addEventListener("mouseenter", () => {
    gsap.to(project, {
      scale: 1.05,
      boxShadow: "0 0 40px rgba(0, 255, 229, 0.8)",
      duration: 0.3,
      ease: "power1.out"
    });
  });
  project.addEventListener("mouseleave", () => {
    gsap.to(project, {
      scale: 1,
      boxShadow: "0 0 10px rgba(0, 255, 229, 0.2)",
      duration: 0.3,
      ease: "power1.out"
    });
  });
});

// Animate footer from left on page load with fade-in
gsap.from("footer", {
  duration: 1.2,
  x: -200,
  opacity: 0,
  delay: 2,
  ease: "power3.out"
});
