// const axios = require('axios');

const viewImages = async () => {
  
  const url = new URL('https://api.unsplash.com/search/photos');
  const params = {
    query: 'view',
    per_page: 3,
    client_id: '27CzhmfJukpuBav0LqSFuZsgVxc9X5XtORKfv1JrkAQ',
  };
  url.search = new URLSearchParams(params);
  
  const response = await fetch(url);
  
  if (response.ok) {
    const data = await response.json();
    return data.results;
  } else {
    throw new Error(`API request failed with status ${response.status}`);
  }

};

const productImages = async () => {
  const url = new URL('https://api.unsplash.com/search/photos');
  const params = {
    query: 'product',
    per_page: 8,
    client_id: '27CzhmfJukpuBav0LqSFuZsgVxc9X5XtORKfv1JrkAQ',
  };
  url.search = new URLSearchParams(params);

  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data.results;
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

    this.postMessage({content: "view", data: images});
  } else if (event.data === 'getProductsImages') {
    const images = await productImages();

    this.postMessage({content: "product", data: images});
  } else if (event.data === 'getDogsImages') {
    const images = await dogImages();

    this.postMessage({content: "dog", data: images});
  }
};

// module.exports = {
//   onmessage
// }