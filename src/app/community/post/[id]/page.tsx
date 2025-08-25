'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../../../components/layout/Header';
import { Footer } from '../../../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/Card';
import { Button } from '../../../../components/ui/Button';

interface Comment {
  id: number;
  author: string;
  content: string;
  votes: number;
  timestamp: string;
  replies: Comment[];
}

interface Post {
  id: number;
  title: string;
  author: string;
  community: string;
  content: string;
  votes: number;
  commentCount: number;
  timestamp: string;
  flair: string;
}

// Mock post data
const postData: Post = {
  id: 1,
  title: "First time trying Blue Dream - Amazing experience!",
  author: "CannaNewbie420",
  community: "r/StrainReviews",
  content: `Just had my first experience with Blue Dream and I'm blown away! 

I've been dealing with chronic anxiety and insomnia for years, and traditional medications haven't been working great for me. After getting my medical card, my budtender recommended Blue Dream as a good starter strain.

**The Experience:**
- Onset was gradual and smooth (about 15-20 minutes)
- Perfect balance of relaxation and mental clarity
- Anxiety melted away without making me feel groggy
- Actually helped me focus on some creative projects
- Sleep came naturally about 3 hours later

**Details:**
- Method: Vaporized at 385°F
- Amount: About 0.2g
- THC: 18%, CBD: 2%
- Terpenes: High myrcene and pinene

The flavor was incredible - sweet berry with hints of pine. Very smooth, no harsh coughing.

For anyone dealing with similar issues, I can't recommend this strain enough. It's exactly what I was hoping cannabis could be - therapeutic without being overwhelming.

Has anyone else had similar experiences with Blue Dream? Any other strains I should try next?

Thanks to this amazing community for all the advice! 🌿`,
  votes: 127,
  commentCount: 23,
  timestamp: "2 hours ago",
  flair: "Strain Review"
};

const comments: Comment[] = [
  {
    id: 1,
    author: "SativaExpert",
    content: "Blue Dream is such a classic! Great choice for a first-time experience. If you enjoyed the balance, you might also like Girl Scout Cookies or Green Crack for daytime use.",
    votes: 15,
    timestamp: "1 hour ago",
    replies: [
      {
        id: 11,
        author: "CannaNewbie420",
        content: "Thanks for the recommendations! I'll definitely ask about Girl Scout Cookies next time I visit the dispensary.",
        votes: 5,
        timestamp: "45 minutes ago",
        replies: []
      }
    ]
  },
  {
    id: 2,
    author: "MedicalMary",
    content: "So happy to hear it's helping with your anxiety! I've been using Blue Dream for PTSD and it's been life-changing. The terpene profile really makes a difference - that pinene helps with focus.",
    votes: 22,
    timestamp: "1 hour ago",
    replies: []
  },
  {
    id: 3,
    author: "VapeLife",
    content: "385°F is a perfect temp for Blue Dream! You're getting the full terpene profile without combusting. Try bumping it up to 390-395°F for a slightly more sedating effect if you want help with sleep.",
    votes: 8,
    timestamp: "45 minutes ago",
    replies: []
  }
];

export default function CommunityPostPage({ params }: { params: { id: string } }) {
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  const [newComment, setNewComment] = useState('');

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      setUserVote(null);
    } else {
      setUserVote(type);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would handle comment submission here
    alert('Comment functionality will be implemented with authentication system');
    setNewComment('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/community" className="text-primary-600 hover:text-primary-500">
              ← Back to Community
            </Link>
          </div>

          {/* Post */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Link href="/community" className="text-primary-600 hover:text-primary-500 font-medium">
                    {postData.community}
                  </Link>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">Posted by u/{postData.author}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{postData.timestamp}</span>
                </div>
                <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                  {postData.flair}
                </span>
              </div>
              <CardTitle className="text-2xl">{postData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex">
                {/* Voting */}
                <div className="flex flex-col items-center mr-4">
                  <button
                    onClick={() => handleVote('up')}
                    className={`p-1 rounded hover:bg-gray-100 ${userVote === 'up' ? 'text-orange-500' : 'text-gray-400'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <span className="font-bold text-sm py-1">
                    {postData.votes + (userVote === 'up' ? 1 : userVote === 'down' ? -1 : 0)}
                  </span>
                  <button
                    onClick={() => handleVote('down')}
                    className={`p-1 rounded hover:bg-gray-100 ${userVote === 'down' ? 'text-blue-500' : 'text-gray-400'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="prose max-w-none">
                    {postData.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h3 key={index} className="font-semibold text-gray-900 mt-4 mb-2">
                            {paragraph.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      if (paragraph.startsWith('- ')) {
                        return (
                          <li key={index} className="text-gray-700 ml-4">
                            {paragraph.substring(2)}
                          </li>
                        );
                      }
                      if (paragraph.trim()) {
                        return (
                          <p key={index} className="text-gray-700 mb-3">
                            {paragraph}
                          </p>
                        );
                      }
                      return <br key={index} />;
                    })}
                  </div>

                  <div className="flex items-center space-x-4 mt-6 pt-4 border-t">
                    <button className="flex items-center text-gray-500 hover:text-gray-700 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {postData.commentCount} Comments
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-gray-700 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      Share
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-gray-700 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Add Comment */}
          <Card className="mb-6">
            <CardContent>
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                  rows={4}
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <div className="flex justify-end mt-3">
                  <Button type="submit" variant="primary" disabled={!newComment.trim()}>
                    Comment
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Comments */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Comments ({comments.length})
            </h2>
            
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent>
                  <div className="flex">
                    {/* Comment Voting */}
                    <div className="flex flex-col items-center mr-4">
                      <button className="p-1 rounded hover:bg-gray-100 text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <span className="font-medium text-xs py-1">{comment.votes}</span>
                      <button className="p-1 rounded hover:bg-gray-100 text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>

                    {/* Comment Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium text-gray-900">u/{comment.author}</span>
                        <span className="text-gray-500 text-sm">{comment.timestamp}</span>
                      </div>
                      <p className="text-gray-700 mb-3">{comment.content}</p>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <button className="text-gray-500 hover:text-gray-700">Reply</button>
                        <button className="text-gray-500 hover:text-gray-700">Share</button>
                      </div>

                      {/* Replies */}
                      {comment.replies.length > 0 && (
                        <div className="mt-4 ml-6 space-y-3">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="border-l-2 border-gray-200 pl-4">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium text-gray-900 text-sm">u/{reply.author}</span>
                                <span className="text-gray-500 text-xs">{reply.timestamp}</span>
                              </div>
                              <p className="text-gray-700 text-sm">{reply.content}</p>
                              <div className="flex items-center space-x-3 mt-2">
                                <span className="text-gray-500 text-xs">{reply.votes} points</span>
                                <button className="text-gray-500 hover:text-gray-700 text-xs">Reply</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}