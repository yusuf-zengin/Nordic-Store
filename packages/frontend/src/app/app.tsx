// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import About from '../components/About';
import DogSection from '../components/DogSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar';
import Slides from '../components/Slides';
import { dogImages, productImages, viewImages } from '../images';


export function App() {
  const [dogs, setDogs] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [slides, setSlides] = React.useState([]);


  React.useEffect(() => {
    (async () => {
      const response: any = await dogImages();
      const response2 = await productImages();
      const response3 = await viewImages();

      setSlides(response3)
      setProducts(response2)
      setDogs(response)
    })()
  }, [])

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Navbar />
      {slides.length > 0 && <Slides images={slides} />}
      {products.length > 0 && <HeroSection products={products}/>}
      {dogs.length > 0 && <DogSection images={dogs}/>}
      <About />
      <Footer />
    </div>
  );
}

export default App;
