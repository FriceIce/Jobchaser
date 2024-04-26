const cacheImages = async (srcArray: string[], setPreloadImg: React.Dispatch<React.SetStateAction<HTMLImageElement[]>>): Promise<void> => {
  const promises = srcArray.map((src) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = () => reject();
    });
  });
  await Promise.all(promises).then(images => {
    setPreloadImg(images) 
  });
};

export default cacheImages; 