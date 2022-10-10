import {
  faGithubSquare,
  faTwitch,
  faYoutube,
  faGitlab
} from '@fortawesome/free-brands-svg-icons'

export const skillFilters = [
  {
    id: 'all',
    title: 'All'
  },
  {
    id: 'react',
    title: 'React'
  },
  {
    id: 'nextjs',
    title: 'NextJS'
  },
  {
    id: 'tailwindcss',
    title: 'TailwindCSS'
  },
  {
    id: 'typescript',
    title: 'Typescript'
  },
  {
    id: 'graphql',
    title: 'GraphQL'
  },
  {
    id: 'polygon',
    title: 'Polygon'
  },
  {
    id: 'mysql',
    title: 'MySQL'
  }
]

export const navLinks = [
  {
    id: 'work',
    name: 'Work',
    hrefValue: '#Work'
  },
  {
    id: 'resume',
    name: 'Resume',
    hrefValue: '#Resume'
  },
  {
    id: 'contact',
    name: 'Contact',
    hrefValue: '#Contact'
  }
]

export const brandLinks = [
  {
    id: 'github',
    icon: faGithubSquare,
    hrefLink: 'https://www.github.com/malachivargas'
  },

  {
    id: 'twitch',
    icon: faTwitch,
    hrefLink: 'https://www.twitch.tv/malonbc'
  },
  {
    id: 'youtube',
    icon: faYoutube,
    hrefLink: 'https://www.youtube.com/channel/UCYOQUCw5YzsHSh_N0yRGgHg'
  },
  {
    id: 'gitlab',
    icon: faGitlab,
    hrefLink: 'https://gitlab.com/MalachiVargas'
  }
]
