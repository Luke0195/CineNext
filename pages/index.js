import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import axios from 'axios'

export default function Home({results, name}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>CineNext</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="origin-trial" content="TOKEN_GOES_HERE"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em destaque do {name}
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

export async function getServerSideProps(){
  const response = await axios.get('http://localhost:3000/api/trending');
  const {list} = response.data;

  return {
    props:{
      results:list,
      name: 'Lucas'

    }
  }

}
