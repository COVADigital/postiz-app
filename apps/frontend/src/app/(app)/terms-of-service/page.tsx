export const metadata = {
  title: "Terms of Service | COVA Digital & Postiz",
  description: "Terms of Service for this Postiz instance operated by COVA Digital.",
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-3xl p-8 prose prose-invert">
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using this service (the “Service”), operated by <strong>COVA Digital</strong> and powered by the Postiz platform, 
        you agree to be bound by these Terms of Service.
      </p>

      <h2>2. Accounts & Access</h2>
      <p>
        You are responsible for the activity on your account and for maintaining the security of your credentials.
        COVA Digital reserves the right to suspend or terminate accounts for violations of these terms.
      </p>

      <h2>3. Content</h2>
      <p>
        You retain ownership of the content you create or upload. By using the Service, you grant COVA Digital the rights 
        necessary to operate, maintain, and improve the Service.
      </p>

      <h2>4. Prohibited Use</h2>
      <ul>
        <li>Abuse, harassment, or harmful conduct</li>
        <li>Illegal activity or infringement of others’ rights</li>
        <li>Interference with service integrity, security, or availability</li>
      </ul>

      <h2>5. Termination</h2>
      <p>
        COVA Digital may suspend or terminate access to the Service at its discretion for violations of these terms 
        or to protect the integrity of the platform.
      </p>

      <h2>6. Disclaimers & Liability</h2>
      <p>
        The Service is provided “as is,” without warranties of any kind. To the fullest extent permitted by law, 
        COVA Digital and Postiz disclaim all warranties and limit liability for damages arising from your use of the Service.
      </p>

      <h2>7. Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use of the Service after changes are posted constitutes 
        acceptance of the revised Terms.
      </p>

      <h2>8. Contact</h2>
      <p>
        For questions about these Terms, please contact <strong>COVA Digital</strong> at{" "}
        <a href="mailto:hello@example.com">hello@example.com</a>.
      </p>
    </main>
  );
}
