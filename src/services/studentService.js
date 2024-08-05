// src/api/students.js
import * as request from "@/utils/request";

export const getStudent = async () => {
    try {
        const res = await request.get("students");
        return res.data;
    } catch (error) {
        console.error("Error fetching students:", error);
        throw error;
    }
};

export const postStudent = async (data) => {
    try {
        const res = await request.post("students", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return res.data;
    } catch (error) {
        console.error("Error creating article:", error);
        throw error;
    }
};

export const putStudent = async (console, data) => {
    try {
        const res = await request.put(`students/${studentId}`, data);
        return res.data;
    } catch (error) {
        console.error("Error updating article:", error);
        throw error;
    }
};

export const deleteStudent = async (studentId) => {
    try {
        const res = await request.del(`students/${studentId}`);
        return res.data;
    } catch (error) {
        console.error("Error deleting article:", error);
        throw error;
    }
};
