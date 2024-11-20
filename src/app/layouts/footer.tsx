import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaStackOverflow, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer relative w-full h-auto bg-gray-800 text-gray-300 flex flex-col items-center justify-center text-center pt-10 pb-6 lg:pb-10 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src="/footer1.jpg"
          alt="Footer Background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-20"
        />
      </div>

      {/* Hashtag / Tagline */}
      <div className="relative z-10 text-teal-400 text-lg lg:text-2xl font-bold tracking-wide mb-4 font-mono">
        #DataDriven
      </div>

      {/* Contact Button */}
      <Link href="/contact" className="relative z-10 inline-block bg-teal-400 text-gray-900 font-semibold py-2 px-6 rounded hover:bg-teal-500 transition-all duration-300 mb-6">
        Get in Touch
      </Link>

      {/* Social Media Icons */}
      <div className="relative z-10 flex space-x-6 text-2xl mb-8">
        <Link href="https://www.linkedin.com/in/sql-developer" className="hover:text-teal-400 transition duration-300">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/sql-developer" className="hover:text-teal-400 transition duration-300">
          <FaGithub />
        </Link>
        <Link href="https://stackoverflow.com/users/sql-developer" className="hover:text-teal-400 transition duration-300">
          <FaStackOverflow />
        </Link>
        <Link href="https://twitter.com/sql-developer" className="hover:text-teal-400 transition duration-300">
          <FaTwitter />
        </Link>
      </div>

      {/* Sitemap */}
      <div className="relative font-sans z-10 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm lg:text-base font-light mb-10 px-6 text-center">
        <div>
          <h3 className="font-semibold text-lg text-teal-400 mb-2">Explore</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/about" className="hover:text-white">About Me</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/blogs" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-teal-400 mb-2">SQL Projects</h3>
          <ul className="space-y-1">
            <li><Link href="/projects/etl-pipelines" className="hover:text-white">ETL Pipelines</Link></li>
            <li><Link href="/projects/data-warehousing" className="hover:text-white">Data Warehousing</Link></li>
            <li><Link href="/projects/reporting-analytics" className="hover:text-white">Reporting & Analytics</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-teal-400 mb-2">Services</h3>
          <ul className="space-y-1">
            <li><Link href="/services/database-design" className="hover:text-white">Database Design</Link></li>
            <li><Link href="/services/query-optimization" className="hover:text-white">Query Optimization</Link></li>
            <li><Link href="/services/data-analysis" className="hover:text-white">Data Analysis</Link></li>
            <li><Link href="/services/sql-training" className="hover:text-white">SQL Training</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-teal-400 mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><Link href="/blogs" className="hover:text-white">Blog</Link></li>
            <li><Link href="/resources/sql-cheat-sheet" className="hover:text-white">SQL Cheat Sheet</Link></li>
            <li><Link href="/resources/tools" className="hover:text-white">Tools & Tips</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="relative z-10 text-sm text-gray-400 mt-4 text-center">
        ©2024 SQL Developer Portfolio
      </div>
      <div className="relative z-10 text-xs text-gray-500 mt-1 text-center">
        Empowering Data-Driven Decisions Worldwide
      </div>

      {/* Subtle Zig-Zag Border */}
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gray-800" style={{ clipPath: "polygon(0 50%, 10% 60%, 20% 50%, 30% 60%, 40% 50%, 50% 60%, 60% 50%, 70% 60%, 80% 50%, 90% 60%, 100% 50%)" }}></div>
    </footer>
  );
}
