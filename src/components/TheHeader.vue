<template>
  <v-app-bar :elevation="3" :height="60" align="center">
    <v-row align="center">
      <v-col cols="auto" class="pa-0 ml-4">
        <v-btn
          color="primary"
          variant="plain"
          density="compact"
          icon="mdi-menu"
        ></v-btn>
      </v-col>
      <v-col cols="auto" class="pa-0 ml-4">
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
      <v-col cols="auto">
        <v-row align="center" class="mr-4">
          <v-col class="pa-0 mr-2"
            ><v-avatar class="custom-color" size="34px">
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
    </v-row>
  </v-app-bar>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.font-headlandOne {
  font-family: "Headland One", serif;
}

.custom-color {
  background: #c4c4c4;
}
</style>
