import { cn } from "../utils/twMerge";

interface CircleProps {
  filled?: boolean;
  className?: string;
}

const Circle = ({ filled = false, className }: CircleProps) => (
  <svg 
    className={cn(
      "w-4 h-4",
      filled ? "text-core-blue" : "text-gray-300",
      className
    )}
    viewBox="0 0 16 16" 
    fill="currentColor"
  >
    <circle cx="8" cy="8" r="8" />
  </svg>
);

export default Circle;