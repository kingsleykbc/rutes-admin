import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, href, className }) => {
	const router = useRouter();
	return (
		<Link href={href}>
			<a className={`${router.asPath === href ? 'active' : ''} ${className}`}>{children}</a>
		</Link>
	);
};

export default ActiveLink;
