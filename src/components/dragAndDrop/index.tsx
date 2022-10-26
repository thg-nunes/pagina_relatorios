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
        isDragActive ? (
          <Styled.Drop>
            <p>Arraste e solte os arquivos</p>
          </Styled.Drop>
        ) : files.length ? (
          <Styled.Drop>
            {files.length && (
              files.map(file => (
                <p key={file.name}>{file.name}</p>
              ))
            )}
          </Styled.Drop>
          ) : (
          <Styled.Drop>
            <section>
              <img src='/relatorios/icons/upload-icon.svg' width='0' height='0' />
              <p>Arraste e solte os arquivos</p>
            </section>
          </Styled.Drop>
        )
      }
    </div>
  );
}
