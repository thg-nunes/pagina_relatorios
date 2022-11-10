import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { Alert } from "../../components/alerts/succesOrError";
import { DragAndDrop } from "../../components/dragAndDrop";
import { uploadReport } from "../../hooks/reports";
import * as Styled from '../../styles/pages/upload'

export default function Upload() {
  const { push } = useRouter()
  const [statusUpload, setStatusupload] = useState<number>(0)

  const [files, setFiles] = useState<File[]>([])
  const [role, setRole] = useState('')

  const cookies = parseCookies()

  async function handleSendFile() {
    if(files.length) {
      files.forEach(async (file, index) => {
        const formData = new FormData()
        formData.append('report_files', file)

        const response = await uploadReport({ formData })

        if(index === files.length - 1) {
          setStatusupload(response.status)

          setTimeout(() => {
            window.location.reload()
          }, 3600)
        }
      })
    }
  }

  useEffect(() => {
    const role = localStorage.getItem('relatorio.role')
    setRole(role!)

    if(cookies['relatorio.token'] && role === 'admin') {
      return
    }

    if(cookies['relatorio.token'] && role !== 'admin') {
      push('/relatorios/reports')
    }

    if(!cookies['relatorio.token']) {
      push('/relatorios/login')
    }
  }, [])

  return (
    <Styled.Container>
      {role === 'admin' && (
        <>
          <h2>Envio de Arquivos</h2>
          <Styled.DragAndDropContainer>
            <DragAndDrop files={files} setFiles={setFiles}/>

            <Styled.SubmitButton>
              <input type="submit" value="Enviar" onClick={async () => {
                await handleSendFile()
              }}/>
            </Styled.SubmitButton>
          </Styled.DragAndDropContainer>
          {statusUpload !== 0 && statusUpload === 200 && (
            <Alert message='Relatórios enviados.' hasError={false} />
          )}
          {statusUpload !== 0 && statusUpload !== 200 && (
            <Alert message='Relatórios não enviados.' hasError />
          )}
        </>
      )}
    </Styled.Container>
  )
}
