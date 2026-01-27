import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Building2, ArrowRight, BarChart3, ShieldCheck } from 'lucide-react';

export function VendorLanding() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="relative overflow-hidden bg-emerald-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Grow Your Business with <span className="text-emerald-600">ErrandSort</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                            Reach thousands of new customers, manage orders effortlessly, and scale your operations with our powerful vendor tools.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://errandsorthub.errandsort.com/vendor/register/"
                                className="rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                            >
                                Register as Vendor
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                                <Building2 className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Digital Storefront</h3>
                            <p className="mt-4 text-gray-600">Create a professional online presence in minutes without any coding.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                                <BarChart3 className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Real-time Analytics</h3>
                            <p className="mt-4 text-gray-600">Track sales, view customer insights, and optimize your business performance.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                                <ShieldCheck className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Secure Payments</h3>
                            <p className="mt-4 text-gray-600">Get paid faster with our reliable and secure payment processing system.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
