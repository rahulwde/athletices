import styled from "styled-components";

export const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    font-size: 1.4rem;
    border-radius: 16px;
    border: none;
    padding: 2px;
    background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
    position: relative;
  }
  .button::after {
    content: "";
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffffff38;
    z-index: -1;
  }

  .blob1 {
    position: absolute;
    width: 70px;
    height: 100%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #3fe9ff,
      #0000ff80,
      transparent
    );
    box-shadow: -10px 10px 30px #0051ff2d;
  }

  .inner {
    padding: 14px 25px;
    border-radius: 14px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
  }
  .inner::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 14px;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #00e1ff1a,
      #0000ff11,
      transparent
    );
    position: absolute;
  }`;

  export const StyledWrappered = styled.div`
  .input-group {
   position: relative;
  }

  .input {
   border: solid 1.5px #9e9e9e;
   border-radius: 1rem;
   background: none;
   padding: 1rem;
   font-size: 1rem;
   color: #f5f5f5;
   transition: border 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .user-label {
   position: absolute;
   left: 15px;
   color: #e8e8e8;
   pointer-events: none;
   transform: translateY(1rem);
   transition: 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .input:focus, input:valid {
   outline: none;
   border: 1.5px solid #1a73e8;
  }

  .input:focus ~ label, input:valid ~ label {
   transform: translateY(-50%) scale(0.8);
   background-color: #212121;
   padding: 0 .2em;
   color: #2196f3;
  }`;

export const Submit = styled.div`
  .button {
    width: full;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
   background: radial-gradient(
      circle 60px at 0% 100%,
      #001ff1a,
      #0000ff1dd,
      transparent
    ); 
    border-radius: 30px;
    color: rgb(19, 19, 19);
    font-weight: 600;
    border: none;
    position: relative;
    cursor: pointer;
    transition-duration: .2s;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
    padding-left: 8px;
    transition-duration: .5s;
  }

  .svgIcon {
    height: 25px;
    transition-duration: 1.5s;
  }

  .bell path {
    fill: rgb(19, 19, 19);
  }

  .button:hover {
    background-color: rgb(192, 255, 20);
    transition-duration: .5s;
  }

  .button:active {
    transform: scale(0.97);
    transition-duration: .2s;
  }

  .button:hover .svgIcon {
    transform: rotate(250deg);
    transition-duration: 1.5s;
  }`;
  export const StyledSelect = styled.select`
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 50px;
  border: 1px solid #353535;
  background: #fff;
  color: #555;
  outline: none;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg fill="%23333" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px 16px;
  box-shadow: rgb(136 136 136 / 17%) 0px -23px 25px 0px inset,
              rgb(81 81 81 / 23%) 0px -36px 30px 0px inset,
              rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
              rgba(0, 0, 0, 0.06) 0px 2px 1px,
              rgba(0, 0, 0, 0.09) 0px 4px 2px,
              rgba(0, 0, 0, 0.09) 0px 8px 4px,
              rgba(0, 0, 0, 0.09) 0px 16px 8px,
              rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
export const StyledSearch = styled.div`
  /* From uiverse.io by @satyamchaudharydev */
  /* removing default style of button */

  .form button {
    border: none;
    background: none;
    color: #8b8ba7;
  }
  /* styling of whole input container */
  .form {
    --timing: 0.3s;
    --width-of-input: 900px;
    --height-of-input: 40px;
    --border-height: 2px;
   
    --border-color: #2f2ee9;
    --border-radius: 30px;
    --after-border-radius: 1px;
    position: relative;
    width: var(--width-of-input);
    height: var(--height-of-input);
    display: flex;
    align-items: center;
    padding-inline: 0.8em;
    border-radius: var(--border-radius);
    transition: border-radius 0.5s ease;
    // background: var(--input-bg,#fff);
  }
  /* styling of Input */
  .input {
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
  }
  /* styling of animated border */
  .form:before {
    content: "";
    position: absolute;
    background: var(--border-color);
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
  }
  /* Hover on Input */
  .form:focus-within {
    border-radius: var(--after-border-radius);
  }

  input:focus {
    outline: none;
  }
  /* here is code of animated border */
  .form:focus-within:before {
    transform: scale(1);
  }
  /* styling of close button */
  /* == you can click the close button to remove text == */
  .reset {
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
  }
  /* close button shown when typing */
  input:not(:placeholder-shown) ~ .reset {
    opacity: 1;
    visibility: visible;
  }
  /* sizing svg icons */
  .form svg {
    width: 17px;
    margin-top: 3px;
  }`;
export const StyledDropDown= styled.div`
  /* The design is inspired from Galahhad*/

  .popup {
    --burger-line-width: 1.125em;
    --burger-line-height: 0.125em;
    --burger-offset: 0.625em;
    --burger-bg: #00bf63;
    --burger-color: #333;
    --burger-line-border-radius: 0.1875em;
    --burger-diameter: 3.125em;
    --burger-btn-border-radius: calc(var(--burger-diameter) / 2);
    --burger-line-transition: 0.3s;
    --burger-transition: all 0.1s ease-in-out;
    --burger-hover-scale: 1.1;
    --burger-active-scale: 0.95;
    --burger-enable-outline-color: var(--burger-bg);
    --burger-enable-outline-width: 0.125em;
    --burger-enable-outline-offset: var(--burger-enable-outline-width);
    /* nav */
    --nav-padding-x: 0.25em;
    --nav-padding-y: 0.625em;
    --nav-border-radius: 0.375em;
    --nav-border-color: #ccc;
    --nav-border-width: 0.0625em;
    --nav-shadow-color: rgba(0, 0, 0, 0.2);
    --nav-shadow-width: 0 1px 5px;
    --nav-bg: #eee;
    --nav-font-family: "Poppins", sans-serif;
    --nav-default-scale: 0.8;
    --nav-active-scale: 1;
    --nav-position-left: 0;
    --nav-position-right: unset;
    /* if you want to change sides just switch one property */
    /* from properties to "unset" and the other to 0 */
    /* title */
    --nav-title-size: 0.625em;
    --nav-title-color: #777;
    --nav-title-padding-x: 1rem;
    --nav-title-padding-y: 0.25em;
    /* nav button */
    --nav-button-padding-x: 1rem;
    --nav-button-padding-y: 0.375em;
    --nav-button-border-radius: 0.375em;
    --nav-button-font-size: 17px;
    --nav-button-hover-bg: #00bf63;
    --nav-button-hover-text-color: #fff;
    --nav-button-distance: 0.875em;
    /* underline */
    --underline-border-width: 0.0625em;
    --underline-border-color: #ccc;
    --underline-margin-y: 0.3125em;
  }

  /* popup settings 👆 */

  .popup {
    display: inline-block;
    text-rendering: optimizeLegibility;
    position: relative;
  }

  .popup input {
    display: none;
  }

  .burger {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background: var(--burger-bg);
    width: var(--burger-diameter);
    height: var(--burger-diameter);
    border-radius: var(--burger-btn-border-radius);
    border: none;
    cursor: pointer;
    overflow: hidden;
    transition: var(--burger-transition);
    outline: var(--burger-enable-outline-width) solid transparent;
    outline-offset: 0;
  }

  .popup-window {
    transform: scale(var(--nav-default-scale));
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding: var(--nav-padding-y) var(--nav-padding-x);
    background: var(--nav-bg);
    font-family: var(--nav-font-family);
    color: var(--nav-text-color);
    border-radius: var(--nav-border-radius);
    box-shadow: var(--nav-shadow-width) var(--nav-shadow-color);
    border: var(--nav-border-width) solid var(--nav-border-color);
    top: calc(
      var(--burger-diameter) + var(--burger-enable-outline-width) +
        var(--burger-enable-outline-offset)
    );
    left: var(--nav-position-left);
    right: var(--nav-position-right);
    transition: var(--burger-transition);
    margin-top: 10px;
  }

  .popup-window legend {
    padding: var(--nav-title-padding-y) var(--nav-title-padding-x);
    margin: 0;
    color: var(--nav-title-color);
    font-size: var(--nav-title-size);
    text-transform: uppercase;
  }

  .popup-window ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .popup-window ul button {
    outline: none;
    width: 100%;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    color: var(--burger-color);
    font-size: var(--nav-button-font-size);
    padding: var(--nav-button-padding-y) var(--nav-button-padding-x);
    white-space: nowrap;
    border-radius: var(--nav-button-border-radius);
    cursor: pointer;
    column-gap: var(--nav-button-distance);
  }

  .popup-window ul li:nth-child(1) svg,
  .popup-window ul li:nth-child(2) svg {
    color: #00bf63;
  }

  .popup-window ul li:nth-child(4) svg,
  .popup-window ul li:nth-child(5) svg {
    color: rgb(153, 153, 153);
  }

  .popup-window ul li:nth-child(7) svg {
    color: red;
  }

  .popup-window hr {
    margin: var(--underline-margin-y) 0;
    border: none;
    border-bottom: var(--underline-border-width) solid
      var(--underline-border-color);
  }

  /* actions */

  .popup-window ul button:hover,
  .popup-window ul button:focus-visible,
  .popup-window ul button:hover svg,
  .popup-window ul button:focus-visible svg {
    color: var(--nav-button-hover-text-color);
    background: var(--nav-button-hover-bg);
  }

  .burger:hover {
    transform: scale(var(--burger-hover-scale));
  }

  .burger:active {
    transform: scale(var(--burger-active-scale));
  }

  .burger:focus:not(:hover) {
    outline-color: var(--burger-enable-outline-color);
    outline-offset: var(--burger-enable-outline-offset);
  }

  .popup input:checked + .burger span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }

  .popup input:checked + .burger span:nth-child(2) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }

  .popup input:checked + .burger span:nth-child(3) {
    transform: translateX(
      calc(var(--burger-diameter) * -1 - var(--burger-line-width))
    );
  }

  .popup input:checked ~ nav {
    transform: scale(var(--nav-active-scale));
    visibility: visible;
    opacity: 1;
  }`;