import {
	useEffect,
	useState,
	createRef
} from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
	const [blur, setBlur] = useState(false);
	return (
		<>
			<Header blur={blur} setBlur={setBlur} />
			<div className={`${blur ? 'blur' : ''} transition`}>
				{props.children}
				<Footer />
			</div>
			{/* background: rgba(255,255,255,0.6) */}
			<style jsx>{`
				.blur{
					filter: blur(5px);
					transform: translate(0,80px)
				}
				.transition{
					transition:  0.3s;
				}
      		`}</style>
		</>
	);
};

export default Layout;
