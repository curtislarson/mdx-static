import { Blog } from "../src/Blog.tsx";

const root = new URL("./test-website", import.meta.url).pathname;

await new Blog({ root }).build();
