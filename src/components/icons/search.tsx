import Image from "next/image"
import { useRouter } from "next/router";

import styled from 'styled-components';
import { useMyContextFilters } from "../../hooks/contexts/useMyContextFilters";
import { searchReport } from "../../hooks/reports";
import { api } from "../../services/axios";

type OnSearchReportsProps = {
  year: number
  month: number
}

type IconProps = {
  srcImage: string
  altImage: string
  onSearchReports: OnSearchReportsProps
}

type AxiosResponseProps = {
  data: {
    id: string
    file: string
  }[]
  status: string
}

export const Container = styled.span`
  img {
    cursor: pointer;
    transition: 150ms all ease-in-out;
    :hover {
      filter: brightness(.95);
    }
  }
`

export const SearchReport = ({ altImage, srcImage, onSearchReports }: IconProps) => {

  const context = useMyContextFilters()
  const { push } = useRouter()

  async function getReportBYYearAndMonth() {
    const response = await searchReport(onSearchReports)
    
    if(!response.data.length) {
      push('/notfoundreport')
    }
    
    const { data } = response
    context.dispatch({type: 'SEARCH_REPORT', payload: { data } })
  }

  return (
    <Container>
      <Image src={srcImage} alt={altImage} width='25px' height='25px' onClick={() => getReportBYYearAndMonth()} />
    </Container>
  )
}
