
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, BarChart, Award, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-wastenot-green text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img 
            src="/lovable-uploads/cde97c09-8992-4105-b3e9-1f075dee66e1.png" 
            alt="Food waste background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reduce Food Waste, Feed Communities</h1>
            <p className="text-xl mb-8">
              WasteNot connects food donors with local NGOs to ensure surplus food reaches those in need instead of landfills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-wastenot-yellow text-wastenot-text hover:bg-wastenot-yellow/90">
                <Link to="/signup">Join as Donor</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-wastenot-green hover:bg-white/90">
                <Link to="/signup">Join as NGO</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Food Waste: A Global Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-wastenot-background rounded-lg shadow-sm border">
              <div className="text-3xl font-bold text-wastenot-orange mb-2">1/3</div>
              <p>Of all food produced is wasted worldwide each year</p>
            </div>
            <div className="text-center p-6 bg-wastenot-background rounded-lg shadow-sm border">
              <div className="text-3xl font-bold text-wastenot-orange mb-2">95-115kg</div>
              <p>Food wasted per year by the average EU/USA citizen</p>
            </div>
            <div className="text-center p-6 bg-wastenot-background rounded-lg shadow-sm border">
              <div className="text-3xl font-bold text-wastenot-orange mb-2">42%</div>
              <p>Of food waste comes from households</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-wastenot-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How WasteNot Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-wastenot-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Donate</h3>
              <p>Post your surplus food with details about quantity, pickup location, and time</p>
            </div>
            <div className="text-center">
              <div className="bg-wastenot-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Connect</h3>
              <p>NGOs browse available donations and accept those they can distribute</p>
            </div>
            <div className="text-center">
              <div className="bg-wastenot-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Impact</h3>
              <p>Track your donations and see the positive impact you're making in the community</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-wastenot-green mb-2">1,500+</div>
              <p className="text-lg">Meals Donated</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-wastenot-green mb-2">50+</div>
              <p className="text-lg">Active NGO Partners</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-wastenot-green mb-2">300+</div>
              <p className="text-lg">Food Donors Registered</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-wastenot-green hover:bg-wastenot-darkgreen">
              <Link to="/signup">Join Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-wastenot-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="italic mb-4">"WasteNot has transformed how we manage surplus food at our restaurant. Instead of throwing away perfectly good food at the end of the day, we now help feed those in need."</p>
              <p className="font-bold">- Maria, Local Restaurant Owner</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="italic mb-4">"As a small NGO, sourcing food donations was always challenging. WasteNot connects us directly with donors, making our operations much more efficient and allowing us to help more people."</p>
              <p className="font-bold">- Ahmed, Community Center Director</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-wastenot-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of food donors and NGOs working together to reduce waste and fight hunger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-wastenot-yellow text-wastenot-text hover:bg-wastenot-yellow/90">
              <Link to="/signup">Create an Account</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
