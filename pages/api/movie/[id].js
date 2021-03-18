import {api,apiKey} from '../../../services/index'


export default async(request, response) =>{
    const { id } = request.query
    const res= await api.get(`/movie/${id}?api_key=${apiKey}&language=pt-BR`)

    response.status(200).json({
      info: res.data
    })

  }
