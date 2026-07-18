import type { Metadata } from "next";
import Link from "next/link";
import { listPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, compliance notes, and product updates from BoundPro — A and D Software for Federal Firearms Licensees.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "BoundPro Blog",
    description: "Guides and updates for FFL dealers using modern A and D Software.",
    url: "/blog",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  const posts = listPosts();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-eyebrow">
            <span className="dot" aria-hidden="true" /> Blog
          </span>
          <h1>Notes from the back counter.</h1>
          <p>
            Compliance explainers, migration tips, and product updates for Federal Firearms
            Licensees.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 56 }}>
        <div className="container">
          {posts.length === 0 ? (
            <p className="text-muted" style={{ textAlign: "center" }}>
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="blog-list">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-meta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    {post.author ? <> · {post.author}</> : null}
                    {post.draft ? <> · Draft</> : null}
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
