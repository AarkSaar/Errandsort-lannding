import { Search, ShoppingCart, Truck, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Browse & Select',
      description: 'Search thousands of products from local vendors in your area',
      number: '01',
    },
    {
      icon: ShoppingCart,
      title: 'Place Order',
      description: 'Add items to cart and checkout with secure payment options',
      number: '02',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Service providers pick up and deliver to your doorstep',
      number: '03',
    },
    {
      icon: CheckCircle,
      title: 'Enjoy',
      description: 'Receive your order and rate your experience',
      number: '04',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get started in four simple steps
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-gradient-to-r from-amber-500 to-amber-300 lg:block" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-600">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-400 shadow-lg">
                  <step.icon className="h-12 w-12 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}