import { useRef } from "react";
import { Filter } from "../components/filter";
import { useMyContextFilters } from "../hooks/contexts/useMyContextFilters";
import * as Styled from '../styles/pages/upload'

export default function Upload() {
  const yearRef = useRef()
  const fileRef = useRef<any>()
  const context = useMyContextFilters()
  const date = new Date()

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
        <label for="file">Selecionar Arquivo</label>
        <input type="file" name="selecionar arquivo para upload" id="file" ref={fileRef} />
      </Styled.UploadFileInput>

      <Styled.SubmitButton>
        <input type="submit" value="Enviar" onClick={() => {
          const yearReadData = context.state.year
          let monthReadData = context.state.month
          const fileData = fileRef

          if(monthReadData === null) {
            monthReadData = date.getMonth() + 1
          }

          console.log(yearReadData)
          console.log(monthReadData)
          console.log(fileData)
        }}/>
      </Styled.SubmitButton>

    </Styled.Container>
  )
}
