import Head from 'next/head';
import {useState} from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Busca() {
  const [ searchText, setSearchText] = useState('')
  const [ movieList, setMovieList ] = useState([])

 const handleSearch = async () =>{
   if(searchText !== ''){
     const response = await axios.get(`http://localhost:3000/api/search?q=${searchText}`)
     const {list} = response.data;
     setMovieList(list)
    }
 }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="origin-trial" content="TOKEN_GOES_HERE"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Search
        </h1>

        <input
         type="text"
         placeholder="Informe o nome do filme"
         value={searchText}
         onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}> Pesquisar </button>

        <ul>
          {movieList.map(item =>(
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

