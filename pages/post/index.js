function PostList({posts}) {
    return (
        <>
        <h1>List of Posts</h1>
        {posts.map((post) => {
            return (
                <div key = {post.id}>
                    <p>{post.id} {post.content}</p>
                </div>
            )
        })}
        </>
    )
}
export default PostList;

export async function getStaticProps() {
     const responce = await fetch('https://cms.dev.youverify.co/blogs/?slug=kyc-checklist-for-banks')
     const data = await response.json()

     return {
         props: {
             posts: data

         }
     }
}