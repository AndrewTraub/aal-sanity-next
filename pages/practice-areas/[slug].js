// Install remark and remark-html
import {getAll, getBySlug} from '../../lib/remarkFiles'
import showdown from 'showdown';
import Layout from "../../components/layout";

const path = "practiceAreas"

export default function PracticeArea({slug, frontMatter, content, preview}) {
    //console.log('content', content);
    const converter = new showdown.Converter();
    return (
        <Layout preview={preview}>
            <h2>{frontMatter.title}</h2>
            <div dangerouslySetInnerHTML={{__html: converter.makeHtml(content)}}/>
        </Layout>
    )
}

export async function getStaticProps({ params, preview = false }) {
    const post = getBySlug(params.slug, path)

    /*const markdown = unified()
        .use(parse)
        .use(remark2react, {
            remarkReactComponents: {
                // Use CustomLink instead of <a>
                a: CustomLink,
            },
        })
        .processSync(post.content || '').result*/
    /*const markdown = await remark()
        .use(html)
        .process(post.content || '')*/
    /*
        if (!markdown) {
            return {
              notFound: true,
            }
          }
     */
    /*const content = markdown.toString()*/

    return {
        props: {
            preview,
            ...post
        },
    }
}

export async function getStaticPaths() {
    const posts = getAll(path)

    return {
        paths:
            posts?.map((post) => {
                return {
                    params: {
                        slug: post.slug,
                    },
                }
        }),
        fallback: true,
    }
}


