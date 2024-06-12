const cacheImages = async (srcArray: string[], setPreloadImg: React.Dispatch<React.SetStateAction<HTMLImageElement[]>>): Promise<void> => {
  const promises = srcArray.map((src) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = () => reject('Failed to load this image: ' + img);
    });
  });
  await Promise.all(promises).then(images => {
    setPreloadImg(images) 
  }).catch(err => console.log(err));
};

export default cacheImages; 

export const isTheImageUploadedYet = (images: HTMLImageElement[], reDownloadImages: string[], setPreloadImg: React.Dispatch<React.SetStateAction<HTMLImageElement[]>>) => {
  const [home, job, signIn, writer] = images; 

  if(home === undefined || job === undefined || signIn === undefined || writer === undefined) {
    cacheImages(reDownloadImages, setPreloadImg);
    return true
  }; 

  return false; 
}