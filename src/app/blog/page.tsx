import BlurFade from "@/components/magicui/blur-fade";
import {getBlogPosts} from "@/data/blog";
import {cn} from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blogs</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <Link
            className="flex flex-col space-y-1 mb-4 transition-all duration-200 ease-in-out hover:scale-[103%]"
            href={`/blog/${post.slug}`}
            key={post.slug}>
            <BlurFade
              className={cn(
                "relative mx-auto min-h-fit w-full  cursor-pointer overflow-hidden rounded-2xl p-4",
            
                
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              )}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
              <div className="w-full flex flex-row items-center gap-4 h-full">
                <img src={post.metadata.image} alt={post.metadata.summary} height={50} width={50}/>
                <div>
                  <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-fit text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
                  </div>

              </div>
            </BlurFade>
          </Link>
        ))}
    </section>
  );
}
