import Head from 'next/head';
import Link from 'next/link'
import styles from '../../styles/Home.module.css';
import axios from 'axios'

export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="origin-trial" content="TOKEN_GOES_HERE"/>
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
         Filme:{info.title}
        </h1>
        <p> {info.overview}</p>
        <p>{info.vote_average}</p>

        <img src={`https://image.tmdb.org/t/p/original${info.poster_path}`} width="400"/>


        <Link href="/busca">  Ir para Busca</Link>





      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const response = await axios.get(`http://localhost:3000/api/movie/${context.params.id}`);
  const movie = response.data;
  console.log(movie)


  return {
    props:{
      info: movie.info


    }
  }

}
