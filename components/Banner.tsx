export type Props = {
	title: string;
};

export default function Banner({ title }: Props) {
	return (
		<section>
			<h2>{title}</h2>
		</section>
	);
}
