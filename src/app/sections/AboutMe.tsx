import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-max bg-white text-gray-300 py-16 sm:pl-60">
      <div className="container px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold font-sans mb-4 text-teal-400">About Me</h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-teal-400"></div>
          </div>
          <p className="mt-4 text-gray-400">
            Database professional with <span className="text-teal-400">15 years</span> of experience in designing and managing scalable databases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side: Description */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-teal-400">Get to Know Me!</h3>
            <p className="text-gray-400 mb-4">
              I&apos;m a SQL Developer with expertise in designing efficient and reliable databases. I specialize in SQL, database management, and data warehousing, focusing on optimizing data retrieval and storage solutions.
            </p>
            <p className="text-gray-400 mb-4">
              My passion lies in improving database performance, creating robust data models, and collaborating with developers to enhance backend infrastructure. I enjoy sharing my knowledge and helping teams improve their data practices.
            </p>
            <p className="text-gray-400 mb-4">
              In my free time, I contribute to open-source SQL projects, write blog posts about database optimization, and explore emerging database technologies.
            </p>
            <p className="text-gray-400 mb-6">
              I&apos;m open to collaboration opportunities where I can add value to data-driven projects. Feel free to reach out if you&apos;re interested in working together.
            </p>

            {/* Projects Button */}
            <a href="/projects" className="hover:border-teal-400 hover:shadow-teal-500/50 inline-block bg-teal-400 text-gray-900 py-2 px-6 shadow hover:bg-teal-500 transition rounded-lg">
              View My Projects
            </a>
          </div>

          {/* Right side: Toolkit */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-teal-400">My Toolkit</h3>
            <div className="grid grid-cols-8 sm:grid-cols-12 gap-3">
              {/* Database Management Tools */}
              <div className="hover:border-teal-400 hover:shadow-teal-500/50 col-span-2 sm:col-span-2 lg:col-span-2 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                SQL
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-3 sm:col-span-2 lg:col-span-2 bg-white p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl shadow-lg transition">
                MySQL
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-3 sm:col-span-3 lg:col-span-3 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                PostgreSQL
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-3 sm:col-span-3 lg:col-span-3 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                MongoDB
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-2 sm:col-span-2 lg:col-span-2 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                Oracle
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-3 sm:col-span-3 lg:col-span-3 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                ETL Tools
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-2 sm:col-span-2 lg:col-span-2 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                SQLite
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-2 sm:col-span-2 lg:col-span-2 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                SSIS
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-3 sm:col-span-2 lg:col-span-2 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                Talend
              </div>

              {/* Data Modeling and BI Tools */}
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-3 sm:col-span-3 lg:col-span-3 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                Power BI
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-3 sm:col-span-2 lg:col-span-2 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                Tableau
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-2 sm:col-span-2 lg:col-span-2 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                Looker
              </div>

              {/* Backend and Cloud Platforms */}
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-3 sm:col-span-3 lg:col-span-3 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                AWS RDS
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-5 sm:col-span-3 lg:col-span-4 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                Google BigQuery
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-3 sm:col-span-3 lg:col-span-3 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                Azure SQL
              </div>
              <div className=" hover:border-teal-400 hover:shadow-teal-500/50 col-span-3 sm:col-span-3 lg:col-span-3 bg-white shadow-lg p-3 rounded-lg text-center font-medium text-teal-700 hover:shadow-xl transition">
                Snowflake
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
