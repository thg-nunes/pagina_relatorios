import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { DragAndDrop } from "../components/dragAndDrop";
import { AuthContext } from "../contexts/authContext/authContext";
import { api } from "../services/axios";
import * as Styled from '../styles/pages/upload'

export default function Upload() {
  const [files, setFiles] = useState<File[]>([])
  const [role, setRole] = useState('')
  const { push } = useRouter()

  const cookies = parseCookies()

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
          alert('Falha ao enviar os arquivos.')
        })
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
      push('/reports')
    }

    if(!cookies['relatorio.token']) {
      push('/login')
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
        </>
      )}
    </Styled.Container>
  )
}
