// src/api/articles.js
import * as request from "@/utils/request";

export const getArticle = async () => {
    try {
        const res = await request.get("articles");
        return res.data;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
};

export const postArticle = async (data) => {
    try {
        const res = await request.post("articles", data, {
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

export const putArticle = async (console, data) => {
    try {
        const res = await request.put(`articles/${articleId}`, data);
        return res.data;
    } catch (error) {
        console.error("Error updating article:", error);
        throw error;
    }
};

export const deleteArticle = async (articleId) => {
    try {
        const res = await request.del(`articles/${articleId}`);
        return res.data;
    } catch (error) {
        console.error("Error deleting article:", error);
        throw error;
    }
};
