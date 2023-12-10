<template>
  <div class="social-links__list">
    <a
      v-if="linkedInUserHandle"
      class="social-links__link"
      :href="`https://www.linkedin.com/in/${linkedInUserHandle}/`"
      target="_blank"
      title="LinkedIn"
    >
      <img
        class="social-links__icon"
        src="/images/linkedin.svg"
        alt=""
      />
    </a>

    <a
      v-if="linkedInCompanyHandle"
      class="social-links__link"
      :href="`https://www.linkedin.com/company/${linkedInCompanyHandle}/`"
      target="_blank"
      title="LinkedIn"
    >
      <img
        class="social-links__icon"
        src="/images/linkedin.svg"
        alt=""
      />
    </a>

    <a
      v-if="xHandle"
      class="social-links__link"
      :href="`https://twitter.com/${xHandle}`"
      target="_blank"
      title="X"
    >
      <img
        class="social-links__icon"
        src="/images/x-twitter.svg"
        alt=""
      />
    </a>

    <a
      v-if="gitHubHandle"
      class="social-links__link"
      :href="`https://github.com/${gitHubHandle}`"
      target="_blank"
      title="GitHub"
    >
      <img
        class="social-links__icon"
        src="/images/github.svg"
        alt=""
      />
    </a>

    <a
      v-if="website"
      class="social-links__link"
      :href="website"
      target="_blank"
      title="Website"
    >
      <img
        class="social-links__icon"
        src="/images/website.svg"
        alt=""
      />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    /** Handle (last part of a custom URL) of a LinkedIn user account */
    linkedInUserHandle: {
      required: false,
      default: null,
      type: String as PropType<string | null>,
    },
    /** Handle (last part of a custom URL) of a LinkedIn company account */
    linkedInCompanyHandle: {
      required: false,
      default: null,
      type: String as PropType<string | null>,
    },
    /** Handle of a X account, without the @ */
    xHandle: {
      required: false,
      default: null,
      type: String as PropType<string | null>,
    },
    /** Handle of a GitHub user */
    gitHubHandle: {
      required: false,
      default: null,
      type: String as PropType<string | null>,
    },
    /** Website URL */
    website: {
      required: false,
      default: null,
      type: String as PropType<string | null>,
    },
  },
})
</script>

<style lang="scss">
.social-links {
  $p: &;

  &__list {
    @apply flex w-fit flex-wrap justify-evenly;
  }

  &__link {
    @apply p-2;

    &::after {
      display: none !important;
    }
  }

  &__icon {
    @apply m-0 block h-4 w-4 cursor-pointer object-contain object-center align-text-top transition-opacity;

    #{$p}__link:hover & {
      @apply opacity-75;
    }
  }
}
</style>
