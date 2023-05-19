import classNames from 'classnames';

type Props = {
	label: string;
	className?: string;
};

export default function SubmitButton({ label, className }: Props) {
	return (
		<button type="submit" className={classNames(`button`, className)}>
			{label}
		</button>
	);
}
