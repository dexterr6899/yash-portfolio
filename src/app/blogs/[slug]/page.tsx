"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import blogDetails from '@/app/data/blogDetails';
import Image from 'next/image';

interface BlogDetail {
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

const SingleBlog: React.FC = () => {
  const pathname = usePathname();

  // Extract the slug from the pathname
  const slug = pathname.split('/').pop();

  if (!slug || typeof slug !== 'string') return null;

  const blog: BlogDetail = blogDetails[slug as keyof typeof blogDetails];

  if (!blog) {
    return <p className="text-center mt-20">Blog not found</p>;
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-semibold mb-6">{blog.title}</h1>
        <p className="text-gray-600 mb-4">{`By ${blog.author} | ${new Date(blog.date).toLocaleDateString()}`}</p>
        <div className="relative w-full h-64 mb-6">
          <Image src={blog.image} alt={blog.title} fill style={{ objectFit: "cover" }} className="rounded-lg" />
        </div>
        <div className="text-lg text-gray-700 leading-relaxed">
          {blog.content}
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
