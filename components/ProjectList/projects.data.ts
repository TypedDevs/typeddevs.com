import { createContentLoader } from 'vitepress'

export interface Project {
  name: string
  description: string
  logo: string
  xHandle: string | null
  gitHubHandle: string | null
  website: string | null
}

export default createContentLoader<Project[]>('components/ProjectList/data/*.md', {
  transform(projects) {
    return projects
      .map(
        (member): Project => ({
          name: member.frontmatter.name,
          description: member.frontmatter.description,
          logo: member.frontmatter.logo,
          xHandle: member.frontmatter.x_handle,
          gitHubHandle: member.frontmatter.github_handle,
          website: member.frontmatter.website,
        }),
      )
      .sort(() => Math.sign(Math.random() - 0.5))
  },
})
