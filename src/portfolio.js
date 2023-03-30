/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Baljinder's Portfolio",
  description:
    "A passionate individual who always thrives to solve new and exciting problems.",
  og: {
    title: "Baljinder Singh Portfolio",
    type: "website",
    url: "http://BaljinderSingh.com/",
  },
};

//Home Page
const greeting = {
  title: "Baljinder Singh",
  logo_name: "Baljinder",
  nickname: "Chan",
  subTitle:
    "A passionate individual who always love to design and art.",
  resumeLink:
    "https://docs.google.com/document/d/1StJBx7Y2lLkRTz-tSVK11np9C4ekGrhgyRZNkIxIuMo/edit?usp=sharing",
  portfolio_repository: "https://github.com/BaljinderMegha/baljinder.github.io",
  githubProfile: "https://github.com/BaljinderMegha",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/BaljinderMegha",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://in.linkedin.com/in/parminder-singh-11187b71/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:baljindermegha@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Graphics Designer",
      fileName: "graphics_designer_guy",
      skills: [
        "⚡ Developing highly scalable and reusable solutions for Gaming and mulimedia applications for different platform",
        "⚡ Experience of working with OpenCV, AI, AR applications",
        "⚡ Experience of working with Multiplayer/Photon Engine for multiplayer application"
      ],
      softwareSkills: [
        {
          skillName: "Corel Draw",
          fontAwesomeClassname: "logos-corel-draw",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PhotoShop",
          fontAwesomeClassname: "logos-photoshop",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        }
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chandigarh Engineering College, Mohali",
      subtitle: "B.Tech. in Computer Sciences and Engineering",
      logo_path: "cec-logo-2023.png",
      alt_name: "CEC Mohali",
      duration: "2011 - 2015",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OOPs, Java, C++ etc.",
        "⚡ Apart from this, I have done courses and certification of GCP and Asp.Net .",
      ],
      website_link: "https://www.cecmohali.org/",
    }
  ],
};

const certifications = {
  certifications: [
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving organizations. My main area of experties is Game development but i also worked in backend for sometime to become full stack",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Graphics Designer",
          company: "Army School Ferozpur",
          company_url: "https://www.dummy.com/",
          logo_path: "atos-maven-wave-logo.png",
          duration: "Feb 2021 - Present",
          location: "Chandigarh, India",
          description:
            "I am working as a graphics designer at army school.",
          color: "#0879bf",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        
      ],
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked upon the projects mainly related to the field of Graphics design in Corel Draw and photoshop.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilePic.jpg",
    description:
      "I am available on my email address. You can message me, I will reply within 24 hours. I can help you with 2D designs and art work.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "MC Colony, Dist.-Fazilka, Punjab - 152123, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
