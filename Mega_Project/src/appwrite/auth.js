import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async register({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call to login
      } else {
        throw new Error("User Account not created");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createSession(email, password);
    } catch (error) {
      alert("Invalid credentials");
      throw new Error(error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCurrentUser(){
    try {
      return await this.account.get()
    } catch (error) {
      console.log('Error while getting info',error)
    }
    return null
  }
}
const authservice = new AuthService();

export default authservice;
