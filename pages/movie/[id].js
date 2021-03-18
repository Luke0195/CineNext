import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import axios from 'axios'

export default function MovieItem({movieInfo}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="origin-trial" content="TOKEN_GOES_HERE"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Filme
        </h1>


        <Link href="/busca">  Ir para </Link>
        <ul>
          {results.map(item =>(
            <li key={item.id}>
              <a  href={`/movie/${item.id}`}>
              <>
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="220"/> <br/>
                <span>{item.title}</span>
              </>
              </a>
            </li>
          ))}
        </ul>



      </main>
    </div>
  )
}

export async function getStaticProps(context){
  const id = context.params.id;
  const response = await axios.get(`http://localhost:3000/api/movie/${id}`);
  const movie = response.data;

  return {
    props:{
     movieInfo: movie,

    }
  }

}
