<template>
  <main class="flex">
    <section class="mx-auto grid grid-cols-1 md:grid-cols-2">
      <div
        v-for="(guide, key) in guides"
        class="grid grid-cols-1 p-3 m-2 border border-indigo-600"
        :key="key"
      >
        <div class="grid grid-cols-2">
          <span class="pr-2">
            Beneficiado: <strong>{{ guide.benefited }}</strong>
          </span>

          <span>
            Profissional: <strong>{{ guide.professional }}</strong>
          </span>
        </div>

        <div>
          <p>{{ guide.description }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { api } from '@/core/index.js';

export default {
  name: 'App',
  data() {
    return { guides: [] }
  },
  async created() {
    this.guides = await api('guides');
  }
}
</script>

<style>
</style>
