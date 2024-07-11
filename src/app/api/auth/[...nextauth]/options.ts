import dbConnect from "@/utils/db";
import { users } from "@/models/user";
import { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [Google({ clientId: process.env.GOOGLE_CLIENT_ID!, clientSecret: process.env.GOOGLE_CLIENT_SECRET! })],
  callbacks: {
    async signIn({ user: { id, ...user } }) {
      await dbConnect();
      try {
        const data = await users.findById(id);
        if (!data) {
          await users.insertMany([{ ...user, _id: id }]);
        }
        return true;
      } catch (error) {
        console.log("🚀 ~ signIn ~ error:", error);
        return false;
      }
    },
    jwt: ({ token, user }) => ({ ...(user || {}), ...(token || {}) }),
    session: ({ session, token, user }) => ({ ...(user || {}), ...(token || {}), ...(session || {}) }),
  },
};
