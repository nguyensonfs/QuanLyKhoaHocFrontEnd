<template>
  <v-card>
    <DataTable :headers="headers" moduleName="article" />
  </v-card>
</template>
<script>
import DataTable from "@/components/DataTable.vue";

export default {
  components: { DataTable },
  data() {
    return {
      headers: [
        { title: "Tên Bài Viết", key: "tenBaiViet" },
        { title: "Tên Tác Giả", key: "tenTacGia" },
        { title: "Thời Gian Tạo", key: "thoiGianTao" },
        { title: "Actions", key: "actions", sortable: false },
      ],
    };
  },
};
</script>
