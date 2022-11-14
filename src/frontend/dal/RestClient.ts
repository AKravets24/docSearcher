const basePath = 'https://agile-sands-40710.herokuapp.com';

export async function searchDocs (value: string) {
  return fetch(`${basePath}/user/docs?search=${value}`)
      .then((rawData) => rawData.json())
}

export type DocResponse_Type = {
  description: string
  id: string
  image: string
  name: string
}