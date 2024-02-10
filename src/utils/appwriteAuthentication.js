import { Client, Account, ID } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const account = new Account(client);

export class AppwriteAuth {
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      console.log(userAccount);
      if (userAccount) return await this.login({ email, password });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async login({ email, password }) {
    try {
      const loggedinUser = await account.createEmailSession(email, password);
      return loggedinUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async isLoggedIn() {
    try {
      const currentUser = await this.getCurrentUser();
      return currentUser ? true : false;
    } catch (error) {
      console.log(error);
    }
  }

  async _createAnonymousSession(name) {
    try {
      await account.createAnonymousSession();
      await account.updateName(name);
      const user = account.get();
      return user;
    } catch (e) {}
  }

  async getCurrentUser() {
    try {
      const currentUser = await account.get();
      return currentUser || null;
    } catch (error) {
      console.log(error);
    }
  }

  async logOut() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      console.log(error);
    }
  }
}

const appwriteAuth = new AppwriteAuth();
export default appwriteAuth;
