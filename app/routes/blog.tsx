import useSWRInfinite, { type SWRInfiniteKeyLoader } from "swr/infinite";
import type { Route } from "./+types/blog";
import type { Fetcher } from "swr";
import { WP_API_URL } from "~/lib/wordpress";
import { Link, NavLink, useSearchParams } from "react-router";
import Spinner from "~/components/spinner";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Joel Alexander Johnston | Blog" },
    { name: "description", content: "Developer - React | ASP.NET Web API | SQL Server | CRM" },
  ];
}

const perPage = 5;

const fetcher: Fetcher<any, string> = (...args) => fetch(...args).then(res => res.json())


const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return `${WP_API_URL}/posts?page=${pageIndex}&per_page=${perPage}`;
}

export default function Blog() {
  const { data, error, isLoading, size, setSize } = useSWRInfinite(getKey, fetcher);
  const [searchParams] = useSearchParams();
  if (error) throw error;
  if (isLoading || searchParams.has('loading')) return (
    <div className="flex justify-center">
      <div className="max-w-6xl grow px-5 py-5 justify-center flex">
        <Spinner />
      </div>
    </div>
  );

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl grow px-5">
        <h2 className="text-4xl font-serif py-6">Blog</h2>
        <div className="flex flex-col">
          {data!.map(data => data.posts.map((post: any) => (
            <BlogItem
              key={post.slug}
              title={post.title}
              date={new Date(post.date)}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          )))}
        </div>
      </div>
    </div>
  );
}

function BlogItem(props : {
  title: string,
  date: Date,
  excerpt: string,
  slug: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <NavLink to={`/blog/${props.slug}`} className={({isPending}) => isPending ? 'animate-pulse' : ''}>
        <h3 className="text-2xl font-serif">{props.title}</h3>
      </NavLink>
      <p className="text-blue-grey-500">{props.date.toDateString()}</p>
      <p className="text-blue-grey-700" dangerouslySetInnerHTML={{__html: props.excerpt}}>
      </p>
    </div>
  );
}