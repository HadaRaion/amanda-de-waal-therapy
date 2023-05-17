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
				`link relative flex justify-center items-center w-60 h-16 rounded-full overflow-hidden border border-black z-10 before:content-[''] before:block before:absolute before:inset-y-0 before:left-0 before:-right-[2rem] before:border-r-[2rem] before:border-r-transparent before:border-b-[4rem] before:-z-10 before:-translate-x-full before:transition before:ease-in-out before:duration-500 before:delay-100 hover:before:translate-x-0 ${
					darker ? 'before:border-b-light' : 'before:border-b-primary'
				} `,
				className
			)}>
			{label}
		</Link>
	);
}
