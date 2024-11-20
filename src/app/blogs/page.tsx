"use client";

import React, { useState, useEffect } from "react";
import blogsData from "@/app/data/blogData";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [activeKey, setActiveKey] = useState<number | null>(null); // State to track the active key

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  return (
    <section className="min-h-screen bg-black py-16 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center mb-16 uppercase tracking-wide">
          Our Blogs
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`relative group bg-gray-900 overflow-hidden shadow-lg transition duration-300 ${
                activeKey === blog.id ? "scale-105" : "hover:scale-105"
              }`}
              onMouseEnter={() => setActiveKey(blog.id)} // Set activeKey on hover
              onMouseLeave={() => setActiveKey(null)} // Reset activeKey when hover ends
            >
              {/* Blog Image */}
              <div className="relative w-full h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={`object-cover w-full h-full transition-transform duration-300 ${
                    activeKey === blog.id ? "scale-110" : "group-hover:scale-110"
                  }`}
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h2
                  className={`text-xl font-bold mb-3 transition ${
                    activeKey === blog.id ? "text-gray-100" : "group-hover:text-gray-400"
                  }`}
                >
                  {blog.title}
                </h2>
                <p
                  className={`text-gray-400 text-sm mb-4 transition ${
                    activeKey === blog.id ? "text-gray-200" : ""
                  }`}
                >
                  {blog.description}
                </p>
                <a
                  href={`/blogs/${blog.slug}`}
                  className={`inline-block text-sm font-semibold transition ${
                    activeKey === blog.id ? "text-gray-100" : "text-gray-300 hover:text-gray-100"
                  }`}
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
