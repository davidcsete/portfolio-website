export const portfolioData = {
  personal: {
    name: "David Csete Fogel",
    title: "Software Developer",
    email: "davidcsetefogel@gmail.com",
    phone: "+40748 977 035",
    location: "Budapest, Hungary",
    photo: "/assets/david-photo.jpg",
    summary: "Highly proficient Full Stack Developer with expertise in a wide range of technologies, including Ruby on Rails, RSpec, Capybara, Selenium, Phoenix, Elixir, ExUnit, JavaScript, MySQL, PostgreSQL, and Docker. Their skills cover both backend and frontend development, ensuring the delivery of secure, scalable, and high-performance web applications while maintaining a focus on code quality through comprehensive testing and modern deployment practices."
  },
  
  experience: [
    {
      id: 1,
      company: "Itron",
      position: "Software Developer",
      location: "Hungary",
      startDate: "March 2023",
      endDate: "Present",
      description: "Working full time as a full stack web developer on a Distributed Energy Management system.",
      technologies: ["Ruby on Rails", "RSpec", "Capybara", "Selenium", "Phoenix", "Elixir", "ExUnit", "Backbone.js", "MySQL", "PostgreSQL", "Docker", "JavaScript"],
      achievements: [
        "Built an interactive energy consumption graph using Ruby on Rails and Backbone.js",
        "Enhanced user engagement with energy-saving programs through data visualization",
        "Implemented real-time usage tracking against hourly goals"
      ]
    },
    {
      id: 2,
      company: "Kyndryl",
      position: "Software Developer",
      location: "Hungary",
      startDate: "July 2022",
      endDate: "March 2023",
      description: "Working full time as a full stack web developer on an internal ticketing tool that both IBM and Kyndryl uses.",
      technologies: ["Ruby on Rails", "RSpec", "Vue.js", "PostgreSQL", "Docker", "Kubernetes"],
      achievements: [
        "Created a container group in Docker for the development environment",
        "Authored a Docker Compose file utilizing five distinct microservices",
        "Significantly simplified the development environment setup and reduced dependency on the operating system"
      ]
    },
    {
      id: 3,
      company: "Russmedia Tech",
      position: "Software Developer",
      location: "Oradea",
      startDate: "October 2021",
      endDate: "June 2022",
      description: "Working full time as a full stack web developer.",
      technologies: ["PHP", "Symfony", "jQuery", "MySQL"],
      achievements: [
        "Developed full-stack web applications using PHP and Symfony",
        "Implemented frontend functionality with jQuery",
        "Managed database operations with MySQL"
      ]
    },
    {
      id: 4,
      company: "Sisi Cosmetice",
      position: "Software Developer",
      location: "Oradea",
      startDate: "February 2021",
      endDate: "November 2021",
      description: "Working full time as a full stack web developer.",
      technologies: ["PHP", "Yii"],
      achievements: [
        "Built web applications using PHP and Yii framework",
        "Delivered full-stack solutions for business requirements"
      ]
    }
  ],
  
  freelanceWork: [
    {
      id: 1,
      company: "Hairgonomy",
      position: "Freelance/Hobby Developer",
      location: "Oradea",
      startDate: "November 2021",
      endDate: "February 2022",
      description: "In my free time, I work as a Flutter developer on my friend's app called Hairgonomy.",
      technologies: ["Flutter"],
      achievements: [
        "Implemented module for admin to search between users and edit them",
        "Chose provider package and flutter fire UI package to track real-time changes in the database",
        "Created admin module for managing stylist services and appointments"
      ]
    }
  ],
  
  skills: {
    languages: ["JavaScript", "Ruby", "Elixir", "PHP", "English", "Romanian", "Hungarian"],
    frameworks: ["Ruby on Rails", "React", "Phoenix", "Selenium", "Vue.js", "Symfony", "Yii", "Flutter"],
    databases: ["PostgreSQL", "MySQL"],
    tools: ["Docker", "Kubernetes", "RSpec", "Capybara", "ExUnit"],
    testing: ["RSpec", "Capybara", "Selenium", "ExUnit"],
    frontend: ["JavaScript", "Backbone.js", "Vue.js", "jQuery", "React"]
  },
  
  projects: [
    {
      id: 1,
      name: "Workout Cooker",
      description: "Full-stack web application built with Rails 8 and modern frontend technologies. A comprehensive fitness tracking and workout planning platform.",
      technologies: ["Rails 8", "Hotwired", "Stimulus"],
      liveUrl: "https://workout-cooker.fly.dev/",
      featured: true,
      category: "Personal Project"
    },
    {
      id: 2,
      name: "Interactive Energy Consumption Visualization",
      description: "Built an interactive energy consumption graph using Ruby on Rails and Backbone.js, enabling users to compare real-time usage against hourly goals and enhancing engagement with energy-saving programs.",
      technologies: ["Ruby on Rails", "Backbone.js", "JavaScript", "Data Visualization"],
      company: "Itron",
      featured: true,
      category: "Professional Achievement"
    },
    {
      id: 3,
      name: "Containerizing Development Environment",
      description: "Created a container group in Docker for the development environment and authored a Docker Compose file utilizing five distinct microservices. This resulted in increased productivity by significantly simplifying the development environment setup and reducing dependency on the operating system.",
      technologies: ["Docker", "Docker Compose", "Microservices", "Kubernetes"],
      company: "Kyndryl",
      featured: true,
      category: "Professional Achievement"
    },
    {
      id: 4,
      name: "Data Visualization and User Engagement Enhancement",
      description: "Redesigned and implemented a new page with an interactive graph, allowing users to track their progress and visualize the reduction they have achieved. This enhancement improved user engagement by providing clear, data-driven insights into their accomplishments.",
      technologies: ["Interactive Graphs", "Data Visualization", "User Experience"],
      company: "Itron",
      category: "Professional Achievement"
    },
    {
      id: 5,
      name: "Admin Management System for Hairgonomy",
      description: "Implemented comprehensive admin modules including user search and editing capabilities, and stylist service management. Used provider package and flutter fire UI package to track real-time changes in the database.",
      technologies: ["Flutter", "Firebase", "Real-time Database"],
      company: "Hairgonomy",
      category: "Freelance Project"
    }
  ],
  
  education: [
    {
      id: 1,
      institution: "University of Oradea",
      degree: "Bachelor's Degree",
      location: "Oradea",
      field: "Computer Science",
      graduated: true
    }
  ],
  
  certifications: [
    {
      id: 1,
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon",
      date: "Current",
      status: "Active",
      description: "Validates foundational knowledge of AWS Cloud services, security, architecture, pricing, and support to build credible cloud expertise."
    },
    {
      id: 2,
      name: "Cybersecurity - Navigation on the Cybersecurity Map",
      issuer: "Barnabás Sándor",
      date: "October 2024",
      duration: "21 hours",
      certificateId: "B/2020/007050",
      status: "Completed",
      description: "Comprehensive cybersecurity training covering cryptography fundamentals, network protocols, vulnerability identification, web application security (OWASP TOP 10), threat modeling, DevSecOps practices, incident response, and regulatory compliance. Gained hands-on experience with Kali Linux, security testing tools, and CI/CD pipeline security integration."
    }
  ],
  
  courses: [
    {
      id: 1,
      name: "Java Course for Beginners",
      institution: "Software Development Academy",
      description: "Comprehensive Java programming course covering fundamentals and development practices",
      completed: true
    }
  ]
}