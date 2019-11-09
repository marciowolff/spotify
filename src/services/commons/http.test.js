import axios from 'axios';
import auth from './auth';
import * as http from './http';

const spygetToken = jest.spyOn(auth, 'getToken');
const spyremoveToken = jest.spyOn(auth, 'removeToken');

describe('commons: http', () => {
  describe('#createClient', () => {
    const fakeClient = {
      interceptors: {
        request: { use: jest.fn() },
        response: { use: jest.fn() },
      },
    };
    const fakeRequester = {
      create: jest.fn().mockImplementation(() => fakeClient),
    };

    beforeEach(() => {
      fakeClient.interceptors.request.use.mockClear();
      fakeClient.interceptors.response.use.mockClear();
      fakeRequester.create.mockClear();
    });

    it('shoud be a function', () => {
      expect(typeof http.createClient).toBe('function');
    });

    it('should create a client with requester lib', () => {
      http.createClient('base/url', fakeRequester);
      expect(fakeRequester.create).toHaveBeenCalledTimes(1);
      expect(fakeRequester.create).toBeCalledWith({ baseURL: 'base/url' });
    });

    it('should use empty string as default base URL', () => {
      http.createClient(undefined, fakeRequester);
      expect(fakeRequester.create).toBeCalledWith({ baseURL: '' });
    });

    it('should use axios as default request lib', () => {
      const client = http.createClient('url');
      expect(client.prototype).toEqual(axios.create().prototype);
    });
  });

  describe('#responseInterceptor', () => {
    it('should be a function', () => {
      expect(typeof http.responseInterceptor).toBe('function');
    });

    it('should return a promise', () => {
      expect(http.responseInterceptor({ response: {} })).toBeInstanceOf(
        Promise
      );
    });

    describe('returned promise', () => {
      it('should resolve with response when exist', () => {
        const fake = { response: { data: { value: 'test' }, status: 200 } };
        expect(http.responseInterceptor(fake)).resolves.toBe(fake.response);
      });

      it('should reject with status 401', () => {
        const fake = { response: { data: {}, status: 401 } };
        http.responseInterceptor(fake);

        expect(spyremoveToken).toHaveBeenCalled();
        expect(http.responseInterceptor(fake)).resolves.toBe(fake.response);
      });

      it('should reject with original parameter when response not exist', () => {
        const fake = new Error('fake');
        expect(http.responseInterceptor(fake)).rejects.toBe(fake);
      });
    });
  });

  describe('#requestInterceptor', () => {
    it('should be a function', () => {
      expect(typeof http.requestInterceptor).toBe('function');
    });

    it('should return a object', () => {
      expect(http.requestInterceptor({ headers: {} })).toBeInstanceOf(Object);
    });

    it('should return with token', () => {
      spygetToken.mockImplementation(() => 123);

      const fake = { headers: {} };
      http.requestInterceptor(fake);

      expect(spygetToken).toHaveBeenCalled();
      expect(http.requestInterceptor(fake)).toEqual({
        headers: { Authorization: 'Bearer 123' },
      });
    });

    it('should return without token', () => {
      spygetToken.mockImplementation(() => null);

      const fake = { headers: {} };
      http.requestInterceptor(fake);

      expect(spygetToken).toHaveBeenCalled();
      expect(http.requestInterceptor(fake)).toEqual({
        headers: {},
      });
    });
  });
});
