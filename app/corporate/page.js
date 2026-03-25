'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxText from '../components/ParallaxText';
import AnimatedCounter from '../components/AnimatedCounter';

const corporateServices = [
  {
    icon: '🏢',
    title: 'Enterprise Brand Management',
    desc: 'Comprehensive brand management across all touchpoints, ensuring consistency and impact at scale.',
    details: ['Brand Architecture', 'Visual Identity Systems', 'Brand Guidelines', 'Internal Communications'],
  },
  {
    icon: '📊',
    title: 'Corporate Communications',
    desc: 'Strategic communication solutions that align stakeholders and drive organizational objectives.',
    details: ['PR Strategy', 'Crisis Management', 'Investor Relations', 'Executive Thought Leadership'],
  },
  {
    icon: '🎬',
    title: 'Corporate Video Production',
    desc: 'High-end video production for conferences, training, brand stories, and internal communication.',
    details: ['Corporate Films', 'Training Videos', 'Event Coverage', 'Annual Reports'],
  },
  {
    icon: '📱',
    title: 'Digital Transformation',
    desc: 'End-to-end digital strategy and execution to future-proof your corporate marketing efforts.',
    details: ['Digital Strategy', 'Platform Migration', 'Automation', 'Data Analytics'],
  },
  {
    icon: '🌍',
    title: 'Global Campaign Management',
    desc: 'Multi-market campaign orchestration with localized strategies and unified brand presence.',
    details: ['Market Research', 'Localization', 'Multi-Region Execution', 'Global Reporting'],
  },
  {
    icon: '🤝',
    title: 'Strategic Consulting',
    desc: 'Advisory services from industry veterans to navigate complex media landscapes and opportunities.',
    details: ['Market Analysis', 'Competitive Intelligence', 'Growth Strategy', 'Partnership Development'],
  },
];

const industries = [
  'Technology', 'Healthcare', 'Finance', 'Retail', 'Automotive',
  'Real Estate', 'Education', 'FMCG', 'Manufacturing', 'Hospitality',
];

const processSteps = [
  {
    phase: 'Phase 1',
    title: 'Strategic Assessment',
    desc: 'In-depth analysis of your current brand position, market landscape, and competitive environment.',
    duration: '2-4 weeks',
  },
  {
    phase: 'Phase 2',
    title: 'Strategy Development',
    desc: 'Custom strategy creation with clear KPIs, timelines, and resource allocation.',
    duration: '2-3 weeks',
  },
  {
    phase: 'Phase 3',
    title: 'Implementation',
    desc: 'Phased rollout with dedicated project management, quality assurance, and stakeholder alignment.',
    duration: '4-12 weeks',
  },
  {
    phase: 'Phase 4',
    title: 'Optimization & Scale',
    desc: 'Continuous monitoring, optimization, and strategic scaling based on performance data.',
    duration: 'Ongoing',
  },
];

export default function Corporate() {
  const [formData, setFormData] = useState({
    company: '', name: '', email: '', phone: '', industry: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 grid-pattern" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-orange/8 rounded-full blur-[180px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-sm text-gray">Corporate Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat leading-[0.95] mb-6"
            >
              Enterprise-Grade
              <br />
              <span className="gradient-text">Media Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray text-xl max-w-2xl mb-10 leading-relaxed"
            >
              Sophisticated, results-driven media strategies for organizations that need 
              fresh thinking, precision, and measurable impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="bg-orange hover:bg-[#ff8533] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)]">
                Request a Proposal
              </a>
              <a href="#services" className="border border-white/20 hover:border-orange text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300">
                Our Capabilities
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 5, suffix: '+', label: 'Corporate Clients' },
              { number: 10, suffix: '+', label: 'Industries Served' },
              { number: 100, suffix: '%', label: 'Client Satisfaction' },
              { number: 3, suffix: 'x', label: 'Average ROI' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-montserrat mb-2">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Expertise</p>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
                Industries We <span className="gradient-text">Serve</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind} delay={i * 0.05}>
                <span className="px-6 py-3 rounded-full border border-white/10 text-gray text-sm hover:border-orange hover:text-orange transition-all duration-300 cursor-default inline-block">
                  {ind}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Capabilities</p>
              <h2 className="text-4xl md:text-6xl font-bold font-montserrat">
                Full-Service <span className="gradient-text">Suite</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateServices.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, borderColor: 'rgba(255,107,0,0.3)' }}
                  className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 h-full"
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold font-montserrat mb-3 group-hover:text-orange transition-colors">{service.title}</h3>
                  <p className="text-gray text-sm leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.details.map((d) => (
                      <span key={d} className="text-xs bg-white/5 text-gray px-3 py-1 rounded-full border border-white/5">{d}</span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Process</p>
              <h2 className="text-4xl md:text-6xl font-bold font-montserrat">
                Our <span className="gradient-text">Approach</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative">
                  <span className="text-xs text-orange uppercase tracking-wider">{step.phase}</span>
                  <h3 className="text-xl font-bold font-montserrat mt-2 mb-3">{step.title}</h3>
                  <p className="text-gray text-sm leading-relaxed mb-4">{step.desc}</p>
                  <span className="text-xs text-white/30">{step.duration}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax */}
      <section className="py-16 overflow-hidden">
        <ParallaxText speed={0.3}>
          <h2 className="text-[8rem] md:text-[12rem] font-bold font-montserrat gradient-text uppercase tracking-tight leading-none text-center">
            Enterprise
          </h2>
        </ParallaxText>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Get in Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
                Enterprise <span className="gradient-text">Inquiry</span>
              </h2>
              <p className="text-gray text-lg">Our enterprise team will respond within 24 business hours.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Company Name</label>
                  <input
                    type="text" required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray/50"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Contact Person</label>
                  <input
                    type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray/50"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Email</label>
                  <input
                    type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray/50"
                    placeholder="business@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray/50"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Industry</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white"
                  >
                    <option value="" className="bg-dark">Select Industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind.toLowerCase()} className="bg-dark">{ind}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Annual Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white"
                  >
                    <option value="" className="bg-dark">Select Range</option>
                    <option value="5-10L" className="bg-dark">₹5L - ₹10L</option>
                    <option value="10-25L" className="bg-dark">₹10L - ₹25L</option>
                    <option value="25-50L" className="bg-dark">₹25L - ₹50L</option>
                    <option value="50L-1Cr" className="bg-dark">₹50L - ₹1Cr</option>
                    <option value="1Cr+" className="bg-dark">₹1Cr+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray mb-2">Project Details</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray/50 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange hover:bg-[#ff8533] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.3)]"
              >
                {submitted ? '✓ Inquiry Submitted!' : 'Submit Inquiry'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
