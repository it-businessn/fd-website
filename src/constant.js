import cheer from "./assets/images/hero/cheer1.png";
import hands from "./assets/images/hero/hands1.png";
import lady from "./assets/images/hero/lady1.png";
import main from "./assets/images/hero/main1.png";

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services/Accounting",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const HERO_IMAGES = [
  {
    url: cheer,
    header: "You don’t need deep pockets to have a deep bench",
    subHeader:
      "Hire experienced, quality team members without expanding payroll significantly",
  },
  {
    url: hands,
    header: "Enhance business performance with excellent staff",
    subHeader:
      "Add game changing expertise to all levels of your organization.",
  },
  {
    url: lady,
    header: "Optimize your organization",
    subHeader:
      "Meet your organization’s goals by employing best practices throughout",
  },
  {
    url: main,
    header: "Add incredible talent to your team for a fraction of the price",
    subHeader:
      "Hire our partners for the precise duration you need them each month",
  },
];

export const TABS = [
  {
    id: "Accounting",
    header:
      "Dial in your operations by having your departments anchored by strong team players.",
    jobTitle: ["CFO", "Controller", "Bookkeeper"],
    link: "Learn more about our Accounting solutions",
  },
  {
    id: "Information Technology",
    header:
      "Dial in your operations by having your departments anchored by strong team players.",
    jobTitle: [
      "Process Automation",
      "Web Developer",
      "Integrations",
      "App Developer",
    ],
    link: "Learn more about our IT solutions",
  },
  {
    id: "Marketing",
    header:
      "Dial in your operations by having your departments anchored by strong team players.",
    jobTitle: ["Marketing Manager", "Social Media Manager"],
    link: "Learn more about our Marketing solutions",
  },
  {
    id: "AI",
    header:
      "Dial in your operations by having your departments anchored by strong team players.",
    jobTitle: ["Marketing Manager", "Social Media Manager"],
    link: "Learn more about our Marketing solutions",
  },
  {
    id: "HR",
    header:
      "Dial in your operations by having your departments anchored by strong team players.",
    jobTitle: ["Marketing Manager", "Social Media Manager"],
    link: "Learn more about our Marketing solutions",
  },
  {
    id: "Payroll",
    header:
      "Dial in your operations by having your departments anchored by strong team players.",
    jobTitle: ["Payroll Administrator", "HR Manager"],
    link: "Learn more about our Payroll & HR solutions",
  },
];

export const COMPANY_BIO = {
  PHONE: "1-844-777-8231",
  EMAIL: "it@businessn.com",
};

export const MORE_FEATURES = {
  meeting: [
    { item: "Ensure compliance with accounting and payroll regulations" },
    { item: "Access expert valuable guidance on financial matters" },
    {
      item: "Reduce the risk of errors and inaccuracies in accounting and payroll",
    },
    { item: "Make informed decisions about budgeting and forecasting" },
    { item: "Stay focused on core competencies and objectives" },
  ],
  call: [
    {
      item: "Receive expert guidance on branding strategies, content creation and social media management",
    },
    { item: "Ensure compliance with legal and regulatory requirements" },
    {
      item: "Free up time and resources by focusing on business growth and development",
    },
    {
      item: "Develop a robust social media presence, and run effective marketing campaigns",
    },
    { item: "Accomplish greater scalability and growth potential" },
  ],
};

export const SERVICE_TABS = [
  {
    id: "Accounting",
    content: [
      {
        id: "CFO",
        desc: "Optimize fiscal performance through strategic financial guidance, growth opportunity identification, risk management, insightful reporting, and sustainable growth expertise.",
      },
      {
        id: "Controller",
        desc: "Streamline financial operations with our Controller service: efficient financial management, accurate reporting, internal controls, and compliance expertise.",
      },
      {
        id: "Bookeeper",
        desc: "Simplify bookkeeping tasks with our Bookkeeper service: organized financial records, transaction tracking, reconciliations, and timely financial reports.",
      },
    ],
  },
  {
    id: "AI",
    content: [
      {
        id: "CFO",
        desc: "Optimize fiscal performance through strategic financial guidance, growth opportunity identification, risk management, insightful reporting, and sustainable growth expertise.",
      },
      {
        id: "Controller",
        desc: "Streamline financial operations with our Controller service: efficient financial management, accurate reporting, internal controls, and compliance expertise.",
      },
      {
        id: "Bookeeper",
        desc: "Simplify bookkeeping tasks with our Bookkeeper service: organized financial records, transaction tracking, reconciliations, and timely financial reports.",
      },
    ],
  },
  {
    id: "IT",
    content: [
      {
        id: "Process Automation",
        desc: "Our BPA service includes process analysis, automation strategy, implementation to increase productivity and reduce errors",
      },
      {
        id: "Web development",
        desc: "Establish a strong online presence with a responsive Website or web application both visually appealing and functional.",
      },
      {
        id: "Integrations",
        desc: "Our team can help streamline your data flow and connect your systems, resulting in an improvement of processes and information accessibility.",
      },
      // {
      //     id: "App Development",
      //     desc: "Stay ahead in the mobile market with a custom mobile engineered to provide intuitive user experiences, and drive engagement and growth.",
      // },
    ],
  },
  {
    id: "Payroll & HR",
    content: [
      {
        id: "Payroll Administrator",
        desc: "Streamline payroll processes with our Payroll Administration service: accurate payroll calculations, tax withholdings, timely filings, and compliance with employment regulations.",
      },
      {
        id: "HR Manager",
        desc: "Streamline financial operations with our Controller service: efficient financial management, accurate reporting, internal controls, and compliance expertise.",
      },
      {
        id: "Admin",
        desc: "Simplify bookkeeping tasks with our Bookkeeper service: organized financial records, transaction tracking, reconciliations, and timely financial reports.",
      },
    ],
  },
  {
    id: "Marketing",
    content: [
      {
        id: "Marketing Manager",
        desc: "We offer tailored strategies, targeted campaigns, market analysis, and performance tracking to drive customer engagement and business growth.",
      },
      {
        id: "Social Media Manager",
        desc: "We take care of content creation, community engagement, analytics, and strategic planning to build brand awareness and foster customer relationships.",
      },
      {
        id: "Social Media Manager",
        desc: "We take care of content creation, community engagement, analytics, and strategic planning to build brand awareness and foster customer relationships.",
      },
    ],
  },
];
