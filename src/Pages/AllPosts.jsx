import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { addpost , updatepost } from "../store/postSlice.js";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
function AllPosts() {
    const postsInStore = useSelector((state) => state.post.posts);
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        })
    }, [])

    useEffect(() => {
        if (posts.length > 0) {
            const postsToAdd = posts.filter(
                (post) => !postsInStore.some((storePost) => storePost.$id === post.$id)
            );

            postsToAdd.forEach((post) => {
                dispatch(addpost(post)); 
            });
        }
    }, [posts, postsInStore]);
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts ;