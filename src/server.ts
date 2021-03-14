import express from "express";
import cors from "cors";
import Path from "path";
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/static", express.static(Path.resolve(__dirname, "..", "static")));

app.listen(3333);