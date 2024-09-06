import type { ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge"

export const TextButton = (props:ComponentPropsWithoutRef<"button"> & {color?:string}) => {
    const {className,children, color} = props
    return(
        <button className={twMerge("text-sm uppercase text-fuchsia-500 font-heading font-extrabold tracking-wide",
            color === "lime" && "text-lime-500",
            color === "cyan" && "text-cyan-500",
            color === "violet" && "text-violet-500",
            className
        )}>
            {children}
        </button>
    )
}