import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { DragAndDrop } from "../components/dragAndDrop";
import { AuthContext } from "../contexts/authContext/authContext";
import { api } from "../services/axios";
import * as Styled from '../styles/pages/upload'

export default function Upload() {
  const [files, setFiles] = useState<File[]>([])
  const { role, isAuthenticated } = useContext(AuthContext)
  const { push } = useRouter()

  async function handleSendFile() {
    if(files.length) {
      files.forEach(async (file) => {
        const formData = new FormData()
        formData.append('report_files', file)

        await api.post('/relatorio', formData, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(() => {
          alert('Arquivos enviados com sucesso!')
          setFiles([])
        })
        .catch((err) => {
          console.log(err)
          alert('Falha ao enviar os arquivos.')
        })
      })
    }
  }

  useEffect(() => {
    if(role !== 'admin' || !isAuthenticated) {
      push('/reports')
    }
  }, [])

  return (
    <Styled.Container>
      <h2>Envio de Arquivos</h2>
      <Styled.DragAndDropContainer>
        <DragAndDrop files={files} setFiles={setFiles}/>

        <Styled.SubmitButton>
          <input type="submit" value="Enviar" onClick={async () => {
            await handleSendFile()
          }}/>
        </Styled.SubmitButton>
      </Styled.DragAndDropContainer>

    </Styled.Container>
  )
}
