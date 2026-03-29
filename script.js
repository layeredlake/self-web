document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // === Header Scroll ===
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });

  // === Entrance Sequences ===
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(".logo", { y: -20, opacity: 0, duration: 1 }, 0.2)
    .from(".nav-link", { y: -20, opacity: 0, duration: 1, stagger: 0.1 }, 0.2);
    
  // Check if hero elements exist (home page)
  if (document.querySelector(".hero-tag")) {
    tl.from(".hero-tag", { y: 30, opacity: 0, duration: 1 }, 0.4)
      .from(".hero-title", { y: 40, opacity: 0, duration: 1.2 }, 0.5)
      .from(".hero-subtitle", { y: 40, opacity: 0, duration: 1.2 }, 0.6)
      .from(".hero-actions > *", { y: 30, opacity: 0, duration: 1, stagger: 0.15 }, 0.8);
  }

  // Optional background mask parallax (only on home page where the image exists)
  if (document.querySelector(".hero-bg-wrapper")) {
    tl.from(".hero-bg-wrapper", { opacity: 0, duration: 2, ease: "power2.out" }, 0.1);
    gsap.to(".hero-bg-image", {
      y: "20%", ease: "none",
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
    });
    gsap.to(".hero-content", {
      y: 150, opacity: 0, ease: "none",
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
    });
  }

  // === Projects Section Entrance (Home Page) ===
  if (document.querySelector("#projects")) {
    gsap.from("#projects .section-header", {
      y: 50, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ".projects-section", start: "top 80%" }
    });

    gsap.from(".project-showcase", {
      y: 80, opacity: 0, duration: 1.2, ease: "power3.out",
      scrollTrigger: { trigger: ".project-showcase", start: "top 85%" }
    });
  }

  // === Gallery Section Entrance ===
  if (document.querySelector("#gallery")) {
    gsap.from("#gallery .section-header", {
      y: 50, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ".gallery-section", start: "top 80%" }
    });

    gsap.from(".gallery-item", {
      y: 100, opacity: 0, duration: 1.2, stagger: 0.2, ease: "power3.out",
      scrollTrigger: { trigger: ".gallery-grid", start: "top 85%" }
    });

    gsap.utils.toArray(".gallery-image").forEach((img) => {
      gsap.fromTo(img, 
        { y: "-6%" }, 
        { y: "6%", ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } }
      );
    });
  }

  // === Articles Section Entrance ===
  if (document.querySelector("#articles")) {
    gsap.from("#articles .section-header", {
      y: 50, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ".articles-section", start: "top 80%" }
    });

    // Check for Grid view (.article-card) or Feed view (.article-row)
    if (document.querySelector(".article-card")) {
      gsap.from(".article-card", {
        y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".article-grid", start: "top 85%" }
      });
    } else if (document.querySelector(".article-row")) {
      gsap.from(".article-row", {
        y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".article-feed", start: "top 85%" }
      });
    }
  }

  // === Contact Entrance ===
  if (document.querySelector(".contact-panel")) {
    gsap.from(".contact-panel", {
      y: 60, opacity: 0, duration: 1.2, ease: "power3.out",
      scrollTrigger: { trigger: ".contact-section", start: "top 85%" }
    });
  }

  // === Dynamic Winding Lines (Canvas) ===
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();

    let time = 0;
    const numLines = 30; 
    let scrollY = 0;
    let targetScrollY = 0;
    
    window.addEventListener('scroll', () => { targetScrollY = window.scrollY; });

    function draw() {
      ctx.clearRect(0, 0, width, height);
      time += 0.002;
      scrollY += (targetScrollY - scrollY) * 0.08;
      
      const scrollOffset = scrollY * 0.4;
      ctx.lineWidth = 0.8;
      
      for(let i = 0; i < numLines; i++) {
        ctx.beginPath();
        const opacity = Math.min(0.02 + (i / numLines) * 0.05, 0.2);
        ctx.strokeStyle = `rgba(100, 105, 100, ${opacity})`; 
        
        const phase = i * 0.05;
        const baseHeight = (height * 0.3) + (i * 10);
        
        const yStart = baseHeight + Math.sin(time + phase) * (height * 0.3) - scrollOffset * 0.8;
        ctx.moveTo(0, yStart);
        
        const cp1x = width * 0.33 + Math.sin(time * 0.8 + i * 0.1) * 150;
        const cp1y = baseHeight + Math.cos(time * 1.1 + phase) * (height * 0.5) - scrollOffset * 1.2;
        
        const cp2x = width * 0.66 + Math.cos(time * 0.9 - i * 0.08) * 150;
        const cp2y = baseHeight + Math.sin(time * 1.3 - phase) * (height * 0.5) - scrollOffset * 0.9;
        
        const xEnd = width;
        const yEnd = baseHeight + Math.cos(time * 1.2 + phase * 1.2) * (height * 0.4) - scrollOffset * 1.1;
        
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, xEnd, yEnd);
        ctx.stroke();
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  // === Modal Logic for Sponsorship ===
  const sponsorBtn = document.getElementById("open-sponsor-footer");
  const modalOverlay = document.getElementById("sponsor-modal");
  const closeModal = document.getElementById("close-modal");

  if (sponsorBtn && modalOverlay && closeModal) {
    sponsorBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modalOverlay.classList.add("active");
    });

    closeModal.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }
});
