import delay from '../utils/delay';

/* eslint-disable class-methods-use-this */
class ContactService {
  async listContacts(orderBy = 'asc') {
    const response = await fetch(
      `http://localhost:3001/contacts?orderBy=${orderBy}`,
    );

    await delay(500);

    return response.json();
  }
}

export default new ContactService();
