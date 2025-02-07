import React from "react";
import NavbarLogin from "../components/Register/NavbarRegister.jsx";

const PrivacyPolicy = () => {
  return (
    <>
      <NavbarLogin />
      <div className="bg-orange-50 min-h-screen px-4 ">
        {/* Centered Container */}
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-green-600">
            Privacy Policy
          </h1>

          <p className="mb-4 text-sm sm:text-base text-center">
            Effective Date: Jan 2025
          </p>

          <p className="mb-6 text-gray-700">
            Upchaar.live ("we," "us," or "our") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and share
            your personal information when you visit or use our website
            (upchaar.live) (the "Site").
          </p>

          {/* Section Wrapper */}
          <div className="space-y-6">
            <Section title="Information We Collect">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email, contact
                  info, and other details you provide.
                </li>
                <li>
                  <strong>Usage Information:</strong> Pages visited, links
                  clicked, and time spent on the Site.
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type,
                  and OS.
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies for tracking. You can
                  manage them via browser settings.
                </li>
              </ul>
            </Section>

            <Section title="How We Use Your Information">
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve the Site.</li>
                <li>To personalize your experience.</li>
                <li>To communicate with you.</li>
                <li>To analyze trends and enhance functionality.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </Section>

            <Section title="Sharing Your Information">
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers helping operate the Site.</li>
                <li>With business partners related to our services.</li>
                <li>With legal authorities if required.</li>
              </ul>
            </Section>

            <Section title="Your Choices">
              <ul className="list-disc pl-6 space-y-2">
                <li>You can choose not to provide certain information.</li>
                <li>You can set your browser to refuse cookies.</li>
                <li>You can unsubscribe from emails.</li>
              </ul>
            </Section>

            <Section title="Security">
              <p>
                We take measures to protect your data, but no online method is
                100% secure.
              </p>
            </Section>

            <Section title="Children's Privacy">
              <p>
                Our Site is not for children under 13. We do not knowingly
                collect their information.
              </p>
            </Section>

            <Section title="Changes to This Privacy Policy">
              <p>
                We may update this policy. Changes will be posted on this page.
              </p>
            </Section>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-500 mt-8">
            &copy; {new Date().getFullYear()} U.P.C.H.A.A.R. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
};

// Reusable Section Component
const Section = ({ title, children }) => (
  <div>
    <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-green-500">
      {title}
    </h2>
    <div className="text-gray-700 text-sm sm:text-base">{children}</div>
  </div>
);

export default PrivacyPolicy;
