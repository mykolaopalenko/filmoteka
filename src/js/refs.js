const refs = {

    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal-login]'),
    backdropLogIn: document.querySelector('.backdrop_login'),
    modalDivLogIn: document.querySelector('.modal_login'),
    formLogIn: document.querySelector('.modal_login__form'),
    formTitleSignIn: document.querySelector('.modal_login__title_signIn'),
    formTitleSignUp: document.querySelector('.modal_login__title_signUp'),
    formWrapName: document.querySelector('.modal_login__wrap_name'),
    inputPassword: document.querySelector('#password'),
    buttonShowPassword: document.querySelector('#button_show_password'),
    iconForShowPassword: document.querySelector("#icon_show_password"),
    iconForUnShowPassword: document.querySelector("#icon_un_show_password"),
    formWrapCheckbox: document.querySelector('.modal_login__wrap_checkbox'),
    formCheckbox: document.querySelector('#checkbox'),
    buttonRegister: document.querySelector('.modal_login__button_register'),
    buttonConfirm: document.querySelector('.modal_login__button_confirm'),
    signUp: document.querySelector('.signUp_now'),
    signUpLink: document.querySelector('.signUp_now__link'),
    signIn: document.querySelector('.signIn_now'),
    signInLink: document.querySelector('.signIn_now__link'),
    logOut: document.querySelector('#header-logOut'),
  };
  
  export const {
    headerLogIn,
    headerLogOut,
    openModalBtn,
    closeModalBtn,
    modal,
    backdropLogIn,
    modalDivLogIn,
    formLogIn,
    formTitleSignIn,
    formTitleSignUp,
    formWrapName,
    inputPassword,
    buttonShowPassword,
    iconForShowPassword,
    iconForUnShowPassword,
    formWrapCheckbox,
    formCheckbox,
    buttonRegister,
    buttonConfirm,
    signUp,
    signUpLink,
    signIn,
    signInLink,
    logOut,
  } = refs;