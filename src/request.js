const maxCatX = 6,// Just number
  maxCatY = 4999,// from pattern url
  maxWaifuX = 100000,// response
  maxSkyX = 5000;//

//Generate the response url
function imageCatResponse(url) {
  const catX = Math.ceil(Math.random() * maxCatX);
  const catY = Math.ceil(Math.random() * maxCatY);
  return url + "/0" + catX + "/cat" + catY + ".jpg";
}

//Generate the response url
function imageWaifuResponse(url) {
    const waifuX = Math.ceil(Math.random() * maxWaifuX);
    return url + waifuX + ".jpg";
  }

//Generate the response url
function imageSkyResponse(url) {
    const skyX = Math.ceil(Math.random() * maxSkyX) + 1000;
    return url + skyX + ".jpg?alt=media";
}

//Generate the list of images
const ImageList = (url, type, numberImage) => {
  let list = [];
  for (let i = 0; i <  numberImage; i++) {
    switch (type) {
        case "CATAHOLIC" :
            list.push(imageCatResponse(url));
            break;
        case "WAIFU-HOLIC":
            list.push(imageWaifuResponse(url));
            break;
        case "SKY-HOLIC":
            list.push(imageSkyResponse(url));
    }
  }
  return list;
};

export default ImageList;
