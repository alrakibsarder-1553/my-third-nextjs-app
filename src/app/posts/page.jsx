import Postcard from "../component/Post";




const Postpage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return (
        <div>
            <h2>Post page:{posts.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {posts.map(post => <Postcard key ={post.id} post={post} />)}
            </div>
        </div>
    );
};

export default Postpage;