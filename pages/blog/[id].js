import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../components/Layout';
import BackGround from '../../components/BackGround';
import Link from 'next/link';
import MarkDownContainer from '../../components/MarkDown';
// background: #1f3747;
// background-image: -webkit-linear-gradient(left,#1f3747,#293d31);

export default () => {
	const router = useRouter();
	// console.log(router.query.id);
	return (
		<Layout>
			<BackGround title="为什么明明相爱" content="到最后确实要分开,哈哈哈哈啦啦啦咕咕咕咪咪咪咪到最后确实要分开,哈哈哈哈啦啦啦咕咕咕咪咪咪咪到最后确实要分开,哈哈哈哈啦啦啦咕咕咕咪咪咪咪" />
			<Container>
				<Content />
				<Aside />
			</Container>
		</Layout>
	);
};
const Content = (props) => {
	return <div className="container">
		<h1>为什么小剧客栈没有友情链接</h1>
		<div className="time">发布时间：2019-04-01</div>
		<MarkDownContainer />
		<style jsx>{`
			.container{
				flex: 8;
				box-sizing: border-box;
				padding:90px 100px 90px 0;
			}
			h1{
				font-size: 28px;
				font-weight: 500;
				line-height: 1.5;
			}
			.time{
				padding-top:10px;
				font-size: 14px;
				line-height: 1.5;
			}
			
		`}</style>
	</div>
}

const Aside = (props) => {
	return <aside className="aside">
		<div className="toc-content">
			<div className="title">TOC</div>
			<Link href="#a666"><a style={{ paddingLeft: '0em' }}>友情链接是什么 ？</a></Link>
			<Link href="#a666"><a style={{ paddingLeft: '0em' }}>对于网站运营者，友情链接又是什么？</a></Link>
			<Link href="#a666"><a style={{ paddingLeft: '0em' }}>小剧希望友情链接做什么？</a></Link>
			<Link href="#a666"><a style={{ paddingLeft: '0em' }}>小剧不做友情链接的原因？</a></Link>
			<Link href="#a666"><a style={{ paddingLeft: '1em' }}>1、友情链接太单薄。</a></Link>
			<Link href="#a666"><a style={{ paddingLeft: '1em' }}>2、不靠流量、权重而活</a></Link>
			<Link href="#a666"><a style={{ paddingLeft: '1em' }}>3、「友情」成分太低</a></Link>
			<Link href="#a666"><a id="a666" style={{ paddingLeft: '0em' }}>放弃友情链接有没有什么损失 ？</a></Link>
		</div>

		<style jsx>{`
			.aside{
				max-width: 300px;
				flex: 4;
				border-left:1px solid #edeff3;
			}

			.toc-content {
				padding: 90px 0 0 30px;
			}

			.toc-content .title {
				margin-bottom: 10px;
				line-height: 2em;
				font-size: 15px;
				color: #c2ccd6
			}

			.toc-content a {
				display: block;
				margin-bottom: 10px;
				line-height: 1.2em;
				font-size: 14px;
				color: #8599ad;
				transition: .2s
			}

			.toc-content a:hover {
				color: #407fbf
			}

		`}</style>
	</aside>
}
const Container = (props) => {
	return <div className="w1500">
		{props.children}
		<style jsx>{`
			.w1500{
				display: flex;
			}
		`}</style>
	</div>
}
{/*<div className="markdown">
        
         <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
      `}
        />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style> */}
// import Layout from '../../components/MyLayout';
// import fetch from 'isomorphic-unfetch';

// const Post = props => (
//   <Layout>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//     <img src={props.show.image.medium} />
//   </Layout>
// );

// Post.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();

//   console.log(`Fetched show: ${show.name}`);

//   return { show };
// };

// export default Post;
