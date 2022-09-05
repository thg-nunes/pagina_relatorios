import { FiltersCreate } from "../client/filtersCreate"
import { Header } from "../components/header"
import { Report } from "../components/report"
import * as Styled from '../styles/pages'

const Home = () => {
  return (
    <>
      <Header text="Lorem" />

      <FiltersCreate />

      <Styled.Container>
        <Report textReport="Relatorio Estatístico - Data" />
        <Report textReport="Relatorio Estatístico - Data" />
        <Report textReport="Relatorio Estatístico - Data" />
        <Report textReport="Relatorio Estatístico - Data" />
      </Styled.Container>
    </>
  )
}

export default Home
