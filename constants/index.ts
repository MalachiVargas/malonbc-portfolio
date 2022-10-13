import { projects, skillsQuantified } from './../data/index'
import {
  faGithubSquare,
  faTwitch,
  faYoutube,
  faGitlab
} from '@fortawesome/free-brands-svg-icons'

export const skillFilters = [
  {
    id: 'all',
    title: 'All',
    count: projects.length
  },
  {
    id: 'react',
    title: 'React',
    count: skillsQuantified.React || 0
  },
  {
    id: 'nextjs',
    title: 'NextJS',
    count: skillsQuantified.NextJS || 0
  },
  {
    id: 'tailwindcss',
    title: 'TailwindCSS',
    count: skillsQuantified.TailwindCSS || 0
  },
  {
    id: 'typescript',
    title: 'Typescript',
    count: skillsQuantified.Typescript || 0
  },
  {
    id: 'graphql',
    title: 'GraphQL',
    count: skillsQuantified.GraphQL || 0
  },
  {
    id: 'polygon',
    title: 'Polygon',
    count: skillsQuantified.Polygon || 0
  },
  {
    id: 'mysql',
    title: 'MySQL',
    count: skillsQuantified.MySQL || 0
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
