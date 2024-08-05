<template>
  <v-btn
    slim
    variant="flat"
    :style="{
      backgroundColor: bgColor,
      color: textColor,
      width: width,
      height: height,
    }"
    >{{ title }}
  </v-btn>
</template>

<script>
export default {
  props: {
    title: String,
    bgColor: {
      type: String,
      default: "#ffffff", // Màu nền mặc định
    },
    textColor: {
      type: String,
      default: "#000000", // Màu chữ mặc định
    },
    width: {
      type: String,
      default: "auto", // Chiều rộng mặc định
    },
    height: {
      type: String,
      default: "auto", // Chiều cao mặc định
    },
  },
};
</script>
