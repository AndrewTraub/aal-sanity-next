// Install gray-matter and date-fns
import matter from 'gray-matter'
//import { parseISO, format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'

// Add markdown files in `markdown/content/`
const postsDirectory = join(process.cwd(), 'markdown', 'content')

export function getBySlug(slug, path) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, path, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    //const date = format(parseISO(data.date), 'MMMM dd, yyyy')
    const date = new Date(data.date).toISOString()
    return { slug: realSlug, frontMatter: { ...data, date }, content }
}

export function getAll(path) {
    const slugs = fs.readdirSync(join(postsDirectory, path))
    const posts = slugs.filter(slug => slug.endsWith('.md')).map((slug) => getBySlug(slug, path))

    return posts
}
