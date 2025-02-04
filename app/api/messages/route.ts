import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const messagesFilePath = path.join(process.cwd(), "public", "messages.json");

// Function to read messages from file
const readMessages = () => {
  try {
    const data = fs.readFileSync(messagesFilePath, "utf-8");
    return JSON.parse(data);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [];
  }
};

// Function to write messages to file
const writeMessages = (messages: unknown) => {
  fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));
};

// ✅ GET: Fetch all messages
export async function GET() {
  const messages = readMessages();
  return NextResponse.json(messages);
}

// ✅ POST: Save a new message
export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 });
  }

  const messages = readMessages();
  messages.push({ name, email, message, timestamp: new Date().toISOString() });

  writeMessages(messages);
  return NextResponse.json({ success: true, message: "Message sent successfully!" });
}

// ✅ DELETE: Delete a message by index
export async function DELETE(req: Request) {
  const { index } = await req.json();
  const messages = readMessages();

  if (index < 0 || index >= messages.length) {
    return NextResponse.json({ success: false, message: "Invalid message index." }, { status: 400 });
  }

  messages.splice(index, 1);
  writeMessages(messages);
  return NextResponse.json({ success: true, message: "Message deleted successfully!" });
}
