import { Button, Headline, Subtitle } from '@/components';

const HeroExamplePrimary: React.FunctionComponent = () => {
  return (
    <div>
      <Headline size="lg">{'Elevating your CommX'}</Headline>
      <Subtitle>
        {
          'Manage community programmes, live-sessions, 1:1 meetings and announcements. Everything on Communal'
        }
      </Subtitle>
      <div className="mt-6 flex flex-row items-center justify-start gap-3">
        <Button>Get Started</Button>
        <Button variant="secondary">Explore Communities</Button>
      </div>
    </div>
  );
};

const HeroExampleSecondary: React.FunctionComponent = () => {
  return (
    <div>
      <Headline size="lg">{'Elevating your CommX'}</Headline>
      <Subtitle>
        {
          'Manage community programmes, live-sessions, 1:1 meetings and announcements. Everything on Communal'
        }
      </Subtitle>
      <div className="mt-6 flex flex-row items-center justify-start gap-3">
        <Button variant="solid">Get Started</Button>
        <Button variant="outline">Explore Communities</Button>
      </div>
    </div>
  );
};

export { HeroExamplePrimary, HeroExampleSecondary };
