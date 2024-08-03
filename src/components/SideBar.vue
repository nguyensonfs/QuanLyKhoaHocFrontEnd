<template>
  <v-navigation-drawer :width="294">
    <v-list density="compact" nav>
      <v-list-item
        class="text-grey-lighten-2 text-h5"
        v-for="(item, index) in items"
        :key="index"
        :prepend-icon="item.icon"
        :title="item.text"
        @click="navigate(item.name)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "SideBar",
  data: () => ({
    items: [
      {
        text: "Quản lý tài khoản",
        name: "admin-accounts",
        icon: "mdi-account",
      },
      {
        text: "Quản lý học viên",
        name: "admin-students",
        icon: "mdi-school",
      },
      { text: "Quản lý khoá học", name: "admin-courses", icon: "mdi-book" },
      { text: "Quản lý bài viết", name: "admin-articles", icon: "mdi-post" },
      { text: "Quản lý chung", name: "admin-articles", icon: "mdi-corn" },
    ],
  }),
  methods: {
    navigate(name) {
      this.$router.push({ name });
    },
  },
};
</script>
