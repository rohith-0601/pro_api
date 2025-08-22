import { Router, Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";

const router = Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY as string,
});

router.post("/", async (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "No message received" });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });
    res.json({ reply: response.text });
  } catch (error) {
    console.error("Gemini SDK error:", error);
    res.status(500).json({ error: "Failed to generate content" });
  }
});

export default router;
