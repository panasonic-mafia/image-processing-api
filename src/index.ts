import * as dotenv from "dotenv";
import express, { Express } from "express";
import routes from "./routes";
import errorHandler from "./middlewares/errorHandler";
import morgan from "morgan";

dotenv.config();

const app: Express = express();

const port: number = parseInt(process.env.PORT as string) || 3000;

app.use(morgan("tiny"));

app.use("/api", routes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at 'http://localhost:${port}'`);
});

export default app;
