import type { Meta, StoryObj } from '@storybook/react';
import { Post } from '.';

const meta: Meta<typeof Post> = {
  title: 'UI Components/Post',
  component: Post,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PostExampleDefault: Story = {
  args: {
    username: "yashsehgal",
    userProfile: "https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg",
    fullName: {
      firstName: "Yash",
      lastName: "Sehgal"
    },
    isLiked: false,
    likes: 25,
    postContent: "Hey, I am Yash 🧑🏽‍💻",
    postedAt: "2024-01-21 23:15:12",
    comments: [
      {
        replyingTo: ["yashsehgal"],
        username: "yashsehgal",
        userProfile: "https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg",
        fullName: {
          firstName: "Yash",
          lastName: "Sehgal"
        },
        postContent: "I am replying to myself here ^^",
        isLiked: false,
        likes: 13,
        comments: [],
        postedAt: "2024-01-21 18:45:50",
        isSaved: false,
      },
      {
        replyingTo: ["yashsehgal"],
        username: "wh0sumit",
        userProfile: "https://pbs.twimg.com/profile_images/1734534346160365569/At2uSbm__400x400.jpg",
        fullName: {
          firstName: "Sumit",
        },
        postContent: "I am replying to yash 😄",
        isLiked: false,
        likes: 102,
        isSaved: true,
        comments: [
          {
            replyingTo: ["yashsehgal", "wh0sumit"],
            username: "yashsehgal",
            userProfile: "https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg",
            fullName: {
              firstName: "Yash",
              lastName: "Sehgal"
            },
            postContent: "Noob!",
            isLiked: false,
            likes: 13,
            comments: [],
            postedAt: "2024-01-21 18:45:50",
            isSaved: true,
          },
        ],
        postedAt: "2024-01-21 18:45:50",
      }
    ],
    // style and additional props
    style: {
      width: '600px'
    }
  },
};

export const PostExampleWithOnlyCommunityMembersCanCommentState: Story = {
  args: {
    username: "yashsehgal",
    userProfile: "https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg",
    fullName: {
      firstName: "Yash",
      lastName: "Sehgal"
    },
    isLiked: false,
    likes: 25,
    postContent: "Hey, I am Yash 🧑🏽‍💻",
    postedAt: "2024-01-21 23:15:12",
    onlyCommunityMembersCanComment: true,
    onlyCommunityMembersCanLike: false,
    comments: [
      {
        replyingTo: ["yashsehgal"],
        username: "yashsehgal",
        userProfile: "https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg",
        fullName: {
          firstName: "Yash",
          lastName: "Sehgal"
        },
        postContent: "I am replying to myself here ^^",
        isLiked: false,
        likes: 13,
        comments: [],
        postedAt: "2024-01-21 18:45:50",
        isSaved: false,
      },
    ],
    // style and additional props
    style: {
      width: '600px'
    }
  },
};

export const PostExampleWithOnlyCommunityMembersCanLikeState: Story = {
  args: {
    username: "yashsehgal",
    userProfile: "https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg",
    fullName: {
      firstName: "Yash",
      lastName: "Sehgal"
    },
    isLiked: false,
    likes: 25,
    postContent: "Hey, I am Yash 🧑🏽‍💻",
    postedAt: "2024-01-21 23:15:12",
    onlyCommunityMembersCanComment: false,
    onlyCommunityMembersCanLike: true,
    comments: [
      {
        replyingTo: ["yashsehgal"],
        username: "yashsehgal",
        userProfile: "https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg",
        fullName: {
          firstName: "Yash",
          lastName: "Sehgal"
        },
        postContent: "I am replying to myself here ^^",
        isLiked: false,
        likes: 13,
        comments: [],
        postedAt: "2024-01-21 18:45:50",
        isSaved: false,
      },
    ],
    // style and additional props
    style: {
      width: '600px'
    }
  },
};

export const PostExampleWithOnlyCommunityMembersCanLikeAndCommentState: Story = {
  args: {
    username: "yashsehgal",
    userProfile: "https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg",
    fullName: {
      firstName: "Yash",
      lastName: "Sehgal"
    },
    isLiked: false,
    likes: 25,
    postContent: "Hey, I am Yash 🧑🏽‍💻",
    postedAt: "2024-01-21 23:15:12",
    onlyCommunityMembersCanComment: true,
    onlyCommunityMembersCanLike: true,
    comments: [
      {
        replyingTo: ["yashsehgal"],
        username: "yashsehgal",
        userProfile: "https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg",
        fullName: {
          firstName: "Yash",
          lastName: "Sehgal"
        },
        postContent: "I am replying to myself here ^^",
        isLiked: false,
        likes: 13,
        comments: [],
        postedAt: "2024-01-21 18:45:50",
        isSaved: false,
      },
    ],
    // style and additional props
    style: {
      width: '600px'
    }
  },
};