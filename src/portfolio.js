/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rafi",
  title: "Hi all, I'm Rafi",
  subTitle: emoji(
    "I'm an experienced Backend Engineer 🚀 with expertise in JavaScript, Node.js, PHP, Laravel, and Go. With a strong passion for delivering high-quality software solutions, I constantly explore new libraries and frameworks to enhance my development skills."
  ),
  resumeLink: "https://docs.google.com/document/d/1xnToaIf2tq7Sd9GGl8hfVzoYpHeLXIaPXnWFVr9082o/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rafirh",
  linkedin: "https://www.linkedin.com/in/rfii/",
  gmail: "rafirahmann@gmail.com",
  gitlab: "https://gitlab.com/rafirh",
  whatsapp: "https://wa.me/628885477865",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Developing and maintaining server-side applications and backend systems for web and mobile applications"
    ),
    emoji("⚡ Building and managing APIs (Application Programming Interfaces) to connect the frontend with the backend."),
    emoji(
      "⚡ Integration of third party services such as AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Telkom School",
      logo: require("./assets/images/telkomSchool.png"),
      subHeader: "Software Engineering",
      duration: "Juli 2020 - Mei 2023",
      desc: "Studying Software Engineering and learning how to build software and web applications using various technologies and programming languages.",
      descBullets: [
        "Learned fundamentals of programming such as Data Structures, Algorithms, Object Oriented Programming, Functional Programming, and Software Engineering",
        "Learned about web development using HTML, CSS, JavaScript, Express.js, React.js, and Node.js",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer",
      company: "Profile Image Studio",
      companylogo: require("./assets/images/pisLogo.png"),
      backgroundColor: "rgb(30, 113, 187)",
      date: "June 2022 – Present",
      desc: "Developing and maintaining server-side applications and backend systems for web and mobile applications",
      descBullets: [
        "Building and managing APIs (Application Programming Interfaces) to connect the frontend with the backend.",
        "Integration of third party services such as AWS",
        "Deploying and managing applications on cloud-based infrastructure.",
        "Designing and developing databases.",
        "Writing reusable, testable, and efficient code.",
      ]
    },
    {
      role: "Freelancer Programmer",
      company: "Personal Business",
      companylogo: require("./assets/images/freelancer.png"),
      backgroundColor: "rgb(54, 173, 207)",
      date: "Feb 2023 – Present",
      desc: "Providing website development services and programming task execution.",
      descBullets: [
        "Building a website using PHP, Node.js, MySQL, and PostgreSQL.",
        "Offering programming task execution services.",
        "Communicating with clients to understand their needs and provide solutions.",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/attendanceApp.png"),
      projectName: "SIB SEAL Attendance App",
      projectDesc: "SIB SEAL Attendance App is an application that is used to record attendance for SIB SEAL students. This application is made using the Laravel framework and MySQL database.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://presensi-sib.seal.or.id/"
        }
      ]
    },
    {
      image: require("./assets/images/cashierApp.png"),
      projectName: "Cashier App",
      projectDesc: "Cashier App is an application that is used to record sales transactions. This application is made using the Laravel framework and MySQL database.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/rafirh/wikusama-cafe"
        }
      ]
    },
    {
      image: require("./assets/images/utbkCalculator.png"),
      projectName: "UTBK Score Calculator",
      projectDesc: "UTBK Score Calculator is an application that is used to calculate UTBK average scores. This application was reached by more than 20,000 visitors.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://utbk-score-calculator.vercel.app/"
        },
        {
          name: "View Repository",
          url: "https://github.com/rafirh/utbk-score-calculator"
        }
      ]
    },
    {
      image: require("./assets/images/stasion.png"),
      projectName: "STASION Website",
      projectDesc: "STASION Website is a website that is used to promote STASION. This website is made using the Laravel framework and MySQL database.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://stasion.org/"
        }
      ]
    },
    {
      image: require("./assets/images/siswa.png"),
      projectName: "SISWA",
      projectDesc: "SISWA is a web application for storing and managing information related to reservoirs, rivers, etc, with features such as data search and addition, data visualization, built using Adonis JS and Angular.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://siswa.profileimage.studio/"
        }
      ]
    },
    {
      image: require("./assets/images/labData.png"),
      projectName: "Lab Data - Dishub",
      projectDesc: "The web application is built with Laravel to store and manage data summarizing terminals, stations, airports, ports, etc. easily and efficiently.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://labdata.dishub.jatimprov.go.id/"
        }
      ]
    },
    {
      image: require("./assets/images/infinitech.png"),
      projectName: "Infinitech",
      projectDesc: "Infinitech is a company profile website built with Laravel and MySQL. Project from a startup from Japan.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://infinitech-japan.com/"
        }
      ]
    },
    {
      image: require("./assets/images/diskopindag.png"),
      projectName: "Diskopindag Website",
      projectDesc: "Diskopindag Website is a website that is used to promote Diskopindag Kota Malang and give information about Diskopindag Kota Malang.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://diskopindag.malangkota.go.id/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MTA: Database Fundamentals",
      subtitle: "Issued by Microsoft",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1NpZ4RzNPaDAorjUzbZ26xSOlFvBjWGGh/view?usp=sharing"
        },
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/e57f2c1c-37bb-430a-95f5-287c9a9bb04e"
        },
      ]
    },
    {
      title: "MTA: Introduction to Programming Using JavaScript",
      subtitle: "Issued by Microsoft",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1qYGRMB9mojR8O5A1NdcBkbm1HnLlVsLL/view"
        },
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/83b8e67b-dec7-42e7-96f4-7ee7155cf295"
        },
      ]
    },
    {
      title: "MTA: Introduction to Programming Using HTML and CSS",
      subtitle: "Issued by Microsoft",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1R3Jbz82OcX0pyPoGaIQI2eB9TXkZXbkA/view"
        },
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/aeeb5080-3256-4bf7-be22-53c4ec9e8326"
        },
      ]
    },
    {
      title: "Problem Solving (Intermediate)",
      subtitle: "Issued by Hackerrank",
      image: require("./assets/images/hackerrankLogo.png"),
      imageAlt: "Hackerrank Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/4d9470bc0e05"
        },
      ]
    },
    {
      title: "IT Specialist - Python",
      subtitle: "Issued by Certiport",
      image: require("./assets/images/certiportLogo.png"),
      imageAlt: "Certiport Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1U10qicPGogqxr06R3cyGczy_S9tpI1Jv/view?usp=sharing"
        },
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/bf97c59c-2dd5-46d4-89ac-fe66e61bb792"
        },
      ]
    },
    {
      title: "IT Specialist - Databases",
      subtitle: "Issued by Certiport",
      image: require("./assets/images/certiportLogo.png"),
      imageAlt: "Certiport Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/17hUdD2yzpsNUGwdfOYR6f4AzLUuwAekV/view?usp=sharing"
        },
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/9706318b-a7c5-4695-855c-b4bb446d2fe1/public_url"
        },
      ]
    },
    {
      title: "IT Specialist - JavasScript",
      subtitle: "Issued by Certiport",
      image: require("./assets/images/certiportLogo.png"),
      imageAlt: "Certiport Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/10Gv5DTgnMxlaX2dOGWCLr9VyokV451wZ/view?usp=sharing" 
        },
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/39960a93-e417-4213-8cad-c2056e6d5cb6/public_url"
        },
      ]
    },
    {
      title: "IT Specialist - HTML and CSS",
      subtitle: "Issued by Certiport",
      image: require("./assets/images/certiportLogo.png"),
      imageAlt: "Certiport Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/16icPslKCVN8Mqz0AgQ5InnQJ7OdpMfb0/view?usp=sharing"
        },
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/e083d244-abb6-4a2b-98c8-4bd12f5ef7a5/public_url"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62 888 547 7865",
  email_address: "rafirahmann18@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
