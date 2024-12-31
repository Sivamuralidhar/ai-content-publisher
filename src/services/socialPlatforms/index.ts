import { Post } from '../../types';
import { postToTwitter } from '../socialPlatforms/twitter';
import { postToFacebook } from '../socialPlatforms/facebook';
import { postToInstagram } from './instagram';
import { postToLinkedIn } from '../socialPlatforms/linkedin';
import { postToReddit } from '../socialPlatforms/reddit';
import { postToThreads } from '../socialPlatforms/threads';

const platformHandlers = {
  twitter: postToTwitter,
  facebook: postToFacebook,
  instagram: postToInstagram,
  linkedin: postToLinkedIn,
  reddit: postToReddit,
  threads: postToThreads,
};

export async function publishToSocialPlatforms(post: Post): Promise<void> {
  const publishPromises = post.platforms.map(platform => 
    platformHandlers[platform](post)
  );

  try {
    await Promise.all(publishPromises);
  } catch (error) {
    console.error('Failed to publish to some platforms:', error);
    throw error;
  }
}