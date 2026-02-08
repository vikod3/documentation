import { ArrowUpRight } from "lucide-react";

const CTAButton = () => {
  return (
    <a
      href="#"
      className="hidden lg:inline-flex items-center justify-center gap-1 py-3 px-5 bg-primary text-primary-foreground text-sm font-medium rounded-xl transition-colors hover:bg-primary/90"
    >
      <span>Get started</span>
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
};

export default CTAButton;
