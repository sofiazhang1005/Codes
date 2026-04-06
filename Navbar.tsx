import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";

export function LearningDesign() {
  return (
    <div className="w-full pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="font-serif text-5xl text-stone-900 mb-6">Learning Design for Online & Higher Education</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            My work at the Harvard Teaching and Learning Lab (TLL) focuses on designing robust, student-centered online learning experiences. I collaborate closely with faculty to translate complex academic content into accessible, engaging, and pedagogically sound digital formats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="TLL Course Design Project 1"
            category="Course Development"
            description="End-to-end design and development of an online higher education course, integrating learning science principles with robust Canvas architecture."
            link="/learning-design/project-1"
            imageUrl="https://picsum.photos/seed/tll-1/800/600"
          />
          <ProjectCard 
            title="TLL Course Design Project 2"
            category="Course Development"
            description="Collaborated with faculty to redesign a core curriculum course for online delivery, focusing on active learning and accessible media."
            link="/learning-design/project-2"
            imageUrl="https://picsum.photos/seed/tll-2/800/600"
          />
          <ProjectCard 
            title="TLL Faculty Collaboration Project"
            category="Faculty Support"
            description="A structured collaboration process to help faculty map learning objectives to assessments and digital activities."
            link="/learning-design/faculty-collab"
            imageUrl="https://picsum.photos/seed/tll-3/800/600"
          />
          <ProjectCard 
            title="TLL Accessibility & QA Initiative"
            category="Quality Assurance"
            description="Developed and implemented a comprehensive quality assurance rubric to ensure all digital course materials meet strict accessibility standards."
            link="/learning-design/accessibility"
            imageUrl="https://picsum.photos/seed/tll-4/800/600"
          />
          <ProjectCard 
            title="Learning Experience Redesign"
            category="UX/UI in Education"
            description="Redesigned the student journey within a complex Canvas environment to reduce cognitive load and improve navigation."
            link="/learning-design/redesign"
            imageUrl="https://picsum.photos/seed/tll-5/800/600"
          />
        </div>

      </div>
    </div>
  );
}
