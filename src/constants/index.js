import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    TrueNAS1,
    TrueNAS2,
    Interface,
    threejs,
    truenas,
    nginx,
    woman1,
    woman2,
    woman3,
    man1,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Affordable Cloud Storage",
      icon: web,
    },
    {
      title: "Highly Scalable Services",
      icon: mobile,
    },
    {
      title: "Web Based Storage",
      icon: backend,
    },
    {
      title: "Highly Secure Data Storage",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "TrueNAS",
      icon: truenas,
    },
    {
      name: "NGINX",
      icon: nginx,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Services Offered: ",
      iconBg: "#383E56",
      icon: meta,
      points: [
        "Personal Cloud Storage: I-CLOUD's personal storage plans allow individual users to securely store, access, and share their documents, photos, videos, and other digital content across multiple devices.",
        "Business Cloud Storage: The company's business plans provide organizations with scalable and flexible storage solutions, enabling seamless collaboration and data management across teams and departments.",
        "Hybrid Cloud Storage: I-CLOUD offers hybrid storage solutions that integrate on-premises and cloud storage systems, ensuring optimal performance, security, and cost-efficiency.",
        "Data Backup and Disaster Recovery: The company's advanced backup and recovery services help protect crucial data from unexpected losses and facilitate swift recovery in case of disasters or system failures.",
      ],
    },
    {
      title: "Key Features:",
      iconBg: "#E6DEDD",
      icon: starbucks,
      points: [
        "Advanced Security: I-CLOUD prioritizes data security by employing advanced encryption protocols and multi-factor authentication, ensuring that client data remains secure and confidential.",
        "User-Friendly Interface: The company offers an intuitive, easy-to-navigate platform that allows users to access and manage their data with minimal hassle. ",
        "Cross-Platform Compatibility: I-CLOUD's services are accessible across various devices and platforms, allowing users to access their data whenever and wherever they need it.",
        "Scalability: With a flexible range of storage plans available, I-CLOUD caters to the varying needs of its clients, providing solutions that can easily grow along with their businesses or personal requirements.",
        "Customer Support: I-CLOUD prides itself on its responsive and dedicated customer support team, available around the clock to assist clients with any concerns or queries they may have.",
      ],
    },
    {
      title: "Future Outlook: ",
      iconBg: "#383E56",
      icon: tesla,
      points: [
        "Continuous Innovation: I-CLOUD is dedicated to constantly improving and expanding its cloud data storage services to stay ahead in the competitive market.",
        "Market Positioning: The company strives to enhance its offerings and form strategic partnerships with leading technology providers to strengthen its presence in the industry.",
        "Industry Trends: I-CLOUD remains vigilant and adapts to stay ahead of emerging trends, ensuring its services are always up-to-date and relevant.",
        "Customer Satisfaction & Data Security: With a strong focus on delivering exceptional customer experiences and maintaining high data security standards, I-CLOUD aims to emerge as a leading player in the cloud storage market.",
      ],
    },
    {
      title: "Global Expansion and Sustainability: ",
      iconBg: "#E6DEDD",
      icon: shopify,
      points: [
        "International Growth: As part of its long-term strategy, I-CLOUD plans to expand its services to various markets worldwide, allowing it to reach a broader customer base and capitalize on the growing demand for cloud storage solutions.",
        "Localized Solutions: To better cater to the unique needs of different regions, I-CLOUD aims to develop tailored services and forge partnerships with local technology providers, ensuring a seamless and optimized experience for clients across the globe.",
        "Sustainable Infrastructure: Recognizing the importance of environmental responsibility, I-CLOUD is committed to implementing sustainable practices in its operations, including the use of energy-efficient data centers and promoting greener business practices.",
        "Community Engagement: I-CLOUD believes in giving back to the communities it serves and plans to engage in various social initiatives, such as supporting educational programs and offering resources for non-profit organizations to help bridge the digital divide.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "As a small business owner, choosing I-CLOUD for our cloud infrastructure has been one of the best decisions we've made.",
      name: "Sara Ndambuki",
      designation: "CEO",
      company: "Mavuno",
      image: woman1,
    },
    {
      testimonial:
        "Switching to I-CLOUD's cloud infrastructure has been a game-changer for our creative agency making us become more competitive",
      name: "Emily Wanjiku",
      designation: "Creative Director",
      company: "PixelPerfect Design",
      image: woman2,
    },
    {
      testimonial:
        "I-CLOUD has completely transformed the way I manage and access my data by making it easier to access it from anywhere ",
      name: "George Jomo",
      designation: "Student",
      company: "Strathmore University",
      image: man1,
    },
  ];
  
  const projects = [
    {
      name: "System overview",
      description:
        "We have a highly scalable and resourceful storage system",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "truenas",
          color: "pink-text-gradient",
        },
      ],
      image: TrueNAS1,
      source_code_link: "https://github.com/SamMwendwa1",
    },
    {
      name: "Storage Facilities",
      description:
        "Our storage servers are up to date and secure",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nginx",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: TrueNAS2,
      source_code_link: "https://github.com/SamMwendwa1",
    },
    {
      name: "User Interface",
      description:
        "User Friendly user interface for all your storage needs",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "ldap",
          color: "pink-text-gradient",
        },
      ],
      image: Interface,
      source_code_link: "https://github.com/SamMwendwa1",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };