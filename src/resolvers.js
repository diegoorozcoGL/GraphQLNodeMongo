

import User from "./models/User";
export const resolvers = {
    Query: {
        hello : () => {
            return 'Hello world with graphQL';
        },       
        users: async () => {
            return await User.find();
            
        },
        user: async  (_, {_id}) => {
            return await User.findById(_id);
        },
        userByLastname: async (_,{lastname}) => {
            return await User.find({lastname:lastname});
        }
    },
    Mutation: {        
        async createUser(_,{input}){
            const newUser = new User(input);
            await newUser.save(input);
            return newUser;
        }, 
        async deleteUser(_, {_id}){
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, {_id, input}){
            return await User.findByIdAndUpdate(_id, input, {new: true});
        }     
    }
};