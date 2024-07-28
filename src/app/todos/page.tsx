import { getTodos } from "@/api/todos";
import { TodoItem } from "../components/TodoItem";
import { todo } from "node:test";
import { Suspense } from "react";
import { Skeleton, SkeletonList } from "../components/Skeleton";

export default async function TodosPage() {
  const todos = await getTodos();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        <Suspense
          fallback={
            <>
              <SkeletonList amount={10}>
                <li>
                  <Skeleton short />
                </li>
              </SkeletonList>
            </>
          }
        >
          <TodoList />
        </Suspense>
      </ul>
    </>
  );
}

async function TodoList() {
  const todos = await getTodos();
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  );
}
