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
                      <v-row>
                        <!-- <v-col cols="12" md="6">
                          <v-select
                            v-model="form.course"
                            :items="courses"
                            label="Chọn khóa học"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="form.registrationDate"
                            label="Ngày đăng ký"
                            type="date"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="form.startDate"
                            label="Ngày bắt đầu"
                            type="date"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="form.endDate"
                            label="Ngày kết thúc"
                            type="date"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-select
                            v-model="form.status"
                            :items="statuses"
                            label="Tình trạng học"
                            required
                          ></v-select>
                        </v-col> -->
                      </v-row>
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
    <DataTable :headers="headers" moduleName="student" />
  </v-card>
</template>
<script>
import DataTable from "@/components/DataTable.vue";
import * as request from "@/utils/request";
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
      imageSrc:
        "https://th.bing.com/th/id/R.cb979a51044ff1d707208265c08f43f6?rik=6KsQropxk5X%2b8Q&pid=ImgRaw&r=0", // Initial placeholder image
      form: {
        hoTen: "",
        email: "",
        ngaySinh: "",
        soDienThoai: "",
        tinhThanh: "",
        quanHuyen: "",
        phuongXa: "",
        soNha: "",
        // course: "",
        // registrationDate: "",
        // startDate: "",
        // endDate: "",
        // status: "",
        hinhAnh: null,
      },
      cities: ["City 1", "City 2", "City 3"],
      districts: ["District 1", "District 2", "District 3"],
      wards: ["Ward 1", "Ward 2", "Ward 3"],
      courses: ["Course 1", "Course 2", "Course 3"],
      statuses: ["Status 1", "Status 2", "Status 3"],
      dialog: false,
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageSrc = e.target.result;
        };
        reader.readAsDataURL(file);
        this.form.hinhAnh = file; // Save the file to form data
      }
    },
    async onSave() {
      const formData = new FormData();
      for (const key in this.form) {
        formData.append(key, this.form[key]);
      }

      try {
        const response = await request.post("students", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Form submitted successfully:", response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
      this.dialog = false;
      window.setTimeout(function () {
        window.location.reload();
      }, 2000);
    },
    onCancel() {
      this.dialog = false;
    },
  },
};
</script>
