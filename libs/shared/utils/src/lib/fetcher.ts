export const fetcher = async (endpoint: string, method?:string) => {
  try {
    const res = await fetch(endpoint, {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
