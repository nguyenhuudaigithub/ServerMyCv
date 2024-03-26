import { Redis } from "ioredis";
require("dotenv").config();

const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log(`Connect Redis ...`);
    return process.env.REDIS_URL;
  }
  throw new Error("Disconnect Redis ... ");
};

export const redis = new Redis(redisClient());
