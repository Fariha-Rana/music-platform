import { Databases } from "appwrite";
import { Permission, Role } from "appwrite";
import { client } from "./appwriteAuthentication";
import { APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID } from "./envVariables";

const database = new Databases(client, APPWRITE_DATABASE_ID);

class UserSavedData {
  async getSavedMusicList(doc_id) {
    try {
      let response = await database.getDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTION_ID,
        doc_id
        );
        console.log(response)
      return response;
    } catch (error) {
      return null;
    }
  }

  async existingDoc(DOC_ID) {
    try {
      let isExistingData = await database.getDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTION_ID,
        DOC_ID
      );
      return isExistingData;
    } catch (err) {
      return null;
    }
  }

  async saveMusicinUserPlaylist(data, DOC_ID) {
    try {
      let isExistingData = await this.existingDoc(DOC_ID);

      if (isExistingData && isExistingData.documents?.length !== 0) {
        await database.updateDocument(
          APPWRITE_DATABASE_ID,
          APPWRITE_COLLECTION_ID,
          DOC_ID,
          {
            imageurl: [...isExistingData.imageurl, data.imageurl],
            songUrl: [...isExistingData.songUrl, data.songUrl],
            audioUrl: [...isExistingData.audioUrl, data.audioUrl],
            albumUrl: [...isExistingData.albumUrl, data.albumUrl],
            songName: [...isExistingData.songName, data.songName],
            albumName: [...isExistingData.albumName, data.albumName],
            artistNames: [...isExistingData.artistNames, data.artistNames],
            id: [...isExistingData.id, data.id],
          }
        );
      } else {
        const permissions = [Permission.write(Role.users())];
        await database.createDocument(
          APPWRITE_DATABASE_ID,
          APPWRITE_COLLECTION_ID,
          DOC_ID,
          {
            imageurl: [data.imageurl],
            songUrl: [data.songUrl],
            audioUrl: [data.audioUrl],
            albumUrl: [data.albumUrl],
            songName: [data.songName],
            albumName: [data.albumName],
            artistNames: [data.artistNames],
            id: [data.id],
          },
          permissions
        );
      }
    } catch (error) {
      // console.log(error);
      return [];
    }
  }
}

const userSavedData = new UserSavedData();
export default userSavedData;
