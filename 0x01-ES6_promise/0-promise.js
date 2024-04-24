function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("mock api response");
    }, 1000);
  });
}

export default getResponseFromAPI;
