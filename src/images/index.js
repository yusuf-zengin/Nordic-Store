// const { default: axios } = require("axios");

export const toyImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: "toy",
      per_page: 3,
      client_id: "27CzhmfJukpuBav0LqSFuZsgVxc9X5XtORKfv1JrkAQ",
    },
  });

  return response.data;
};
