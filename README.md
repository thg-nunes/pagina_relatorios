# Este projeto foi desenvolvido para a JUCEMA, orgão público do Maranhão

<div>
  <ul>
    <li>
      Necessidade do projeto </br>
      A ideia desse projeto deu-se para facilitar a organização dos relatórios estatísticos da empresa, onde antes não possuia sistema algum que fizesse essa função. Então a ideia no inicio era de uma página que pudesse ser feita uma pesquisa de um relatorio por ano e mês, e que permitisse ao usuário realizar o download daquele determinado arquivo.
    </li>
    <li>
      Escalabilidade do Projeto <br />
      <i>O projeto iniciou-se com os seguintes requisitos:</i> <br />
      <ul>
        <li> 1 - Deve ser possível listar todos os relatórios do ano atual. </li> <br />
        <li> 2 - Deve ser possível realizar a busca de um relatório pelo ano ou mês. </li> <br />
        <li> 3 - Deve ser possível realizar o download do relatório. </li> <br />
        <li> 4 - Caso uma busca nnão retorne nenhum relatório, o usuário deve ser redirecionado para uma página que explique o ocorrido . </li> <br />
      </ul>
      <p> Porém, durante o processo de desenvolvimento, surgiu a ideia de tornar a página que antes seria somente de acesso interno, agora com acesso externo. Então surgiram mais alguns requisitos:
      <ul>
        <li> 1 - Deve ter uma página de login, uma para listar os relatórios, e outra para realizar o upload de relatórios. </li> <br />
        <li> 2 - A página de login de ser acessível ao usuários comums e aos administradores, já a página de upload deve ser acessível somente pelos administradores. </li> <br />
        <li> 3 - O sistema deve ter refresh-token de forma automática sem que o usuário seja deslogado do sistema. </li> <br />
        <li> 4 - Caso seja o primeiro acesso do usuário, deve aparecer um formulário para que o mesmo mude sua senha . </li> <br />
        <li> 5 - O usuário deve ter a possibilidade de mudar sua senha quando quiser. </li> <br />
      </ul>
      Agora com esses novos requisitos a dinâmica do prejeto mudou por completo, pois agora ele passou a ter rotas autenticadas e uma funcionalidade que até então não tinha trabalhado, que nesse caso é autenticação de usuário e rotas, e tambem requisições autenticadas. Esse projeto até então feito é o mais simples no seu layout, porém o mais complexo em regras e funcionalidades, pois com todos os seus requisitos foi necessária uma cautela em cada ação possível que o usuário possa tomar, uma vez que as funcionalidade são diferentes para administradores e usuário comum, além de as requisições lançarem erros e eu ter de trata-las de forma amigável para explicar ao usuário o que houve, ter todo o processo de login, verificação de acesso e troca de senha, vale ressaltar que tambem foi-se utilizado nesse projeto o localstorage e cookies para armazenar infomações como token e refresh-token retornados da api e se é primeiro acesso ou não do usuário.
    </li>    
  </ul>
  <h2>Tecnnologias utilizadas nesse projeto</h2>
  - Next Js
  - TypesCript
  - StylydComponents
  - Axios
  - Nookies (biblioteca para trabalhar com cookies)
  - Storybook
</div>
