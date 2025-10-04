import { useEffect, useState } from "react";

function ApiDemo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div>
      <h2>Working with APIs (GitHub Example)</h2>
      {user ? (
        <div>
          <img src={user.avatar_url} alt="avatar" width={100} />
          <p>
            <b>User:</b> {user.login}
          </p>
          <p>
            <b>Repos:</b> {user.public_repos}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ApiDemo;
