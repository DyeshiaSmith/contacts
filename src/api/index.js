export const getContacts = async (stuff) => {
  const resp = await window.fetch(`https://randomuser.me/api/${stuff}`);
  return resp.json();
  console.log(getContacts);
};
