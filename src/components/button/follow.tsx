import { forwardRef, useEffect, useState } from "react";
import { Button, ButtonProps } from ".";
import { cn } from "@/utils";

interface FollowButtonProps extends ButtonProps {
  isFollowing?: boolean;
  onFollow: () => void;
  onUnfollow: () => void;
}

const FollowButton = forwardRef<HTMLButtonElement, FollowButtonProps>(
  ({ className, isFollowing = false, onClick, onMouseLeave, onMouseEnter, onFollow, onUnfollow, ...props }, ref) => {
    const [buttonContext, setButtonContext] = useState<"follow" | "following" | "unfollow">("follow");

    useEffect(() => {
      if (isFollowing) {
        setButtonContext("following");
      }
    }, [isFollowing]);

    const handleFollowButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (buttonContext === "follow") {
        setButtonContext("following");
        onFollow?.();
      } else if (buttonContext === "unfollow") {
        setButtonContext("follow");
        onUnfollow?.();
      }
      onClick?.(e);
    }

    const handleFollowButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (buttonContext === "following") {
        setButtonContext("unfollow");
      }
      onMouseEnter?.(e);
    }

    const handleFollowButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (buttonContext === "unfollow") {
        setButtonContext("following");
      }
      onMouseLeave?.(e);
    }

    return (
      <Button
        ref={ref}
        {...props}
        variant={buttonContext === "follow" ? "secondary" : "outline"}
        className={cn("capitalize", buttonContext === "unfollow" && "hover:bg-red-50 hover:border-red-300 hover:text-red-500", className)}
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