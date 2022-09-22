import Image from "next/image"
import { useState } from "react";

import styled from 'styled-components';
import { useMyContextFilters } from "../../hooks/contexts/useMyContextFilters";
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

  async function getReportBYYearAndMonth() {
    try {
      await api.get<AxiosResponseProps>('/relatorios', {
        params: {
          year: onSearchReports.year,
          month: onSearchReports.month
        }
      }).then(res => {
        const { data } = res.data
        console.log(data)
        context.dispatch({type: 'SEARCH_REPORT', payload: { data } })
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Image src={srcImage} alt={altImage} width='25px' height='25px' onClick={() => getReportBYYearAndMonth()} />
    </Container>
  )
}
