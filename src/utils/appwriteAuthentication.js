import { Client, Account, ID } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const account = new Account(client);

class AppwriteAuth {
  constructor() {
    this.userData = null;
  }

  getUserData() {
    return this.userData;
  }
  
  async createAccount(email, password, name) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      console.log(userAccount);
      if (userAccount) {
        await this.login({ email, password });
        return this.userData;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async login({ email, password }) {
    try {
      const loggedinUser = await account.createEmailSession(email, password);
      this.userData = loggedinUser;
      return this.userData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async _createAnonymousSession(name) {
    try {
      await account.createAnonymousSession();
      await account.updateName(name);
      this.userData = await account.get();
      console.log(this.userData);
      return this.userData;
    } catch (e) {}
  }

  async getCurrentUser() {
    try {
      if (this.userData) {
        return this.userData;
      }

      const currentUser = await account.get();
      this.userData = currentUser || null;
      return this.userData;
    } catch (error) {
      console.log(error);
    }
  }

  async logOut() {
    try {
      this.userData = null;
      await account.deleteSession("current");
    } catch (error) {
      console.log(error);
    }
  }
}

const appwriteAuth = new AppwriteAuth();
export default appwriteAuth;
