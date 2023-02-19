import React from 'react';
import { About, DogSection, Footer, HeroSection, Navbar, Slides } from '../components/imports';

const worker = new Worker(new URL('./web-worker', import.meta.url));

export function App() {
  const [dogs, setDogs] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [slides, setSlides] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      worker.onmessage = function ({ data }) {
        const setterMap: any = {
          "view": setSlides,
          "product": setProducts,
          "dog": setDogs,
        };

        const setter = setterMap[data.content] || (() => { });

        setter(data.data);
      };

      return () => worker.terminate();
    })()
  }, [])

  React.useEffect(() => {
    (async () => {
      await worker.postMessage('getSlidesImages');
      await worker.postMessage('getProductsImages');
      await worker.postMessage('getDogsImages');
    })()
  }, [])

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Navbar />
      <Slides images={slides} />
      <HeroSection products={products} />
      <DogSection images={dogs} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
