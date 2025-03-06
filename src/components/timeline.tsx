import * as React from "react"
import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => <div ref={ref} className={cn("space-y-4", className)} {...props} />,
)
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => <div ref={ref} className={cn("relative pb-4 pl-6", className)} {...props} />,
)
TimelineItem.displayName = "TimelineItem"

const TimelineConnector = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => (
      <div
         ref={ref}
         className={cn("absolute left-2 top-8 bottom-0 -translate-x-1/2 w-0.5 bg-border", className)}
         {...props}
      />
   ),
)
TimelineConnector.displayName = "TimelineConnector"

const TimelineHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center gap-2", className)} {...props} />,
)
TimelineHeader.displayName = "TimelineHeader"

const TimelineIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => (
      <div
         ref={ref}
         className={cn("z-10 flex items-center justify-center w-4 h-4 rounded-full bg-primary", className)}
         {...props}
      />
   ),
)
TimelineIcon.displayName = "TimelineIcon"

const TimelineTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
   ({ className, ...props }, ref) => <h3 ref={ref} className={cn("text-base font-semibold", className)} {...props} />,
)
TimelineTitle.displayName = "TimelineTitle"

const TimelineDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
   ({ className, ...props }, ref) => (
      <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
   ),
)
TimelineDescription.displayName = "TimelineDescription"

const TimelineContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => <div ref={ref} className={cn("pt-2", className)} {...props} />,
)
TimelineContent.displayName = "TimelineContent"

export {
   Timeline,
   TimelineItem,
   TimelineConnector,
   TimelineHeader,
   TimelineIcon,
   TimelineTitle,
   TimelineDescription,
   TimelineContent,
}