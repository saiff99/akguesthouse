import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
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
