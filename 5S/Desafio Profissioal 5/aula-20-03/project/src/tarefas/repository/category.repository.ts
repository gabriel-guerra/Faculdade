import categoryModel, { schemaData } from "../model/category.model"

class CategoryRepository{
    
    async executeCreateCategory(category: any){
        return categoryModel.create(category);
    }
    
    async executeFindById(id: any){
        return id.length === 24 ? categoryModel.findById(id) : null;
    }

    async executeFindAll(){
        return categoryModel.find();
    }

    async executeFind(param: any){
        return categoryModel.find(param);
    }

    // usar função findAndUpdate
    async executeUpdateCategory(filter: any, category: any){
        return categoryModel.updateOne(filter, category);
    }

    async executeDeleteCategory(filter: any){
        return categoryModel.deleteOne(filter);
    }

    async getSchemaKeys(){
        return Object.keys(schemaData);
    }

}

export default new CategoryRepository();