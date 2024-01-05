const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return imagePath
      ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}` //Get the full size 
      : "https://links.papareact.com/o8z"; //Movie loader
  };
  
  export default getImagePath;