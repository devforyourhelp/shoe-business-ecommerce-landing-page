
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9f2ca6d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Absolutely love my new Oxford shoes! The quality is exceptional and they're incredibly comfortable. I've received so many compliments. Will definitely be ordering more!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Executive",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "These are hands down the best dress shoes I've ever owned. Perfect for long business days. The craftsmanship is outstanding and they've maintained their shape beautifully."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The athletic shoes are incredible! Perfect support for my daily runs and gym sessions. They're stylish enough to wear casually too. Highly recommend!"
    },
    {
      id: 4,
      name: "David Park",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The attention to detail is remarkable. You can tell these shoes are made with care. They're not just shoes, they're a statement piece. Worth every penny!"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Customer service was amazing and the shoes exceeded my expectations. Fast shipping, beautiful packaging, and the quality is simply unmatched. Five stars!"
    },
    {
      id: 6,
      name: "Alex Kumar",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Perfect fit and incredibly comfortable from day one. No break-in period needed. These shoes have become my go-to for both work and weekend activities."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their SoleStyle experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              <CardContent className="p-8 relative">
                <Quote className="w-8 h-8 text-purple-200 absolute top-4 right-4" />
                
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Customer info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-16 p-8 bg-white rounded-3xl shadow-lg max-w-2xl mx-auto">
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">4.9/5 Average Rating</h3>
          <p className="text-lg text-gray-600">Based on 1,847+ verified customer reviews</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
