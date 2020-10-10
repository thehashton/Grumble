import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import './news.scss';

const CONTENT_API_KEY = "8c0c4c2709b45b07810bd87910";
const BLOG_URL = "https://grumbleblog.herokuapp.com";

type Post = {
	title: string;
	slug: string;
}

const News: React.FunctionComponent<{ posts: Post[] }> = (props) => {
	const { posts } = props;

	const [blogContent, getBlogContent] = useState();


useEffect(() => {
	(async function getContent () { 
		const res: any = fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`)
		.then((res) => res.json())
		getBlogContent(await res);
	})()
 }, [])
const content: any = blogContent;

  console.log(content);

	return (
		<div className="News">
			<h1>Hello to my blog</h1>
			<ul className="postList">
			{content ? 
			content.posts.map((post: any) =>  (
				<li key={post.slug}>
					<Link href="/post/[slug]" as={`/post/${post.slug}`}>
						<a>{post.title}</a>
					</Link>
				</li>
			))
			 : '' 
			}
			</ul>
		</div>
	)
}

export default News;