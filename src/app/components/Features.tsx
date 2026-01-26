import { ShoppingBag, Store, Truck, Package, CreditCard, Clock } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Browse & Shop',
      description: 'Discover thousands of products from local vendors and shops',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Get your orders delivered in under 30 minutes',
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Multiple payment options with bank-level security',
    },
    {
      icon: Package,
      title: 'Track Orders',
      description: 'Real-time tracking from pickup to your doorstep',
    },
    {
      icon: Store,
      title: 'Vendor Tools',
      description: 'Powerful dashboard to manage your inventory and sales',
    },
    {
      icon: Truck,
      title: 'Earn Flexibly',
      description: 'Service providers set their own schedule and rates',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in one app
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Streamlined experience for customers, vendors, and service providers
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-emerald-500 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}