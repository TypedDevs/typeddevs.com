# TypedDevs

<pre v-for="member of team">
{{ member }}
</pre>

<script lang="ts" setup>
import { data as team } from '@/team/team.data.ts'
</script>
