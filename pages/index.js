import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({name}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="origin-trial" content="TOKEN_GOES_HERE"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em destaque do {name}
        </h1>



      </main>


    </div>
  )
}

export async function getServerSideProps(){
  return {
    props:{
      name: 'Lucas'
    }
  }

}
