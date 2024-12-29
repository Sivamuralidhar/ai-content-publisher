import React, { useState } from 'react';
import { Platform, Post } from '../types';
import { AIContentGenerator } from './AIContentGenerator';
import { PostActions } from './PostEditor/PostActions';
import { PostForm } from './PostEditor/PostForm';
import { PostPreview } from './Preview/PostPreview';
import { Toast } from './shared/Toast';
import { useStore } from '../store/useStore';

const platforms: Platform[] = ['twitter', 'facebook', 'instagram', 'reddit', 'threads', 'linkedin'];

export function PostEditor() {
  const { addPost } = useStore();
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);
  const [previewPost, setPreviewPost] = useState<Partial<Post> | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handlePublish = () => {
    const postData: Post = {
      id: crypto.randomUUID(),
      content,
      image,
      link,
      platforms: selectedPlatforms,
      status: 'published',
      createdAt: new Date(),
      publishedAt: new Date(),
    };
    addPost(postData);
    resetForm();
    setShowToast(true);
  };

  const handlePreview = () => {
    setPreviewPost({
      content,
      image,
      link,
      platforms: selectedPlatforms,
    });
  };

  const resetForm = () => {
    setContent('');
    setImage('');
    setLink('');
    setSelectedPlatforms([]);
  };

  const isFormValid = content && selectedPlatforms.length > 0;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-sm">
        <AIContentGenerator onGenerate={setContent} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 space-y-6">
          <PostForm
            content={content}
            image={image}
            link={link}
            selectedPlatforms={selectedPlatforms}
            platforms={platforms}
            onContentChange={setContent}
            onImageChange={setImage}
            onLinkChange={setLink}
            onPlatformsChange={setSelectedPlatforms}
          />

          <PostActions
            onPreview={handlePreview}
            onPublish={handlePublish}
            disabled={!isFormValid}
          />
        </div>
      </div>

      {previewPost && (
        <PostPreview
          post={previewPost}
          onClose={() => setPreviewPost(null)}
        />
      )}

      {showToast && (
        <Toast
          message="Post published successfully!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}