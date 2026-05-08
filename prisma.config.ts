import { defineConfig, env } from "prisma/config";
import 'dotenv/config';

export default defineConfig({

  schema: "prisma/schema.prisma",

  migrations: {
    
    path: "prisma/migrations",
},
  datasource: {

    url: env("POSTGRES_URL"), // postgres://user:pass@host:5432/db

  },
  
});

