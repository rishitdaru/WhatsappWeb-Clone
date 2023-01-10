import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:user@ac-xkro6yj-shard-00-00.wgo0rnw.mongodb.net:27017,ac-xkro6yj-shard-00-01.wgo0rnw.mongodb.net:27017,ac-xkro6yj-shard-00-02.wgo0rnw.mongodb.net:27017/?ssl=true&replicaSet=atlas-13qqpx-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;