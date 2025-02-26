import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  client: string;
  tools: string[];
  techniques: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Commercial",
    description: "A dynamic 30-second commercial showcasing the brand's core values through compelling visuals and storytelling.",
    videoUrl: "https://www.youtube.com/watch?v=example1",
    client: "ABC Corporation",
    tools: ["Adobe Premiere Pro", "After Effects"],
    techniques: ["Motion Graphics", "Color Grading", "Sound Design"]
  },
  {
    id: 2,
    title: "Wedding Highlights",
    description: "A cinematic wedding highlight reel capturing the essence of the couple's special day.",
    videoUrl: "https://www.youtube.com/watch?v=example2",
    client: "Private Client",
    tools: ["DaVinci Resolve", "Adobe Audition"],
    techniques: ["Cinematic Color Grading", "Multi-camera Editing"]
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <main className="min-h-screen py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-xl mb-6">My Work</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A collection of my best video editing projects, showcasing various styles and techniques.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-lg overflow-hidden"
            >
              <div className="aspect-video relative">
                <ReactPlayer
                  url={project.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                  light
                  className="absolute top-0 left-0"
                />
              </div>
              <div className="p-6">
                <h2 className="heading-md mb-4">{project.title}</h2>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Client</h3>
                    <p className="text-text-secondary">{project.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="bg-primary px-3 py-1 rounded-full text-sm text-text-secondary"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Techniques</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techniques.map((technique) => (
                        <span
                          key={technique}
                          className="bg-primary px-3 py-1 rounded-full text-sm text-text-secondary"
                        >
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}