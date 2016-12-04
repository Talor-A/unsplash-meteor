import Unsplash from 'unsplash-js';
const unsplash = new Unsplash({
  applicationId: "3e4a3e3d3e0f025663743b1570da3407ca202e089027895f54b7585993d6933b",
  secret: "52d1f635012e3e1d03a00f301a965bc373e6944cc6186719a74f980a0303b5c2",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob",
  bearerToken: "0cdc718f740636d4a09b847cca58907a71382b3d7ba891a2810a7834dc0e0d92"
});
var pics;
unsplash.photos.listPhotos(1, 15, "latest")
  .then(toJson)
  .then(json => {
    pics = json;
  });
export pics;
