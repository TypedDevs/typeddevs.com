# TypedDevs

<TeamList :team="team" />

<ProjectList :projects="projects" />

<script lang="ts" setup>
import { data as team } from '@/components/TeamList/team.data.ts'
import { data as projects } from '@/components/ProjectList/projects.data.ts'
import TeamList from '@/components/TeamList/TeamList.vue'
import ProjectList from '@/components/ProjectList/ProjectList.vue'
</script>
