import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
                <h1 className="mb-8 text-3xl font-bold text-gray-900">Privacy Policy</h1>
                <div className="prose prose-emerald max-w-none text-gray-600">
                    <p className="mb-4">Last updated: January 27, 2026</p>
                    <p className="mb-6">
                        At ErrandSort, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">1. Information We Collect</h2>
                    <p className="mb-4">
                        We collect information that you provide directly to us, including:
                    </p>
                    <ul className="mb-6 list-disc pl-6">
                        <li>Account information (name, email, phone number)</li>
                        <li>Profile information for Vendors and Providers</li>
                        <li>Payment and transaction information</li>
                        <li>Communications with us or other users</li>
                    </ul>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
                    <p className="mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="mb-6 list-disc pl-6">
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process transactions and sending related information</li>
                        <li>Verify your identity and prevent fraud</li>
                        <li>Send you technical notices, updates, and support messages</li>
                    </ul>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">3. Information Sharing</h2>
                    <p className="mb-6">
                        We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our platform, conducting our business, or serving our users.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">4. Contact Us</h2>
                    <p className="mb-6">
                        If you have any questions about this Privacy Policy, please contact us at support@errandsort.com.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
