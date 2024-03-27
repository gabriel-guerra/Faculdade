import { UserEnums } from "../enums/user.enum";
import userRepository from "../repository/user.repository";

class UserService{

    async createUser(user: any){

        const result = await Promise.all([this.checkMissingData(user), this.checkInvalidData(user), this.checkDataNotEmpty(user)]);

        if(!result.some(item => item !== null)){
            return await userRepository.executeCreate(user);
        }else{
            return UserEnums.USER_NOT_FOUND;
        }
    }

    async findUserById(id: any){
        return await userRepository.executeFindById(id);
    }

    async findUser(key: string, value: any){
        
        const text = `{ "${key}": { "$regex": "${value}" } }`;
        const search = JSON.parse(text);
        
        return await userRepository.executeFind(search);
    }

    async updateUser(id: any, newUser: any){
        const result = await Promise.all([this.checkInvalidData(newUser), this.checkDataNotEmpty(newUser)]);

        if (!result.some(item => item !== null)){
            const filter = await userRepository.executeFindById(id);

            if (filter){
                return await userRepository.executeUpdate(filter, newUser);
            }else{
                return null;
            }

        }else{
            return UserEnums.USER_NOT_UPDATED;
        }
    }

    async deleteUser(id: any){
        const filter = await userRepository.executeFindById(id);

        if (filter){
            return await userRepository.executeDelete(filter);
        }else{
            return UserEnums.USER_NOT_FOUND;
        }
        
    }





    //métodos de validação de dados -> deveriam ficar no middleware?

    async checkInvalidData(data: any){
        const schemaKeys = await userRepository.getSchemaKeys();
        const dataKeys = Object.keys(data);

        const missingKeys = dataKeys.filter(field => !schemaKeys.includes(field));

        return missingKeys.length > 0 ? missingKeys : null;
    }

    async checkMissingData(data: any){
        const schemaKeys = await userRepository.getSchemaKeys();
        const dataKeys = Object.keys(data);

        const invalidKeys = schemaKeys.filter(field => !dataKeys.includes(field));

        return invalidKeys.length > 0 ? invalidKeys : null;
    }

    async checkDataNotEmpty(data: any){
        const entries = Object.entries(data);

        const emptyValues = entries.filter(entry => entry[1] === "");
        const emptyKeys = emptyValues.map(entry => entry[0]);

        return emptyKeys.length > 0 ? emptyKeys : null;
    }


}

export default new UserService();