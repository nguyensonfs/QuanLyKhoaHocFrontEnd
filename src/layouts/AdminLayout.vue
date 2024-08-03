<template>
  <TheHeader />
  <SideBar />
  <v-main>
    <v-container>
      <Breadcumb />
      <TitleView />
      <v-row>
        <v-col>
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import Breadcumb from "@/components/Breadcumb.vue";
import TheHeader from "@/components/TheHeader.vue";
import SideBar from "@/components/SideBar.vue";
import TitleView from "@/components/TitleView.vue";
export default {
  components: { TheHeader, SideBar, Breadcumb, TitleView },
};
</script>
