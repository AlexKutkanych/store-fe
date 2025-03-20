const getFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    try {
      // Parse JSON if the value was stored as a JSON string
      return JSON.parse(value);
    } catch {
      // Return the value as is if it was not stored as JSON
      return value;
    }
  }
  return null;
};

export default getFromLocalStorage;
