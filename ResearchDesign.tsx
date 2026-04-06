import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-serif text-2xl text-stone-100 mb-4">Sofia Zhang</h3>
          <p className="text-sm max-w-sm leading-relaxed">
            Learning Designer & Research-informed Education Innovator. Bridging cognitive science, human development, and AI-enabled pedagogy to build meaningful learning experiences.
          </p>
        </div>
        
        <div>
          <h4 className="text-stone-100 font-medium mb-4">Work</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/learning-design" className="hover:text-stone-200 transition-colors">Learning Design</Link></li>
            <li><Link to="/ai-bots" className="hover:text-stone-200 transition-colors">AI & Bots</Link></li>
            <li><Link to="/tools-support" className="hover:text-stone-200 transition-colors">Tools & Support</Link></li>
            <li><Link to="/research-design" className="hover:text-stone-200 transition-colors">Research × Design</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-stone-100 font-medium mb-4">Connect</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="mailto:sofiayunqizhang@gmail.com" className="hover:text-stone-200 transition-colors">Email</a></li>
            <li><a href="#" className="hover:text-stone-200 transition-colors">LinkedIn</a></li>
            <li><Link to="/contact" className="hover:text-stone-200 transition-colors">Contact Form</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-xs flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Sofia Zhang. All rights reserved.</p>
      </div>
    </footer>
  );
}
