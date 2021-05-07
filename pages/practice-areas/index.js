import {getAll} from "../../lib/remarkFiles";

const path = "practiceAreas"

function PracticeAreas(props) {
    const {allPosts} = props;
    return (
        <div>
            <h1>Practice Areas</h1>
            {allPosts.map(post => {
                const path = `${path}/${post.slug}`;
                return (
                    <h3>{path}</h3>
                )
            })}
        </div>
    )
}

export async function getStaticProps(context) {
    const allPosts = getAll(path);
    return {
        props: {
            allPosts
        }, // will be passed to the page component as props
    }
}

export default PracticeAreas
