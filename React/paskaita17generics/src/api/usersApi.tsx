import axios from "axios";

type Geo = {
    lat: string;
    lng: string;
  };

type Address = {
    street: string;
    suit: string;
    city: string;
    zipcode: string;
    geo: Geo;
 };

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
};

  const userUrl = "https://jsonplaceholder.typicode.com/users";
  
  export async function fetchData<T>(url: string): Promise<T> {
    try {
      const { data } = await axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }

  export async function getUsers() {
    return fetchData<User[]>(userUrl);
   

  }
  export async function getUserById(id: number) {
    return fetchData<User>(userUrl + `/${id}`);
  }