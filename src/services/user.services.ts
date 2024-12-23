import { encrypt, verify } from "../utils/bcrypt.handle";
import userModel from "../models/user.model";
import { User } from "../interfaces/user.interface";
import userOwnerModel from "../models/user_owner.model";
import userTenantModel from "../models/user_tenant.model";

class UserService {
  async get_all() {
    const response = await userModel.findAll();
    return response;
  }

  async get_by_id(id: string) {
    const userExists = await userModel.findByPk(id);
    if (!userExists) return "USER_NOT_FOUND";
    return userExists;
  }

  async update(user: User, id: string) {
    const userExists = await userModel.findByPk(id);
    if (!userExists) return "USER_NOT_FOUND";
    user._password = await encrypt(user._password);
    const response = await userExists.update(user);
    return response;
  }

  async _delete(id: string) {
    const userExists = await userModel.findByPk(id);
    if (!userExists) return "USER_NOT_FOUND";
    const owner = await userOwnerModel.findOne({where: {users_id: id}});
    const tenant = await userTenantModel.findOne({where: {users_id: id}});
    if (owner != null) {
      await owner.destroy();
    }
    if (tenant != null) {
      await tenant.destroy();
    }
    const response = await userExists.destroy();
    return response;
  }
}

export { UserService };
