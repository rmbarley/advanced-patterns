import { Separator as SeparatorPrimitive } from "@radix-ui/react-separator";

import { cn } from "@/lib/utils/cn";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-neutral-200 dark:bg-neutral-800",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
