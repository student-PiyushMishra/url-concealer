function getRandomString(min = 5, max = 10) {
  const length = Math.floor(Math.random() * (max - min + 1)) + min;
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

const ExportedMaal = {mapUrl: getRandomString}

export default ExportedMaal
