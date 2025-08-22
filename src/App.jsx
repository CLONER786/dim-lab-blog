import React, { useState } from 'react';
import { ChevronsRight, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// Helper component for responsive navigation links
const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium">
    {children}
  </a>
);

// Blog Post Card Component
const BlogPostCard = ({ imageUrl, category, title, excerpt, author, date }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
    <div className="relative">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={title} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/f8f8f8/ccc?text=Image+Not+Found'; }} />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
      <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">{category}</span>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{excerpt}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span>By {author}</span>
        <span className="mx-2">|</span>
        <span>{date}</span>
      </div>
      <a href="#" className="inline-flex items-center mt-6 text-red-600 font-semibold hover:text-red-800 transition-colors duration-300">
        Read More <ChevronsRight size={20} className="ml-1" />
      </a>
    </div>
  </div>
);

// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const blogPosts = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=1974&auto=format&fit=crop',
      category: 'Pasta',
      title: 'The Perfect Carbonara',
      excerpt: 'Learn the authentic Roman way to make creamy, delicious Carbonara without using cream. The secret is in the technique!',
      author: 'Chef Giovanni',
      date: 'Aug 15, 2025',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
      category: 'Pizza',
      title: 'Mastering Neapolitan Pizza Dough',
      excerpt: 'Unlock the secrets to a light, airy, and perfectly charred Neapolitan pizza crust right in your home oven.',
      author: 'Maria Rossi',
      date: 'Aug 10, 2025',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974&auto=format&fit=crop',
      category: 'Desserts',
      title: 'Classic Italian Tiramisu',
      excerpt: 'A step-by-step guide to creating the most iconic Italian dessert. Rich, creamy, and full of coffee flavor.',
      author: 'Luca Bianchi',
      date: 'Aug 5, 2025',
    }
  ];

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* TODO: Add Google Analytics script here. 
        You can usually find this script in your Google Analytics account settings.
        It's best to place it inside the <head> tag of your final HTML file.
        For React, you might use a package like 'react-ga4' or add it to your public/index.html.
      */}

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-3xl font-bold text-red-600 tracking-tight">
            Cucina Italiana
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Recipes</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`absolute top-0 left-0 w-full bg-white shadow-lg md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className="flex flex-col items-center space-y-6 py-8 mt-16">
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">Recipes</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Contact</NavLink>
            </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-start text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">The Art of Italian Cooking</h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl">Discover authentic recipes, traditional techniques, and the passion behind Italy's most beloved dishes.</p>
            <a href="#posts" className="mt-8 bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors duration-300 text-lg">
              Explore Recipes
            </a>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section id="posts" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Latest from the Kitchen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post, index) => (
                <BlogPostCard key={index} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* About & Subscribe Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold mb-4">About Our Passion</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Cucina Italiana is more than just a food blog; it's a celebration of Italian culture, family, and the simple joy of a shared meal. We believe that the best dishes are made with fresh, seasonal ingredients and a whole lot of love. Join us as we explore the rich culinary traditions from every region of Italy.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        From the rustic tables of Tuscany to the vibrant street food of Sicily, our goal is to bring authentic Italian cooking into your home. Buon appetito!
                    </p>
                </div>
                <div className="bg-gray-100 p-8 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Subscribe for More!</h3>
                    <p className="text-gray-600 mb-6">Get the latest recipes and stories delivered straight to your inbox.</p>
                    <form>
                        <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4" />
                        <button type="submit" className="w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-900 transition-colors duration-300">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-semibold">Cucina Italiana</h4>
              <p className="text-gray-400 mt-2">Sharing the love for authentic Italian food.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Cucina Italiana. All Rights Reserved.</p>
            {/* TODO: Add SEO meta tags in your public/index.html file.
              <meta name="description" content="A blog about authentic Italian cooking...">
              <meta name="keywords" content="italian food, recipes, cooking, pasta, pizza">
            */}
          </div>
        </div>
      </footer>
    </div>
  );
}
