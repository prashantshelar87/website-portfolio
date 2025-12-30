
import { Experience, Education, Project, SkillGroup } from './types';

export const PERSONAL_INFO = {
  name: "Prashant Shelar",
  title: "Industrial Engineer & Program Manager",
  tagline: "15+ Years of Excellence in Project & Development Engineering",
  address: "68 Mishrilal Nagar Ex 2, Dewas - 455001",
  email: "prashant.shelar18@gmail.com",
  phone: "+91 8319542887",
  about: "Dynamic and detail-oriented Industrial & Projects Engineer with extensive experience in Greenfield projects, program management, and process optimization. Proven track record in leading large teams, managing multi-million dollar budgets, and implementing sophisticated SAP-MM systems across automotive and manufacturing sectors."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "LINAMAR INDIA PVT LTD",
    role: "Industrial Engineer - Program Manager (Project & Development Engineering)",
    period: "Dec 2020 – Present",
    location: "Dewas",
    isCurrent: true,
    responsibilities: [
      "Green Field Project planning and execution from concept to commissioning.",
      "Leading a team of 12 members for program assessment and internal APQP reviews.",
      "Managing Project Cost estimation of new RFQs and CEW preparation.",
      "Regular budget tracking and monitoring of P&L through Plant program assessment reports (PPAR).",
      "Supplier assessment, finalization, and development for Capital equipment procurement.",
      "SAP-MM support for new project implementations."
    ]
  },
  {
    company: "Raj Erectors",
    role: "Sr. Project Manager",
    period: "May 2020 – Nov 2020",
    location: "Dewas",
    responsibilities: [
      "Handling all projects for cost estimation, quotation, and material planning.",
      "Leading a team of 15 members in layout designing and customer site reviews.",
      "Implementing project baselines to ensure activities progress as planned.",
      "Project cost optimization with waste elimination."
    ]
  },
  {
    company: "Jaya Hind Montupet Pvt Ltd (Linamar India)",
    role: "Sr. Engineer - Projects & Engineering",
    period: "Sep 2015 – April 2020",
    location: "Dewas",
    responsibilities: [
      "Expertise in swiftly ramping up projects with cross-functional skills.",
      "Eliminating redundant/obsolete processes to drive value addition.",
      "Engineering design and process modification with Change Management.",
      "Managing Erection and Commissioning for new product lines.",
      "Handling projects for customers like Ford (Dragon Cylinder Head)."
    ]
  },
  {
    company: "MAHLE Engine Components India Pvt Ltd",
    role: "Sr. Engineer (Process Engineer/ NPD)",
    period: "May 2012 – Sep 2015",
    location: "Indore",
    responsibilities: [
      "Process designing for manufacturing camshaft and valve tappet casting/machining.",
      "Executing APQP, PFMEA, Control Plans, and SOPs for new products.",
      "Lead TPM pillar leader and successful trainer for TPM implementation.",
      "Nominated for intercompany SAP implementation project."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Ford Dragon Cylinder Head",
    customer: "Ford",
    description: "Major product development and launch for a key global automotive player.",
    tags: ["Product Development", "Automotive", "Launch"]
  },
  {
    title: "Green Field Core Production",
    customer: "Mingzhi Technology",
    description: "Cold box core shooter implementation for sand core production without hot processes.",
    tags: ["Green Field", "Technology", "China Partnership"]
  },
  {
    title: "Melting Tower Furnace",
    description: "Installation of 2-ton melting / 5-ton holding capacity tower furnace with all utilities.",
    tags: ["Heavy Engineering", "Utilities", "Infrastructure"]
  },
  {
    title: "Industrial Automation & Robotics",
    description: "Programming and handling of 6-axis industrial robots and CNC LASER cutting machines.",
    tags: ["Robotics", "Automation", "CNC"]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Project & Strategy",
    items: ["Project Management", "Green Field Planning", "Cost Estimation (RFQ)", "Program Assessment (PPAR)", "P&L Monitoring"]
  },
  {
    category: "Engineering & Design",
    items: ["AutoCAD", "PRO-E", "Cimatron", "Jig & Fixture Design", "BOM Review", "Layout Engineering"]
  },
  {
    category: "Operations & Quality",
    items: ["SAP-MM (Certified)", "APQP / FMEA / PPAP", "TPM & 5S Implementation", "Lean Manufacturing", "ISO TS-16949 Auditor"]
  },
  {
    category: "Leadership",
    items: ["Team Management (15+ members)", "Vendor Development", "Business Development", "Stakeholder Management"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "J.E.C. (G.E.C.), Jabalpur",
    degree: "Bachelors of Engineering in Industrial & Production (Mechanical)",
    year: "2006-2010",
    score: "73.28%"
  }
];
