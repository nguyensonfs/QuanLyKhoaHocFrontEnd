<template>
  <v-container>
    <v-row justify="center">
      <v-col class="d-flex pa-0 mt-9" justify="center" cols="auto">
        <div class="text-center">
          <p class="font-weight-bold text-grey-darken-2 text-uppercase mb-4">
            Đăng Nhập
          </p>
          <v-divider
            length="348"
            :thickness="2"
            class="border-opacity-80"
          ></v-divider>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-95">
      <v-col class="d-flex" justify="center" cols="auto">
        <v-card variant="outlined" class="pa-5" width="348">
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-text-field
                v-model="username"
                :rules="[rules.required]"
                label="Tên đăng nhập"
                required
                variant="outlined"
                class="mb-4"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="[rules.required]"
                label="Mật khẩu"
                type="password"
                required
                variant="outlined"
                class="mb-4"
                append-inner-icon="mdi-eye-off"
              ></v-text-field>
              <v-btn :disabled="!valid" block color="primary">Đăng nhập</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      username: "",
      password: "",
      rules: {
        required: (value) => !!value || "Trường này là bắt buộc",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.mt-95 {
  margin-top: 95px !important;
}
</style>
