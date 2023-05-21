import classNames from 'classnames';

export default function FormBanner({
	message,
	className,
}: {
	message: string;
	className?: string;
}) {
	return (
		<p className={classNames('bg-dark text-light px-6 py-2', className)}>
			{message}
		</p>
	);
}
