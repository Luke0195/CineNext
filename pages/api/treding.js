import {api,apiKey} from '../../services';

export default async(request, response) =>{
  const responseData =  await api.get(`/trending/movie/week?api_key=${apiKey}`)
  const {results} = responseData.data;
  response.status(200).json({
    list: results
})
}
