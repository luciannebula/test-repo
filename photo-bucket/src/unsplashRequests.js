const ACCESS_KEY = 'LoWTh1YQtHMt_4sXpiMaFfikNPTEFKC3aBbXdO47u2s'
const BASE_URL = 'https://api.unsplash.com/';
const endPoints = {
  random: 'photos/random/'
}

export const randomPhoto = async () => {
  const response = await fetch(`${BASE_URL}${endPoints.random}`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    }
  })
  .then(res => res.json())
  .then(res => res);
  return response;
}

export const carList = async () => {
  const response = await fetch(`${BASE_URL}${endPoints.random}?query=car&&count=4`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    }
  })
  .then(res => res.json())
  .then(res => res);
  return response;
}


export const boatList = async () => {
  const response = await fetch(`${BASE_URL}${endPoints.random}?query=boat&&count=4`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    }
  })
  .then(res => res.json())
  .then(res => res);
  return response;
}

