import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import appwriteService from "../appwrite/config.js";
import {PostCard , Container} from "./index.js";
import { FaRegCircleUser } from "react-icons/fa6";

const Profile = () => {
    const [posts , setPosts] = useState(null);
    const userData = useSelector((state) => state.auth.userData);
    const postsData = useSelector((state ) => state.post.posts);
    return <>
        
        <div className='w-full py-8'>
            <div className="grid place-items-center">
                <FaRegCircleUser size={64}/>
                <p className="text-3xl m-1">User Profile</p>
                <hr className="w-full"></hr>
            </div>
            
        <Container>
            <p className="text-2xl m-3">Username: {userData?.name}</p>
            <p className="text-2xl m-3">Email: {userData?.email}</p>
            <hr className="text-black w-full"></hr>
            <div className="grid place-items-center">
                <p className="text-3xl m-3">My Posts</p>
            </div>

            <div className='flex flex-wrap'>
                {postsData?.map((post) => (
                    post.userId === userData.$id && 
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            <hr></hr>
            </Container>
        </div>

        
    </>
}

export default Profile ; 