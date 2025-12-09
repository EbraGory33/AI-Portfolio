import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages } from "ai";
import { stepCountIs } from "ai";
import { SYSTEM_PROMPT } from "./prompt";
/*
TODO: Implement Tools for better responses
EXAMPLE TOOLS:
    import { getSkills } from "./tools/getSkills";
    import { getProjects } from "./tools/getProjects";
*/

function errorHandler(error: unknown) {
  if (error == null) {
    return "Unknown error";
  }
  if (typeof error === "string") {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log("[CHAT-API] Incoming messages:", messages);
    console.log(
      "Messages Parts:",
      messages.map((m: any) => m.parts)
    );

    const result = streamText({
      model: openai("gpt-5.1-nano"),
      messages: convertToModelMessages([SYSTEM_PROMPT, ...messages]),
    });

    return result.toUIMessageStreamResponse({
      onError: errorHandler,
    });
  } catch (err) {
    console.error("Global error:", err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
