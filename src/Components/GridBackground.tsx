import React from 'react'
import { GridPattern } from './magicui/grid-pattern'
import { cn } from '@/lib/utils'

const GridBackground = () => {
  return (
    <div className="fixed dark:bg-background bg-sky-50 inset-0 -z-10">
      <GridPattern
        width={10}
        height={10}
        x={-1}
        y={-1}
        strokeDasharray="1 1"
        className={cn(
          "w-full h-full",
          "stroke-sky-400/30 dark:stroke-sky-800/35",
          "animate-[pulse_10s_ease-in-out_infinite]",
          // Radial fade from center - subtle edges
          "[mask-image:radial-gradient(ellipse_80%_100%_at_50%_50%,black_0%,rgba(0,0,0,0.9)_40%,rgba(0,0,0,0.4)_80%,transparent_100%)]",
          // OR top/bottom fade with softer edges:
          // "[mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.6)_10%,black_25%,black_75%,rgba(0,0,0,0.6)_90%,transparent_100%)]"
          // OR all edges fade (vignette):
          // "[mask-image:radial-gradient(circle_at_center,black_20%,rgba(0,0,0,0.8)_50%,rgba(0,0,0,0.3)_85%,transparent_100%)]"
        )}
      />
    </div>
  )
}

export default GridBackground