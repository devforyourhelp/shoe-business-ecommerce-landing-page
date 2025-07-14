
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Gift, Percent, Bell } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to SoleStyle!",
        description: `Thank you for subscribing! Check ${email} for your 15% discount code.`,
      });
      setEmail('');
    }
  };

  const benefits = [
    {
      icon: Percent,
      title: "Exclusive Discounts",
      description: "Get 15% off your first order and early access to sales"
    },
    {
      icon: Bell,
      title: "New Arrivals",
      description: "Be the first to know about our latest shoe collections"
    },
    {
      icon: Gift,
      title: "Special Offers",
      description: "Receive birthday discounts and member-only promotions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the SoleStyle Family
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter and unlock exclusive benefits, early access to new collections, 
            and special member-only offers delivered straight to your inbox.
          </p>

          {/* Newsletter form */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 text-lg rounded-full border-0 bg-white/90 backdrop-blur-sm placeholder:text-gray-500 focus:bg-white"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Subscribe Now
              </Button>
            </div>
          </form>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/80 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-12">
          <p className="text-white/70 text-sm">
            Join 50,000+ subscribers • No spam, unsubscribe anytime • Secure & privacy-focused
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
