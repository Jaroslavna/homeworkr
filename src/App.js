import {Posts, Users} from "./components";
import {useState} from "react";
import {postService} from "./services";

function App() {
    const[posts,setPost] = useState([]);
    const getUserId = (userId) => {
        postService.getPosts(userId).then(({data}) => setPost(data))

    }
  return (
    <div>
        <Users getUserId={getUserId} />
        <Posts posts={posts}/>
    </div>
  );
}

export default App;
