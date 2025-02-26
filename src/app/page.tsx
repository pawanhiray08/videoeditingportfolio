import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary z-20" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/demo-reel.mp4" type="video/mp4" />
        </video>

        <div className="container-custom relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="heading-xl mb-6">
              <span className="text-gradient">Creative</span> Video Editor
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Transforming raw footage into compelling stories through expert video editing,
              color grading, and motion graphics.
            </p>
            <Link href="/portfolio" className="btn-primary">
              View My Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="heading-lg mb-6">Hi, I'm Pawan Hiray</h2>
              <p className="text-text-secondary mb-6">
                With over 5 years of experience in video editing, I specialize in creating
                engaging content that captivates audiences and delivers messages effectively.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Learn More About Me
              </Link>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="/workspace.jpg"
                alt="Pawan's Editing Suite"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}