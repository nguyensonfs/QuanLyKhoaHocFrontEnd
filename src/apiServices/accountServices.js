import * as request from "@/utils/request";

export const getAccounts = async () => {
  try {
    const res = await request.get("Accounts");
    return res.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

export const postAccount = async (data) => {
  try {
    const res = await request.post("Accounts", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    console.error("Error creating account:", error);
    throw error;
  }
};

export const putAccount = async (accountId, data) => {
  try {
    const res = await request.put(`Accounts/${accountId}`, data);
    return res;
  } catch (error) {
    console.error("Error updating account:", error);
    throw error;
  }
};

export const deleteAccount = async (accountId) => {
  try {
    const res = await request.del(`Accounts/${accountId}`);
    return res;
  } catch (error) {
    console.error("Error deleting account:", error);
    throw error;
  }
};
