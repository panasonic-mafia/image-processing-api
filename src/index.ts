import * as dotenv from "dotenv";
import express, { Express } from "express";
import routes from "./routes";

dotenv.config();

const app: Express = express();

const port: number = parseInt(process.env.PORT as string) || 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running at 'http://localhost:${port}'`);
});

export default app;
