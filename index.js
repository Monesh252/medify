require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });

const generationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 512,
    responseMimeType: "text/plain",
};

app.post("/weather", async (req, res) => {
    try {
        const { city } = req.body;
        if (!city) {
            return res.status(400).json({ error: "City name is required" });
        }

        // Use a clearer prompt to get real-time weather
        const prompt = `Give me the current weather for ${city}. Include temperature, conditions, humidity, and wind speed.`;

        const chatSession = model.startChat({
            generationConfig,
            history: [{ role: "user", parts: [{ text: prompt }] }],
        });

        const result = await chatSession.sendMessage(prompt);
        const responseText = await result.response.text();

        console.log("✅ AI Response:", responseText);
        res.json({ response: responseText }); // ✅ Send response to frontend
    } catch (error) {
        console.error("❌ AI Error:", error);
        res.status(500).json({ error: "Failed to fetch weather data", details: error.message });
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
