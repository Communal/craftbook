import { forwardRef, useEffect, useState } from "react";
import { Button, ButtonProps } from ".";
import { cn } from "@/utils";

interface FollowButtonProps extends ButtonProps {
  isFollowing?: boolean;
  onFollow: () => void;
  onUnFollow: () => void;
}

const FollowButton = forwardRef<HTMLButtonElement, FollowButtonProps>(
  ({ className, isFollowing = false, ...props }, ref) => {
    const [buttonContext, setButtonContext] = useState<"follow" | "following" | "unfollow">("follow");

    useEffect(() => {
      if (isFollowing) setButtonContext("following")
    }, []);

    const handleFollowButtonClick = () => {
      if (buttonContext === "follow") {
        setButtonContext("following");
      } else if (buttonContext === "unfollow") {
        setButtonContext("follow");
      }
    }

    const handleFollowButtonMouseEnter = () => {
      if (buttonContext === "following") {
        setButtonContext("unfollow");
      }
    }

    const handleFollowButtonMouseLeave = () => {
      if (buttonContext === "unfollow") {
        setButtonContext("following");
      }
    }

    return (
      <Button
        ref={ref}
        {...props}
        variant={buttonContext === "follow" ? "secondary" : "outline"}
        className={
          cn(
            "capitalize",
            buttonContext === "unfollow" && "hover:bg-red-50 hover:border-red-300 hover:text-red-500",
            className
          )}
        onClick={handleFollowButtonClick}
        onMouseEnter={handleFollowButtonMouseEnter}
        onMouseLeave={handleFollowButtonMouseLeave}
      >
        {buttonContext}
      </Button>
    )
  }
)

export {
  FollowButton
}

export type {
  FollowButtonProps
}