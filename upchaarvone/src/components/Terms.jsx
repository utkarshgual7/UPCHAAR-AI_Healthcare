import React from "react";
import NavbarLogin from "../components/Register/NavbarRegister.jsx";

const TermsOfService = () => {
  return (
    <>
      <NavbarLogin />
      <div className="bg-orange-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Terms of Service
          </h1>

          <p className="mb-4">
            Welcome to upchaar.live By accessing or using our website and
            AI-powered healthcare services (the "Services"), you agree to be
            bound by these Terms of Service ("Terms"). Please read them
            carefully before using our Services.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By using our Services, you agree to these Terms. If you do not agree
            to these Terms, please do not use our Services. We may update these
            Terms from time to time, and any changes will be posted on this
            page. Your continued use of the Services following the posting of
            such changes constitutes your acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            2. Description of Services
          </h2>
          <p className="mb-4">
            Our Services provide AI-powered tools and information related to
            healthcare. These services are for informational purposes only and
            do not constitute medical advice. You should always consult with a
            qualified healthcare professional for any health concerns or before
            making any decisions related to your health or treatment.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            3. User Responsibilities
          </h2>
          <p className="mb-4">
            You agree to use our Services only for lawful purposes and in
            accordance with these Terms. You are responsible for the accuracy of
            any information you provide to us. You agree not to:
            <ul className="list-disc ml-6 mb-4">
              <li>Use our Services for any illegal or unauthorized purpose.</li>
              <li>Impersonate any person or entity.</li>
              <li>Interfere with or disrupt the operation of our Services.</li>
              <li>
                Attempt to gain unauthorized access to any part of our Services.
              </li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mb-2">4. Privacy Policy</h2>
          <p className="mb-4">
            Your privacy is important to us. Our Privacy Policy, which is
            incorporated into these Terms, explains how we collect, use, and
            share your information. Please review our
            <a href="/privacy" className="cursor-pointer text-orange-400">
              {" "}
              Privacy Policy{" "}
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            5. Disclaimer of Warranties
          </h2>
          <p className="mb-4">
            Our Services are provided "as is" and without any warranties of any
            kind, either express or implied. We do not warrant that our Services
            will be uninterrupted, error-free, or that any information provided
            through our Services is accurate or reliable.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            6. Limitation of Liability
          </h2>
          <p className="mb-4">
            To the fullest extent permitted by law, we will not be liable for
            any damages arising out of or in connection with your use of our
            Services.
          </p>

          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} U.P.C.H.A.A.R. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
