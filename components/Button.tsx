import Link from 'next/link';
import classNames from 'classnames';

type Props = {
	href: string;
	label: string;
	darker?: boolean;
	className?: string;
};

export default function Button({ href, label, darker, className }: Props) {
	return (
		<Link
			href={href}
			className={classNames(
				`button ${darker && 'before:border-b-light'}`,
				className
			)}>
			{label}
		</Link>
	);
}
