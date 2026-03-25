'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxText from '../components/ParallaxText';
import AnimatedCounter from '../components/AnimatedCounter';

const packages = [
  {
    name: 'Starter',
    price: '₹15,000',
    period: '/month',
    desc: 'Perfect for new businesses looking to establish their digital presence.',
    features: [
      'Social Media Setup (2 platforms)',
      '8 Posts per Month',
      'Basic Analytics Report',
      'Community Management',
      'Content Calendar',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹35,000',
    period: '/month',
    desc: 'For businesses ready to scale their marketing efforts and reach.',
    features: [
      'Social Media (4 platforms)',
      '20 Posts per Month',
      'Detailed Analytics Dashboard',
      'Influencer Partnership (1/mo)',
      'Ad Management (up to ₹10K)',
      'Monthly Strategy Call',
      'Content Calendar & Strategy',
    ],
    popular: true,
  },
  {
    name: 'Scale',
    price: '₹75,000',
    period: '/month',
    desc: 'Full-service solution for ambitious businesses aiming for market leadership.',
    features: [
      'All Platforms Management',
      '30+ Posts per Month',
      'Real-time Analytics',
      'Influencer Campaigns (3/mo)',
      'Full Ad Management',
      'Weekly Strategy Calls',
      'Video Content Production',
      'Brand Strategy & Consulting',
      'Priority Support',
    ],
    popular: false,
  },
];

const successStories = [
  {
    name: 'Bloom Cafe',
    industry: 'Food & Beverage',
    result: 'Grew from 200 to 5,000 followers in 3 months with a 2x increase in daily footfall.',
    growth: '2,400%',
  },
  {
    name: 'FitZone Studio',
    industry: 'Health & Fitness',
    result: 'Boosted membership signups through targeted social media campaigns and local creator collaborations.',
    growth: '150%',
  },
  {
    name: 'StyleCraft Boutique',
    industry: 'Fashion Retail',
    result: 'Launched social commerce presence generating consistent online revenue from Instagram.',
    growth: '₹2L/mo',
  },
];

const faqs = [
  {
    q: 'What makes Creatorstick different from other agencies?',
    a: 'We\'re a new-age team that combines fresh creative thinking with smart data. We understand startup budgets and deliver maximum impact without the bloated agency price tag.',
  },
  {
    q: 'How quickly can I see results?',
    a: 'Most businesses see noticeable improvements within the first 30 days. Significant growth typically happens within 2-3 months of consistent strategy execution.',
  },
  {
    q: 'Can I upgrade my package later?',
    a: 'Absolutely! You can upgrade or customize your package at any time. We design flexible plans that grow with your business.',
  },
  {
    q: 'Do you work with businesses outside India?',
    a: 'Yes! We serve businesses globally. Our digital-first approach allows us to work with clients anywhere in the world.',
  },
];

export default function ForSmallBusiness() {
  const [openFaq, setOpenFaq] = useState(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 grid-pattern" />
        <motion.div
          className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-orange/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
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
              <span className="text-sm text-gray">For Small Business</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat leading-[0.95] mb-6"
            >
              Big Results,
              <br />
              <span className="gradient-text">Smart Budget</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray text-xl max-w-2xl mb-10 leading-relaxed"
            >
              Premium marketing solutions designed specifically for small businesses. 
              Get the agency experience without the enterprise price tag.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#pricing" className="bg-orange hover:bg-[#ff8533] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)]">
                See Pricing
              </a>
              <Link href="/book" className="border border-white/20 hover:border-orange text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300">
                Free Consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 20, suffix: '+', label: 'SMBs Served' },
              { number: 85, suffix: '%', label: 'Client Growth' },
              { number: 3, suffix: 'x', label: 'Avg. ROI' },
              { number: 24, suffix: '/7', label: 'Support' },
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

      {/* Pricing */}
      <section id="pricing" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Pricing</p>
              <h2 className="text-4xl md:text-6xl font-bold font-montserrat">
                Transparent <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-gray mt-4 max-w-xl mx-auto">No hidden fees, no lock-in contracts. Choose a plan that fits your business.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`p-8 rounded-2xl border h-full flex flex-col ${
                    pkg.popular
                      ? 'border-orange/30 bg-gradient-to-b from-orange/10 to-transparent relative'
                      : 'border-white/5 bg-white/[0.02]'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-orange text-white px-4 py-1 rounded-full font-semibold">
                      Recommended
                    </span>
                  )}
                  <h3 className="text-2xl font-bold font-montserrat mb-1">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                    <span className="text-gray text-sm">{pkg.period}</span>
                  </div>
                  <p className="text-gray text-sm mb-6">{pkg.desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="text-sm text-white/80 flex items-start gap-2">
                        <span className="text-orange mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book"
                    className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-orange hover:bg-[#ff8533] text-white hover:shadow-[0_0_30px_rgba(255,107,0,0.3)]'
                        : 'border border-white/20 hover:border-orange text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Results</p>
              <h2 className="text-4xl md:text-6xl font-bold font-montserrat">
                Success <span className="gradient-text">Stories</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
                >
                  <span className="text-xs text-orange uppercase tracking-wider">{story.industry}</span>
                  <h3 className="text-2xl font-bold font-montserrat mt-2 mb-4">{story.name}</h3>
                  <p className="text-gray text-sm leading-relaxed mb-6">{story.result}</p>
                  <div className="border-t border-white/5 pt-4">
                    <div className="text-3xl font-bold gradient-text">{story.growth}</div>
                    <div className="text-gray text-xs uppercase tracking-wider">Growth</div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat">
                Common <span className="gradient-text">Questions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="border border-white/5 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-semibold pr-4">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      className="text-orange text-2xl flex-shrink-0"
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === i ? 'auto' : 0,
                      opacity: openFaq === i ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax */}
      <section className="py-16 overflow-hidden">
        <ParallaxText speed={-0.3}>
          <h2 className="text-[8rem] md:text-[12rem] font-bold font-montserrat gradient-text uppercase tracking-tight leading-none text-center">
            Growth
          </h2>
        </ParallaxText>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6">
              Let&apos;s Grow <span className="gradient-text">Together</span>
            </h2>
            <p className="text-gray text-lg mb-10 max-w-2xl mx-auto">
              Start with a free consultation. No commitments, just a conversation about your business goals.
            </p>
            <Link href="/book" className="inline-block bg-orange hover:bg-[#ff8533] text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:scale-105">
              Book Free Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
