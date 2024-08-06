<template>
  <v-card>
    <div class="text-center pa-4">
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        width="1000"
      >
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            prepend-icon="mdi-cog"
            size="small"
            text="Add"
            v-bind="activatorProps"
          ></v-btn>
        </template>

        <v-card>
          <v-container>
            <v-card class="pa-5">
              <v-card-title class="text-h5">Cập nhật học viên</v-card-title>
              <v-card-text>
                <v-form ref="form">
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-avatar size="120" class="mb-3">
                        <v-img
                          :src="imageSrc"
                          width="110"
                          height="110"
                          alt="Avatar Placeholder"
                        ></v-img>
                      </v-avatar>
                      <v-btn color="primary" @click="triggerFileInput"
                        >Thêm ảnh</v-btn
                      >
                      <input
                        ref="fileInput"
                        type="file"
                        accept="image/*"
                        @change="onFileChange"
                        style="display: none"
                      />
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="form.hoTen"
                            label="Họ tên"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="form.email"
                            label="Email"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="form.ngaySinh"
                            label="Ngày sinh"
                            type="date"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="form.soDienThoai"
                            label="Số điện thoại"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-select
                            v-model="form.tinhThanh"
                            :items="cities"
                            label="Tỉnh / Thành phố"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-select
                            v-model="form.quanHuyen"
                            :items="districts"
                            label="Quận / Huyện"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-select
                            v-model="form.phuongXa"
                            :items="wards"
                            label="Phường / Xã"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="form.soNha"
                            label="Số nhà"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row> </v-row>
                    </v-col>
                  </v-row>
                  <v-row class="mt-5">
                    <v-col cols="12" class="text-center">
                      <v-btn color="primary" @click="onSave">Lưu</v-btn>
                      <v-btn color="red" @click="onCancel">Hủy</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-container>
        </v-card>
      </v-dialog>
    </div>
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
      dialog: false,
    };
  },
};
</script>
