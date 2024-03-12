/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import {Icon} from "@iconify/react";
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
  username: "Gagan Tyagi",
  title: "Hi all, I'm Gagan",
  subTitle: emoji(
    "A passionate DevOps Engineer🚀 who always thrives to work on end to end products which develop sustainable and highly scalable social and technical systems to create impact."
  ),
  githubLink: "https://github.com/iamgagantyagi",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/iamgagantyagi",
  linkedin: "https://www.linkedin.com/in/1gagan-tyagi/",
  gmail: "gtyagi017@gmail.com",
  twitter: "https://twitter.com/gtyagi017",
  medium: "https://medium.com/@iamgagantyagi",
  instagram: "https://www.instagram.com/gagan.tyagii/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do ?",
  sections: [
    {
      subTitle: "Cloud Infra-Architecture",
      skills: [
        emoji(
          "⚡ Responsible for developing and managing end-to-end hybrid infrastructure encompassing AWS and KVM environments."
        ),
        emoji(
          "⚡ Proficient in integrating a variety of DevOps tools such as Jenkins, Rancher-K8s, Kong, Ansible, Terraform, GitHub, Vault, among others to streamline development processes."
        ),
        emoji(
          "⚡ Specializing in cloud cost optimization through automation and leveraging open-source tools to drive efficiency and cost-effectiveness in cloud operations."
        )
      ],

      /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

      softwareSkills: [
        {
          skillName: "aws",
          icon: <Icon icon="logos:aws" />
        },
        {
          skillName: "microsoft-azure",
          icon: <Icon icon="logos:microsoft-azure" />,
          hoverName: "Azure"
        },
        {
          skillName: "oracle",
          icon: <Icon icon="logos:oracle" />
        },
        {
          skillName: "docker-icon",
          icon: <Icon icon="logos:docker-icon" />,
          hoverName: "Docker"
        },
        {
          skillName: "rancher-icon",
          icon: <Icon icon="logos:rancher-icon" />,
          hoverName: "Rancher"
        },
        {
          skillName: "openshift",
          icon: <Icon icon="logos:openshift" />
        },
        {
          skillName: "ubuntu",
          icon: <Icon icon="logos:ubuntu" />
        },
        {
          skillName: "redhat-icon",
          icon: <Icon icon="logos:redhat-icon" />,
          hoverName: "redhat"
        },
        {
          skillName: "linux-tux",
          icon: <Icon icon="logos:linux-tux" />,
          hoverName: "linux"
        }
      ]
    },
    {
      subTitle: "CI/CD Pipeline & Automation",
      skills: [
        emoji(
          "⚡ Strategize and architect a robust CI/CD framework to enhance the build and release cycles, ensuring the integration of security checks for a secure development pipeline."
        ),
        emoji(
          "⚡ Set up and configure Kubernetes Rancher along with its complete ecosystem to support Jenkins CI/CD processes, optimizing deployment workflows and enhancing automation."
        ),
        emoji(
          "⚡ Automate the ecosystem by leveraging Ansible, Bash scripting, and Terraform to streamline deployment processes, improve efficiency, and ensure consistency across infrastructure management tasks."
        )
      ],

      /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

      softwareSkills: [
        {
          skillName: "jenkins",
          icon: <Icon icon="devicon:jenkins" />
        },
        {
          skillName: "github-actions",
          icon: <Icon icon="logos:github-actions" />,
          hoverName: "Github-Actions"
        },
        {
          skillName: "chef",
          icon: <Icon icon="logos:chef" />
        },
        {
          skillName: "ansible",
          icon: <Icon icon="logos:ansible" />
        },
        {
          skillName: "terraform-icon",
          icon: <Icon icon="logos:terraform-icon" />,
          hoverName: "terraform"
        },
        {
          skillName: "travis-ci",
          icon: <Icon icon="logos:travis-ci" />
        }
      ]
    },
    {
      subTitle: "Observaility & Logging Stack ",
      skills: [
        emoji(
          "⚡ Configure end-to-end complete observability stack for production ready infrastructure"
        ),
        emoji(
          "⚡ Design custom metrics/logs dashboards and service status page"
        ),
        emoji(
          "⚡ Migration of observability stack to Open Souce/Enterprise Tools"
        )
      ],

      /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

      softwareSkills: [
        {
          skillName: "grafana",
          icon: <Icon icon="devicon:grafana" />
        },
        {
          skillName: "prometheus",
          icon: <Icon icon="devicon:prometheus" />
        },
        {
          skillName: "datadog",
          icon: <Icon icon="logos:datadog" />
        },
        {
          skillName: "aws-cloudwatch",
          icon: <Icon icon="logos:aws-cloudwatch" />,
          hoverName: "cloudwatch"
        },
        {
          skillName: "pagerduty-icon",
          icon: <Icon icon="logos:pagerduty-icon" />,
          hoverName: "pagerduty"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior DevOps Engineer",
      company: "ACL Digital",
      companylogo: require("./assets/images/ACL_Digital_Logo.png"),
      date: "July 2022 – Present",
      desc: "Leading and Managing end-to-end hybrid infrastructure for clients.",
      descBullets: [
        "Working on niche DevOps & Cloud Tools i.e Rancher K8s, Ansible, Terraform, Jenkins, AWS, Azure, OCI, DC, Prometheus, Grafana etc",
        "By harnessing automation for cloud cost optimization, we've achieved annual savings totaling $3 million."
      ]
    },
    {
      role: "Cloud Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/TCS_Logo.png"),
      date: "Aug 2020 – June 2022",
      desc: "Worked in TCS as an ASE and there I worked for the Client as a DevOps Engineer and System Administrator.",
      descBullets: [
        "Built CI/CD pipeline using various DevOps tools like Docker, Kubernetes, Jenkins, Ansible, Github, etc.",
        "Worked on Genesys purecloud as an admin/Developer to manage and monitor all the services hosted on AWS Cloud."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Kubernetes/AWS/Jenkins/Github", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Terraform/Ansible/Chef",
      progressPercentage: "70%"
    },
    {
      Stack: "Liinux Administration/DC/Bash Scripting",
      progressPercentage: "70%"
    },
    {
      Stack: "Azure/OCI/Python/C++",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Seth Jai Parkash Mukand Lal Institute Of Engineering And Technology",
      logo: require("./assets/images/jmitlogo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "August 2016 - June 2020",
      desc: "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      descBullets: [
        "I have done courses on Containerisation, Cloud Computing and Software Defined Networking.",
        "I was selected as a semi-finalist of TCS Inframind Season 3.",
        "Participated in the research of Software Defined Networking and published 1 papers."
      ]
    }
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
  title: "Projects and Research",
  subtitle:
    "SOME OPEN-SOURCE PROJECTS AND RESEARCH THAT I WORKED ON TO ENHANCE MY SKILL SET",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements, Certifications and Research 🏆 "),
  subtitle:
    "Achievements, Certifications, Research and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      subtitle:
        "Earning the DevOps Engineer Expert certification demonstrates the ability to combine people, process, and technologies to continuously deliver valuable products and services.",
      image: require("./assets/images/Azure_DevOps_Logo.png"),
      imageAlt: "Azure DevOps Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/2f69d21d-9dbb-42f0-945f-e4d83f67c515"
        }
      ]
    },
    {
      title: "The Aviatrix Certified Engineer",
      subtitle:
        "The ACE Multicloud Network Associate certification validates the earner’s understanding of basic networking and security concepts for AWS, Azure, GCP, and OCI as well as their limitations in meeting Enterprise requirements.",
      image: require("./assets/images/aviatrix_logo.png"),
      imageAlt: "Aviatrix Certified Engineer Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/027099f7-c0ea-452d-baaa-b3851576cff5"
        }
      ]
    },

    {
      title: "Research Article on SDN Firewall",
      subtitle:
        "I researched SDN firewall to Analyze Network Security Issues and Its Attack and Defence.",
      image: require("./assets/images/researchgate.png"),
      imageAlt: "ResearchGate Logo",
      footerLink: [
        {
          name: "Article",
          url: "https://www.researchgate.net/profile/Gagan-Tyagi-2/publications"
        }
      ]
    }
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
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7015034846",
  email_address: "gtyagi017@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "gtyagi017", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  contactInfo,
  twitterDetails,
  isHireable
};
