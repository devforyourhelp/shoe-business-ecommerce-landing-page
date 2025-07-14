
import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Users, Zap, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "500+", label: "Shoe Models", icon: Zap },
    { number: "25+", label: "Years Experience", icon: Award },
    { number: "99%", label: "Satisfaction Rate", icon: Heart }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Crafting Perfect Shoes Since 1999
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At SoleStyle, we believe every step matters. Our passion for creating exceptional footwear 
                drives us to source the finest materials and employ traditional craftsmanship techniques 
                combined with modern innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From our humble beginnings in a small workshop to becoming a trusted name in premium footwear, 
                we've never compromised on quality, comfort, or style. Each pair tells a story of dedication 
                and attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop" 
                alt="Shoe craftsmanship"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Handcrafted Excellence</h3>
                <p className="text-lg opacity-90">Every detail matters in our workshop</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
