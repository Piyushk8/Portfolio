import React from 'react'
import { GridPattern } from './magicui/grid-pattern'
import { cn } from '@/lib/utils'

const GridBackground = () => {
  return (
    <div className="fixed dark:bg-background bg-violet-50 inset-0 -z-10">
    {/* // <div className="absolute dark:bg-background bg-violet-50 inset-x-0 top-0 h-[95vh] -z-10"> */}
    <GridPattern
      width={30}
      height={30}
      x={-1}
      y={-1}
      strokeDasharray="1.5 1"
      className={cn(
        "w-full h-full",
        "stroke-violet-300/40 dark:stroke-violet-600/45",
        "animate-[pulse_10s_ease-in-out_infinite]",
        "[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8)_10%,rgba(0,0,0,0.6)_60%,transparent_95%)]"
      )}
    />
  </div>
  )
}

export default GridBackground