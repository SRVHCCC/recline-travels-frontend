// src/api/api.js

import config from "../config/config";

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(config.BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "API responded with an error");
    }

    return result;
  } catch (error) {
    console.error("Form Submission Error:", error);
    throw error;
  }
};