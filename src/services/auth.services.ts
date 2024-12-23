import  {encrypt, verify} from "../utils/bcrypt.handle"
import userModel from "../models/user.model"
import { generateToken } from "../utils/jwt.handle"
import { User } from "../interfaces/user.interface"
import { Auth } from "../interfaces/auth.interface"
import userTenantModel from "../models/user_tenant.model"
import userOwnerModel from "../models/user_owner.model"

class AuthService {
    async register_tenant(user: User){
        const userExists = await userModel.findOne({where: {gmail: user.gmail}});
        if (userExists) return "USER_EXISTS";
        const passwordHash = await encrypt(user._password);
        const createdUser = await userModel.create({
            _name: user._name,
            first_surname: user.first_surname,
            second_surname: user.second_surname,
            birthdate: user.birthdate,
            cellphone: user.cellphone,
            code_cellphone: user.code_cellphone,
            gmail: user.gmail,
            _password: passwordHash,
            is_active: 1
        });
        await userTenantModel.create({
            users_id: createdUser.get('id')
        })
        return createdUser;
    }

    async register_owner(user: User) {
        const userExists = await userModel.findOne({where: {gmail: user.gmail}});
        if (userExists) return "USER_EXISTS";
        const passwordHash = await encrypt(user._password);
        const createdUser = await userModel.create({
            _name: user._name,
            first_surname: user.first_surname,
            second_surname: user.second_surname,
            birthdate: user.birthdate,
            cellphone: user.cellphone,
            code_cellphone: user.code_cellphone,
            gmail: user.gmail,
            _password: passwordHash,
            is_active: 1
        });
        await userOwnerModel.create({
            users_id: createdUser.get('id')
        })
        return createdUser;
    }

    async register(user: User) {
        const userExists = await userModel.findOne({where: {gmail: user.gmail}});
        if (userExists) return "USER_EXISTS";
        const passwordHash = await encrypt(user._password);
        const createdUser = await userModel.create({
            _name: user._name,
            first_surname: user.first_surname,
            second_surname: user.second_surname,
            birthdate: user.birthdate,
            cellphone: user.cellphone,
            code_cellphone: user.code_cellphone,
            gmail: user.gmail,
            _password: passwordHash,
            is_active: 1
        });
        return createdUser;
    }
    
    async login (auth: Auth) {
        const userExists = await userModel.findOne({where: {gmail: auth.gmail}});
        if (!userExists) return "INVALID_DATA";
        const passwordHash = userExists.get('_password');
        const isCorrect = await verify(auth._password, passwordHash as string);
        if (!isCorrect) return "PASSWORD_INCORRECT"
        const userId = userExists.get('id')
        const owner = await userOwnerModel.findOne({where: {users_id: userId}});
        const tenant = await userTenantModel.findOne({where: {users_id: userId}});
        let role = '';

        if (owner != null) {
            role = 'owner'
        }
        if (tenant != null) {
            role = 'tenant'
        }
        
        const token = generateToken(userId as number, role)
        return token;
    }
}


export  {AuthService};