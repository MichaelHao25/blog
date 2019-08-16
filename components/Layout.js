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
			<div className={`${blur ? 'blur' : ''}`}>
				{props.children}
				<Footer />
			</div>
			{/* background: rgba(255,255,255,0.6) */}
			<style jsx>{`
				.blur{
					transition: 0.3s;
					filter: blur(5px);
					
				}
      		`}</style>
		</>
	);
};

export default Layout;
