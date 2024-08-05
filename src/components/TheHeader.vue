<template>
  <v-app-bar :elevation="3" :height="60" align="center">
    <v-row align="center">
      <v-col cols="auto" class="pa-0 ml-4">
        <v-fade-transition>
          <v-btn
            v-if="isAuthenticated"
            color="primary"
            variant="plain"
            density="compact"
            icon="mdi-menu"
          ></v-btn>
        </v-fade-transition>
      </v-col>

      <v-col cols="auto" :class="customClass" key="auth">
        <v-img
          :width="60"
          :height="60"
          src="../assets/LotusAcademyLogo.svg"
        ></v-img>
      </v-col>

      <v-col cols="auto" class="pa-0 ml-4">
        <v-app-bar-title class="font-headlandOne text-primary"
          >Lotus Academy</v-app-bar-title
        >
      </v-col>
      <v-col></v-col>
      <v-fade-transition>
        <v-col v-if="isAuthenticated" cols="auto">
          <v-row align="center" class="mr-4">
            <v-col class="pa-0 mr-2"
              ><v-avatar :class="customClass" key="auth" size="34px">
                <v-img
                  alt="Avatar"
                  src="../assets/LotusAcademyLogo.svg"
                /> </v-avatar
            ></v-col>
            <v-col class="pa-0 mr-4"><span>Admin</span></v-col>
            <v-col class="pa-0">
              <v-btn
                class="custom-color"
                height="34"
                width="34"
                variant="tonal"
                icon="mdi-menu-down"
              >
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-fade-transition>
    </v-row>
  </v-app-bar>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  computed: {
    ...mapState({
      isAuthenticated: (state) => state.isAuthenticated,
    }),
    customClass() {
      return this.isAuthenticated ? "pa-0 ml-4" : "pa-0 ml-120";
    },
  },
};
</script>
<style lang="scss" scoped>
.font-headlandOne {
  font-family: "Headland One", serif;
}

.custom-color {
  background: #c4c4c4;
}

.ml-120 {
  margin-left: 120px !important;
}
</style>
