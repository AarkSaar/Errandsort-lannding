import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

export function CookiePolicy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
                <h1 className="mb-8 text-3xl font-bold text-gray-900">Cookie Policy</h1>
                <div className="prose prose-emerald max-w-none text-gray-600">
                    <p className="mb-4">Last updated: January 27, 2026</p>
                    <p className="mb-6">
                        This Cookie Policy explains how ErrandSort uses cookies and similar technologies to recognize you when you visit our website.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">1. What are cookies?</h2>
                    <p className="mb-6">
                        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">2. Why do we use cookies?</h2>
                    <p className="mb-4">
                        We use cookies for several reasons:
                    </p>
                    <ul className="mb-6 list-disc pl-6">
                        <li>Essential cookies: Required for technical reasons for our website to operate.</li>
                        <li>Performance cookies: To track and target the interests of our users to enhance the experience.</li>
                        <li>Analytics cookies: To understand how our website is being used and improve our services.</li>
                    </ul>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">3. How can I control cookies?</h2>
                    <p className="mb-6">
                        You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">4. Updates to this policy</h2>
                    <p className="mb-6">
                        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
