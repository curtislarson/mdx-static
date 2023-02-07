/** @jsx h */
import { h } from "../../deps.ts";
import { PostFrontmatter } from "../types.ts";
import Author from "./Author.tsx";
import PrettyDate from "./PrettyDate.tsx";
import Tags from "./Tags.tsx";

export interface PostProps extends PostFrontmatter {
  children: any;
}

export default function Post(props: PostProps) {
  return (
    <div
      class="my-8 flex flex-col justify-center relative overflow-hidden lg:my-12 mx-96 rounded-2xl"
      data-theme={props.theme}
    >
      <div class="relative w-full px-6 py-12 bg-base-300 shadow-xl shadow-slate-700/10 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
        <div class="flex flex-col px-12">
          {props.title && <h1 class="flex-1 text-4xl font-bold text-secondary text-center">{props.title}</h1>}
          <div class="flex flex-row text-gray-300 text-sm mt-5">
            {props.author && <Author author={props.author} />}
            {props.date && (
              <div class="ml-5">
                <PrettyDate date={new Date(props.date)} />
              </div>
            )}
            <div class="ml-5">{props.tags && <Tags tags={props.tags} />}</div>
          </div>
          <hr class="text-gray-700 mt-5" />
          <article class="flex-1 text-base prose prose-white lg:text-lg mt-4">
            {props.preview && <h4>{props.preview}</h4>}
            {props.children}
          </article>
        </div>
      </div>
    </div>
  );
}
