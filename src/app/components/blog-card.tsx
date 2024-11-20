import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  date?: string; // Optional date if needed
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, slug, date }) => {
  return (
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-lg overflow-hidden">
      {/* Blog Image */}
      <Link href={`/blogs/${slug}`}>
        <a>
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
            {/* Date Tag (if applicable) */}
            {date && (
              <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white text-xs px-3 py-1 rounded-full">
                {new Date(date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </div>
            )}
          </div>
          {/* Blog Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition duration-300">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-snug">
              {description.length > 100
                ? `${description.substring(0, 100)}...`
                : description}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
