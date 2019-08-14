import {
	useState, useEffect
} from 'react';
import Link from 'next/link';


const Header = () => {
	const [fade, setFade] = useState(false);
	useEffect(() => {
		window.addEventListener('resize', () => {
			window.removeEventListener('scroll', autoFade)
			if (window.innerWidth > 768) {
				window.addEventListener('scroll', autoFade)
			}
		})
		// window.innerHeight
	}, []);
	const autoFade = () => {
		let top = 0
		if (document.documentElement && document.documentElement.scrollTop) {
			top = document.documentElement.scrollTop;
		} else if (document.body) {
			top = document.body.scrollTop;
		}
		if (top > 500) {
			setFade(true);
		} else {
			setFade(false);
		}
	}
	const handleOnMouseEnter = (e) => {
		if (!("ontouchend" in document)) {
			setFade(true);
			console.log('handleOnMouseEnter');
		}
	}
	const handleOnMouseLeave = () => {
		if (!("ontouchend" in document)) {
			setFade(false);
			console.log('handleOnMouseLeave');
		}
	}
	const handleToggle = (e) => {
		setFade(!fade);
	}
	return (
		<div className="mask" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
			<nav className={`nav ${fade ? 'active' : ''}`}>
				<div className="w1500">
					<div className="brand">
						<Link href="/">
							<a>Blog</a>
						</Link>
					</div>
					<div className="links">
						<Link href="/"><a className="blog">博文</a></Link>
						<Link href="/"><a className="dev">实验室</a></Link>
						<Link href="/"><a className="message">留言</a></Link>
						<Link href="/"><a className="about">关于</a></Link>
					</div>
				</div>
			</nav>
			<div className={`arrow ${fade ? 'active' : ''}`} onClick={handleToggle}>
				<span>

				</span>
			</div>

			<style jsx>{`
				.arrow{
					position: fixed;
					right: 15px;
					top: 15px;
					width: 50px;
					height: 46px;
					background: #fff;
					border-radius: 5px;
					display: flex;
					align-items: center;
					justify-content: center;
					transform: translateY(0);
					opacity: 1;
					transition: 0.3s;
					z-index: 1;
				}
				.arrow.active{
					top: 0;
					transform: translateY(-100%);
					opacity: 0;
				}
				.arrow span{
					position: relative;
					width: 26px;
					height: 2px;
					background: #333;
					border-radius: 1px;
				}
				.arrow span:after{
					content: '';
					position: absolute;
					top: -10px;
					width: 26px;
					height: 2px;
					background: #333;
					border-radius: 1px;
				}
				.arrow span:before{
					content: '';
					position: absolute;
					bottom: -10px;
					width: 26px;
					height: 2px;
					background: #333;
					border-radius: 1px;
				}
				.mask{
					position: fixed;
					top: 0;
					z-index: 3;
					height:200px;
					width: 100%;
				}
				.nav{
					background: #fff;
					position: fixed;
					top: 0;
					z-index: 1;
					width: 100%;
					height: 56px;
					box-shadow: 0 0 5px rgba(0,0,0,.4);
					font-size: 14px;
					transition:0.3s;
					transform: translateY(-100%);
					opacity: 0;
					visibility: hidden;
				}
				.nav.active{
					transform: translateY(0);
					opacity: 1;
					visibility: visible;
				}
				.w1500{
					height: 100%;
					display: flex;
					justify-content: space-between;
					transition: 0.3s;
				}
				@media(max-width:1600px){
					.w1500{
						width: 80%;
					}
				}
				.brand{
					height: 100%;
				}
				.brand a{
					display: block;
					height: 100%;
					padding: 0 10px;
					line-height: 56px;
				}
				.links{
					display: flex;
				}
				.links a{
					display: block;
					line-height: 56px;
					margin: 0 10px;
					padding: 0 10px;
					transition: 0.3s;
				}
				.links a:hover{
					color: #1890ff;
				}
			`}</style>
		</div>
	)
};

export default Header;



