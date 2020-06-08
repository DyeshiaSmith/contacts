export const getContacts = async () => {
  const resp = await fetch("https://randomuser.me/api");
  return resp.json();
};
