import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

import css from './news.scss';

const CONTENT_API_KEY = "8c0c4c2709b45b07810bd87910";
const BLOG_URL = "https://grumbleblog.herokuapp.com";

type Post = {
	title: string;
	slug: string;
}

async function getPosts() {
	const res = await fetch(
		`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
	).then((res) => res.json())
	const posts = res.posts
	return posts
}

export const getStaticProps = async ({ params }: any) => {
	const posts = await getPosts()

	return {
		revalidate: 10,
		props: { posts }
	}
}

const News: React.FC<{ posts: Post[] }> = (props) => {
	const { posts } = props;
	return (
		<div className={css.container}>
			<h1>Hello to my blog</h1>
			<ul>
				{posts.map((post: any, index: any) => {
					return (
						<li className={css.postitem} key={post.slug}>
							<Link href="/post/[slug]" as={`/post/${post.slug}`}>
								<a>{post.title}</a>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default News;