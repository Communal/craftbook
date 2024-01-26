import {
  HackathonTimeline,
  HackathonTimelineEvent,
  HackathonTimelineEventDescription,
  HackathonTimelineEventTitle,
} from '@/components';

export default function HackathonTimelineExample() {
  return (
    <HackathonTimeline
      hackathonTitle={'Communal Engineering Hackathon'}
      hackathonSlug={'hackforcommunal'}
      hackathonStartsAt={'2024-01-23T10:00:00Z'}
      hackathonEndsAt={'2024-01-28T18:00:00Z'}
      submissionStartsAt={'2024-01-25T12:00:00Z'}
      submissionEndsAt={'2024-01-27T23:59:59Z'}
      leaderboardAnnouncement={'2024-01-30T14:30:00Z'}>
      <HackathonTimelineEvent
        isOnline={true}
        eventType={'session'}
        startAt={'2024-01-24T15:00:00Z'}
        endsAt={'2024-01-24T17:00:00Z'}>
        <HackathonTimelineEventTitle>
          {'Exploring Craftbook Components'}
        </HackathonTimelineEventTitle>
        <HackathonTimelineEventDescription>
          {
            'Learn from the component magician, Yash, how to build extensive, type-safe and beautiful looking components.'
          }
        </HackathonTimelineEventDescription>
      </HackathonTimelineEvent>

      <HackathonTimelineEvent
        isOnline={true}
        eventType={'youtube-live'}
        startAt={'2024-01-25T09:30:00Z'}
        endsAt={'2024-01-25T11:30:00Z'}>
        <HackathonTimelineEventTitle>
          {'How the DevEx is getting improved with Typescript and Intellisense'}
        </HackathonTimelineEventTitle>
        <HackathonTimelineEventDescription>
          {
            "Understanding the basics of Typescript and how it's used with React components"
          }
        </HackathonTimelineEventDescription>
      </HackathonTimelineEvent>

      <HackathonTimelineEvent
        isOnline={true}
        eventType={'youtube-live'}
        startAt={'2024-01-26T14:00:00Z'}
        endsAt={'2024-01-26T16:00:00Z'}>
        <HackathonTimelineEventTitle>
          {'Hackathon 101'}
        </HackathonTimelineEventTitle>
        <HackathonTimelineEventDescription>
          {
            'How to hackathon? Masterclass on hackathon building and submissions'
          }
        </HackathonTimelineEventDescription>
      </HackathonTimelineEvent>

      <HackathonTimelineEvent
        isOnline={true}
        eventType={'session'}
        startAt={'2024-01-27T11:00:00Z'}
        endsAt={'2024-01-27T13:00:00Z'}>
        <HackathonTimelineEventTitle>
          {'Creating community events on Communal'}
        </HackathonTimelineEventTitle>
      </HackathonTimelineEvent>

      <HackathonTimelineEvent
        isOnline={false}
        eventType={'session'}
        startAt={'2024-01-28T17:00:00Z'}
        endsAt={'2024-01-28T18:00:00Z'}>
        <HackathonTimelineEventTitle>
          {'Using Clerk for Auth'}
        </HackathonTimelineEventTitle>
        <HackathonTimelineEventDescription>
          {
            'How OGs are building auth flows for their products? Learn how to use clerk in you hackathon projects'
          }
        </HackathonTimelineEventDescription>
      </HackathonTimelineEvent>
    </HackathonTimeline>
  );
}
