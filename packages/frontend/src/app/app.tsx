// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { About, DogSection, Footer, HeroSection, Navbar, Slides } from '../components/imports';
import { dogImages, productImages, viewImages } from '../images';


export function App() {
  const [dogs, setDogs] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [slides, setSlides] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      // const worker = new Worker('../../public/myWorker.js');
      // worker.onmessage = function (event) {
      //   setSlides(event.data);
      // };

      // worker.postMessage('getSlidesImages');

      // return () => {
      //   worker.terminate();
      // };
      const response: any = await dogImages();
      setDogs(response);

      const response2 = await productImages();
      setProducts(response2);

      const response3 = await viewImages();
      setSlides(response3);
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
