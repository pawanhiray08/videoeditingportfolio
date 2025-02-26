import { motion } from 'framer-motion';
// Note: You need to install framer-motion first by running:
// npm install framer-motion
// or
// yarn add framer-motion
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Basic Editing',
    description: 'Perfect for simple video edits and basic post-production needs.',
    features: [
      'Basic color correction',
      'Simple transitions',
      'Background music',
      'Basic text overlays',
      '2 rounds of revisions'
    ],
    price: 'Starting at $300'
  },
  {
    id: 2,
    title: 'Professional Package',
    description: 'Comprehensive editing service for professional-grade content.',
    features: [
      'Advanced color grading',
      'Custom motion graphics',
      'Sound design & mixing',
      'Advanced effects',
      'Unlimited revisions'
    ],
    price: 'Starting at $800',
    popular: true
  },
  {
    id: 3,
    title: 'Premium Production',
    description: 'Full-service video production and editing for high-end projects.',
    features: [
      'Cinema-grade color grading',
      'Complex motion graphics',
      'Professional sound design',
      'VFX & compositing',
      'Project consultation'
    ],
    price: 'Starting at $1500'
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    company: "Tech Innovators Inc.",
    content: "Pawan's attention to detail and creative vision transformed our product launch video into something truly spectacular.",
    image: "/testimonials/john.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Wedding Films Co.",
    content: "The way Pawan captured and edited our wedding video exceeded all expectations. Every moment was perfectly preserved.",
    image: "/testimonials/sarah.jpg"
  }
];

export default function Services() {
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
          <h1 className="heading-xl mb-6">My Services</h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Professional video editing services tailored to your needs, from basic edits to premium productions.
          </p>
        </motion.div>

        {/* Services Grid */}
<div className="grid md:grid-cols-3 gap-8 mb-20" role="list">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-secondary rounded-lg p-6 relative ${service.popular ? 'ring-2 ring-accent' : ''}`}
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-semibold py-1 px-4 rounded-full">
                  Most Popular
                </span>
              )}
              <h2 className="heading-md mb-4">{service.title}</h2>
              <p className="text-text-secondary mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-text-secondary">
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
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold mb-6">{service.price}</p>
              <Link href="/contact" className="btn-primary w-full text-center block">
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-lg p-8"
        >
          <h2 className="heading-lg text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-primary rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-text-secondary text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-text-secondary italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}