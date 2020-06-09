export default async (getContacts) => {
  const results = await fetch("https://randomuser.me/api");
  return results.json();
};
