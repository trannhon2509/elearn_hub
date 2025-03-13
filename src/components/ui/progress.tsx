import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  color = "#000000",
  title, 
  hideValue, 
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { color?: string, title?: string, hideValue?: boolean }) {
  return (
    <div>
      <div className="flex align-center justify-between">
        {title && <div className="mb-2 text-sm font-medium">{title}</div>} 
        {!hideValue && <div className="text-sm font-medium">{value}%</div>} 
      </div>
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="h-full w-full flex-1 transition-all duration-300 ease-linear"
          style={{ transform: `translateX(-${100 - (value || 0)}%)`, backgroundColor: color }}
        />
      </ProgressPrimitive.Root>
    </div>
  )
}

export { Progress }
