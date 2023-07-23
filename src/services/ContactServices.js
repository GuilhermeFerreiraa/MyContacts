import HttpClient from './utils/HttpClient';

/* eslint-disable class-methods-use-this */
class ContactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/a938c1e0-5ef5-41e8-b6fe-1e8cb8d4de15?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.httpClient.post('/contacts', contact);
  }
}

export default new ContactService();
