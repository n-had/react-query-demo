import Link from "next/link";

function Nav() {
  return (
    <div className="flex flex-wrap gap-4 border p-4 rounded-lg m-4 dark:border-gray-800">
      <Link href={"/"}>Home</Link>
      <Link href={"/01-posts-traditional"}>Posts (Traditional)</Link>
      <Link href={"/02-posts-rq"}>Posts (RQ)</Link>
      <Link href={"/paginated"}>Paginated</Link>
      <Link href={"/infinite-queries"}>Infinite Queries</Link>
      <Link href={"/infinite-queries-wio"}>
        Infinite queries with intersection observer
      </Link>
      <Link href={"/rq-posts-mutation"}>RQ Posts Mutation</Link>
    </div>
  );
}

export default Nav;
