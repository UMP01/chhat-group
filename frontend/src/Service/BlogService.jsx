import axios from "axios";

const API_KEY = "7b49f41d08f84809ba508429a073970a";
const BASE_URL = "https://127.0.0.1/api/blogs";

export const fetchNews = async (query) => {
    try {
        // Validate query parameter
        if (typeof query !== "string" || query.trim() === "") {
            throw new Error("Invalid query parameter");
        }

        const response = await axios.get(`${BASE_URL}/everything`, {
            params: {
                q: query,
                apiKey: API_KEY,
            },
        });

        // Check if response is valid
        if (!response.data || !Array.isArray(response.data.articles)) {
            throw new Error("Invalid response format");
        }

        // Format dates
        const articles = response.data.articles.map((article) => {
            const formattedDate = formatDate(article.publishedAt);
            return {
                ...article,
                formattedDate,
            };
        });

        return articles;
    } catch (error) {
        console.error("Error fetching the blog:", {
            message: error.message,
            stack: error.stack,
            response: error.response ? error.response.data : null,
        });
        throw new Error("Failed to fetch news. Please try again later.");
    }
};

// function to format date
const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
};
