interface ContentProps {
  currentSection: string
}

const content = {
  'installation': {
    title: 'Installation',
    content: `
# Installation

You can set up your environment with a single command:

\`\`\`bash
curl -fsSL https://emily.tech/install.sh | sudo bash
\`\`\`

## Supported Distributions

- **Ubuntu Server** (20.04 LTS and newer)
- **CentOS** (7 and newer)
- **Debian** (10 and newer)

> **Note**: This setup is optimized for server environments.

## Core Components

The installation includes:
- Starship Prompt
- Server Status MOTD System
- Hardened Shell Configurations
- Security Optimizations

## Server Utilities

Essential tools that get installed:
- \`figlet\`: ASCII art text generator
- \`jq\`: JSON processor
- \`zsh\`: Z Shell
- \`sysstat\`: System performance monitoring
- \`htop\`: Interactive process viewer
- \`neofetch\`: System information tool
    `
  },
  'security': {
    title: 'Security Features',
    content: `
# Security Features

LunarShell includes comprehensive security features designed for server environments:

## SSH Hardening

- Limited authentication attempts
- Key-based authentication enforcement
- Secure default configurations
- Access logging enabled

## Firewall Configuration

- Strict default rules
- Cloudflare IP allowlisting
- Automatic port protection
- Smart access control

## System Security

- Secure shell defaults
- Enhanced logging
- Automated security updates
- System access monitoring

## Best Practices

All security configurations follow industry best practices and are regularly updated to address new security concerns.
    `
  },
  'configuration': {
    title: 'Configuration',
    content: `
# Configuration

## MOTD Customization

The Message of the Day can be customized by editing:

\`\`\`bash
/etc/profile.d/sshmotd.sh
\`\`\`

## Shell Configuration Files

### Main Configuration Files
- Bash configuration: \`/etc/bash.bashrc\`
- Zsh configuration: \`/etc/zsh/zshrc.local\`
- Starship configuration: \`/etc/starship.toml\`

### Custom Settings

You can customize various aspects of your shell:
- Prompt appearance
- System information display
- Security settings
- Package management preferences

## Advanced Configuration

For advanced users, additional configuration options are available in:
- \`~/.config/lunar/\` - User-specific settings
- \`/etc/lunar/\` - System-wide configurations
    `
  },
  'customization': {
    title: 'Customization',
    content: `
# Customization

## Prompt Customization

LunarShell uses Starship for its prompt, offering extensive customization options:

\`\`\`toml
# /etc/starship.toml
[character]
success_symbol = "[➜](bold green)"
error_symbol = "[✗](bold red)"

[directory]
style = "blue bold"
truncate_to_repo = true

[git_branch]
style = "purple"
symbol = "🌱 "
\`\`\`

## MOTD Customization

Customize your server's Message of the Day:

\`\`\`bash
# /etc/profile.d/sshmotd.sh
# Add custom system information
# Modify display formatting
# Include additional metrics
\`\`\`

## Theme Options

LunarShell supports various color schemes and formatting options to match your preferences.
    `
  },
  'commands': {
    title: 'Commands',
    content: `
# Available Commands

## System Management

- \`lunar status\`: Display system status and metrics
- \`lunar update\`: Update system and components
- \`lunar secure\`: Run security checks and hardening
- \`lunar config\`: Configure LunarShell settings

## Security Tools

- \`lunar firewall\`: Manage firewall rules
- \`lunar ssh\`: Configure SSH settings
- \`lunar audit\`: Run security audit
- \`lunar logs\`: View security logs

## Customization Commands

- \`lunar theme\`: Manage shell themes
- \`lunar prompt\`: Customize prompt settings
- \`lunar motd\`: Configure MOTD display
    `
  },
  'firewall': {
    title: 'Firewall Configuration',
    content: `
# Firewall Configuration

LunarShell implements a robust firewall configuration using UFW (Uncomplicated Firewall) with smart defaults and automatic configuration.

## Default Policy

The base firewall configuration follows a strict security model:

\`\`\`bash
# Default policies
ufw default deny incoming   # Block all incoming traffic by default
ufw default allow outgoing  # Allow all outgoing traffic
\`\`\`

## Smart SSH Access

The firewall automatically configures SSH access based on your connection:

\`\`\`bash
# Allows SSH access from your current IP
current_ip=$(echo "$SSH_CLIENT" | cut -d' ' -f 1)
ufw allow from $current_ip to any port 22 comment 'Allow current SSH IP'
\`\`\`

## Cloudflare Integration

LunarShell automatically configures access for Cloudflare IPs:

\`\`\`bash
# Fetches and configures Cloudflare IPs
curl -s https://www.cloudflare.com/ips-v4
curl -s https://www.cloudflare.com/ips-v6

# Each Cloudflare IP is automatically allowed
ufw allow from $CLOUDFLARE_IP comment 'Cloudflare IP'
\`\`\`

## Pterodactyl Support

Built-in support for Pterodactyl game panel:

\`\`\`bash
# Game panel ports
40001-40010  # Default game ports
25566-25580  # Minecraft ports
6379         # Redis
27017        # MongoDB
3306         # MySQL
\`\`\`

## Manual Configuration

You can manage the firewall using the \`lunar\` command:

\`\`\`bash
# Check firewall status
lunar firewall status

# Allow a new port
lunar firewall allow <port>

# Remove a rule
lunar firewall delete <rule_number>
\`\`\`
    `
  },
  'ssh': {
    title: 'SSH Hardening',
    content: `
# SSH Hardening

LunarShell implements comprehensive SSH security hardening measures to protect your server from unauthorized access.

## Key Security Settings

\`\`\`bash
# /etc/ssh/sshd_config
LogLevel VERBOSE
MaxAuthTries 2
MaxSessions 2
AllowAgentForwarding no
AllowTcpForwarding no
TCPKeepAlive no
Compression no
ClientAliveCountMax 2
PasswordAuthentication no
PermitRootLogin no
X11Forwarding no
\`\`\`

## Authentication

- **Password Authentication**: Disabled by default
- **Public Key Authentication**: Required
- **Root Login**: Disabled
- **Max Auth Tries**: Limited to 2 attempts
- **Session Limits**: Maximum 2 concurrent sessions

## Connection Security

- **TCP Forwarding**: Disabled
- **X11 Forwarding**: Disabled
- **Agent Forwarding**: Disabled
- **TCP Keep Alive**: Disabled
- **Compression**: Disabled to prevent CRIME attacks

## Monitoring

- **Verbose Logging**: Enabled for better security tracking
- **Client Alive Checking**: Enabled with strict timeouts
- **Session Monitoring**: Active session tracking

## Custom Configuration

You can manage SSH settings using:

\`\`\`bash
# View current SSH status
lunar ssh status

# Add new authorized key
lunar ssh add-key

# View SSH logs
lunar ssh logs
\`\`\`
    `
  },
  'updates': {
    title: 'Auto Updates',
    content: `
# Automatic Updates

LunarShell includes a comprehensive automatic update system to keep your server secure and up-to-date.

## Update Configuration

Updates are managed through several components:

1. **System Updates**
   - Security updates are automatically installed
   - Non-security updates require approval
   - Kernel updates are handled separately

2. **LunarShell Updates**
   - Core component updates
   - Security patch deployment
   - Configuration updates

3. **Package Updates**
   - Dependency management
   - Version control
   - Compatibility checks

## Update Schedule

\`\`\`bash
# Daily
- Security vulnerability checks
- Critical security patches
- System health monitoring

# Weekly
- Non-critical updates
- Package updates
- Configuration optimization

# Monthly
- Major version updates
- System-wide audits
- Performance optimization
\`\`\`

## Manual Control

You can manage updates using:

\`\`\`bash
# Check for updates
lunar update check

# Apply security updates
lunar update security

# View update history
lunar update history

# Configure update settings
lunar update config
\`\`\`

## Rollback Support

In case of issues, LunarShell supports update rollbacks:

\`\`\`bash
# List available rollback points
lunar rollback list

# Rollback to previous state
lunar rollback apply
\`\`\`
    `
  },
  'quick-start': {
    title: 'Quick Start',
    content: `
# Quick Start Guide

After installing LunarShell, here's how to get started with its key features.

## First Login

After your first login, you'll notice:
- Enhanced shell prompt with Starship
- System information display (MOTD)
- Improved command completion
- Syntax highlighting

## Essential Commands

### System Status
\`\`\`bash
# View system status and metrics
lunar status

# Check security status
lunar secure status

# View active services
lunar service list
\`\`\`

### Security Management
\`\`\`bash
# View firewall status
lunar firewall status

# Check SSH configuration
lunar ssh status

# View security logs
lunar logs view
\`\`\`

### System Updates
\`\`\`bash
# Check for updates
lunar update check

# Apply security updates
lunar update security

# View update history
lunar update history
\`\`\`

## Basic Configuration

### Shell Configuration
Your main configuration files are located at:
\`\`\`bash
~/.config/lunar/config.yml    # User settings
/etc/lunar/system.yml         # System settings
/etc/starship.toml           # Prompt settings
\`\`\`

### Security Settings
Quick security configurations:
\`\`\`bash
# Add SSH key
lunar ssh add-key

# Allow new firewall port
lunar firewall allow <port>

# Enable additional security features
lunar secure enable
\`\`\`

## Common Tasks

### System Administration
\`\`\`bash
# Monitor system resources
lunar monitor

# View service status
lunar service status <service>

# Check logs
lunar logs view --service=<service>
\`\`\`

### User Management
\`\`\`bash
# Add new user
lunar user add <username>

# Grant sudo access
lunar user grant-sudo <username>

# List users
lunar user list
\`\`\`

### Backup Management
\`\`\`bash
# Create backup
lunar backup create

# List backups
lunar backup list

# Restore backup
lunar backup restore <backup-id>
\`\`\`

## Next Steps

1. Review the [Security Features](security) documentation
2. Explore [Customization](customization) options
3. Check [Configuration](configuration) for advanced settings
4. Set up [Auto Updates](updates) for maintenance
`
  }
}

import ReactMarkdown from 'react-markdown'

export default function Content({ currentSection }: ContentProps) {
  const section = content[currentSection as keyof typeof content]

  if (!section) {
    return (
      <div className="flex-1 bg-[#1a1b26] rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          Select a section
        </h2>
      </div>
    )
  }

  return (
    <div className="flex-1 bg-[#1a1b26] rounded-lg p-8">
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{section.content}</ReactMarkdown>
      </div>
    </div>
  )
} 