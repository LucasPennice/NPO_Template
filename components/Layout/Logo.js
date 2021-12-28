import companyName from '../../text/companyName.json';
import Link from 'next/link';

export default () => {
	return (
		<Link href="/">
			<p className="logo">{companyName.companyName}</p>
		</Link>
	);
};
