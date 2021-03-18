import {api,apiKey} from '../../services/index'


export default async(request, response) =>{
    const { q } = request.query
    const res = await api.get(`/search/movie?api_key=${apiKey}&language=pt-BR&query=${q}`)
    const {results} = res.data;
    return response.status(200).json({
      list: results
    })

  }
