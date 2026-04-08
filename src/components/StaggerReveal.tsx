import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import React from "react";

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerMs?: number;
}

const StaggerReveal = ({ children, className, staggerMs = 150 }: StaggerRevealProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => (
        <div
          className={cn(
            "transition-all duration-600 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: isVisible ? `${i * staggerMs}ms` : "0ms", transitionDuration: "600ms" }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggerReveal;
