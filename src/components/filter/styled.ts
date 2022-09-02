import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  width: 100%;
  max-width: 20%;

  label {
    line-height: 1.6rem;
  }

  input {
    outline: none;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 5px;
    padding: .15rem ${({theme}) => theme.spacings[5]};
  }
`

type OptionsProps = {
  filterVisible: boolean
}

export const Options = styled.div<OptionsProps>`
  display: ${({filterVisible}) => {
    if(filterVisible) return 'block'
    return 'none'
  }};
  flex-direction: column;

  span {
    display: block;
    padding: .25rem ${({theme}) => theme.spacings[5]};
    transition: 200ms all ease-in-out;
    cursor: pointer;
    background: rgba(225, 225, 225);

    :hover {
      background: #0D99FF;
    }
  }

  .selected {
    background: #0D99FF;
  }
`

export const InputAndOptions = styled.section`
`
