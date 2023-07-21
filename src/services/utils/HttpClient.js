import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  // eslint-disable-next-line class-methods-use-this
  async get(path) {
    await delay(500);
    const response = await fetch(`${this.baseURL}/${path}`);

    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.statusText} - ${response.status}`);
  }
}

export default HttpClient;
