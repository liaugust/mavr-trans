import { Heading, Title } from "@/app/_components/Typography";

export default function TermsPage() {
  return (
    <div className="container py-10">
      <Title>Terms and Conditions for MavrTrans</Title>
      <div className="mb-10">
        <Heading className="mb-2">
          Last Updated: {new Date("2023 08 10").toLocaleDateString()}
        </Heading>
        <p>
          Please carefully read these terms and conditions before using
          MavrTrans (&quot;the Service&quot;). By using the Service, you agree
          to be bound by these terms and conditions. If you do not agree to
          these terms and conditions, please refrain from using the Service.
        </p>
      </div>
      <div className="mb-10">
        <Heading className="mb-2">1. Service Overview</Heading>
        <p>
          1.1. MavrTrans provides transportation services, including the hiring
          of taxis for passenger transportation.
        </p>
        <p>
          1.2. The Service is subject to availability, and the terms and
          conditions may be updated from time to time.
        </p>
      </div>
      <div className="mb-10">
        <Heading className="mb-2">2. User Eligibility</Heading>
        <p>
          2.1. To use the Service, you must be at least 18 years old. By using
          the Service, you confirm that you meet the legal age requirement.
        </p>
        <p>
          2.2. You must have the legal authority to enter into this agreement.
          If you are using the Service on behalf of a company or organization,
          you must have the authority to bind that entity.
        </p>
      </div>
      <div className="mb-10">
        <Heading className="mb-2">3. Booking and Payment</Heading>
        <p>
          3.1. Taxis can be booked through our mobile app, website, or by
          contacting our customer service.
        </p>
        <p>
          3.2. Payment for the service can be made using the accepted payment
          methods specified in the app or on our website.
        </p>
        <p>
          3.3. You are responsible for providing accurate and up-to-date payment
          information.
        </p>
        <p>
          3.4. All fees and charges for the Service are clearly communicated
          during the booking process. Additional charges may apply for special
          requests or additional services.
        </p>
      </div>
      <div className="mb-10">
        <Heading className="mb-2">4. Cancellations and Refunds</Heading>
        <p>
          4.1. You can cancel a booking, subject to our cancellation policy,
          which is detailed on our website or app.
        </p>
        <p>
          4.2. Refunds for cancellations are subject to the applicable refund
          policy. We reserve the right to deduct any applicable cancellation
          fees.
        </p>
      </div>
      <div className="mb-10">
        <Heading className="mb-2">5. Service Rules and Conduct</Heading>
        <p>
          5.1. You must treat our drivers and other users with respect and
          refrain from any abusive, discriminatory, or harmful behavior.
        </p>
        <p>
          5.2. You must not engage in any illegal activities while using our
          service.
        </p>
      </div>
      <div className="mb-10">
        <Heading className="mb-2">6. Liability</Heading>
        <p>
          6.1. MavrTrans is not liable for any personal injury, property damage,
          or other harm that may occur while using the Service, except where the
          harm is a direct result of our negligence.
        </p>
      </div>
      <div className="mb-10">
        <Heading className="mb-2">7. Termination of Service</Heading>
        <p>
          7.1. We reserve the right to terminate or suspend your access to the
          Service at our discretion, including but not limited to violations of
          these terms and conditions.
        </p>
      </div>
      <div className="mb-10">
        <Heading className="mb-2">8. Privacy and Data Protection</Heading>
        <p>
          8.1. Your use of the Service is subject to our Privacy Policy, which
          can be found on our website or app.
        </p>
      </div>
      <div className="mb-10">
        <Heading className="mb-2">9. Changes to Terms and Conditions</Heading>
        <p>
          9.1. We reserve the right to update and modify these terms and
          conditions at any time. It is your responsibility to review these
          terms periodically.
        </p>
      </div>
      <Heading>10. Governing Law</Heading>
      <p>
        10.1. These terms and conditions are governed by the laws of [Your
        Jurisdiction]. Any disputes arising from the use of the Service will be
        subject to the exclusive jurisdiction of the courts of [Your
        Jurisdiction].
      </p>
      <p>
        By using MavrTrans, you agree to comply with these terms and conditions.
        If you do not agree with any part of these terms, please do not use the
        Service.
      </p>
      <p>
        If you have any questions or concerns regarding these terms and
        conditions, please contact our customer service.
      </p>
      MavrTrans Contact Information:
      <a href="tel:++393503940838">+393503940838</a>
      <a href="mailto:mavrtransfer@gmail.com">mavrtransfer@gmail.com</a>
      Thank you for choosing MavrTrans!
    </div>
  );
}
