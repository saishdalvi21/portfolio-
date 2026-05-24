export default function Portfolio() {
  const projects = [
    {
      title: 'ERP Data Integration & Automation Platform',
      description:
        'Designed and automated SQL-based ETL pipelines integrating Ellucian Banner ERP modules with Oracle databases, improving institutional reporting workflows and data synchronization efficiency.',
      tech: ['SQL', 'Oracle', 'ETL', 'Ellucian Banner', 'PostgreSQL'],
    },
    {
      title: 'Academic Data Warehouse & Reporting Dashboard',
      description:
        'Built a centralized academic analytics dashboard with automated data refresh capabilities, reducing institutional reporting timelines by 35% using Power BI and advanced SQL queries.',
      tech: ['Power BI', 'SQL', 'Data Warehousing', 'Excel', 'Analytics'],
    },
    {
      title: 'Healthcare Analytics & KPI Intelligence System',
      description:
        'Developed Power BI dashboards and SQL-based healthcare analytics workflows to track patient KPIs, improve operational efficiency by 20%, and strengthen data governance compliance.',
      tech: ['Power BI', 'SQL', 'Healthcare Analytics', 'Data Governance', 'Reporting'],
    },
  ];

  const caseStudies = [
    {
      title: 'Cloud & Network Transformation Analytics',
      result: 'Reduced manual reporting efforts by 50%',
      details:
        'Analyzed 150K+ financial records and optimized ETL workflows using automation and enterprise analytics best practices, significantly improving reporting efficiency and operational intelligence.',
    },
    {
      title: 'AI-Powered Security Monitoring System',
      result: 'Reduced incident response time by 35%',
      details:
        'Implemented automated Splunk alerts and multi-layer firewall analytics to strengthen cloud monitoring, vulnerability detection, and security intelligence operations.',
    },
    {
      title: 'Enterprise Reporting & Visualization Optimization',
      result: 'Improved project oversight by 70%',
      details:
        'Collaborated with business stakeholders to create advanced Tableau and Excel dashboards aligned with organizational KPIs, enabling strategic decision-making and executive-level reporting.',
    },
  ];

  const skills = [
    'Python',
    'SQL',
    'PL/SQL',
    'Oracle',
    'PostgreSQL',
    'Power BI',
    'Tableau',
    'Cognos',
    'RESTful APIs',
    'JSON',
    'Data Visualization',
    'Machine Learning',
    'Splunk',
    'Cloud Analytics',
    'Data Governance',
    'Network Infrastructure',
    'System Testing',
    'Access Control',
    'JavaScript',
    'HTML5',
    'CSS',
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

      <header className="relative z-10 px-8 lg:px-24 py-8 flex items-center justify-between border-b border-white/10 backdrop-blur-xl">
        <h1 className="text-2xl font-bold tracking-widest text-cyan-400">
          SAISH DALVI
        </h1>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#case-studies" className="hover:text-cyan-400 transition">Case Studies</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </nav>
      </header>

      <section className="relative z-10 px-8 lg:px-24 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-6">
            AI Data Analyst | Cloud & Business Intelligence Specialist
          </p>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
            Transforming <span className="text-cyan-400">Data</span>
            <br />
            Into Intelligent Insights
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl">
            Results-driven AI Data Analyst with expertise in ERP systems, database administration, cloud analytics, and business intelligence. Experienced in SQL, Power BI, Tableau, Oracle, PostgreSQL, and AI-powered analytics solutions that enhance operational efficiency, security, and enterprise decision-making.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30">
              Explore Projects
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-cyan-500 to-purple-600 blur-3xl opacity-30"></div>

          <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black/40 rounded-3xl p-6 border border-white/10">
                <h3 className="text-4xl font-black text-cyan-400">3+</h3>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>

              <div className="bg-black/40 rounded-3xl p-6 border border-white/10">
                <h3 className="text-4xl font-black text-purple-400">150K+</h3>
                <p className="text-gray-400 mt-2">Records Analyzed</p>
              </div>

              <div className="bg-black/40 rounded-3xl p-6 border border-white/10">
                <h3 className="text-4xl font-black text-pink-400">70%</h3>
                <p className="text-gray-400 mt-2">Project Oversight Improved</p>
              </div>

              <div className="bg-black/40 rounded-3xl p-6 border border-white/10">
                <h3 className="text-4xl font-black text-green-400">35%</h3>
                <p className="text-gray-400 mt-2">Reporting Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 px-8 lg:px-24 py-20">
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl">
          <h3 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h3>

          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            I am a forward-thinking AI Data Analyst and Business Intelligence professional dedicated to transforming raw data into strategic business value through advanced analytics, intelligent automation, and modern AI-driven solutions. With strong expertise in SQL, ERP systems, Power BI, Tableau, cloud analytics, data governance, and enterprise reporting, I specialize in designing scalable, insight-driven data ecosystems that empower organizations to make faster, smarter, and more impactful decisions. My experience across healthcare analytics, enterprise intelligence, infrastructure optimization, and security-focused analytics environments has enabled me to deliver high-performance analytical solutions that enhance operational efficiency, strengthen data integrity, and drive measurable business growth. Passionate about innovation and continuous learning, I combine technical excellence with business strategy to create data experiences that are not only powerful and intelligent, but also transformative for modern enterprises.
          </p>
        </div>
      </section>

      <section id="projects" className="relative z-10 px-8 lg:px-24 py-20">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-5xl font-black">Featured Projects</h3>
          <div className="h-[2px] w-40 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl hover:-translate-y-3 hover:border-cyan-400/40 transition-all duration-500 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 mb-8 flex items-center justify-center text-2xl font-black text-black">
                0{index + 1}
              </div>

              <h4 className="text-2xl font-bold mb-5 group-hover:text-cyan-400 transition">
                {project.title}
              </h4>

              <p className="text-gray-300 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="case-studies" className="relative z-10 px-8 lg:px-24 py-20">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-5xl font-black">AI Case Studies</h3>
          <div className="h-[2px] w-40 bg-gradient-to-r from-pink-500 to-cyan-400"></div>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white/5 to-white/[0.03] border border-white/10 rounded-[32px] p-10 hover:border-purple-500/40 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
                <h4 className="text-3xl font-bold text-cyan-400">{study.title}</h4>
                <div className="px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-semibold">
                  {study.result}
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {study.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="relative z-10 px-8 lg:px-24 py-20">
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl">
          <h3 className="text-4xl font-black mb-10 text-cyan-400">Core Skills & Technologies</h3>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-4 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-8 lg:px-24 py-24">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-[40px] p-16 text-center backdrop-blur-xl">
          <h3 className="text-5xl font-black mb-6">
            Ready to Build Intelligent Solutions?
          </h3>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Let’s collaborate on AI-powered analytics, business intelligence, cloud security,
            and machine learning solutions that create measurable impact.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/20">
              dalvisaish21@gmail.com
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-purple-400 hover:text-purple-400 transition-all duration-300">
              LinkedIn Profile
            </button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-8 lg:px-24 py-10 border-t border-white/10 text-center text-gray-500">
        © 2026 AI Data Analyst Portfolio • Built with AI, Analytics & Innovation
      </footer>
    </div>
  );
}
