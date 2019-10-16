export const idCreator = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

export const API_URL = "https://api.foursquare.com/v2/venues/explore?";
