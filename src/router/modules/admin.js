const admin = [
  {
    path: "/admin",
    name: "admin-dashboard",
    component: () => import("@/layouts/AdminLayout.vue"),
    meta: {
      breadcumb: "Dashboard",
    },
    children: [
      {
        path: "accounts",
        name: "admin-accounts",
        component: () => import("@/views/AccountsView.vue"),
        meta: {
          breadcumb: "Quản lý tài khoản",
          title: "Quản lý tài khoản",
        },
      },
      {
        path: "students",
        name: "admin-students",
        component: () => import("@/views/StudentsView.vue"),
        meta: {
          breadcumb: "Quản lý học viên",
          title: "Quản lý học viên",
        },
      },
      {
        path: "courses",
        name: "admin-courses",
        component: () => import("@/views/CoursesView.vue"),
        meta: {
          breadcumb: "Quản lý khoá học",
          title: "Quản lý khoá học",
        },
      },
      {
        path: "articles",
        name: "admin-articles",
        component: () => import("@/views/ArticlesView.vue"),
        meta: {
          breadcumb: "Quản lý bài viết",
          title: "Quản lý bài viết",
        },
      },
    ],
  },
];

export default admin;
