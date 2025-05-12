import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { useState } from "react";
import { UserModel } from "./mutations/useCreateUsersMutation";
import { getUsersOptions } from "./queryOptions/getUsersOptions";

function App() {
  const [userId, setUserId] = useState(1);

  const { data, isPending } = useQuery({
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      return data;
    },
    queryKey: ["posts"],
  });

  const { data: commentsData, isPending: isUsersPending } = useQuery(getUsersOptions(userId));

  const user: UserModel = {
    id: 2;
    name: "test";
    username: "testuser";
    email: "string@dd.lt";
    phone: "888";
  };

  const { mutate } = useCreateUserMutation();

  const handleMutateClick = () => {
    mutate(post, {
      onSuccess: (data) => {
        alert("Post created successfully");
      },
      onError: (err) => {
        alert("Error creating post");
      },
    });
  };

  return (
    <div>
      <button onClick={handleMutateClick}>Mutate</button>
      <button onClick={() => setUserId((prev) => prev + 1)}>Increment user ID</button>
      <button onClick={() => setUserId((prev) => prev - 1)}>Decrement user ID</button>
      {isUsersPending ? <h1>Loading...</h1> : JSON.stringify(commentsData)}
    </div>
  );
}

export default App;