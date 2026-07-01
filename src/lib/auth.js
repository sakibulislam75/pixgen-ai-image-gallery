import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('pixgen'); // Replace with your database name

export const auth = betterAuth({
   emailAndPassword: {
      enabled: true,
   },
   socialProviders: {
      google: {
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
   },

   database: mongodbAdapter(db, {
      // Optional: if you don't provide a client, database transactions won't be enabled.
      client,
   }),
});
