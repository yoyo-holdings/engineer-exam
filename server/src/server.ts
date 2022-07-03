import compression from "compression";
import cors, { CorsOptions } from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import { appConfig } from "./configs";
import { router } from "./routers";

const { whitelist, port } = appConfig;

const whitelists = whitelist.split(",");
const corsOptions: CorsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true);
    }
    if (whitelists.indexOf(origin) === -1 || !origin) {
      const msg = "The site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(helmet());
app.disable("etag");
app.use(cors(corsOptions));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
