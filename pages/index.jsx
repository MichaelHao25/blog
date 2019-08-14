import React, {
	useEffect,
	useState, createRef
} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import '../css/reset.styl';
// back = #1890ff
// color = #333
export default (props) => {
	return <Layout>
		<InitPage />
		<Home />
		<Design />
		<Drive />
		<CopyRight />
	</Layout>
}
const CopyRight = () => {
	return (
		<footer className="footer">
			<div className="w1500">
				<div className="list">
					<div className="item">
						<h3>关于Blog</h3>
						<p>此Blog诞生的原因是想记录一些日常踩到的坑,也希望借此可以结交到其他的小伙伴啦,分享技术,一起进步.</p>
					</div>
					<div className="item">
						<h3>友情链接</h3>
						<div className="links">
							<Link href="/"><a className="blog">博文</a></Link>
							<Link href="/"><a className="dev">实验室</a></Link>
							<Link href="/"><a className="message">留言</a></Link>
							<Link href="/"><a className="about">关于</a></Link>
						</div>
					</div>
				</div>
				<p>Design & Code by Blue.use Mongodb + Next.js</p>
			</div>
			<style jsx>{`
				.footer{
					padding: 20px 0;
					color: #ccc;
					background: #333;
					font-size: 14px;
				}
				.list{
					display: flex;
					justify-content: space-between;
				}
				h3{
					font-size: 20px;
					padding-bottom: 10px;
					white-space: nowrap;
				}
				p{
					padding-bottom: 10px;
				}
				.links{
					display: flex;
					flex-direction: column;
				}
				.links a{
					line-height: 1.8;
					transition: 0.3s;
				}
				.links a:hover{
					color: #1890ff;
				}
				@media(max-width:500px){
					.list{
						flex-direction: column;
					}
					.w1500{
						width: 100%;
					}
					.links{
						align-items: flex-start;
					}
					.footer{
						padding: 20px 15px;
					}
				}
			`}</style>
		</footer>
	)
}
const Drive = () => {
	return <div className="container">
		<h3>Next.js强力驱动</h3>
		<img src="../static/img/next.svg" alt="" />
		<p>使用的技术栈有:React, Redux, Express, Mongodb. <a href="https://github.com/MichaelHao25/blog">博客源码</a></p>
		<style jsx>{`
			.container{
				padding: 8% 0 5%;
				text-align: center;
			}
			h3{
				font-size: 30px;
				text-align: center;
				padding-bottom: 20px;
			}
			img{
				max-width: 230px;
				width: 100%;
				display: block;
				margin: 0 auto 0;
				padding: 0 15px;
				box-sizing: border-box;
			}
			p{
				margin: 10px 15px 0;
				background: #333;
				display: inline-block;
				color: #fff;
				text-align: left;
				padding: 5px 10px;
			}
			a{
				color: #1890ff;
			}
			@media(max-width:700px){
				.container{
					padding: 150px 0 100px;
					text-align: center;
				}
			}
		`}</style>
	</div >
}
const Design = () => {
	return (
		<div className="design">
			<h3>完全响应式设计</h3>
			<p>React+RWD+NEXT.js</p>
			<div className="device-cnt">
				<div className="device mobile">
					<span></span>
					<i></i><i></i>
				</div>
				<div className="device pc">
					<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
				</div>
				<div className="device pad">
					<i></i><i></i><i></i><i></i>
				</div>
			</div>
			{/* position: absolute; */}
			{/* bottom: 0; */}
			<style jsx>{`
				.design{
					position: relative;
					background: #333;
					color: #fff;
					text-align: center;
				}
				.design:after{
					content: "";
					position: absolute;
					width: 100%;
					top: -39px;
					left: 0;
					height: 40px;
					background: #333;
					clip-path: polygon(100% 0, 100% 100%, 0% 100%);
				}
				h3{
					font-size: 32px;
					font-weight: 200;
					padding-top: 10%;
					padding-bottom: 20px;
				}
				p{
					font-size: 20px;
					font-weight: 200;
					padding-bottom: 2%;
				}
				@media(max-width:700px){
					h3{
						padding-top:100px;
					}
					p{
						padding-bottom: 50px;
					}
				}
				.device-cnt {
					position: relative;
					height: 176px;
					max-width: 600px;
					margin: 2em auto 0;
					overflow: hidden;
					display: flex;
					align-items: flex-end;
					justify-content: space-between;
				}

				.device-cnt:after {
					content: "";
					position: absolute;
					height: 10px;
					left: 0;
					right: 0;
					bottom: -10px;
					box-shadow: 0 0 10px #000
				}

				.device {
					position: relative;
					border-radius: 8px 8px 0 0;
					background: #aaa;
					border-style: solid;
					border-color: #ddd;
					border-width: 10px 6px 0;
					line-height: 0;
					text-align: center;
				}

				.device:before {
					content: "";
					display: block;
					height: 10px;
					margin-bottom: 6px;
					background: #fff;
					box-shadow: 0 2px 2px -2px #000
				}

				.device i {
					display: inline-block;
					position: relative;
					width: 58px;
					height: 75px;
					background: #fff;
					margin: 0 3px 8px;
				}

				.device i:before {
					content: "";
					position: absolute;
					width: 100%;
					height: 62%;
					left: 0;
					top: 0;
					background: #eee
				}

				.mobile {
					width: 52px;
					height: 88px;
					border-width: 17px 4px 0;
				}

				.mobile:after {
					content: "";
					display: block;
					position: absolute;
					background: #555;
					width: 3px;
					height: 3px;
					top: -13px;
					left: 24px;
					border-radius: 3px
				}

				.mobile span {
					display: block;
					position: absolute;
					background: #555;
					width: 10px;
					height: 2px;
					top: -7px;
					left: 20px;
					border-radius: 2px
				}

				.mobile i {
					display: block;
					width: auto;
					height: 55px;
					margin-bottom: 4px
				}

				.pc {
					width: 280px;
					height: 166px;
				}

				.pc:before {
					margin-bottom: 10px
				}

				.pad {
					width: 105px;
					height: 113px;
					border-top-width: 17px
				}

				.pad:after {
					content: "";
					display: block;
					position: absolute;
					background: #555;
					width: 4px;
					height: 4px;
					top: -11px;
					left: 51px;
					border-radius: 100%
				}

				.pad i {
					width: 44px;
					height: 55px
				}
				@media(max-width:540px){
					.device-cnt{
						justify-content: center;
					}
					.pad,.mobile{
						position: absolute;
					}
					.pad{
						right: 20px;
					}
					.mobile{
						left: 40px;
						z-index: 1;
					}
					.device-cnt:after{
						z-index: 2;
					}
				}
			`}</style>
		</div>
	)
}
const Home = () => {
	return <section className="home">
		<header className="header">
			<div className="container">
				{/* <div className="w1500"> */}
				<h3 className='fz28'>你好!</h3>
				<h2 className='fz28'>我是<b>Blue</b></h2>
				<h3 className='fz42'>你是谁?</h3>
				<p className='fz18'>90后魔蝎男,前端开发,目前正在死磕React Native</p>
				<div className="share">
					<a href="https://github.com/MichaelHao25">
						<img src="../static/img/git.svg" alt="" />
					</a>
				</div>
				{/* </div> */}
			</div>
		</header>
		<style jsx>{`
			.header{
				width: 100%;
				background:url('../static/img/mask2.png'), url('../static/img/home.JPG') center center/cover no-repeat;
				height:100%;
				max-height: 100vh;
				position: relative;
				overflow: hidden;
				transition: 0.3s background-position;
			}
			.header:after{
				content: '';
				display: block;
				padding-top: 66%;
				width: 100%;
				min-height: 500px;
				box-sizing: border-box;
			}
			@media(max-width:400px){
				.header{
					background-position: 10% center;
				}
			}
			@media(max-width:700px){
				.header{
					background-position: 20% center;
				}
			}
			.container{
				position: absolute;
				top: 0;
				left:0;
				right: 0;
				bottom:0;
				display: flex;
				flex-direction: column;
				padding: 0% 5% 15% 5%;
				box-sizing: border-box;
				justify-content: center;
				color: #fff;
				font-weight: 200;
				text-shadow:-1px -1px 1px #000;
			}
			.fz28{
				font-size: 28px;
				line-height: 1.5;
				font-weight: 200;
			}
			.fz42{
				font-size: 42px;
				line-height: 2;
				font-weight: 200;
			}
			.fz18{
				font-size: 18px;
				font-weight: 200;
				padding-bottom:20px;
			}
			b{
				font-weight: bold;
			}
			.share a{
				display: flex;
				width: 50px;
				height: 50px;
				border-radius: 25px;
				/* border:1px solid #fff; */
				align-items: center;
				justify-content: center;
			}
			.share a img{
				width: 80%;
				display: block;
			}
		`}</style>
	</section>
}

let refInitPage = createRef();
const InitPage = () => {
	const [action, setAction] = useState(false);
	const [hide, setHide] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setAction(true);
		}, 100);
	}, [])
	const transitionEnd = () => {
		console.log('加载动画执行完毕');
		setHide(true);
	}
	return <section onTransitionEnd={transitionEnd} className={`initPage ${action ? 'action' : ''} ${hide ? 'hide' : ''}`}>
		<style jsx>{`
			.initPage{
				position: fixed;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				overflow: hidden;
				z-index: 100;
			}
			.initPage:after{
				content: '';
				top: 0;
				left: 0;
				position: absolute;
				border-top:51vh solid #000;
				border-left:51vw solid #000;
				border-right:51vw solid transparent;
				border-bottom:51vh solid transparent;
				transition: 1s ease;
			}
			.initPage:before{
				content: '';
				top: 0;
				right: 0;
				position: absolute;
				border-bottom:51vh solid #000;
				border-right:51vw solid #000;
				border-top:51vh solid transparent;
				border-left:51vw solid transparent;
				transition: 1s ease;
			}
			.initPage.action:after{
				transform: translate(-50%,-50%);
				opacity: 0;
			}
			.initPage.action:before{
				transform: translate(50%,50%);
				opacity: 0;
			}
			.initPage.hide{
				display: none;
			}
		`}</style>
	</section>
}
// import Layout from '../components/MyLayout';
// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';


// const Index = (props) => {
//   return (
//     <Layout>
//       <h1>Batman TV Shows</h1>
//       <ul>
//         {props.shows.map(show => (
//           <li key={show.id}>
//             <Link href="/p/[id]" as={`/p/${show.id}`}>
//               <a>{show.name}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </Layout>
//   );
// }
// Index.getInitialProps = async function () {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

// export default Index;
