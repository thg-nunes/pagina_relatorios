import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import * as Styled from './styled'

type DragAndDropProps = {
  files: File[]
  setFiles: (file: File[]) => void
}

export const DragAndDrop = ({ files, setFiles }: DragAndDropProps) => {

  const  onDrop  =  useCallback((files: File[])  =>  {
    setFiles([...files])
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ? <Styled.Drop>Solte os arquivos aqui ou clique para selecionar</Styled.Drop> : files.length ? <Styled.Drop>Arquivos selecionados.</Styled.Drop> : <Styled.Drop>Solte os arquivos aqui ou clique para selecionar</Styled.Drop>
      }
    </div>
  );
}
