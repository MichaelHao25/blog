import Link from 'next/link';
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
							<Link href="/blog"><a className="blog">博文</a></Link>
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
export default CopyRight
