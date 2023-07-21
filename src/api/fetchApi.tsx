export const getData: (endpoint: string) => Promise<any | undefined> = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    const data: any = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return undefined;
  }
};
