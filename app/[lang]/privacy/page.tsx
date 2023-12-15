import { Heading, Title } from "@/app/_components/Typography";

export default function PrivacyPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <Title className="mb-10">Privacy Policy for MavrTrans</Title>
        <p>
          <em>Last Updated: {new Date("").toLocaleDateString()}</em>
        </p>

        <p>
          At MavrTrans, we are committed to protecting your privacy and ensuring
          the security of your personal information. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your data when
          you use our taxi service. By using MavrTrans, you consent to the
          practices described in this policy.
        </p>
      </div>

      <div className="mb-10">
        <Heading className="mb-3">1. Information We Collect</Heading>
        <p>
          We collect the following types of information to provide our taxi
          services and improve your experience:
        </p>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          1.1. Personal Information:
        </Heading>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Payment information</li>
          <li>Home and destination addresses</li>
          <li>Profile picture (optional)</li>
        </ul>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          1.2. Usage Information:
        </Heading>
        <ul>
          <li>Location data (to provide accurate service)</li>
          <li>Ride history</li>
          <li>Device information</li>
          <li>
            Log information (such as IP address, browser type, and operating
            system)
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <Heading className="mb-3">2. How We Use Your Information</Heading>
        <p>We use the collected information for the following purposes:</p>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          2.1. Providing Services:
        </Heading>
        <ul>
          <li>To facilitate your taxi bookings and rides.</li>
          <li>
            To communicate with you regarding your rides, including updates,
            promotions, and feedback requests.
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          2.2. Improving Our Services:
        </Heading>
        <ul>
          <li>Analyzing usage patterns to enhance our services.</li>
          <li>Developing new features and functionalities.</li>
          <li>Conducting quality assurance and internal research.</li>
        </ul>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          2.3. Legal and Safety Purposes:
        </Heading>
        <ul>
          <li>Complying with legal obligations and resolving disputes.</li>
          <li>Ensuring the safety and security of our users and drivers.</li>
        </ul>
      </div>

      <div className="mb-10">
        <Heading className="mb-3">3. Information Sharing</Heading>
        <p>
          We may share your personal information with the following parties:
        </p>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          3.1. Drivers:
        </Heading>
        <p>
          Sharing your name and location with our drivers to fulfill your ride
          requests.
        </p>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          3.2. Service Providers:
        </Heading>
        <p>
          Sharing information with service providers who assist us in delivering
          our services.
        </p>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          3.3. Legal Requirements:
        </Heading>
        <p>
          Sharing information with law enforcement or government authorities in
          compliance with legal obligations.
        </p>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          3.4. Business Transactions:
        </Heading>
        <p>
          Sharing information in the event of a merger, acquisition, or sale of
          assets.
        </p>
      </div>

      <div className="mb-10">
        <Heading className="mb-3">4. Your Choices</Heading>
        <p>
          You have the following rights concerning your personal information:
        </p>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          4.1. Access and Correction:
        </Heading>
        <p>
          You can access and update your personal information in your MavrTrans
          account settings.
        </p>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          4.2. Location Services:
        </Heading>
        <p>
          You can enable or disable location services in your device settings to
          control the collection of location data.
        </p>
      </div>

      <div className="mb-10">
        <Heading level="3" className="mb-1">
          4.3. Marketing Communications:
        </Heading>
        <p>
          You can opt-out of receiving promotional emails by following the
          unsubscribe instructions provided.
        </p>
      </div>

      <div className="mb-10">
        <Heading className="mb-3">5. Data Security</Heading>
        <p>
          We employ industry-standard security measures to protect your data.
          While we take every reasonable step to safeguard your information,
          please be aware that no data transmission over the internet is
          completely secure.
        </p>
      </div>

      <div className="mb-10">
        <Heading className="mb-3">6. Children&apos;s Privacy</Heading>
        <p>
          MavrTrans does not knowingly collect information from individuals
          under the age of 18. If you believe we have inadvertently collected
          information from a minor, please contact us to delete such
          information.
        </p>
      </div>

      <div className="mb-10">
        <Heading className="mb-3">7. Changes to Privacy Policy</Heading>
        <p>
          We may update this Privacy Policy to reflect changes in our practices
          or legal requirements. We will notify you of any significant updates
          through our platform or via email.
        </p>
      </div>

      <Heading className="mb-3">8. Contact Us</Heading>
      <p>
        If you have any questions or concerns about our Privacy Policy, please
        contact us at:
      </p>

      <p>
        We appreciate your trust in MavrTrans, and we are committed to ensuring
        the privacy and security of your data.
      </p>

      <p>
        <em>MavrTrans</em>
      </p>
      <p>
        <em>+393503940838</em>
      </p>
      <p>
        <em>+393500993924</em>
      </p>
      <p>
        <em>mavrtransfer@gmail.com</em>
      </p>
    </div>
  );
}
