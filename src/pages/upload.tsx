import { useState } from "react";
import { Filter } from "../components/filter";
import { useMyContextFilters } from "../hooks/contexts/useMyContextFilters";
import { api } from "../services/axios";
import * as Styled from '../styles/pages/upload'

export default function Upload() {
  let [file, setFile] = useState<File | string>('')
  const context = useMyContextFilters()
  const date = new Date()

 async function handleSendFile() {
  const formData = new FormData()

  if(file !== '') {
    formData.append('new_report', file)

    await api.post('/relatorio', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => console.log(res))
  }}

  return (
    <Styled.Container>
      <Styled.YearAndMonthInput>
        <Filter
          labelId='year'
          labelText='Ano'
        />

        <Filter
          labelId='month'
          labelText='Mês'
        />
      </Styled.YearAndMonthInput>

      <Styled.UploadFileInput>
        <label htmlFor="file">Selecionar Arquivo</label>
        <input type="file" name="selecionar arquivo para upload" id="file" onChange={(e) => {
          setFile(e.target.files ? e.target.files[0] : '')
        }} />
      </Styled.UploadFileInput>

      <Styled.SubmitButton>
        <input type="submit" value="Enviar" onClick={() => handleSendFile()}/>
      </Styled.SubmitButton>

    </Styled.Container>
  )
}
