import React from 'react';
import { Phone, MapPin, Clock, Star, Milk, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const products = [
    {
      name: "Cow Milk",
      description: "Pure, fresh cow milk delivered daily",
      price: "₹50/L",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=200&fit=crop",
      rating: 4.9,
    },
    {
      name: "Buffalo Milk",
      description: "Rich, creamy buffalo milk with high nutritional value",
      price: "₹60/L",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=300&h=200&fit=crop",
      rating: 4.9,
    },
    {
      name: "Paneer",
      description: "Soft, homemade cottage cheese",
      price: "₹280/kg",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop",
      rating: 4.8,
    },
    {
      name: "Curd/Dahi",
      description: "Thick, creamy yogurt made fresh daily",
      price: "₹80/kg",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop",
      rating: 4.9,
    },
    {
      name: "Ghee",
      description: "Pure clarified butter, traditionally made",
      price: "₹720/kg",
      image: "https://images.unsplash.com/photo-1594736797933-d0403ba2fe65?w=300&h=200&fit=crop",
      rating: 4.9,
    },
    {
      name: "Butter",
      description: "Fresh, creamy white butter",
      price: "₹600/kg",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=200&fit=crop",
      rating: 4.7,
    },
    {
      name: "Buttermilk/Mattha",
      description: "Traditional buttermilk drink",
      price: "₹30/L",
      image: "https://images.unsplash.com/photo-1638913662415-8c5f79b20656?w=300&h=200&fit=crop",
      rating: 4.8,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                <Milk className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Shree Radha Krishna Dairy</h1>
                <p className="text-sm text-gray-600">Pure & Fresh Since 2024</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9045660728</span>
              </div>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Fresh • Pure • Trusted
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Experience the taste of tradition with our premium quality dairy products, 
              made with love and delivered fresh to your doorstep every day,
              <div> Order For Function & Wedding Purpose </div>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg">
                Explore Products
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
                Call Now: +91 9045660728
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-orange-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-20 h-20 bg-red-200 rounded-full opacity-50 animate-bounce delay-700"></div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Fresh Products</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From farm to your table, we ensure the highest quality in every product
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">About Shree Radha Krishna Dairy</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since 2024, we have been committed to providing the freshest and purest dairy products 
                to our community. Our journey began with a simple promise: to deliver quality that you can trust.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Fresh products delivered daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Sourced from local organic farms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">No artificial preservatives or additives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Quality tested and certified</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600&h=400&fit=crop" 
                alt="Dairy farm"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">1+</div>
                  <div className="text-sm text-gray-600">Years of Trust</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Store</h3>
            <p className="text-lg text-gray-600">Experience freshness at our dairy shop</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Location</h4>
              <p className="text-gray-600">
              Moh. Kataratal Near Baban Chaki Kashipur US. Nagar Uttarakhand - 244713
              </p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Hours</h4>
              <p className="text-gray-600">
                Sun - Sat : 7:00 AM - 10:30 PM
              </p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Contact</h4>
              <p className="text-gray-600">
                Phone: +91 9045660728 , +91 9837793674<br />
                Email: shubhamsingh007guru@gmail.com
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
                  <Milk className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Shree Radha Krishna Dairy</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for fresh, pure, and quality dairy products since 2024.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
              <p className="text-gray-400 mb-4">Stay connected for daily updates and special offers</p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  Facebook
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  Instagram
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shree Radha Krishna Dairy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
