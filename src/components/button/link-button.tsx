import { cn } from "@/utils";
import { forwardRef } from "react";

interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({
    className,
    ...props
  }, ref) => {
    return <button
      ref={ref}
      className={cn(
        "px-4 py-1.5 rounded-full text-neutral-800 hover:bg-black/5 active:bg-black/10 text-sm flex flex-row items-center gap-1 justify-center",
        className
      )}
      {...props}
    />
  }
)

const IconLinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({
    className,
    ...props
  }, ref) => {
    return <button
      ref={ref}
      className={cn(
        "p-2 rounded-full text-neutral-800 hover:bg-black/5 active:bg-black/10 text-sm flex flex-row items-center gap-1 justify-center",
        className
      )}
      {...props}
    />
  }
)

export {
  LinkButton,
  IconLinkButton
}

export type {
  LinkButtonProps
}