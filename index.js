const user = {
  name: 'Brad',
  address: { city: '' },
};

console.log(user.address?.city || 'Unknown');
