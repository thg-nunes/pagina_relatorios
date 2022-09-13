import { useState } from "react";
import { DragAndDrop } from "../components/dragAndDrop";
import { api } from "../services/axios";
import * as Styled from '../styles/pages/upload'

export default function Upload() {
  const [files, setFiles] = useState<File[]>([])

  async function handleSendFile() {
    if(files.length) {
      files.forEach(async (file) => {
        const formData = new FormData()
        formData.append('new_report', file)

        await api.post('/relatorio', formData, {
          headers: {
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

  return (
    <Styled.Container>
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
