const API_KEY = '1d55a69956adecf00c5bebb2a3c89b73'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export default async function getData(city) {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city.toLowerCase()}&appid=${API_KEY}&units=metric`
    )
    const data = await response.json()

    if (data.cod === '404') {
      throw new Error('not found')
    }

    if (data.cod !== 200) {
      throw new Error('other error')
    }

    return data
  } catch (e) {
    return e.message
  }
}