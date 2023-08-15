import HttpClient from './utils/HttpClient';
import ContactMapper from './mappers/ContactMapper';

/* eslint-disable class-methods-use-this */
class ContactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/?orderBy=${orderBy}`, {
      headers: {
        Authorization: 'meutoken',
      },
    });
  }

  getContactById(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  createContact(contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.post('/contacts', { body });
  }

  updateContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.put(`/contacts/${id}`, { body });
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactService();
