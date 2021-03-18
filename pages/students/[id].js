import {useRouter} from 'next/router';
export default function Student(){

  const router = useRouter()
  const {id}= router.query;
  return(
    <h1> Aluno {id}  </h1>
  )
}