import React, { Suspense } from "react";
import { SkeletonList } from "../components/Skeleton";
import { PostCard, SkeletonPostCard } from "../components/PostCard";
import { getPosts } from "@/api/posts";

export default function PostsPage() {
  return (
    <>
      <h1 className="page-title">Posts</h1>

      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList amount={6}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <Posts />
        </Suspense>
      </div>
    </>
  );
}

async function Posts() {
  const posts = await getPosts();
  return posts.map((post) => <PostCard key={post.id} {...post} />);
}
