export const metadata = {
  title: "Privacy Policy | Postiz",
  description: "Privacy Policy for this Postiz instance.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl p-8 prose prose-invert">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Account details (name, email)</li>
        <li>Usage and log data (IP, device, timestamps)</li>
        <li>Content you create or upload while using the service</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To provide, maintain, and improve the service</li>
        <li>To secure accounts and prevent abuse</li>
        <li>To communicate important updates</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We do not sell personal data. We may share with service providers or as required by law.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain data as long as necessary for service operation and legal obligations, then delete or anonymize it.
      </p>

      <h2>5. Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect data.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>Access, update, or delete your information where applicable</li>
        <li>Object to or restrict certain processing where applicable</li>
      </ul>

      <h2>7. International Transfers</h2>
      <p>
        Data may be processed in locations outside your region with appropriate safeguards.
      </p>

      <h2>8. Changes to this Policy</h2>
      <p>
        We may update this policy; material changes will be reflected on this page.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions? Email <a href="mailto:hello@example.com">hello@example.com</a>.
      </p>
    </main>
  );
}
