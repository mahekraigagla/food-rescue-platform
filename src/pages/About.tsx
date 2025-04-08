
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-wastenot-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About WasteNot</h1>
            <p className="text-xl mb-8">
              Our mission is to reduce food waste and combat hunger by connecting food donors with organizations that can distribute it to those in need.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                WasteNot was born from a simple observation: while millions struggle with food insecurity, tons of perfectly good food goes to waste every day. We saw restaurants throwing away food after events, grocery stores discarding produce that was still edible but not sellable, and individuals unsure of how to donate excess food.
              </p>
              <p className="mb-4">
                Founded in 2025, our platform serves as a bridge between those with surplus food and organizations equipped to distribute it to people in need. By streamlining the donation process, we make it easy for anyone to contribute to reducing food waste and fighting hunger.
              </p>
              <p>
                Today, WasteNot operates in multiple cities, connecting hundreds of donors with dozens of NGOs and community organizations, ensuring that good food feeds people, not landfills.
              </p>
            </div>
            <div className="bg-wastenot-background rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Food donation" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Impact */}
      <section className="py-16 bg-wastenot-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-wastenot-green mb-2">1,500+</div>
              <p className="text-lg">Meals Donated</p>
              <p className="mt-4 text-gray-600">
                Every meal donated means one less person going hungry and less food waste in our landfills.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-wastenot-green mb-2">2 tons</div>
              <p className="text-lg">Food Waste Prevented</p>
              <p className="mt-4 text-gray-600">
                By redirecting surplus food to those in need, we've kept tons of food out of landfills.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-wastenot-green mb-2">350+</div>
              <p className="text-lg">Active Users</p>
              <p className="mt-4 text-gray-600">
                Our community of donors and NGOs grows every day, expanding our impact across communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                <img 
                  src="/placeholder.svg" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-wastenot-green">Co-founder & CEO</p>
              <p className="mt-2 text-gray-600">
                Former restaurant manager passionate about sustainability and food security.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                <img 
                  src="/placeholder.svg" 
                  alt="Miguel Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Miguel Rodriguez</h3>
              <p className="text-wastenot-green">Co-founder & CTO</p>
              <p className="mt-2 text-gray-600">
                Tech entrepreneur with a background in logistics and supply chain management.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                <img 
                  src="/placeholder.svg" 
                  alt="Aisha Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Aisha Patel</h3>
              <p className="text-wastenot-green">Community Director</p>
              <p className="mt-2 text-gray-600">
                Former NGO coordinator with 10+ years of experience in community outreach.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-wastenot-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the solution to food waste and hunger in your community. Join WasteNot today as a donor or NGO partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-wastenot-yellow text-wastenot-text hover:bg-wastenot-yellow/90">
              <Link to="/signup">Create an Account</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
