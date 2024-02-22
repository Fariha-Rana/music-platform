import { Client, Account, ID } from "appwrite";
import { APPWRITE_PROJECT_ID } from "./envVariables";
export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);

class AppwriteAuth {
  async createAccount(email, password, name) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        const data = await this.login(email, password );
        return data;
      }
    } catch (err) {
      throw err;
    }
  }

  async login( email, password ) {
    try {
      const loggedinUser = await account.createEmailSession(email, password);
      return loggedinUser;
    } catch (error) {
      throw error;
    }
  }

  async _createAnonymousSession(name) {
    try {
      await account.createAnonymousSession();
      await account.updateName(name);
      const data = await account.get();
      return data;
    } catch (e) {}
  }

  async getCurrentUser() {
    try {
      const currentUser = await account.get();
      return currentUser || null;
    } catch (error) {
      return null;
    }
  }

  async logOut() {
    try {
      await account.deleteSession("current");
    } catch (error) {}
  }
}

const appwriteAuth = new AppwriteAuth();
export default appwriteAuth;
