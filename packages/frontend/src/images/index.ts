import axios from 'axios';

export const viewImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query: 'view',
      per_page: 3,
      client_id: '27CzhmfJukpuBav0LqSFuZsgVxc9X5XtORKfv1JrkAQ',
    },
  });

  return response.data.results;
};

export const productImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query: 'product',
      per_page: 8,
      client_id: '27CzhmfJukpuBav0LqSFuZsgVxc9X5XtORKfv1JrkAQ',
    },
  });

  return response.data.results;
};

export const dogImages = async () => {
  const images: string[] = [];

  for (let i = 0; i < 3; i++) {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');

    images.push(response.data.message);
  }
//   console.log(images)
  return images;
};
