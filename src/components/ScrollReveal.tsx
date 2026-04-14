import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const directionMap = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const visibilityClass = isVisible
    ? "translate-x-0 translate-y-0 opacity-100 blur-0"
    : `opacity-0 blur-[2px] ${directionMap[direction]}`;

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        visibilityClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
