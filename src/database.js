import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true
        });
        console.log('...Connected to Database');
    }
    catch(e){ 
        console.log('Conection Failed ' + e);
    }
}