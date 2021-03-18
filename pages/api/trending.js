import {baseURL,apiKey} from '../../services/index'
export default  async(request, response) =>{
  const result = await fetch(`${baseURL}trending/movie/week?api_key=${apiKey}&language=pt-BR`)
  const json = await result.json();

  response.status(200).json({
    list: json.results
  })
}
