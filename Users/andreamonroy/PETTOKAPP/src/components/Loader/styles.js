import styled from '@emotion/styled'
export const SpinnerOverlay = styled.div`
  /* height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  max-width: 100%; */
  background: rgba(255, 255, 255, 0.9);
`

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  position: relative;
  &:after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #060f26;
    border-color: #060f26 transparent #060f26 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`
