// Placeholder for future markdown/MDX blog system

export type Post = {
  slug: string
  title: string
  date: string
  tag: string
  description: string
  content?: string
}

// This function will eventually read from /content/posts/*.mdx
export async function getPosts(): Promise<Post[]> {
  return [
    {
      slug: 'anatomy-of-a-human-following-robot',
      title: 'Anatomy of a Human-Following Robot',
      date: '2025-01-01',
      tag: 'Hardware / Robotics',
      description:
        'Breaking down the sensor logic, control flow, and hardware architecture of the robot build from first principles.',
    },
    {
      slug: 'how-i-think-about-control-systems',
      title: 'How I Think About Control Systems',
      date: '2025-02-01',
      tag: 'Control Systems',
      description:
        "A first-principles walkthrough of feedback, stability, and why PID isn't magic — it's structured intuition.",
    },
    {
      slug: 'cpp-patterns-i-actually-use',
      title: 'C++ Patterns I Actually Use',
      date: '2025-03-01',
      tag: 'Algorithms',
      description:
        'Not textbook C++ — the specific patterns and idioms that come up repeatedly when solving real algorithmic problems.',
    },
  ]
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await getPosts()
  return posts.find((p) => p.slug === slug) ?? null
}
