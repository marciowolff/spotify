export { API_URL } from '../../constants';

// const URL = API_URL[process.env.ENV];
const URL = 'https://api.spotify.com/v1';

const spotifyServiceFactory = ({ httpClient }) => ({
  search(search) {
    return httpClient
      .get(`${URL}/search?q=${search}&type=artist,album,track`)
      .then(({ data }) => data);
  },
  albums(id) {
    return httpClient.get(`${URL}/albums/${id}`).then(({ data }) => data);
  },
});

export default spotifyServiceFactory;
