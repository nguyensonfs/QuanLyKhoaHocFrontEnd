<template>
  <v-main>
    <TheHeader />
    <LoginComponent />
  </v-main>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import LoginComponent from "@/components/auth/LoginComponent.vue";

export default {
  components: { TheHeader, LoginComponent },
};
</script>
