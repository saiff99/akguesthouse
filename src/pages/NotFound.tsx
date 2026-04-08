import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(30deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))),
          linear-gradient(150deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))),
          linear-gradient(30deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))),
          linear-gradient(150deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))),
          linear-gradient(60deg, hsl(var(--secondary) / 0.6) 25%, transparent 25.5%, transparent 75%, hsl(var(--secondary) / 0.6) 75%, hsl(var(--secondary) / 0.6)),
          linear-gradient(60deg, hsl(var(--secondary) / 0.6) 25%, transparent 25.5%, transparent 75%, hsl(var(--secondary) / 0.6) 75%, hsl(var(--secondary) / 0.6))
        `,
        backgroundSize: '80px 140px',
        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
      }} />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--secondary)/0.08)_0%,_transparent_70%)]" />

      {/* Decorative scattered elements */}
      <div className="absolute top-[15%] left-[10%] w-20 h-20 border border-secondary/10 rounded-full animate-float-slow" />
      <div className="absolute bottom-[20%] right-[12%] w-32 h-32 border border-primary/10 rounded-full animate-float-medium" />
      <div className="absolute top-[40%] right-[20%] w-2 h-2 bg-secondary/20 rounded-full animate-float-slow [animation-delay:2s]" />
      <div className="absolute bottom-[35%] left-[18%] w-3 h-3 bg-secondary/15 rounded-full animate-float-medium [animation-delay:1s]" />
      <div className="absolute top-[25%] right-[35%] w-1.5 h-1.5 bg-primary/15 rounded-full animate-float-slow [animation-delay:3s]" />

      <div className="text-center max-w-lg relative z-10">
        {/* Large 404 */}
        <h1 className="text-[10rem] leading-none font-display font-bold text-primary/10 select-none">
          404
        </h1>

        {/* Decorative line */}
        <div className="w-16 h-1 bg-secondary mx-auto -mt-8 mb-6 rounded-full" />

        <h2 className="text-3xl font-display font-bold text-foreground mb-3">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Sorry, the page you're looking for doesn't exist or has been moved.
          Let us take you back to comfort.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="font-semibold"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Branding */}
        <p className="mt-12 text-sm text-muted-foreground/60 font-display">
          AK <span className="text-secondary">Guest House</span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
