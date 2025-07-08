import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-gray-50" data-theme="kvds">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
