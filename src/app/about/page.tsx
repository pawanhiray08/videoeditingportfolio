import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: 'Editing Software',
    items: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro X', 'Adobe After Effects']
  },
  {
    category: 'Specializations',
    items: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Multi-camera Editing']
  },
  {
    category: 'Additional Skills',
    items: ['Project Management', 'Client Communication', 'Storyboarding', 'Video Optimization']
  }
];

export default function About() {
  return (
    <main className="min-h-screen py-20">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-xl mb-6">About Me</h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Passionate video editor with a keen eye for detail and a drive for storytelling through visual media.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Pawan Hiray"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="heading-lg mb-6">My Journey</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                With over 5 years of experience in video editing, I've had the privilege of working
                with diverse clients across various industries. My journey began with a passion
                for storytelling and has evolved into a professional career in video editing.
              </p>
              <p>
                I specialize in creating compelling visual narratives that engage audiences and
                deliver messages effectively. Whether it's a brand commercial, wedding film,
                or corporate video, I bring creativity and technical expertise to every project.
              </p>
              <p>
                My approach combines technical precision with artistic vision, ensuring each
                project not only meets but exceeds client expectations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-lg p-8"
        >
          <h2 className="heading-lg text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-text-secondary"
                    >
                      <svg
                        className="w-5 h-5 text-accent mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}