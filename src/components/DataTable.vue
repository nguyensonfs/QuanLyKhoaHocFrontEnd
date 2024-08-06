<template>
  <div>
    <v-data-table :headers="headers" :items="items" item-key="id">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="openDeleteDialog(item)"
          >mdi-delete</v-icon
        >
      </template>
    </v-data-table>
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">Xác nhận xóa</v-card-title>
        <v-card-text>Bạn có chắc chắn muốn xóa mục này?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDeleteDialog"
            >Hủy</v-btn
          >
          <v-btn color="red darken-1" text @click="deleteItem(item)">Xóa</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  props: {
    headers: Array,
    moduleName: String,
  },

  computed: {
    ...mapState({
      items(state) {
        return state[this.moduleName].items;
      },
      deleteDialog(state) {
        return state[this.moduleName].deleteDialog;
      },
    }),
  },
  methods: {
    fetchItems() {
      this.$store.dispatch(`${this.moduleName}/fetchItems`);
    },
    openDeleteDialog(item) {
      this.$store.dispatch(`${this.moduleName}/openDeleteDialog`, item);
    },
    closeDeleteDialog() {
      this.$store.dispatch(`${this.moduleName}/closeDeleteDialog`);
    },
    deleteItem() {
      this.$store.dispatch(`${this.moduleName}/deleteItem`);
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>
