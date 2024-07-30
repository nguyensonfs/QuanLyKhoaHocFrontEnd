const admin = [
  {
    path: "/admin",
    component: () => import("@/layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        name: "admin-dashboard",
        component: () => import("@/views/AdminDashboard.vue"),
      },
      {
        path: "accounts",
        name: "admin-accounts",
        component: () => import("@/views/AccountsView.vue"),
      },
      {
        path: "students",
        name: "admin-students",
        component: () => import("@/views/StudentsView.vue"),
      },
      {
        path: "courses",
        name: "admin-courses",
        component: () => import("@/views/CoursesView.vue"),
      },
      {
        path: "articles",
        name: "admin-articles",
        component: () => import("@/views/ArticlesView.vue"),
      },
    ],
  },
];

export default admin;
