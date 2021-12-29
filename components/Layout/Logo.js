import companyName from '../../text/companyName.json';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href="/">
			<p className="logo">{companyName.companyName}</p>
		</Link>
	);
};

export default Logo;
