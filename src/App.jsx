import React from 'react';
import { ChevronsRight, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// ===================================================================================
// PAGE COMPONENTS - We are breaking the site into "pages"
// ===================================================================================

const HomePage = () => (
  <>
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
          {/* Re-using BlogPostCard logic from the main App component */}
          {blogPostsData.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  </>
);

const RecipesPage = () => (
    <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">All Our Recipes</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPostsData.map((post, index) => (
                <BlogPostCard key={index} {...post} />
            ))}
            {/* You could add more recipe cards here */}
        </div>
    </div>
);

const AboutPage = () => (
    <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">About Cucina Italiana</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Cucina Italiana is more than just a food blog; it's a celebration of Italian culture, family, and the simple joy of a shared meal. We believe that the best dishes are made with fresh, seasonal ingredients and a whole lot of love. Join us as we explore the rich culinary traditions from every region of Italy. From the rustic tables of Tuscany to the vibrant street food of Sicily, our goal is to bring authentic Italian cooking into your home. Buon appetito!
        </p>
    </div>
);

const ContactPage = () => (
    <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                <input className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                <input className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" id="message" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition-colors duration-300">Send Message</button>
        </form>
    </div>
);

// This is a "hidden" page we will block with robots.txt
const AdminPage = () => (
     <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Admin Area</h1>
        <p className="text-lg text-gray-700">This page is for internal use only and should not be indexed by search engines.</p>
    </div>
);


// ===================================================================================
// SHARED COMPONENTS
// ===================================================================================

const NavLink = ({ children, onClick }) => (
  <button onClick={onClick} className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium">
    {children}
  </button>
);

const BlogPostCard = ({ imageUrl, category, title, excerpt, author, date }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
    <div className="relative">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={`A plate of delicious ${title}`} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/f8f8f8/ccc?text=Image+Not+Found'; }} />
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

// We move the blog post data out here so multiple components can use it
const blogPostsData = [
    { imageUrl: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=1974&auto=format&fit=crop', category: 'Pasta', title: 'The Perfect Carbonara', excerpt: 'Learn the authentic Roman way to make creamy, delicious Carbonara without using cream.', author: 'Chef Giovanni', date: 'Sep 22, 2025' },
    { imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop', category: 'Pizza', title: 'Mastering Neapolitan Pizza', excerpt: 'Unlock the secrets to a light, airy, and perfectly charred Neapolitan pizza crust.', author: 'Maria Rossi', date: 'Sep 18, 2025' },
    { imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974&auto=format&fit=crop', category: 'Desserts', title: 'Classic Italian Tiramisu', excerpt: 'A step-by-step guide to creating the most iconic Italian dessert.', author: 'Luca Bianchi', date: 'Sep 12, 2025' }
];

// ===================================================================================
// MAIN APP COMPONENT
// ===================================================================================
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // NEW: State to manage which page is currently displayed
  const [currentPage, setCurrentPage] = React.useState('home');

  // NEW: Function to render the correct page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'recipes':
        return <RecipesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPage />; // We won't link to this in the nav
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => setCurrentPage('home')} className="text-3xl font-bold text-red-600 tracking-tight">
            Cucina Italiana
          </button>
          {/* NEW: Updated NavLinks to use onClick to change the page state */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => setCurrentPage('home')}>Home</NavLink>
            <NavLink onClick={() => setCurrentPage('recipes')}>Recipes</NavLink>
            <NavLink onClick={() => setCurrentPage('about')}>About</NavLink>
            <NavLink onClick={() => setCurrentPage('contact')}>Contact</NavLink>
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`absolute top-0 left-0 w-full bg-white shadow-lg md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className="flex flex-col items-center space-y-6 py-8 mt-16">
                <NavLink onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}>Home</NavLink>
                <NavLink onClick={() => { setCurrentPage('recipes'); setIsMenuOpen(false); }}>Recipes</NavLink>
                <NavLink onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }}>About</NavLink>
                <NavLink onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}>Contact</NavLink>
            </div>
        </div>
      </header>

      <main>
        {/* NEW: This will now render the page component based on the state */}
        {renderPage()}
      </main>

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
          </div>
        </div>
      </footer>
    </div>
  );
}
