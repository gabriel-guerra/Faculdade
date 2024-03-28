import userModel, {schemaData} from "../model/user.model";


//https://stackoverflow.com/questions/43092071/how-should-i-store-salts-and-passwords-in-mongodb

class UserRepository{

    async executeCreate(user: any){
        return userModel.create(user);
    }

    async executeFindById(id: any){
        return id.length === 24 ? userModel.findById(id) : null;
    }

    async executeFindAll(){
        return userModel.find();
    }

    async executeFind(param: any){
        return userModel.find(param);
    }

    // usar função findAndUpdate
    async executeUpdate(filter: any, user: any){
        return userModel.updateOne(filter, user);
    }

    async executeDelete(filter: any){
        return userModel.deleteOne(filter);
    }

    async getSchemaKeys(){
        return Object.keys(schemaData);
    }

}

export default new UserRepository();