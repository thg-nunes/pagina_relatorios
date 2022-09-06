import Image from "next/image"

import styled from 'styled-components';
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

  // const [reportData, setReportData] = useState<string>('')

  // const pdf = new jsPDF()

  async function getReportBYYearAndMonth() {
    try {
      await api.get<AxiosResponseProps>('/relatorios', {
        params: {
          year: onSearchReports.year,
          month: onSearchReports.month
        }
      }).then( async res => {
        const { data } = res.data
        const file_id = data[0].id

        await api.get(`/relatorio/${file_id}`).then(res => {
          // setReportData(res.data)
          console.log(res.data)
        })
      })
    } catch (err) {
      console.log(err)
    }
  }

  // if(reportData !== '') {
  //   pdf.text(reportData, 10, 10)
  //   pdf.save('relatorio.pdf')
  // }

  return (
    <Container>
      <Image src={srcImage} alt={altImage} width='25px' height='25px' onClick={() => getReportBYYearAndMonth()} />
    </Container>
  )
}
