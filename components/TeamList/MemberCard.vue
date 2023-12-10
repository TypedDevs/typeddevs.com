<template>
  <div class="member-card__card">
    <img
      class="member-card__image"
      :src="member.image"
      :alt="`Profile picture of ${member.name}`"
    />

    <strong class="member-card__name">
      {{ member.name }}
    </strong>

    <SocialLinks
      class="member-card__links"
      :linked-in-handle="member.linkedInHandle"
      :x-handle="member.xHandle"
      :git-hub-handle="member.gitHubHandle"
      :website="member.website"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type Member } from '@/components/TeamList/team.data'
import SocialLinks from '@/components/SocialLinks/SocialLinks.vue'

export default defineComponent({
  components: { SocialLinks },
  props: {
    member: {
      required: true,
      type: Object as PropType<Member>,
    },
  },
})
</script>

<style lang="scss">
.member-card {
  &__card {
    @apply bg-gray-100;
  }

  &__image {
    @apply w-full;
  }

  &__name {
    @apply mx-4 mt-2 block text-center;
  }

  &__links {
    @apply w-full px-2;
  }
}
</style>
