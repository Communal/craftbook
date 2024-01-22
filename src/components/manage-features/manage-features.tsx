import { cn } from '@/utils';
import { forwardRef } from 'react';
import { Switch } from '..';

export interface ManageFeaturesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}
export interface ManageFeatureOptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isOn: boolean;
}

export const ManageFeatures = forwardRef<HTMLDivElement, ManageFeaturesProps>(
  ({ className, children, title, description, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('border rounded-2xl', className)} {...props}>
        <div className="manage-features-container-header px-4 py-3">
          <h3 className="leading-snug tracking-tight text-base font-medium">
            {title}
          </h3>
          {description && (
            <p className="text-xs text-neutral-500">{description}</p>
          )}
        </div>
        <div className="p-4 grid grid-cols-1 gap-3">{children}</div>
      </div>
    );
  },
);

export const ManageFeatureOption = forwardRef<
  HTMLDivElement,
  ManageFeatureOptionProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-row items-center justify-between', className)}
      {...props}>
      <div className="flex flex-col items-start gap-2">{children}</div>
      <Switch />
    </div>
  );
});
