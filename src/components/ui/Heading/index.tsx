import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva("block font-bold text-foreground", {
  variants: {
    size: {
      default: "text-2xl",
      xs: "text-lg",
      sm: "text-xl",
      lg: "text-3xl",
      xl: "text-4xl"
    }
  },
  defaultVariants: {
    size: "default"
  }
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };

export function Heading({ className, level, size, ...props }: HeadingProps) {
  const Comp = `h${level}` as const;
  return (
    <Comp className={cn(headingVariants({ size, className }))} {...props} />
  );
}
