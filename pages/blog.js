import styles from '../styles/Home.module.css'


function Blog({ideas}) {
    return (
        <div className={styles.container}>
            <button> LATEST ARTICLE</button>
            <h1 className= {styles.title}>Blog Post</h1>
            <p>by SeethaDinesh</p>
            {
            ideas.map((idea) => {
                return (
                    <div key= {idea.id}>
                        <p>{idea.content}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Blog;

export async function getStaticProps() {
    const response = await fetch('https://cms.dev.youverify.co/blogs?_start=0&_limit=90&_sort=createdAt:DESC')
    const data = await response.json()

    return {
        props: {
            ideas: data,
        },
    }
}

