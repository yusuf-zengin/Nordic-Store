// eslint-disable-next-line @typescript-eslint/no-unused-vars
import About from '../components/About';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar';
import Slides from '../components/Slides';


export function App() {
  return (
    <body className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Navbar />
      <Slides />
      <HeroSection />
      <About/>
      <Footer />
    </body>
  );
}

export default App;
