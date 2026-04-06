import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              Learning Designer & Education Innovator
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] text-stone-900">
              Bridging research, pedagogy, and AI-enabled learning.
            </h1>
            
            <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
              I design meaningful learning experiences that sit at the intersection of cognitive science and practical implementation. Currently focused on online course development, faculty support, and educational AI tools at the Harvard Teaching and Learning Lab.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                to="/learning-design" 
                className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors flex items-center gap-2"
              >
                View Selected Work <ArrowRight size={18} />
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-colors"
              >
                About Me
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
              <img 
                src="https://picsum.photos/seed/portrait-professional/800/1000" 
                alt="Sofia Zhang" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-black/10 rounded-3xl"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>
          </motion.div>

        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl text-stone-900 mb-4">Featured Work</h2>
              <p className="text-stone-600 text-lg">
                A selection of recent projects spanning course design, AI integration, and faculty support at the Harvard Teaching and Learning Lab.
              </p>
            </div>
            <Link to="/learning-design" className="text-slate-600 font-medium hover:text-stone-900 flex items-center gap-2 transition-colors whitespace-nowrap">
              View all projects <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Online Course Design & Development"
              category="Learning Design"
              description="End-to-end design and development of an online higher education course, integrating learning science principles with robust Canvas architecture."
              link="/learning-design/project-1"
              imageUrl="https://picsum.photos/seed/course-design/800/600"
            />
            <ProjectCard 
              title="AI-Powered Teaching Support Bot"
              category="AI & Bots"
              description="Designed and prompted a conversational agent to support faculty in simulating student interactions and refining pedagogical strategies."
              link="/ai-bots/project-1"
              imageUrl="https://picsum.photos/seed/ai-bot/800/600"
            />
            <ProjectCard 
              title="Faculty Onboarding Toolkit"
              category="Tools & Support"
              description="A comprehensive toolkit and workshop series designed to streamline faculty onboarding and promote evidence-based teaching practices."
              link="/tools-support/project-1"
              imageUrl="https://picsum.photos/seed/toolkit/800/600"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition / Approach */}
      <section className="py-32 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 max-w-3xl mx-auto leading-tight">
            Designing learning environments that are equitable, inclusive, and grounded in how the brain actually learns.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-left">
            <div>
              <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mb-6">
                <span className="text-xl">01</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Research-Informed</h3>
              <p className="text-stone-400 leading-relaxed">
                Leveraging insights from cognitive science and human development to create evidence-based learning strategies that stick.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mb-6">
                <span className="text-xl">02</span>
              </div>
              <h3 className="text-xl font-medium mb-4">AI-Enabled</h3>
              <p className="text-stone-400 leading-relaxed">
                Exploring the frontier of conversational agents and AI tools to augment teaching capabilities and personalize student support.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mb-6">
                <span className="text-xl">03</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Human-Centered</h3>
              <p className="text-stone-400 leading-relaxed">
                Designing with empathy for both faculty and students, ensuring that technology serves pedagogy, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
