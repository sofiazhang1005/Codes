/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { LearningDesign } from "./pages/LearningDesign";
import { AIBots } from "./pages/AIBots";
import { ToolsSupport } from "./pages/ToolsSupport";
import { ResearchDesign } from "./pages/ResearchDesign";
import { AcademicProjects } from "./pages/AcademicProjects";
import { Contact } from "./pages/Contact";
import { CaseStudy } from "./pages/CaseStudy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "learning-design", element: <LearningDesign /> },
      { path: "learning-design/:id", element: <CaseStudy /> },
      { path: "ai-bots", element: <AIBots /> },
      { path: "ai-bots/:id", element: <CaseStudy /> },
      { path: "tools-support", element: <ToolsSupport /> },
      { path: "tools-support/:id", element: <CaseStudy /> },
      { path: "research-design", element: <ResearchDesign /> },
      { path: "research-design/:id", element: <CaseStudy /> },
      { path: "studio-projects", element: <AcademicProjects /> },
      { path: "studio-projects/:id", element: <CaseStudy /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

