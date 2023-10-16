import gsap from "gsap";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute("data-src");
      observer.unobserve(img);
    }
  });
});

const lazyImages = document.querySelectorAll(".lazy");

lazyImages.forEach((img) => {
  observer.observe(img);
});
