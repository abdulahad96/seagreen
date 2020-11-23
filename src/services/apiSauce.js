import { create } from 'apisauce';

const api = create({

});

class ApiSauce {
  async post(url, payload) {

    console.log(payload)
    const response = await api.post(url, {}, {
      headers: {
        'email': payload.email,
        'password': payload.password
      }
    });
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async postWithToken(url, payload, token) {
    const Header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.post(url, payload, Header);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async get(url, payload) {
    api.setHeaders({
      'Content-Type': 'application/json',
    });

    const response = await api.get(url, payload);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  handlePromise = (resolve, reject, response) => {
    if (response.ok && response.data && response.originalError === null) {
      resolve(response.data);
    } else {
      if (
        response.status === 404 &&
        !response.ok &&
        response.originalError !== null
      ) {
        reject(response.problem);
      }
    }
  };
}

export default new ApiSauce();
