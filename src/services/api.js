const API_URL = 'http://localhost:5000';

export const loginUser = (username, password) => {
  console.log('Trying to log in:', { username });

  return fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then(async response => {
    const data = await response.json();
    if (!response.ok) {
      console.log('Login didn’t work:', data);
      throw data;
    }
    return data;
  });
};

export const registerUser = (username, password, firstName, lastName) => {
  console.log('Trying to register:', { username, firstName, lastName });

  return fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, first_name: firstName, last_name: lastName }),
  })
  .then(async response => {
    const data = await response.json();
    if (!response.ok) {
      console.log('Registration didn’t work:', data);
      throw data;
    }
    return data;
  });
};
