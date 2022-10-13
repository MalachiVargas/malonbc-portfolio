import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'

export const projects = [
  {
    id: 'twitter-clone',
    image: '/twitter-clone.svg',
    alt: 'twitter-clone',
    title: 'My Twitter Clone',
    skills: ['React', 'NextJS', 'Typescript', 'TailwindCSS'],
    description:
      "A twitter clone displaying what I've learned about using NextAuth and twitter api to sign in, and with Sanity's CMS to post and maintain content.",
    repository: 'Gitlab',
    repositoryIcon: faGitlab,
    repositoryLink: 'https://gitlab.com/MalachiVargas/my-twitter-clone',
    liveSiteLink: 'https://my-twitter-clone-coral.vercel.app/'
  },
  {
    id: 'modern-ui-ux',
    image: '/modern-shadow.svg',
    alt: 'modern-shadow',
    title: 'Modern UI/UX Site',
    skills: ['React', 'TailwindCSS'],
    description:
      'A modern UI/UX design to focus on building skills with more TailwindCSS and efficent use of React components.',
    repository: 'Gitlab',
    repositoryIcon: faGitlab,
    repositoryLink: 'https://gitlab.com/MalachiVargas/my-modern-ui-ux-site',
    liveSiteLink: 'https://my-modern-ui-ux-site.vercel.app/'
  }
]

type SkillsType = {
  [key: string]: number
}

const skillsArray = projects.map((project) => project.skills)

export const skillsQuantified = skillsArray
  .flat()
  .reduce(
    (skill, count) => ((skill[count] = (skill[count] || 0) + 1), skill),
    {} as SkillsType
  )
