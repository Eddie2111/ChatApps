'use server';
import {v4} from 'uuid';
import { CreatePost, GetAllPostsHome, GetAllPostsProfile } from "../models/createPosts";
import { cookies } from 'next/headers';

const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secret';

interface IPostRequestProps{
    userId: string;
    body: string;
    mood?: string;
    image?: string;
}
interface IToken{
    name: string;
    value: string;
    path: string;
}
interface IDecoded{
    id: string;
    iat: number;
    exp: number;
}
async function CreatingPost(data:IPostRequestProps){
    // catch the client side cookie here
    const cookiestore = cookies();
    const token = cookiestore.get('localuser') as IToken;
    const decoded = jwt.verify(token.value, secret) as IDecoded;
    console.log(decoded);
    const preprocessed = {
        id: v4(),
        userId: decoded.id,
        body: data.body,
        image: 'https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/374480362_2066362897047121_5184808168544031608_n.jpg?stp=dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=4c1e7d&_nc_eui2=AeFVBeglfMFJ4Ak4b2Nev2fkufjbr96msAu5-Nuv3qawCwbvePLZUO6oVcH0sjxJ031fGBKwMH-Z_BoDsd0bONA5&_nc_ohc=K19owW5sxZUAX-d0A5i&_nc_ht=scontent.fdac110-1.fna&oh=00_AfD3mhBw4HY794IAJusJa4ERaqyMWxW-myUw5HuoDBLmyg&oe=64FC18C7'
    }
    try{
        const createPost = await CreatePost(preprocessed);
        console.log(createPost);
    }catch(err){
        console.log(err);
    }
    return 'done';
}
async function GetAllPosts(){
    try{
        const posts = await GetAllPostsHome();
        console.log(posts);
        return posts;
    }catch(err){
        console.log(err);
        return [];
    }
    
}
export {CreatingPost, GetAllPosts};
// get all data function