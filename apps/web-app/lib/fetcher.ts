export const fetcher = async (endpoint: string) => {
  try {
    const res = await fetch(endpoint);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
