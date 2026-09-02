import { useEffect, useRef } from "react";

function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const sections = Array.from(
      container.children
    ).filter((element) => element.tagName === "SECTION");

    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            "scroll-reveal--visible"
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    const animationFrame = requestAnimationFrame(() => {
      sections.forEach((section) => {
        observer.observe(section);
      });
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return containerRef;
}

export default useScrollReveal;