'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  {
    title: 'Anatomy of a Human-Following Robot',
    tag: 'Hardware / Robotics',
    desc: 'Breaking down the sensor logic, control flow, and hardware architecture of the robot build from first principles.',
    status: 'coming-soon',
  },
  {
    title: 'How I Think About Control Systems',
    tag: 'Control Systems',
    desc: 'A first-principles walkthrough of feedback, stability, and why PID isn\'t magic — it\'s structured intuition.',
    status: 'coming-soon',
  },
  {
    title: 'C++ Patterns I Actually Use',
    tag: 'Algorithms',
    desc: 'Not textbook C++ — the specific patterns and idioms that come up repeatedly when solving real algorithmic problems.',
    status: 'coming-soon',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-animated grid-pattern">
      {/* Background blobs */}
      <div
        className="fixed top-20 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <Link
            href="/"
            className="font-mono text-xs text-text-muted hover:text-blue-accent transition-colors duration-300 tracking-wider uppercase mb-8 flex items-center gap-2"
          >
            <span>←</span> Back to Home
          </Link>
          <span className="font-mono text-xs text-blue-accent tracking-[0.2em] uppercase">Engineering Journal</span>
          <h1
            className="font-display font-extrabold text-text-primary mt-3 mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Build Log
          </h1>
          <p className="font-body text-text-muted text-base max-w-xl">
            Experiments, breakdowns, and thinking-in-progress. Not a blog — a build log.
          </p>
        </motion.div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-7 flex flex-col gap-5 opacity-70"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-blue-accent/70 border border-blue-accent/20 bg-blue-accent/5 px-3 py-1.5 rounded-full tracking-wider uppercase">
                  {post.tag}
                </span>
                <span className="font-mono text-[10px] text-amber-500/70 border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 rounded-full tracking-wider uppercase">
                  Coming Soon
                </span>
              </div>

              <h3 className="font-display font-bold text-text-primary text-lg leading-snug">
                {post.title}
              </h3>

              <p className="font-body text-sm text-text-muted leading-relaxed flex-1">
                {post.desc}
              </p>

              <button
                disabled
                className="font-mono text-xs text-text-muted/50 border border-white/[0.05] px-4 py-2.5 rounded-lg cursor-not-allowed w-fit"
              >
                Read → (soon)
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
