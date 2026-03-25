'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxText from '../components/ParallaxText';
import AnimatedCounter from '../components/AnimatedCounter';

const benefits = [
  {
    icon: '💰',
    title: 'Monetize Your Content',
    desc: 'Get paid for what you love doing. Access brand deals that match your niche and audience.',
  },
  {
    icon: '📈',
    title: 'Grow Your Audience',
    desc: 'Get expert guidance on content strategy, SEO, and audience engagement to scale faster.',
  },
  {
    icon: '🤝',
    title: 'Premium Brand Partnerships',
    desc: 'We connect you with top-tier brands that align with your values and content style.',
  },
  {
    icon: '📊',
    title: 'Analytics & Insights',
    desc: 'Access detailed performance reports and audience insights to optimize your content.',
  },
  {
    icon: '🛡️',
    title: 'Rights Protection',
    desc: 'We handle contracts, negotiations, and copyright protection so you can focus on creating.',
  },
  {
    icon: '🌐',
    title: 'Global Reach',
    desc: 'Tap into our global network of brands and expand your reach to international markets.',
  },
];

const steps = [
  { num: '01', title: 'Apply', desc: 'Fill out our creator application form with your profile and content samples.' },
  { num: '02', title: 'Get Verified', desc: 'Our team reviews your application and verifies your profile within 48 hours.' },
  { num: '03', title: 'Get Matched', desc: 'We match you with brands that align with your niche, audience, and style.' },
  { num: '04', title: 'Create & Earn', desc: 'Start creating amazing content and earn competitive compensation for your work.' },
];

const creatorTiers = [
  { tier: 'Nano', followers: '1K - 10K', perks: ['Brand Introductions', 'Content Guidelines', 'Basic Analytics'] },
  { tier: 'Micro', followers: '10K - 100K', perks: ['Priority Brand Matching', 'Dedicated Manager', 'Advanced Analytics', 'Growth Workshop'] },
  { tier: 'Macro', followers: '100K - 1M', perks: ['Premium Brand Deals', 'Personal Brand Team', 'Revenue Optimization', 'PR Support', 'Event Invitations'] },
  { tier: 'Mega', followers: '1M+', perks: ['Exclusive Partnerships', 'Full Management', 'Custom Campaigns', 'International Deals', 'Production Support', 'Legal Team'] },
];

export default function ForCreators() {
  const [formData, setFormData] = useState({
    name: '', email: '', platform: '', handle: '', followers: '', niche: '', message: '',
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
          className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-orange/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.3, 1] }}
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
              <span className="text-sm text-gray">For Creators</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat leading-[0.95] mb-6"
            >
              Create. Grow.
              <br />
              <span className="gradient-text">Get Paid.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray text-xl max-w-2xl mb-10 leading-relaxed"
            >
              Join our growing creator network and unlock brand partnerships, 
              expert guidance, and tools to take your content career to the next level.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#apply" className="bg-orange hover:bg-[#ff8533] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)]">
                Apply as Creator
              </a>
              <a href="#benefits" className="border border-white/20 hover:border-orange text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300">
                See Benefits
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
              { number: 50, suffix: '+', label: 'Creators Onboard' },
              { number: 15, suffix: '+', label: 'Brand Partners' },
              { number: 2, suffix: 'M+', label: 'Combined Reach' },
              { number: 100, suffix: '%', label: 'Passion Driven' },
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

      {/* Benefits */}
      <section id="benefits" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Benefits</p>
              <h2 className="text-4xl md:text-6xl font-bold font-montserrat">
                Why <span className="gradient-text">Join Us</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 h-full"
                >
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h3 className="text-xl font-bold font-montserrat mb-3 group-hover:text-orange transition-colors">{b.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Process</p>
              <h2 className="text-4xl md:text-6xl font-bold font-montserrat">
                How It <span className="gradient-text">Works</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="text-6xl font-bold font-montserrat text-orange/10 mb-4">{step.num}</div>
                  <h3 className="text-xl font-bold font-montserrat mb-3">{step.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Tiers */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Tiers</p>
              <h2 className="text-4xl md:text-6xl font-bold font-montserrat">
                Creator <span className="gradient-text">Levels</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creatorTiers.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, borderColor: 'rgba(255,107,0,0.3)' }}
                  className={`p-8 rounded-2xl border h-full ${
                    i === 2
                      ? 'border-orange/30 bg-gradient-to-b from-orange/10 to-transparent'
                      : 'border-white/5 bg-white/[0.02]'
                  }`}
                >
                  {i === 2 && (
                    <span className="text-xs bg-orange text-white px-3 py-1 rounded-full mb-4 inline-block">Most Popular</span>
                  )}
                  <h3 className="text-2xl font-bold font-montserrat mb-1">{t.tier}</h3>
                  <p className="text-orange text-sm mb-6">{t.followers} followers</p>
                  <ul className="space-y-3">
                    {t.perks.map((p) => (
                      <li key={p} className="text-gray text-sm flex items-center gap-2">
                        <span className="text-orange text-xs">✦</span> {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax */}
      <section className="py-16 overflow-hidden">
        <ParallaxText speed={0.3}>
          <h2 className="text-[8rem] md:text-[12rem] font-bold font-montserrat gradient-text uppercase tracking-tight leading-none text-center">
            Creators
          </h2>
        </ParallaxText>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-orange text-sm font-semibold uppercase tracking-[0.2em] mb-4">Apply Now</p>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
                Join Our <span className="gradient-text">Creator Network</span>
              </h2>
              <p className="text-gray text-lg">Fill out the form below and our team will review your application within 48 hours.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Primary Platform</label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white"
                  >
                    <option value="" className="bg-dark">Select Platform</option>
                    <option value="instagram" className="bg-dark">Instagram</option>
                    <option value="youtube" className="bg-dark">YouTube</option>
                    <option value="tiktok" className="bg-dark">TikTok</option>
                    <option value="twitter" className="bg-dark">Twitter/X</option>
                    <option value="linkedin" className="bg-dark">LinkedIn</option>
                    <option value="other" className="bg-dark">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Social Handle</label>
                  <input
                    type="text"
                    value={formData.handle}
                    onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray/50"
                    placeholder="@yourhandle"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Follower Count</label>
                  <select
                    value={formData.followers}
                    onChange={(e) => setFormData({ ...formData, followers: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white"
                  >
                    <option value="" className="bg-dark">Select Range</option>
                    <option value="1k-10k" className="bg-dark">1K - 10K</option>
                    <option value="10k-50k" className="bg-dark">10K - 50K</option>
                    <option value="50k-100k" className="bg-dark">50K - 100K</option>
                    <option value="100k-500k" className="bg-dark">100K - 500K</option>
                    <option value="500k-1m" className="bg-dark">500K - 1M</option>
                    <option value="1m+" className="bg-dark">1M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Content Niche</label>
                  <input
                    type="text"
                    value={formData.niche}
                    onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray/50"
                    placeholder="e.g. Fashion, Tech, Food"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray mb-2">Tell us about your content</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray/50 resize-none"
                  placeholder="Share what makes your content unique..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange hover:bg-[#ff8533] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.3)]"
              >
                {submitted ? '✓ Application Submitted!' : 'Submit Application'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
