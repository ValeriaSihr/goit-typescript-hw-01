import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}


interface User {
  id: number;
  name: string;
  email: string;
}

async function getUserData() {
  const userData = await fetchData<User>('https://66784bdb0bd45250561e328a.mockapi.io/Users');
  console.log(userData);
}

getUserData();
