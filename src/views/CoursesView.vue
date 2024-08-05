<template>
  <v-card>
    <DataTable :headers="headers" moduleName="course" />
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
          title: "Tên Khoá Học",
          align: "start",
          sortable: false,
          key: "tenKhoaHoc",
        },
        { title: "Thời Gian Học", key: "thoiGianHoc" },
        { title: "Học Phí", key: "hocPhi" },
        { title: "Số Học Viên", key: "soHocVien" },
        { title: "Số Lượng Môn", key: "soLuongMon" },
        { title: "Loại Khoá Học", key: "loaiKhoaHocID" },
        { title: "Actions", key: "actions", sortable: false },
      ],
    };
  },
};
</script>
