import { useRouter } from 'next/router'
import { setCookie, destroyCookie } from 'nookies'
import { Dispatch, SetStateAction } from 'react'
import { api } from '../../services/axios'
import { useMyContextFilters } from '../contexts/useMyContextFilters'

const date = new Date()

const getAllReports = async () => {
  const response = await api.get(`/all`, {
    params: {
      year: date.getFullYear()
    }
  })

  return response.data
}

type OnSearchReportsProps = {
  year: number
  month: number
}

type AxiosResponseProps = {
  data: {
    id: string
    file: string
  }[]
  status: string
}

const searchReport = async (onSearchReports: OnSearchReportsProps) => {
  if(onSearchReports.month === null) {
    window.location.reload()
    return
  } else {
    const response = await api.get<AxiosResponseProps>('/all', {
      params: {
        year: onSearchReports.year,
        month: onSearchReports.month
      }
    })

    return response.data
  }
}

type DeleteReportProps = {
  fileId: string
  setStatusDeleteReport: Dispatch<SetStateAction<string>>
}

async function _deleteReport({ setStatusDeleteReport, fileId }: DeleteReportProps): Promise<void> {
  const response = await api.delete(`/${fileId}`)

  const status: string = response.data.status
  setStatusDeleteReport(status)

  setTimeout(() => {
    window.location.reload()
  }, 3600)
}

type UploadReportProps = {
  formData: FormData
}

const uploadReport = async ({ formData }: UploadReportProps) => {
  const response = await api.post('/upload', formData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data'
    }
  })

  return response
}

const downloadReport = (fileId?: string) => {
  api.defaults.responseType = 'blob'

  api.get(`/${fileId}`).then(res => {
    const href = URL.createObjectURL(res.data);

    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', 'relatório_estatístico.pdf');
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  })
}

type HandleUpdatePasswordProps = {
  username: string
  old_password: string
  new_password: string
}

const handleUpdatePassword = async (
  { old_password, new_password, username }: HandleUpdatePasswordProps,
  setHasError: Dispatch<SetStateAction<boolean | undefined>>
) => {
  try {
    const response = await api.post('/reset_password', {
      username,
      old_password,
      new_password
    })
    setHasError(false)

    const { first_access } = response.data

    destroyCookie(undefined, 'relatorio.first_access')
    setCookie(undefined, 'relatorio.first_access', first_access)

    setTimeout(() => {
      setHasError(undefined)
    }, 3500)

    setTimeout(() => {
      window.location.reload()
    }, 4000)
  } catch (error){
    setHasError(true)

    setTimeout(() => {
      setHasError(undefined)
    }, 3500)
  }
}
export { _deleteReport, getAllReports, uploadReport, downloadReport, searchReport, handleUpdatePassword }
