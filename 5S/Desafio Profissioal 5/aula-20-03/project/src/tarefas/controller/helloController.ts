import { Request, response } from "express";

class HelloController{

    async helloWorld(req: Request, res: Response){
        return res.status;
    }

}

export default new HelloController();