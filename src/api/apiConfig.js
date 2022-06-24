const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "790bde63d30c6b04cdbc1f59392ffb10",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
