import { css } from '@emotion/core'

const Globals = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap');
  * {
    font-family: 'Montserrat';
  }
  li{
      list-style:none
  }
  /* ANIMATIONS */
.slide-enter {
  opacity:0;
}
.slide-enter-active {
  opacity:.7;
  transition: opacity 100ms ease-in-out;
}
.slide-exit {
  opacity:1;
}
.slide-exit-active {
  opacity:.7;
  transition: opacity 100ms ease-in-out;
}
.comment-number{
  float: right
}
  /* stylelint-enable */
`

export default Globals
