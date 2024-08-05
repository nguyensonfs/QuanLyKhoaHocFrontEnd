import { createStore } from "vuex";
import account from "./modules/account";
import article from "./modules/article";
import authStore from "./modules/auth";
import course from "./modules/course";
import dialogStore from "./modules/dialog";
import student from "./modules/student";

const store = createStore({
  modules: {
    dialogStore,
    authStore,
    account,
    article,
    course,
    student,
  },
});

export default store;
