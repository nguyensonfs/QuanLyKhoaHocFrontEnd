// src/api/courses.js
import * as request from "@/utils/request";

export const getCourse = async () => {
    try {
        const res = await request.get("courses");
        return res.data;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    }
};

export const postCourse = async (data) => {
    try {
        const res = await request.post("courses", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return res.data;
    } catch (error) {
        console.error("Error creating courses:", error);
        throw error;
    }
};

export const putCourse = async (console, data) => {
    try {
        const res = await request.put(`courses/${courseId}`, data);
        return res.data;
    } catch (error) {
        console.error("Error updating courses:", error);
        throw error;
    }
};

export const deleteCourse = async (courseId) => {
    try {
        const res = await request.del(`courses/${courseId}`);
        return res.data;
    } catch (error) {
        console.error("Error deleting courses:", error);
        throw error;
    }
};
