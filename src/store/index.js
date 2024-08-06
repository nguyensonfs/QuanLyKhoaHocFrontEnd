import { createStore } from "vuex";
import account from "./modules/account";
import article from "./modules/article";
import course from "./modules/course";
import dialogStore from "./modules/dialog";
import student from "./modules/student";

const store = createStore({
  modules: {
    dialogStore,
    account,
    article,
    course,
    student,
  },
});

export default store;
