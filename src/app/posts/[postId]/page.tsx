import { getPost } from "@/api/posts";
import { getUser } from "@/api/users";
import { Skeleton } from "@/app/components/Skeleton";
import Link from "next/link";
import React, { Suspense } from "react";

export default function PostDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  return (
    <>
      <Suspense
        fallback={
          <>
            <h1 className="page-title">
              <Skeleton inline short />
            </h1>
            <span className="page-subtitle">
              By: <Skeleton inline short />
            </span>
            <div>
              <Skeleton inline short />
              <Skeleton inline short />
              <Skeleton inline short />
            </div>
          </>
        }
      >
        <PostDetails postId={postId} />
      </Suspense>
      {/* <span className="page-subtitle">
        By:{" "}
        <Suspense fallback={<Skeleton short inline />}>
          <Await resolve={userPromise}>
            {(user) => <Link to={`/users/${user.id}`}>{user.name}</Link>}
          </Await>
        </Suspense>
      </span> */}

      {/* <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        <Suspense
          fallback={
            <SkeletonList amount={5}>
              <div className="card">
                <div className="card-body">
                  <div className="text-sm mb-1">
                    <Skeleton short />
                  </div>
                  <Skeleton />
                  <Skeleton />
                </div>
              </div>
            </SkeletonList>
          }
        >
          <Await resolve={commentsPromise}>
            {(comments) =>
              comments.map((comment) => (
                <div key={comment.id} className="card">
                  <div className="card-body">
                    <div className="text-sm mb-1">{comment.email}</div>
                    {comment.body}
                  </div>
                </div>
              ))
            }
          </Await>
        </Suspense>
      </div> */}
    </>
  );
}

async function PostDetails({ postId }: { postId: string }) {
  const post = await getPost(postId);

  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By:{" "}
        <Suspense fallback={<Skeleton short inline />}>
          <UserDetail userId={post.userId} />
        </Suspense>
      </span>
      <div>{post.body}</div>
    </>
  );
}

async function UserDetail({ userId }: { userId: number }) {
  const user = await getUser(userId);

  return <Link href={`/users/${user.id}`}>{user.name}</Link>;
}
