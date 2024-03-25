import categoryEntity, { schemaData } from "../entity/category.entity"

class CategoryRepository{
    
    async executeCreateCategory(category: any){
        return await categoryEntity.create(category);
    }
    
    async executeFindById(id: any){
        return await categoryEntity.findById(id);
    }

    async executeFind(param: any){
        return await categoryEntity.find(param);
    }

    async executeUpdateCategory(filter: any, category: any){
        return categoryEntity.updateOne(filter, category);
    }

    async executeDeleteCategory(filter: any){
        return categoryEntity.deleteOne(filter);
    }

    async getSchemaKeys(){
        return Object.keys(schemaData);
    }

}

export default new CategoryRepository();