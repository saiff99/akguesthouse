import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

const ScrollReveal = ({ children, className, delay }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal(0.12);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
