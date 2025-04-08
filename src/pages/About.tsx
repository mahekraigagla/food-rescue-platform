
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
                Today, WasteNot operates in multiple cities across India, connecting hundreds of donors with dozens of NGOs and community organizations, ensuring that good food feeds people, not landfills.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1b19678d-60f8-4155-b255-a829832414a0.png" 
                alt="WasteNot App Showcase" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Visuals */}
      <section className="py-16 bg-wastenot-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Fresh vegetables and fruits" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Rescue Fresh Food</h3>
                <p className="text-gray-700">We help rescue fresh, edible food that would otherwise be discarded, giving it a second chance to fulfill its purpose.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Food donation handover" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Connect Communities</h3>
                <p className="text-gray-700">Our platform connects food donors directly with local organizations who can efficiently distribute surplus food to those in need.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Environmental impact" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Reduce Environmental Impact</h3>
                <p className="text-gray-700">By reducing food waste, we help minimize greenhouse gas emissions and conserve resources used in food production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-wastenot-background rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-wastenot-green mb-2">1,500+</div>
              <p className="text-lg">Meals Donated</p>
              <p className="mt-4 text-gray-600">
                Every meal donated means one less person going hungry and less food waste in our landfills.
              </p>
            </div>
            <div className="text-center p-8 bg-wastenot-background rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-wastenot-green mb-2">2 tons</div>
              <p className="text-lg">Food Waste Prevented</p>
              <p className="mt-4 text-gray-600">
                By redirecting surplus food to those in need, we've kept tons of food out of landfills.
              </p>
            </div>
            <div className="text-center p-8 bg-wastenot-background rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-wastenot-green mb-2">350+</div>
              <p className="text-lg">Active Users</p>
              <p className="mt-4 text-gray-600">
                Our community of donors and NGOs grows every day, expanding our impact across communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team with Updated Photos */}
      <section className="py-16 bg-wastenot-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
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
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
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
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
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
      
      {/* Featured In Section - New */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="The Hindu logo" 
                className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="India Today logo" 
                className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="NDTV logo" 
                className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Economic Times logo" 
                className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              />
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
