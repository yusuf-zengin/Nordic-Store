// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { About, DogSection, Footer, HeroSection, Navbar, Slides } from '../components/imports';
import { dogImages, productImages, viewImages } from '../images';

const worker = new Worker('../myWorker.js');

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
    worker.postMessage('getSlidesImages');
    worker.postMessage('getProductsImages');
    worker.postMessage('getDogsImages');
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
