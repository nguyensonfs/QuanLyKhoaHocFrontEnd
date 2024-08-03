<template>
  <v-row>
    <v-col class="pa-0">
      <v-breadcrumbs class="pt-3 pb-2" :items="breadcumbs" divider=">">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            class="text-grey-lighten-1"
            :to="{ name: item.name }"
          >
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "BreadCumb",
  computed: {
    breadcumbs() {
      return this.$route.matched.map((route) => ({
        text: route.meta.breadcumb,
        name: route.name,
      }));
    },
  },
};
</script>
