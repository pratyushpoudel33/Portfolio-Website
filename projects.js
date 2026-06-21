/**
 * projects.js — Portfolio Project Data
 * =====================================
 * To add a new project, append an object to the PROJECTS array below.
 * Fields:
 *   id         — unique string identifier
 *   title      — display title
 *   category   — "Research" | "Tool" | "Software"
 *   description — 1-2 sentence summary
 *   tags       — array of skill/tech strings (shown as pills)
 *   link       — URL or relative path for the primary CTA
 *   linkLabel  — CTA button text
 *   githubLink — (optional) GitHub repo URL shown as a secondary button
 *   isLive     — (bool) if true, shows a "Live" badge on the card
 *   accent     — CSS hue value (0-360) used for card accent color theming
 */

const PROJECTS = [
  {
    id: "biomass-burner",
    title: "20 kW Biomass Pellet Burner Prototype",
    category: "Research",
    description:
      "Designed and calculated flue gas energy losses and efficiency optimization pathways for a mechanized biomass pellet burner blueprint tailored for industrial food operations in Nepal.",
    tags: ["Thermodynamics", "Flue Gas Analysis", "Prototyping"],
    link: "docs/Biomass_Burner_Report.pdf",
    linkLabel: "View Case Study",
    isLive: false,
    accent: 245, // indigo
  },
  {
    id: "solar-minigrid",
    title: "Solar Mini-Grid Electrification Study",
    category: "Research",
    description:
      "Authored a comprehensive technical case study evaluating the Khanikhola Rural Municipality Solar Mini-Grid infrastructure design paired with municipal energy plan regulations.",
    tags: ["Solar Grids", "Energy Policy", "Fluid-Thermal Systems"],
    link: "docs/Khanikhola_Solar_Grid.pdf",
    linkLabel: "Open Technical Report",
    isLive: false,
    accent: 270, // purple
  },
  {
    id: "ml-diagnostics",
    title: "ML Architectures for Diagnostics & IoT",
    category: "Research",
    description:
      "Evaluated multi-model machine learning applications (Random Forest, XGBoost, and Logistic Regression) for clinical diagnostic arrays and industrial network time-series data forecasting.",
    tags: ["XGBoost & RF", "IoT Forecasting", "Data Modeling"],
    link: "docs/ML_Medical_IoT_Paper.pdf",
    linkLabel: "Read Research Paper",
    isLive: false,
    accent: 210, // blue
  },
  {
    id: "ghampani-solar",
    title: "Ghampani — Solar Feasibility for Nepal",
    category: "Tool",
    description:
      "An AI-powered web tool that analyses solar feasibility for any location in Nepal using natural language input. Powered by Gemini AI with real-time irradiance insights and a dynamic results dashboard.",
    tags: ["Gemini AI", "Node.js", "Renewable Energy", "NLP"],
    link: "http://localhost:8787",
    linkLabel: "Launch Live Demo",
    githubLink: "https://github.com/pratyushpoudel33/solar-feasibility",
    isLive: true,
    accent: 142, // green
  },
];
