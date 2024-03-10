/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

const MONGODB_URI = 'mongodb+srv://sa:sa@cluster0.3nae9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const DATABASE_NAME = 'trello-db'

import { MongoClient, ServerApiVersion } from 'mongodb'

// Khởi tạo một đối tượng trelloDatabaseInstance ban đầu là null ( vì chúng ta chưa connect)
let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

//Kết nối tới Database
export const CONNECT_DB = async () => {
    await mongoClientInstance.connect()

    trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const CLOSE_DB = async () => {
    await mongoClientInstance.close()
}
export const GET_DB = () => {
    if (!trelloDatabaseInstance) throw new Error('Must connect to Database first!')
    return trelloDatabaseInstance
}