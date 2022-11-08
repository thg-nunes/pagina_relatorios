import { AxiosError } from "axios";
import Image from "next/image"
import { useRouter } from "next/router";
import { useState } from "react";

import styled from 'styled-components';
import { useMyContextFilters } from "../../hooks/contexts/useMyContextFilters";
import { searchReport } from "../../hooks/reports";
import { ErrorAlert } from "../alerts/error";

export type OnSearchReportsProps = {
  year: number
  month: number
}

type IconProps = {
  srcImage: string
  altImage: string
  onSearchReports: OnSearchReportsProps
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

    if(response.status === 'erro') {
      push('/relatorios/notfoundreport')
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
