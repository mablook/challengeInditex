
export const getData:(endpoint:string) => Promise<any> = async (endpoint) => {
  const response = await fetch(endpoint)
  const data: any = await response.json()
  return data
}
