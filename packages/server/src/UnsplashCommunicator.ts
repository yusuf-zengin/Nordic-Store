import axios from "axios";


export default class {
  fetchViewImages = async (amountOfImages: number = 20) => {
    const url = 'https://api.unsplash.com/search/photos';
    const params = {
      params: {
        query: 'view',
        per_page: amountOfImages,
        client_id: process.env.CLIENT_ID,
      },
    };

    try {
      const response = await axios.get(url, params);
      const images = response.data.results.map(imageObj => ({image: imageObj.urls, id: imageObj.id, description: imageObj.description}))

      return images;
    } catch (error) {
      throw new Error(`API request failed with error: ${error.message}`);
    }
  };

  fetchProductImages = async (amountOfImages: number = 28) => {
    const url = 'https://api.unsplash.com/search/photos';
    const params = {
      params: {
        query: 'product',
        per_page: amountOfImages,
        client_id: process.env.CLIENT_ID,
      },
    };

    try {
        const response = await axios.get(url, params);
        const images = response.data.results.map(imageObj => ({image: imageObj.urls, id: imageObj.id, description: imageObj.description}))
  
        return images;
    } catch (error) {
      throw new Error(`API request failed with error: ${error.message}`);
    }
  };
}
