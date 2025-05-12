import { useMutation, useQueryClient } from "@tanstack/react-query";

export type UserModel = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: UserModel) => createPost(user),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
};

const createPost = async (user: UserModel) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  const data = await response.json();

  return data;
};