export const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
};

export const fetchRepositories = async (url) => {
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  }
  throw new Error("Failed to load data");
};
