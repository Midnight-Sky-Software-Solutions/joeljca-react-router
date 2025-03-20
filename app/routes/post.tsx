import { WP_API_URL } from "~/lib/wordpress";
import type { Route } from "./+types/post";

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: `Joel Alexander Johnston | ${data?.title || ''}` },
    { name: "description", content: "Developer - React | ASP.NET Web API | SQL Server | CRM" },
  ];
}

export async function clientLoader({
  params
}: Route.ClientLoaderArgs) {
  const res = await fetch(`${WP_API_URL}/posts?slug=${params.slug}`).then(res => res.json());
  return res.posts[0];
}

export default function Post({
  loaderData,
}: Route.ComponentProps) {
  const { title, content } = loaderData;
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl grow px-5">
        <h2 className="text-4xl font-serif py-6">{title}</h2>
        <div dangerouslySetInnerHTML={{__html: content}} className="flex flex-col gap-3"></div>
      </div>
    </div>
  );
}