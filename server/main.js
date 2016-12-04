import { Meteor } from 'meteor/meteor';
const MyCollection = new Mongo.Collection("my-collection");
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "3e4a3e3d3e0f025663743b1570da3407ca202e089027895f54b7585993d6933b",
  secret: "52d1f635012e3e1d03a00f301a965bc373e6944cc6186719a74f980a0303b5c2",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob",
});

let authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public"
]);

function userAuthentication(code) {
  return unsplash.auth.userAuthentication(code)
    .then(toJson)
    .then(json => json.access_token);
}

Meteor.startup(() => {
  // code to run on server at startup
  MyCollection.remove({});
  console.log(userAuthentication(code))


});
