export const manageEventPromise = (email, accessToken) => {
  return fetch(`https://athletics-server.vercel.app/athletics?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
