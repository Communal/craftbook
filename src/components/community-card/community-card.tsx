import { forwardRef } from "react";
import { Avatar, Card } from "..";
import { cn } from "@/utils";

export interface CommunityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  logo: string;
  title: string;
  description?: string;
  communityName: string;
}

export const CommunityCard = forwardRef<HTMLDivElement, CommunityCardProps>(
  ({ className, children, logo, title, description, communityName, ...props }, ref) => {
    return <Card ref={ref} className={cn("community-card w-[260px] h-[124px] hover:scale-95 hover:cursor-pointer transition-all", className)} {...props}>
      <div className="community-card-header-wrapper flex flex-row items-center justify-start gap-2">
        <Avatar fallback={title[0]} image={logo} size={"sm"} />
        <div>
          <h3 className="font-medium leading-snug text-sm">{title}</h3>
          <p className="text-xs text-neutral-400 leading-snug">{communityName}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 leading-snug mt-3">{description}</p>
    </Card>
  }
)