export default function TermsModal({
	visible,
	onClose,
}: {
	visible: boolean;
	onClose: () => void;
}) {
	const handleOnClose = (e: any) => {
		e.target.id === 'modal-bg' && onClose();
	};

	return visible ? (
		<div
			className="fixed inset-0 bg-dark/30 backdrop-blur flex items-center justify-center z-30"
			id="modal-bg"
			onClick={handleOnClose}>
			<div className="w-[90vw] h-[90vh] lg:w-3/5 lg:h-auto overflow-y-scroll bg-light py-8 px-10 border border-black">
				<h1 className="font-serif text-2xl text-center">
					Terms and Conditions for Contact Form
				</h1>
				<p className="text-center mb-5">
					By using the contact form on Amanda de Waal Therapy, you agree to the
					following terms and conditions:
				</p>
				<ol className="text-xs">
					<li className="mb-1">
						1. Collection of Personal Information: We collect personal
						information, including your email address, name, phone number
						(optional), and messages through this contact form. By submitting
						the form, you consent to the collection and use of this information
						by us for the purpose of responding to your inquiry or message.
					</li>
					<li className="mb-2 leading-normal">
						2. Use of Personal Information: The personal information you provide
						will be used solely for the purpose of addressing your inquiry or
						message. We may use your email address to respond to your message or
						provide necessary updates related to your inquiry. We will not
						share, sell, or rent your personal information to any third parties
						unless required by law.
					</li>
					<li className="mb-2 leading-normal">
						3. Storage and Security: We take reasonable measures to protect the
						personal information collected through this contact form. However,
						please be aware that no data transmission over the internet or
						electronic storage method is 100% secure. While we strive to use
						commercially acceptable means to protect your personal information,
						we cannot guarantee its absolute security.
					</li>
					<li className="mb-2 leading-normal">
						4. Retention of Personal Information: We will retain your personal
						information collected through this contact form for as long as
						necessary to fulfill the purpose for which it was collected, or as
						required by law.
					</li>
					<li className="mb-2 leading-normal">
						5. Opt-Out: If you wish to opt-out from receiving further
						communications from us or request the removal of your personal
						information from our records, please contact us using the provided
						contact information below.
					</li>
					<li className="mb-2 leading-normal">
						6. Third-Party Links: This website may contain links to third-party
						websites. Please note that we have no control over the content,
						privacy policies, or practices of these websites. We encourage you
						to review the terms and conditions and privacy policies of any
						third-party websites you visit.
					</li>
					<li className="mb-2 leading-normal">
						7. Changes to Terms and Conditions: We reserve the right to modify
						or update these terms and conditions at any time. Any changes will
						be effective immediately upon posting the revised version on this
						website. It is your responsibility to review the terms and
						conditions periodically for any updates.
					</li>
					<li className="mb-2 leading-normal">
						8. Governing Law: These terms and conditions shall be governed by
						and construed in accordance with the laws of Canada, without regard
						to its conflict of laws principles.
					</li>
					<li className="mb-2 leading-normal">
						9. Contact Information: If you have any questions or concerns
						regarding these terms and conditions or the use of your personal
						information, please contact us at amandadewaaltherapy@gmail.com.
						Please note that this is a general template and may need to be
						tailored to your specific circumstances and legal requirements. It
						is always recommended to consult with a legal professional to ensure
						compliance with applicable laws and regulations.
					</li>
				</ol>
				<button className="button mx-auto mt-10" onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	) : null;
}
