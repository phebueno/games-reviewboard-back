import express, { Request, Response, json } from "express";
import httpStatus from "http-status";
import router from "./routers/index.routes";

const app = express();
app.use(json());
app.use(router);

app.get("/health", (req: Request,res: Response)=>{
    res.sendStatus(httpStatus.OK);
});

const port:number = Number(process.env.PORT) || 5000; 
app.listen(port, ()=>console.log(`Server is up and running on port ${port}`));