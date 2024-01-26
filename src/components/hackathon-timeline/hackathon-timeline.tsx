import { cn, getMonthNameByIndex } from '@/utils';
import { forwardRef } from 'react';
import { Button } from '..';
import { Calendar, Youtube } from 'lucide-react';

export type HackathonTimelineEventType = 'session' | 'youtube-live';
export interface HackathonTimelineProps
  extends React.HTMLAttributes<HTMLDivElement> {
  hackathonTitle: string;
  hackathonSlug: string;
  hackathonStartsAt: string;
  hackathonEndsAt: string;
  submissionStartsAt: string;
  submissionEndsAt: string;
  openingCeremony?: string;
  closingCeremony?: string;
  leaderboardAnnouncement: string;
}
export interface HackathonTimelineEventProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isOnline: boolean;
  link?: string;
  eventType: HackathonTimelineEventType;
  startAt: string;
  endsAt: string;
}

export const HackathonTimeline = forwardRef<
  HTMLDivElement,
  HackathonTimelineProps
>(
  (
    {
      className,
      children,
      hackathonTitle,
      hackathonSlug,
      hackathonStartsAt,
      hackathonEndsAt,
      submissionStartsAt,
      submissionEndsAt,
      openingCeremony,
      closingCeremony,
      leaderboardAnnouncement,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'hackathon-timeline grid grid-cols-1 gap-6 border-l',
          className,
        )}
        {...props}>
        <div className="my-4 pl-12">
          <h2 className="leading-snug tracking-tight text-2xl">
            Hackathon Timeline: {hackathonTitle}
          </h2>
          <p className="leading-snug text-sm text-neutral-500">
            {`Head out for hackathon page at`}{' '}
            <a href="#" className="underline">
              {`communal.com/hackathon/${hackathonSlug}`}
            </a>
          </p>
        </div>
        {children}
      </div>
    );
  },
);

export const HackathonTimelineEvent = forwardRef<
  HTMLDivElement,
  HackathonTimelineEventProps
>(
  (
    {
      className,
      children,
      isOnline,
      link,
      eventType,
      startAt,
      endsAt,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn('hackathon-timeline-event w-[80%] relative', className)}
        {...props}>
        {eventType === 'session' && (
          <div className="bg-blue-500 w-fit h-fit p-1 rounded-full top-1 -left-2.5 absolute">
            <Calendar className="w-3 h-3 text-white" />
          </div>
        )}
        {eventType === 'youtube-live' && (
          <div className="bg-red-500 w-fit h-fit p-1 rounded-full top-2 -left-2.5 absolute">
            <Youtube className="w-3 h-3 text-white" />
          </div>
        )}
        <div className="pl-12">
          {children}
          <div className="hackathon-timeline-event-meta-details-wrapper mt-2 mb-4">
            <div className="hackathon-timeline-event-timestamp-wrapper text-xs font-medium text-neutral-500">
              {`(${new Date(startAt).getHours()}:${new Date(
                startAt,
              ).getMinutes()}) ${new Date(
                startAt,
              ).getDate()} ${getMonthNameByIndex(new Date(startAt).getMonth())
                ?.short}, ${new Date(startAt).getFullYear()}`}
              {endsAt && ' - '}
              {endsAt &&
                `(${new Date(endsAt).getHours()}:${
                  new Date(endsAt).getMinutes() === 0
                    ? '00'
                    : new Date(endsAt).getMinutes()
                }) ${new Date(endsAt).getDate()} ${getMonthNameByIndex(
                  new Date(endsAt).getMonth(),
                )?.short}, ${new Date(endsAt).getFullYear()}`}
            </div>
          </div>
          <div className="my-2">
            <Button variant="outline">
              {isOnline && eventType === 'session' && 'Join Live'}
              {isOnline && eventType === 'youtube-live' && 'Watch on YouTube'}
              {!isOnline && 'Get Directions'}
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

export const HackathonTimelineEventTitle: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ className, ...props }) => {
  return (
    <h2 className={cn('text-xl font-semibold mb-2', className)} {...props} />
  );
};

export const HackathonTimelineEventDescription: React.FunctionComponent<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className, ...props }) => {
  return <p className={cn('text-sm text-neutral-500', className)} {...props} />;
};
