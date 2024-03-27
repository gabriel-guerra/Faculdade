import userEntity, {schemaData} from "../entity/user.entity";


//https://stackoverflow.com/questions/43092071/how-should-i-store-salts-and-passwords-in-mongodb

class UserRepository{

    async executeCreate(user: any){
        return userEntity.create(user);
    }

    async executeFindById(id: any){
        return id.length === 24 ? userEntity.findById(id) : null;
    }

    async executeFind(param: any){
        return userEntity.find(param);
    }

    async executeUpdate(filter: any, user: any){
        return userEntity.updateOne(filter, user);
    }

    async executeDelete(filter: any){
        return userEntity.deleteOne(filter);
    }

    async getSchemaKeys(){
        return Object.keys(schemaData);
    }

}

export default new UserRepository();