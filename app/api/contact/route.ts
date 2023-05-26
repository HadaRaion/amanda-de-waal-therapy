import { sendEmail } from '@/services/email';
import { object, string, number } from 'yup';

const bodySchema = object().shape({
	from: string().email().required(),
	firstName: string().required(),
	lastName: string().optional(),
	phoneNumber: number().optional(),
	subject: string().optional(),
	message: string().required(),
});

export async function POST(req: Request) {
	const body = await req.json();

	if (!bodySchema.isValidSync(body)) {
		return new Response(JSON.stringify({ message: 'Invalid body' }), {
			status: 400,
		});
	}

	return sendEmail(body)
		.then(
			() =>
				new Response(JSON.stringify({ message: 'Email sent' }), { status: 200 })
		)
		.catch(
			err =>
				new Response(JSON.stringify({ message: err.message }), { status: 500 })
		);
}
