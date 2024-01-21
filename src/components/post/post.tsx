import { cn } from '@/utils';
import { forwardRef } from 'react';
import { Avatar, CommentButton, LikeButton, SaveButton, ShareButton } from '..';
import { Callout } from '../callout';

export interface CommentType extends PostProps {
  replyingTo: string[];
}

export interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
  username: string;
  userProfile: string;
  fullName: {
    firstName: string;
    lastName?: string;
  };
  postContent: string;
  postedAt: string;
  comments: CommentType[];
  isLiked: boolean;
  likes: number;
  isSaved: boolean;
  onlyCommunityMembersCanComment?: boolean;
  onlyCommunityMembersCanLike?: boolean;
}

export const Post = forwardRef<HTMLDivElement, PostProps>(
  (
    {
      className,
      username,
      fullName,
      postContent,
      postedAt,
      comments,
      isLiked,
      isSaved,
      likes,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        <div
          ref={ref}
          className={cn('post border-b px-3 py-3', className)}
          {...props}>
          <div className={cn('post-content-wrapper grid gap-3')}>
            <div
              className={cn(
                'post-user-details-wrapper flex flex-row items-start justify-start gap-2',
              )}>
              <Avatar fallback={fullName.firstName[0]} size="sm" />
              <div>
                <h3 className="fullName-wrapper font-medium text-base">
                  {fullName.firstName} {fullName.lastName || ''}
                </h3>
                <p className="username-wrapper text-sm text-neutral-500">
                  @{username}
                </p>
              </div>
            </div>
            <div className="post-content-container px-12">{postContent}</div>
          </div>
          {(props.onlyCommunityMembersCanComment ||
            props.onlyCommunityMembersCanLike) && (
            <Callout type="message" className="ml-12 my-2">
              {props.onlyCommunityMembersCanComment &&
              props.onlyCommunityMembersCanLike
                ? 'Only community members can like and comment to this post'
                : props.onlyCommunityMembersCanComment
                  ? 'Only community members can comment to this post'
                  : 'Only community members can like this post'}
            </Callout>
          )}
          <div
            className={cn(
              'post-actions-wrapper grid grid-cols-4 justify-around px-10 mt-4',
            )}>
            <LikeButton isLiked={isLiked} count={likes} />
            <CommentButton count={comments.length} />
            <ShareButton />
            <SaveButton isSavedAlready={isSaved} />
          </div>
        </div>
        {comments.length ? (
          comments.map((comment, index) => {
            return <CommentPost {...comment} key={index} />;
          })
        ) : (
          <></>
        )}
      </>
    );
  },
);

export const CommentPost = forwardRef<HTMLDivElement, CommentType>(
  ({ className, replyingTo, ...props }, ref) => {
    return (
      <>
        {replyingTo.length && (
          <div className="px-12 mt-4 text-sm text-neutral-400">
            replying to{' '}
            {replyingTo.map((replyingToUsername, index) => {
              return (
                <span key={index} className="hover:underline cursor-pointer">
                  @{replyingToUsername}{' '}
                </span>
              );
            })}
          </div>
        )}
        <Post ref={ref} className={cn('comment-post', className)} {...props} />
      </>
    );
  },
);
