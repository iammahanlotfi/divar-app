import { useQuery } from "@tanstack/react-query"
import { getposts } from "../../services/user";

function PostList() {

    const {data , isLoading} = useQuery(["my-post-list"] , getposts);
    console.log(data); 
     

    return (
    <div>PostList</div>
  )
}

export default PostList