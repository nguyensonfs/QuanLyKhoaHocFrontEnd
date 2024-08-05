// src/api/accounts.js
import * as request from "@/utils/request";

export const login = async (data) => {
  try {
    const res = await request.post("login", {
      tenDangNhap: data.tenDangNhap,
      matKhau: data.matKhau,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};
