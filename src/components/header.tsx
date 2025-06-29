import { Sparkle } from "lucide-react";
import Card from "@/components/card";
import { useState, useEffect } from "react";

const porfData = {
  img: "/logo-web.png",
  workUrl: "https://www.linkedin.com/in/iv%C3%A1n-mayoral-8288a1331/",
  technologies: [
    "HTML",
    "Astro",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "PHP",
    "Laravel",
    "CSS",
    "Tailwind CSS",
    "MySQL",
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Adobe Photoshop",
    "Adobe Indesign",
    "Adobe Illustrator",
    "Avid",
    "Davinci Resolve",
    "Cinema 4D",
    "Figma",
    "Canva",
  ],
};

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between w-full gap-4 p-4 sm:p-8 text-sm font-medium text-neutral-600 dark:text-neutral-300 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div className="flex-grow overflow-hidden min-w-0">
        <Card>
          <div className="inline-flex w-full flex-nowrap overflow-hidden text-sm font-medium text-neutral-600 dark:text-neutral-300 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex animate-infinite-scroll items-center justify-center">
              {porfData.technologies.map((tech) => (
                <li key={tech} className="flex items-center flex-shrink-0">
                  <Sparkle className="mx-2 sm:mx-4 size-3 text-neutral-500 dark:text-neutral-400" />
                  <span className="text-xs sm:text-sm whitespace-nowrap">{tech}</span>
                </li>
              ))}
            </ul>
            <ul className="flex animate-infinite-scroll items-center justify-center">
              {porfData.technologies.map((tech) => (
                <li key={tech} className="flex items-center flex-shrink-0">
                  <Sparkle className="mx-2 sm:mx-4 size-3 text-neutral-500 dark:text-neutral-400" />
                  <span className="text-xs sm:text-sm whitespace-nowrap">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      {/* Animated Theme Switch */}
      <div className="flex-shrink-0">
        <label className="relative inline-block w-16 h-9 cursor-pointer">
          <input
            type="checkbox"
            checked={theme === 'light'}
            onChange={toggleTheme}
            className="opacity-0 w-0 h-0"
          />
          <span className={`absolute inset-0 rounded-full transition-all duration-400 ease-in-out overflow-hidden ${
            theme === 'light' ? 'bg-blue-500' : 'bg-gray-800'
          }`}>
            {/* Slider circle */}
            <span className={`absolute w-5 h-5 rounded-full transition-all duration-400 ease-in-out ${
              theme === 'light' 
                ? 'translate-x-7 bg-yellow-400 shadow-inner' 
                : 'translate-x-1 bg-white shadow-inner'
            }`} style={{
              bottom: '0.5rem',
              boxShadow: theme === 'light' 
                ? 'inset 15px -4px 0px 15px #ffcf48' 
                : 'inset 8px -4px 0px 0px #fff'
            }}></span>
            
            {/* Stars (visible in dark mode) */}
            <div className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-400 ${
              theme === 'light' ? 'opacity-0' : 'opacity-100'
            }`} style={{ left: '2.5rem', top: '0.5rem' }}></div>
            <div className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-400 ${
              theme === 'light' ? 'opacity-0' : 'opacity-100'
            }`} style={{ left: '2.2rem', top: '1.2rem' }}></div>
            <div className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-400 ${
              theme === 'light' ? 'opacity-0' : 'opacity-100'
            }`} style={{ left: '3rem', top: '0.9rem' }}></div>
            
            {/* Cloud (visible in light mode) */}
            <svg 
              viewBox="0 0 16 16" 
              className={`absolute transition-all duration-400 ${
                theme === 'light' ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                width: '3.5rem', 
                bottom: '-1.4rem', 
                left: '-1.1rem' 
              }}
            >
              <path 
                transform="matrix(.77976 0 0 .78395-299.99-418.63)" 
                fill="#fff" 
                d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925" 
              />
            </svg>
          </span>
        </label>
      </div>
    </div>
  );
} 