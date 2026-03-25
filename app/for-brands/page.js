'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxText from '../components/ParallaxText';
import AnimatedCounter from '../components/AnimatedCounter';

const brandServices = [
  {
    title: 'Influencer Marketing',
    desc: 'Connect with vetted creators who align with your brand values. We manage end-to-end campaigns from talent sourcing to performance reporting.',
    features: ['Creator Vetting', 'Campaign Management', 'Performance Analytics', 'Content Rights'],
  },
  {
    title: 'Content Strategy',
    desc: 'Data-driven content strategies that position your brand as a thought leader and drive engagement across every platform.',
    features: ['Content Calendar', 'Platform Strategy', 'SEO Optimization', 'Brand Voice'],
  },
  {
    title: 'Brand Campaigns',
    desc: 'Full-scale campaign production from concept to launch. We create campaigns that turn heads and drive conversions.',
    features: ['Creative Direction', 'Multi-Channel Launch', 'A/B Testing', 'ROI Tracking'],
  },
  {
    title: 'Social Media Management',
    desc: 'Complete social media management with content creation, community management, and growth strategies.',
    features: ['Daily Posting', 'Community Management', 'Growth Hacking', 'Monthly Reports'],
  },
  {
    title: 'Video Production',
    desc: 'Cinematic video production that tells your brand story with impact. From short-form to documentary style.',
    features: ['Scripting', 'Filming', 'Editing', 'Distribution'],
  },
  {
    title: 'Paid Media',
    desc: 'Strategic paid media campaigns across Meta, Google, YouTube, and emerging platforms with precision targeting.',
    features: ['Ad Creative', 'Audience Targeting', 'Budget Optimization', 'Conversion Tracking'],
  },
];

const caseStudies = [
  {
    brand: 'FashionForward',
    category: 'Fashion & Lifestyle',
    result: 'Built brand identity and launched social presence from zero',
    metric: '50K',
    metricLabel: 'Followers in 2 Months',
  },
  {
    brand: 'TechStart Pro',
    category: 'Technology',
    result: 'Designed and executed a complete digital launch campaign',
    metric: '2.8x',
    metricLabel: 'ROI on First Campaign',
  },
  {
    brand: 'GreenLife Co.',
    category: 'Sustainability',
    result: 'Created viral content series driving massive organic growth',
    metric: '500K',
    metricLabel: 'Organic Impressions',
  },
];

export default function ForBrands() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 grid-pattern" />
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-sm text-gray">For Brands</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat leading-[0.95] mb-6"
            >
              Amplify Your
              <br />
              <span className="gradient-text">Brand&apos;s Voice</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray text-xl max-w-2xl mb-10 leading-relaxed"
            >
              We partner with ambitious brands to create campaigns that resonate, 
              engage, and convert. Fresh ideas, sharp execution — let&apos;s build together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/book" className="bg-orange hover:bg-[#ff8533] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)]">
                Get a Proposal
              </Link>
              <a href="#services" className="border border-white/20 hover:border-orange text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300">
                View Services
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
              { number: 15, suffix: '+', label: 'Brands Served' },
              { number: 25, suffix: '+', label: 'Campaigns Launched' },
              { number: 5, suffix: 'M+', label: 'Total Impressions' },
              { number: 3, suffix: 'x', label: 'Avg. ROI' },
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

      {/* Services */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Services</p>
              <h2 className="text-4xl md:text-6xl font-bold font-montserrat">
                Full-Stack <span className="gradient-text">Brand Solutions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandServices.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, borderColor: 'rgba(255,107,0,0.3)' }}
                  className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 h-full"
                >
                  <h3 className="text-xl font-bold font-montserrat mb-3 group-hover:text-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="text-xs bg-white/5 text-gray px-3 py-1 rounded-full border border-white/5">
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Text */}
      <section className="py-16 overflow-hidden">
        <ParallaxText speed={-0.3}>
          <h2 className="text-[8rem] md:text-[12rem] font-bold font-montserrat text-white/[0.03] uppercase tracking-tight leading-none text-center">
            Brands
          </h2>
        </ParallaxText>
      </section>

      {/* Case Studies */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Results</p>
              <h2 className="text-4xl md:text-6xl font-bold font-montserrat">
                Case <span className="gradient-text">Studies</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent"
                >
                  <span className="text-xs text-orange uppercase tracking-wider">{study.category}</span>
                  <h3 className="text-2xl font-bold font-montserrat mt-2 mb-4">{study.brand}</h3>
                  <p className="text-gray text-sm mb-6">{study.result}</p>
                  <div className="border-t border-white/5 pt-4">
                    <div className="text-3xl font-bold gradient-text">{study.metric}</div>
                    <div className="text-gray text-xs uppercase tracking-wider">{study.metricLabel}</div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6">
              Ready to <span className="gradient-text">Scale</span>?
            </h2>
            <p className="text-gray text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s build something extraordinary together. We&apos;re hungry, creative, and ready to make your brand unforgettable.
            </p>
            <Link href="/book" className="inline-block bg-orange hover:bg-[#ff8533] text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:scale-105">
              Start Your Campaign
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
