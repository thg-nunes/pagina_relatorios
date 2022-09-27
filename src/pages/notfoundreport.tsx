import styled from "styled-components"

const Container = styled.div`
  max-width: 1280px;
  height: calc(100vh - 3rem);
  margin: 0 auto;
  position: relative;
  text-align: center;

  section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    a {
      transition: 150ms all ease-in-out;
      text-decoration: underline;

      :hover {
        color: blue;
      }
    }
  }

`

export default function NotFoundReport() {
  return (
    <Container>
      <section>
        <h2>Relatório não existente na base de dados.</h2>
        <a href="/">Voltar à página anterior.</a>
      </section>
    </Container>
  )
}
