import { createContentLoader } from 'vitepress'

export interface Member {
  name: string
  image: string
  linkedinHandle: string | null
  xHandle: string | null
  githubHandle: string | null
  website: string | null
}

export default createContentLoader<Member[]>('components/TeamList/data/*.md', {
  transform(projects) {
    return projects
      .map(
        (member): Member => ({
          name: member.frontmatter.name,
          image: member.frontmatter.image,
          linkedinHandle: member.frontmatter.linkedin_handle,
          xHandle: member.frontmatter.x_handle,
          githubHandle: member.frontmatter.github_handle,
          website: member.frontmatter.website,
        }),
      )
      .sort(() => Math.sign(Math.random() - 0.5))
  },
})
