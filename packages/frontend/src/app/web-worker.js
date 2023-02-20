const viewImages = async () => {
  const url = new URL('http://localhost:3000/get-slider-images');

  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`API request failed with status ${response.status}`);
  }
};

const productImages = async () => {
  const url = new URL('http://localhost:3000/get-product-images');

  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`API request failed with status ${response.status}`);
  }
};

const dogImages = async () => {
  const images = [];

  for (let i = 0; i < 3; i++) {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');

    if (response.ok) {
      const data = await response.json();
      images.push(data.message);
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  }

  return images;
};

onmessage = async function (event) {
  if (event.data === 'getSlidesImages') {
    const images = await viewImages();

    this.postMessage({ content: 'view', data: images });
  } else if (event.data === 'getProductsImages') {
    const images = await productImages();

    this.postMessage({ content: 'product', data: images });
  } else if (event.data === 'getDogsImages') {
    const images = await dogImages();

    this.postMessage({ content: 'dog', data: images });
  }
};
