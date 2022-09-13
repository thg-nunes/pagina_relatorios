import { GetStaticProps } from "next"
import { FiltersCreate } from "../client/filtersCreate"
import { Report } from "../components/report"
import { useMyContextFilters } from "../hooks/contexts/useMyContextFilters"
import { api } from "../services/axios"
import * as Styled from '../styles/pages'

type AxiosResponseProps = {
  id: string
  file: string
} []

type Response = {
  data: AxiosResponseProps
  status: string
}

const Home = (response: Response) => {

  const { state } = useMyContextFilters()

  return (
    <>
      <FiltersCreate />

      {state.searchByMonthOrYear !== null ? (
        <Report textReport={state.searchByMonthOrYear![0].file} fileId={state.searchByMonthOrYear[0].id} />
      ) : (
        <Styled.Container>
          {response.data.map(data => (
            <Report key={data.id} textReport={data.file} fileId={data.id} />
          ))}
        </Styled.Container>
      )}
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const date = new Date()

  const response = await api.get<Response>('/relatorios', {
    params: {
      year: date.getFullYear()
    }
  }).then(res => res.data)

  return {
    props: {
      ...response
    },
    // esse revalidate vai gerar paginas totalmente do zero somente a cada uma semana
    revalidate: 60 * 60 * 24 * 7 // 1 semana
  }
}
