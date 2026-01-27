import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import customerImage from '@/assets/images/customer-lifestyle.png';
import vendorImage from '@/assets/images/vendor-kitchen.png';
import courierImage from '@/assets/images/courier-rider.png';

export function UserGroups() {
  const userGroups = [
    {
      title: 'For Customers',
      subtitle: 'Shop smarter',
      description: 'Browse thousands of products, track deliveries in real-time, and enjoy exclusive deals from local vendors.',
      image: customerImage,
      benefits: ['24/7 shopping', 'Fast delivery', 'Secure payments', 'Order tracking'],
      bgColor: 'from-cyan-50 to-blue-50',
      accentColor: 'text-cyan-600',
    },
    {
      title: 'For Vendors',
      subtitle: 'Grow your business',
      description: 'Reach more customers, manage inventory effortlessly, and boost sales with our powerful vendor dashboard.',
      image: vendorImage,
      benefits: ['Easy setup', 'Analytics dashboard', 'Payment processing', 'Marketing tools'],
      bgColor: 'from-orange-50 to-amber-50',
      accentColor: 'text-orange-600',
    },
    {
      title: 'For Service Providers',
      subtitle: 'Earn on your terms',
      description: 'Set your own schedule, choose your deliveries, and maximize your earnings with flexible work opportunities.',
      image: courierImage,
      benefits: ['Flexible hours', 'Instant payouts', 'Route optimization', 'Support 24/7'],
      bgColor: 'from-emerald-50 to-green-50',
      accentColor: 'text-emerald-600',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join our community
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you're shopping, selling, or delivering - we've got you covered
          </p>
        </div>

        <div className="space-y-24">
          {userGroups.map((group, index) => (
            <div
              key={index}
              className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                <div>
                  <div className={`mb-2 inline-block text-sm font-semibold uppercase tracking-wide ${group.accentColor}`}>
                    {group.subtitle}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {group.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600">{group.description}</p>

                <ul className="space-y-3">
                  {group.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${group.bgColor}`}>
                        <span className="text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className={`group inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition-all hover:bg-gray-800`}>
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${group.bgColor} p-1`}>
                  <div className="aspect-square overflow-hidden rounded-3xl">
                    <ImageWithFallback
                      src={group.image}
                      alt={group.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}