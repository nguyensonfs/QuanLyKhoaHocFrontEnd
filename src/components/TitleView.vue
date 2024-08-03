<template>
  <v-row>
    <v-col class="py-0 px-4">
      <div>
        <p class="text-h5 text-grey-darken-1">{{ title }}</p>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    title: "",
  }),
  watch: {
    $route(to) {
      this.title = to.meta.title;
    },
  },
  created() {
    this.title = this.$route.meta.title;
  },
};
</script>
