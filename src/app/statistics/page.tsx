'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/app/(home)/background/page'
import { FaStar, FaCodeBranch, FaEye, FaExclamationCircle } from 'react-icons/fa'

interface RepoStats {
  stars: number
  forks: number
  watchers: number
  issues: number
  name: string
}

export default function StatisticsPage() {
  const [stats, setStats] = useState<{ [key: string]: RepoStats }>({
    shell: { stars: 0, forks: 0, watchers: 0, issues: 0, name: 'LunarShell' },
    web: { stars: 0, forks: 0, watchers: 0, issues: 0, name: 'LunarShell-Web' }
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const repos = ['LunarShell', 'LunarShell-Web']
        const results = await Promise.all(
          repos.map(repo =>
            fetch(`https://api.github.com/repos/ohemilyy/${repo}`)
              .then(res => res.json())
          )
        )

        setStats({
          shell: {
            stars: results[0].stargazers_count,
            forks: results[0].forks_count,
            watchers: results[0].subscribers_count,
            issues: results[0].open_issues_count,
            name: 'LunarShell'
          },
          web: {
            stars: results[1].stargazers_count,
            forks: results[1].forks_count,
            watchers: results[1].subscribers_count,
            issues: results[1].open_issues_count,
            name: 'LunarShell-Web'
          }
        })
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error)
      }
    }

    fetchStats()
  }, [])

  const StatCard = ({ title, value, icon: Icon }: { title: string, value: number, icon: any }) => (
    <div className="bg-[#0a0a0a] rounded-lg p-6 border border-white/5">
      <div className="flex items-center space-x-4">
        <Icon className="text-2xl text-purple-400" />
        <div>
          <h3 className="text-gray-400 text-sm">{title}</h3>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Project Statistics
            </h1>
            <p className="text-gray-400 text-center mb-16">
              Real-time statistics from our GitHub repositories
            </p>

            {Object.values(stats).map((repoStats) => (
              <div key={repoStats.name} className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">{repoStats.name}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard title="Stars" value={repoStats.stars} icon={FaStar} />
                  <StatCard title="Forks" value={repoStats.forks} icon={FaCodeBranch} />
                  <StatCard title="Watchers" value={repoStats.watchers} icon={FaEye} />
                  <StatCard title="Open Issues" value={repoStats.issues} icon={FaExclamationCircle} />
                </div>
              </div>
            ))}

            <div className="mt-12 bg-[#0a0a0a] rounded-lg p-6 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Total Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">
                    {stats.shell.stars + stats.web.stars}
                  </p>
                  <p className="text-sm text-gray-400">Total Stars</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">
                    {stats.shell.forks + stats.web.forks}
                  </p>
                  <p className="text-sm text-gray-400">Total Forks</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">
                    {stats.shell.watchers + stats.web.watchers}
                  </p>
                  <p className="text-sm text-gray-400">Total Watchers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">2</p>
                  <p className="text-sm text-gray-400">Repositories</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
} 