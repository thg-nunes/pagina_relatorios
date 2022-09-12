import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;

  width: 100%;
  max-width: min-content;
  justify-content: flex-start;

  label {
    line-height: 1.6rem;
  }

  input {
    outline: none;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 5px;
    padding: .15rem ${({theme}) => theme.spacings[5]};
    position: relative;
  }

  @media (max-width: 540px) {
    max-width: none;
    padding: .25rem 0;
    justify-content: start;
  }
`

type OptionsProps = {
  filterVisible: boolean
}

export const Options = styled.div<OptionsProps>`
  width: 100%;
  height: 100%;

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

  @media (max-width: 540px) {
    position: absolute;
    z-index: 2;
  }
`

export const InputAndOptions = styled.section`
  position: relative;
`
