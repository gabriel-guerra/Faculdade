import { Request, Response } from "express";
import categoryService from "../service/category.service";
import { CategoryEnums } from "../enums/category.enum";

class CategoryController{

    async callCreateCategory(req: Request, res: Response){
        return res.json(await categoryService.createCategory(req.body));
    }

    async callFindCategory(req: Request, res: Response){
        if(Object.keys(req.query).includes('id')){
            return res.json(await categoryService.findCategoryById(req.query.id));
        }else if (Object.keys(req.query).includes('name')){
            return res.json(await categoryService.findCategory('name', req.query.name));
        }else if (Object.keys(req.query).includes('color')){
            return res.json(await categoryService.findCategory('color', req.query.color));
        }else{
            return res.status(404).send(CategoryEnums.CATEGORY_NOT_FOUND);
        }
    }

    async callUpdateCategory(req: Request, res:Response){
        let idOldCategory;
        const newCategory = req.body;

        try{
            idOldCategory = req.query.id;
        }catch (error){
            return res.status(404).send(CategoryEnums.CATEGORY_NOT_FOUND);
        }
                
        return res.json(await categoryService.updateCategory(idOldCategory, newCategory));
    }

    async callDeleteCategory(req:Request, res:Response){
        let id;

        try{
            id = req.query.id;
        }catch (error){
            return res.status(404).send(CategoryEnums.CATEGORY_NOT_FOUND);
        }
                
        return res.json(await categoryService.deleteCategory(id));
    }
}

export default new CategoryController();