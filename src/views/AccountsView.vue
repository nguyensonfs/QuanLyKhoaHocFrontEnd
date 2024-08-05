<template>
  <v-card>
    <DataTable :headers="headers" moduleName="account" />
  </v-card>
</template>
<script>
import DataTable from "@/components/DataTable.vue";

export default {
  components: { DataTable },
  data() {
    return {
      headers: [
        { title: "Tên Người Dùng", key: "tenNguoiDung" },
        { title: "Tài khoản", key: "tenDangNhap" },
        { title: "Quyền", key: "quyenHanID" },
        { title: "Actions", key: "actions", sortable: false },
      ],
    };
  },
};
</script>
