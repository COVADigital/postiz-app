export const metadata = {
  title: "Terms of Service | Postiz",
  description: "Terms of Service for this Postiz instance.",
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-3xl p-8 prose prose-invert">
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using this Postiz instance, you agree to be bound by these Terms of Service.
      </p>

      <h2>2. Accounts & Access</h2>
      <p>
        You are responsible for the activity on your account and for maintaining the security of your credentials.
      </p>

      <h2>3. Content</h2>
      <p>
        You retain ownership of your content. You grant us the rights necessary to operate and improve the service.
      </p>

      <h2>4. Prohibited Use</h2>
      <ul>
        <li>Abuse, harassment, or harmful conduct</li>
        <li>Illegal activity or infringement of others’ rights</li>
        <li>Interference with service integrity or security</li>
      </ul>

      <h2>5. Termination</h2>
      <p>
        We may suspend or terminate access for violations of these terms or to protect the service.
      </p>

      <h2>6. Disclaimers & Liability</h2>
      <p>
        The service is provided “as is.” We disclaim warranties to the extent permitted by law and limit liability accordingly.
      </p>

      <h2>7. Changes</h2>
      <p>
        We may update these terms. Continued use after changes constitutes acceptance of the revised terms.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions? Email <a href="mailto:hello@example.com">hello@example.com</a>.
      </p>
    </main>
  );
}
