import { motion } from "motion/react";

export function About() {
  return (
    <div className="w-full pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h1 className="font-serif text-5xl text-stone-900 mb-8">About Me</h1>
            
            <div className="prose prose-stone prose-lg max-w-none">
              <p className="text-xl text-stone-600 leading-relaxed mb-8">
                I am a Learning Designer and Research-informed Education Innovator with a background in human development, psychology, and cognitive science. 
              </p>
              
              <p>
                My work focuses on bridging the gap between rigorous academic research and practical, impactful learning design. Currently, I am part of the Harvard Teaching and Learning Lab (TLL), where I collaborate with faculty to design online and higher education courses, develop AI-enabled pedagogical tools, and create resources that support educational innovation.
              </p>
              
              <p>
                I believe that effective learning environments must be equitable, inclusive, and grounded in how the brain actually learns. Whether I am building a Canvas course architecture, prompting a conversational agent for a simulation, or designing a faculty onboarding toolkit, my approach is always human-centered and evidence-based.
              </p>

              <h2 className="font-serif text-3xl text-stone-900 mt-16 mb-6">My Approach</h2>
              <p>
                I sit at the intersection of several disciplines, drawing on methodologies from user research, learning sciences, and instructional design. I don't just design courses; I design systems, supports, and resources around learning.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <h3 className="font-serif text-xl text-stone-900 mb-4">Core Competencies</h3>
                  <ul className="space-y-2 text-stone-600">
                    <li>• Online Course Design & Development</li>
                    <li>• AI-Enabled Pedagogy & Prompting</li>
                    <li>• Faculty Collaboration & Support</li>
                    <li>• Learning Science Integration</li>
                    <li>• Accessibility & Quality Assurance</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <h3 className="font-serif text-xl text-stone-900 mb-4">Tools & Platforms</h3>
                  <ul className="space-y-2 text-stone-600">
                    <li>• Canvas LMS Architecture</li>
                    <li>• Google AI Studio & LLMs</li>
                    <li>• Educational Chatbot Frameworks</li>
                    <li>• User Research & Prototyping</li>
                    <li>• Media & Tool Coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-32">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img 
                  src="https://picsum.photos/seed/about-portrait/600/800" 
                  alt="Sofia Zhang" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="bg-stone-50 p-8 rounded-2xl">
                <h3 className="font-serif text-xl text-stone-900 mb-4">Connect</h3>
                <p className="text-stone-600 mb-6 text-sm">
                  Interested in collaborating on educational innovation or learning design projects?
                </p>
                <div className="flex flex-col gap-3">
                  <a href="mailto:sofiayunqizhang@gmail.com" className="text-slate-600 font-medium hover:text-stone-900 transition-colors">
                    sofiayunqizhang@gmail.com
                  </a>
                  <a href="#" className="text-slate-600 font-medium hover:text-stone-900 transition-colors">
                    LinkedIn Profile
                  </a>
                  <a href="#" className="text-slate-600 font-medium hover:text-stone-900 transition-colors">
                    Download CV / Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
