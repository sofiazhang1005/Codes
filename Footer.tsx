import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";

export function AIBots() {
  return (
    <div className="w-full pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="font-serif text-5xl text-stone-900 mb-6">AI, Bots, and Learning Platforms</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Exploring the frontier of conversational agents in education. I design, prompt, and implement AI tools that augment teaching capabilities, simulate complex scenarios, and provide personalized student support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Bill Bot: Conversational Agent"
            category="AI Prototype"
            description="Designed and prompted a conversational agent to simulate specific personas for student interaction and role-play exercises."
            link="/ai-bots/bill-bot"
            imageUrl="https://picsum.photos/seed/ai-1/800/600"
          />
          <ProjectCard 
            title="Course Bot Design Framework"
            category="Framework"
            description="A comprehensive framework for designing, training, and deploying course-specific AI bots grounded in syllabus content."
            link="/ai-bots/course-bot"
            imageUrl="https://picsum.photos/seed/ai-2/800/600"
          />
          <ProjectCard 
            title="AI Platform Experimentation"
            category="Research & Testing"
            description="Comparative analysis of Google AI Studio, PingPong, and the Harvard AI Sandbox for educational applications."
            link="/ai-bots/platform-testing"
            imageUrl="https://picsum.photos/seed/ai-3/800/600"
          />
          <ProjectCard 
            title="Faculty-Facing AI Resources"
            category="Implementation Support"
            description="Guides and 'cookbooks' to help faculty understand and implement AI tools effectively in their teaching practice."
            link="/ai-bots/faculty-resources"
            imageUrl="https://picsum.photos/seed/ai-4/800/600"
          />
          <ProjectCard 
            title="Agentic Simulations for Learning"
            category="AI Prototype"
            description="Prototyping multi-agent simulations where students navigate complex, dynamic scenarios supported by AI."
            link="/ai-bots/simulations"
            imageUrl="https://picsum.photos/seed/ai-5/800/600"
          />
        </div>

      </div>
    </div>
  );
}
