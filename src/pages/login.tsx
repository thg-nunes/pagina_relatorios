import { MyInput } from '../components/input'
import * as Styled from '../styles/pages/login'

export default function Login() {
  return (
    <Styled.Container>
      <Styled.Form>
        <p>Acervo de Relatórios Estatísticos - JUCEMA</p>
        <Styled.InputContainer>
          <MyInput type='text' placeholder='User' />
          <MyInput type='password' placeholder='Senha' />
          <button onClick={(e) => {
            e.preventDefault()
            // implementar a logica do login aqui
          }}>Enviar</button>
        </Styled.InputContainer>
      </Styled.Form>
    </Styled.Container>
  )
}
