# TypedDevs

<pre v-for="member of team">
{{ member }}
<SocialLinks
  :linked-in-handle="member.linkedinHandle"
  :x-handle="member.xHandle"
  :git-hub-handle="member.githubHandle"
  :website="member.website"
/>
</pre>

<script lang="ts" setup>
import { data as team } from '@/components/TeamList/team.data.ts'
import SocialLinks from '@/components/SocialLinks/SocialLinks.vue'
</script>
