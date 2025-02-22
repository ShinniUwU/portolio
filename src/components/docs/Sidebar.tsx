interface SidebarProps {
  currentSection: string
  setCurrentSection: (section: string) => void
}

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    subsections: [
      { id: 'installation', title: 'Installation' },
      { id: 'quick-start', title: 'Quick Start' },
      { id: 'configuration', title: 'Configuration' }
    ]
  },
  {
    id: 'features',
    title: 'Features',
    subsections: [
      { id: 'security', title: 'Security Features' },
      { id: 'customization', title: 'Customization' },
      { id: 'commands', title: 'Commands' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced',
    subsections: [
      { id: 'firewall', title: 'Firewall Configuration' },
      { id: 'ssh', title: 'SSH Hardening' },
      { id: 'updates', title: 'Auto Updates' }
    ]
  }
]

export default function Sidebar({ currentSection, setCurrentSection }: SidebarProps) {
  return (
    <div className="w-64 shrink-0">
      <div className="sticky top-32 bg-[#0f1117] rounded-lg p-6 shadow-xl border border-gray-800">
        <nav>
          {sections.map((section) => (
            <div key={section.id} className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.subsections.map((subsection) => (
                  <li key={subsection.id}>
                    <button
                      onClick={() => setCurrentSection(subsection.id)}
                      className={`w-full text-left px-3 py-1.5 rounded transition-colors ${
                        currentSection === subsection.id
                          ? 'bg-purple-500 bg-opacity-20 text-purple-400'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {subsection.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
} 