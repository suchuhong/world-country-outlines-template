
import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-sky-600 text-white hover:bg-sky-700 focus-visible:ring-sky-600",
        secondary: "bg-white text-sky-600 border border-sky-600 hover:bg-sky-50 focus-visible:ring-sky-600",
        outline: "border border-gray-300 text-gray-900 hover:bg-gray-50"
      },
      size: {
        sm: "h-9 px-3",
        lg: "h-12 px-6 text-base",
        default: "h-10 px-4 py-2"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
