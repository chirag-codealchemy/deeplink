import mongoose from "mongoose";

const connection = { isConnected: 0 }; // To keep track of the connection

async function dbConnect() {
  if (connection?.isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export const createModals = (name: string, schema: any) => mongoose.models?.[name] || mongoose.model(name, schema);

export default dbConnect;
