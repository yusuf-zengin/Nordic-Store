import axios from 'axios';
import { UNSPLASH_PHOTOS_API } from './Constants';

export default class {
  fetchViewImages = async (amountOfImages: number) => {
    const params = {
      params: {
        query: 'view',
        per_page: amountOfImages,
        client_id: process.env.UNSPLASH_CLIENT_ID,
      },
    };

    try {
      const response = await axios.get(UNSPLASH_PHOTOS_API, params);
      const images = response.data.results.map((imageObj) => ({
        image: imageObj.urls,
        id: imageObj.id,
        description: imageObj.description,
      }));

      return images;
    } catch (error) {
      throw new Error(`API request failed with error: ${error.message}`);
    }
  };

  fetchProductImages = async (amountOfImages: number) => {
    const params = {
      params: {
        query: 'product',
        per_page: amountOfImages,
        client_id: process.env.UNSPLASH_CLIENT_ID,
      },
    };

    try {
      const response = await axios.get(UNSPLASH_PHOTOS_API, params);
      const images = response.data.results.map((imageObj) => ({
        image: imageObj.urls,
        id: imageObj.id,
        description: imageObj.description,
      }));

      return images;
    } catch (error) {
      throw new Error(`API request failed with error: ${error.message}`);
    }
  };
}
