import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Customer',
      content: 'ErrandSort has completely changed how I shop. Fast delivery, great prices, and amazing customer service!',
      rating: 5,
      avatar: '👩',
    },
    {
      name: 'Michael Chen',
      role: 'Vendor',
      content: 'My sales have tripled since joining ErrandSort. The platform is easy to use and their support team is fantastic.',
      rating: 5,
      avatar: '👨',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Service Provider',
      content: 'The flexibility to work on my own schedule while earning great income is exactly what I needed. Highly recommend!',
      rating: 5,
      avatar: '👩',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by our community
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our users have to say about ErrandSort
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="mb-6 text-gray-700">{testimonial.content}</p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}