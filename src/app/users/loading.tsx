import React from "react";
import { Skeleton, SkeletonButton, SkeletonList } from "../components/Skeleton";

export default function UsersLoadingPage() {
  return (
    <>
      <h1 className="page-title">Users</h1>
      <SkeletonList amount={6}>
        <div className="card">
          <div className="card-header">
            <Skeleton short />
          </div>
          <div className="card-body">
            <Skeleton short />
            <Skeleton short />
            <Skeleton short />
          </div>
          <div className="card-footer">
            <SkeletonButton />
          </div>
        </div>
      </SkeletonList>
    </>
  );
}
