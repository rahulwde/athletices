export const myBookingPromise = (email, accessToken) => {
  return fetch(`https://athletics-server.vercel.app/bookings?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
