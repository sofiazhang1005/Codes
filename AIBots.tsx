import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  link: string;
}

export function ProjectCard({ title, category, description, imageUrl, link }: ProjectCardProps) {
  return (
    <Link to={link} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-stone-200/50 text-stone-400 font-medium">
            Project Image Placeholder
          </div>
        )}
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full w-fit mb-4">
          {category}
        </span>
        <h3 className="font-serif text-xl font-medium text-stone-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {description}
        </p>
        <div className="flex items-center text-sm font-medium text-slate-600 group-hover:text-stone-900 transition-colors mt-auto">
          View Case Study
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
