import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/", "./routes/home.tsx"),
  route("blog", "./routes/blog.tsx")
] satisfies RouteConfig;
