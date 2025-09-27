import { useState, useEffect } from "react";
import yasodImage from "./assets/yasod.jpeg";
// my portfolio , crated with react and tailwind css

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Yasod Kavindu
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-900/20 dark:to-purple-900/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-bounce"></div>
            <div
              className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "2s" }}
            ></div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-200 dark:ring-blue-800">
                    <img
                      src={yasodImage}
                      alt="Yasod Kavindu"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist yet
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget
                          .nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = "flex";
                        }
                      }}
                    />
                    <div
                      className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center text-4xl text-blue-600 dark:text-blue-400"
                      style={{ display: "none" }}
                    >
                      👨‍💻
                    </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
                    Yasod Kavindu
                  </h1>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    Software Engineer & Full Stack Developer
                  </h2>
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Motivated 4th-year BSc (Hons) Software Engineering student at
                NSBM Green University with a strong passion for pursuing a
                career as a Software Engineer, Web & Mobile Application
                developer.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://github.com/Yasodkai11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>View My Work</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <a
                  href="#contact"
                  onClick={() => scrollToSection("contact")}
                  className="group px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Get In Touch</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-200 dark:ring-blue-800">
                  <img
                    src={yasodImage}
                    alt="Yasod Kavindu - Software Engineer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist yet
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = "flex";
                      }
                    }}
                  />
                  <div
                    className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center text-6xl text-blue-600 dark:text-blue-400"
                    style={{ display: "none" }}
                  >
                    👨‍💻
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="relative pl-6 border-l-4 border-gradient-to-b from-blue-500 to-purple-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      BSc (Hons) in Software Engineering
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      NSBM Green University, Sri Lanka
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      2021 – 2025 (4th year)
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-4 border-gradient-to-b from-purple-500 to-indigo-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      GCE A/L in Physical Science
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      Index: 1806561
                    </p>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                      2020
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Profile Card */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Personal Profile
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  Skilled in designing and developing innovative, user-friendly,
                  and visually appealing applications that enhance user
                  experience. Eager to contribute to a dynamic team, apply
                  problem-solving abilities, and deliver impactful software
                  solutions.
                </p>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Interpersonal Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Active Listening",
                      "Dependability",
                      "Leadership",
                      "Patience",
                      "Motivation",
                      "Flexible",
                    ].map((skill, index) => (
                      <span
                        key={skill}
                        className="group/skill bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Software Engineer (Intern)
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Ceylon Electricity Board (CEB)
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    50 Sri Chittampalam A Gardiner Mawatha, Colombo 28
                  </p>
                </div>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  March 2024 – Sep 2024
                </span>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Project: Automated Service Desk (ASD) System
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    Developed a web push notification system for user updates
                  </li>
                  <li>
                    Added page for retrieving all reported jobs within date
                    range
                  </li>
                  <li>Added new section for retrieving rating details</li>
                  <li>Added page for reporting hardware related problems</li>
                  <li>Fixed bugs identified in the ASD System</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Core Competencies
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Flutter",
              "Firebase",
              "HTML",
              "CSS",
              "MySQL",
              "Java",
              "React",
              "Spring Boot",
              "Ajax",
              "jQuery",
              "PHP",
              "C#",
              "JavaScript",
              "C",
              "Python",
              "J2EE",
              ".NET",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                <span className="text-gray-800 dark:text-white font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-full opacity-10 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full opacity-10 translate-y-40 -translate-x-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              My Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              A showcase of my recent work and projects that demonstrate my
              skills and passion for software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Book Store Management",
                description:
                  "Full-stack application with Spring Boot backend and React frontend for managing bookstore operations",
                tech: ["Spring Boot", "Java", "React", "JavaScript"],
                github:
                  "https://github.com/Yasodkai11/Book-Store-Management.git",
                gradient: "from-blue-500 to-cyan-500",
                icon: "📚",
              },
              {
                title: "Mobile App Development",
                description:
                  "Flutter mobile application with Firebase integration for real-time data management",
                tech: ["Flutter", "Firebase"],
                github: "https://github.com/Yasodkai11/MAD",
                gradient: "from-green-500 to-emerald-500",
                icon: "📱",
              },
              {
                title: "Braille System",
                description:
                  "Desktop application for braille system using C# and .NET framework",
                tech: ["C#", ".NET"],
                github: "https://github.com/Yasodkai11/Braille-system",
                gradient: "from-purple-500 to-pink-500",
                icon: "♿",
              },
              {
                title: "Airline Management",
                description:
                  "J2EE web application with MySQL database for airline operations management",
                tech: ["J2EE", "MySQL"],
                github: "https://github.com/Yasodkai11/DEA-Assignment",
                gradient: "from-orange-500 to-red-500",
                icon: "✈️",
              },
              {
                title: "Luminary Apparel",
                description:
                  "Desktop application for apparel management and inventory tracking",
                tech: ["C#"],
                github: "https://github.com/Yasodkai11/Luminary-Apparel",
                gradient: "from-indigo-500 to-purple-500",
                icon: "👕",
              },
              {
                title: "Poverty Awareness",
                description:
                  "Web application for SDG1 Poverty awareness and social impact",
                tech: ["HTML", "CSS", "JavaScript", "PHP"],
                github: "https://github.com/Yasodkai11/SDG1-Poverty",
                gradient: "from-teal-500 to-cyan-500",
                icon: "🌍",
              },
              {
                title: "E-Agriculture System",
                description:
                  "Mobile-first digital platform connecting farmers, buyers, and rice mill owners in Sri Lanka with real-time market data and AI chatbot",
                tech: ["Flutter", "Dart", "Firebase", "AI/ML"],
                github:
                  "https://github.com/Yasodkai11/E---Agriculture-System.git",
                gradient: "from-green-600 to-emerald-600",
                icon: "🌾",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header with Gradient */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                ></div>

                <div className="p-6">
                  {/* Project Icon and Title */}
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mr-4 text-2xl`}
                    >
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white shadow-sm`}
                        style={{
                          animationDelay: `${index * 0.1 + techIndex * 0.05}s`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/link inline-flex items-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                    <svg
                      className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      alankarakavi@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Phone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +94771995953
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      No.66, Hegalle, Kosgoda
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <a
                  href="https://www.linkedin.com/in/yasodkavindu-16569a27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                >
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-gray-900 dark:text-white font-medium">
                    LinkedIn Profile
                  </span>
                </a>
                <a
                  href="https://github.com/Yasodkai11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <svg
                    className="w-8 h-8 text-gray-900 dark:text-white mr-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-gray-900 dark:text-white font-medium">
                    GitHub Profile
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Yasod Kavindu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
