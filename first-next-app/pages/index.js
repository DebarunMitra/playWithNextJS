import { server } from '../config'
import Head from 'next/head'
import Image from 'next/image'
import Articles from '../components/Article'

export default function Home({articles}) {
  // console.log(articles);
  return (
    <div>
      <Articles articles={articles}/>
    </div>
  )
}


// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()
//
//   return {
//     props: {
//       articles
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
