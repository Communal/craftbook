import { cn } from '@/utils';
import { forwardRef } from 'react';
import { Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'message' | 'info' | 'success' | 'warning' | 'error';
  stretch?: boolean;
}

const CalloutConfig = {
  message: {
    icon: <Info className="w-4 h-5" />,
    style: 'bg-neutral-100 text-neutral-500',
    highlighter: 'bg-neutral-500',
  },
  success: {
    icon: <CheckCircle2 className="w-4 h-4" />,
    style: 'bg-green-100 text-green-600',
    highlighter: 'bg-green-600',
  },
  info: {
    icon: <Info className="w-4 h-5" />,
    style: 'bg-blue-100 text-blue-700',
    highlighter: 'bg-blue-700',
  },
  warning: {
    icon: <AlertTriangle className="w-4 h-5" />,
    style: 'bg-yellow-100 text-yellow-700',
    highlighter: 'bg-yellow-700',
  },
  error: {
    icon: <AlertTriangle className="w-4 h-5" />,
    style: 'bg-red-100 text-red-600',
    highlighter: 'bg-red-600',
  },
};

const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  (
    { className, children, type = 'message', stretch = false, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg overflow-hidden flex',
          CalloutConfig[type].style,
          className,
        )}
        {...props}>
        <div className={cn('h-auto w-1', CalloutConfig[type].highlighter)} />
        <div
          className={cn(
            'py-3 pl-3 pr-6 text-xs flex flex-row items-center gap-2 leading-snug font-medium',
          )}>
          <span className="callout-icon-wrapper w-fit h-fit">
            {CalloutConfig[type].icon}
          </span>
          <p className="callout-message-wrapper">{children}</p>
        </div>
      </div>
    );
  },
);

export { Callout };

export type { CalloutProps };
