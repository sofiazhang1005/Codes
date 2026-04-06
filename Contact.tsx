import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";

export function AcademicProjects() {
  return (
    <div className="w-full pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="font-serif text-5xl text-stone-900 mb-6">Selected Academic & Studio Projects</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            A curated selection of graduate course projects, exploratory design work, and early prototypes that laid the foundation for my current professional practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Educational Game Prototype"
            category="Studio Project"
            description="An exploratory prototype exploring game-based learning mechanics for teaching complex systems thinking."
            link="/studio-projects/game-prototype"
            imageUrl="https://picsum.photos/seed/studio-1/800/600"
          />
          <ProjectCard 
            title="Interactive Narrative Design"
            category="Course Project"
            description="A graduate project exploring the use of branching narratives to teach historical empathy and decision-making."
            link="/studio-projects/narrative"
            imageUrl="https://picsum.photos/seed/studio-2/800/600"
          />
          <ProjectCard 
            title="Learning Analytics Dashboard"
            category="UX/UI Design"
            description="A conceptual redesign of a student-facing learning analytics dashboard to promote self-regulated learning."
            link="/studio-projects/dashboard"
            imageUrl="https://picsum.photos/seed/studio-3/800/600"
          />
        </div>

      </div>
    </div>
  );
}
