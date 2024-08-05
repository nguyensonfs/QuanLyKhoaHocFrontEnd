<template>
  <v-card>
    <DataTable :headers="headers" moduleName="student" />
  </v-card>
</template>
<script>
import DataTable from "@/components/DataTable.vue";

export default {
  components: { DataTable },
  data() {
    return {
      headers: [
        {
          title: "Họ Tên",
          align: "start",
          sortable: false,
          key: "hoTen",
        },
        { title: "Ngày Sinh", key: "ngaySinh" },
        { title: "Số Điện Thoại", key: "soDienThoai" },
        { title: "Email", key: "email" },
        { title: "Tỉnh Thành", key: "tinhThanh" },
        { title: "Actions", key: "actions", sortable: false },
      ],
    };
  },
};
</script>
