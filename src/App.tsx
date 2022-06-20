import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons{
      id
      title
    }
  }
`

interface Lesson{
  id: string;
  title: string;
}

function App() {
  // Fazendo uma query na API com um hook, sendo nesse caso necessário envolver o componente App no pai com um context provider (<ApolloProvider client={client}>)
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)
  console.log(data)

  // Exemplo de como fazer um query de maneira tradicional
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response =>{
  //     console.log(response.data);
  //   })
  // }, [])

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
