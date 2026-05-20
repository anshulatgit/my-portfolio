import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: PostMeta;
}

const categoryColors: Record<string, string> = {
  technology: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  career:     "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
  skills:     "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
  general:    "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 group-hover:border-brand-300 dark:group-hover:border-brand-700 group-hover:shadow-lg group-hover:shadow-brand-500/5 transition-all duration-300">
        {/* Category + Reading time */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || categoryColors.general}`}>
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
            <Clock size={12} />
            {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-2 line-clamp-2 leading-snug">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
          <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
            <Calendar size={12} />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400 group-hover:gap-2 transition-all">
            Read <ArrowRight size={12} />
          </span>
        </div>
      </article>
    </Link>
  );
}