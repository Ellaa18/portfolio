// GSAP animation for projects entrance
gsap.from(".project", {
    duration: 1.2,
    y: 60,
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)"
  });
  
  // Animate header on page load with floating effect
  gsap.from("header h1", {
    duration: 2,
    y: -80,
    opacity: 0,
    ease: "power3.out",
    repeat: -1,
    yoyo: true,
    repeatDelay: 1.5,
  });
  
  gsap.from("header p", {
    duration: 2,
    y: -40,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out",
    repeat: -1,
    yoyo: true,
    repeatDelay: 1.5,
  });
  
  // Animate nav links fade in from top
  gsap.from(".nav-link", {
    duration: 1,
    y: -30,
    opacity: 0,
    stagger: 0.15,
    delay: 1,
    ease: "power3.out"
  });
  