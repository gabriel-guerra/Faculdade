import { Request, Response } from "express";
import userService from "../service/user.service";
import { UserEnums } from "../enums/user.enum";

class UserController{

    async callCreateUser(req: Request, res: Response){
        
        return res.json(await userService.createUser(req.body));
    }

    async callfindUser(req: Request, res: Response){
        if(Object.keys(req.query).includes('id')){
            return res.json(await userService.findUserById(req.query.id));
        }else if (Object.keys(req.query).includes('username')){
            return res.json(await userService.findUser('username', req.query.username));
        }else if (Object.keys(req.query).includes('email')){
            return res.json(await userService.findUser('email', req.query.email));
        }else{
            return res.status(404).send(UserEnums.USER_NOT_FOUND);
        }
    }

    async callUpdateUser(req: Request, res: Response){
      
        let result;

        if (req.query.id){
            result = await userService.updateUser(req.query.id, req.body);
        }else{
            res.status(404).send(UserEnums.USER_NOT_FOUND);
        }
        
        return result === null ? res.status(404).send(UserEnums.USER_NOT_FOUND) : res.json(result);
    }

    async callDeleteUser(req: Request, res: Response){

        let result;

        if (req.query.id){
            result = await userService.deleteUser(req.query.id);
        }else{
            res.status(404).send(UserEnums.USER_NOT_FOUND);
        }

        return result === null ? res.status(404).send(UserEnums.USER_NOT_FOUND) : res.json(result);

    }
}

export default new UserController();