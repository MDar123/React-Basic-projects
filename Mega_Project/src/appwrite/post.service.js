import conf from "../conf/config";
import { Client, ID , Databases , Query , Storage } from "appwrite";


export class PostService {

    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    // Methods for post (CRUD)
    async createPost({title,content,slug,Image,status,userID}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,content,Image,status,userID
                }
            )
        } catch (error) {
            console.log('Error occured while creating post',error)
            return false
        }
    }

    async updataPost(slug,{title,content,Image,status}){
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,content,Image,status
                }
            )
        } catch (error) {
            console.log('Error occured while updating post',error)
            return false
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log('Error while deleting post',error)
            return false
        }
    }

    async getPost(id){
        try {
            return this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                id
            )
        } catch (error) {
            console.log('Error fetching post',error)
        }
    }

    async getAllPosts(filter=[Query.equal('status','active')]){
        try {
            return this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                filter
            )
        } catch (error) {
            console.log('Error while fetching posts',error)
            return false
        }
    }

    // Methods for file (CRUD)
}

const postService = new PostService();
export default postService;