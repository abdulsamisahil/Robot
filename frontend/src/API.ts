import axios from 'axios'

export const getReport = async (position: {}, grid: {}, commands: string) => {
  const data = JSON.stringify({
    position: position,
    grid: grid,
    commands: commands,
  })

  const config = {
    method: 'post',
    url: '/robot',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }

  const response = await axios(config)

  return response.data.Report
}

export default getReport
