import { queryOptions } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export const getUsersOptions = (id: number) => {
  const options = queryOptions({
    queryFn: () => getComments(id),
    queryKey: ["comments", id],
  });

  return options;
};

const getComments = async (id: number): Promise<User[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?postId=${id}`);
  const data = await response.json();
  return data;
};