import { createClient } from './commons/http';
import spotifyServiceFactory from './resources/spotify';

export { default as auth } from './commons/auth';

export default function spotifyAPI(baseURL = '') {
  const httpClient = createClient(baseURL);
  const dependencies = { httpClient };

  return {
    spotify: spotifyServiceFactory(dependencies),
  };
}
