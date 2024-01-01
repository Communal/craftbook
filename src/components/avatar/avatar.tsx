import { cn } from '@/utils';
import * as RadixAvatar from '@radix-ui/react-avatar';
import { forwardRef } from 'react';

interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  fallback: string;
  image?: string;
  size?: 'lg' | 'md' | 'sm';
  filled?: boolean;
}

const Avatar = forwardRef<HTMLElement, AvatarProps>(
  ({ className, fallback, image, size = 'md', filled = false, ...props }) => {
    const SizeClassNames = {
      lg: 'avatar-lg',
      md: 'avatar-md',
      sm: 'avatar-sm',
    };

    return (
      <RadixAvatar.Root
        className={cn(
          'craftbookAvatar',
          filled && 'craftbookAvatar-filled',
          SizeClassNames[size],
          className,
        )}
        {...props}>
        <RadixAvatar.Image
          src={image}
          alt={`avatar-${fallback}`}
          className={cn('avatar-image')}
        />
        <RadixAvatar.Fallback className={cn('avatar-fallback')}>
          {fallback}
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
    );
  },
);

export { Avatar };

export type { AvatarProps };
