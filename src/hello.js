const hello = async (name) => {
  const b = await new Promise((r) => setTimeout(r(name), 1000));
  console.log('bbbbbb: ', b);
  return b;
};

export default hello;
