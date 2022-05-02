const validate = new window.JustValidate("#form");

const data = moment().format('L');

const dataForm = document.querySelector('#datepicker').value


validate
    .addField('#text-name', [{
        rule: 'minLength',
        value: 10,
    },
    {
        rule: 'maxLength',
        value: 30,
    },
    {
        rule: 'required',
        errorMessage: 'Nome Obrigatorio',
    },
])
    .addField('#text-email',[{
        rule: 'required',
        errorMessage: 'Email Obrigatorio',
    },
    {
        rule: 'email',
    errorMessage: 'Email invalido!',
    },
    {
        rule: 'maxLength',
        value: 50,
    },
])
    .addField('.radio', [{
        rule: 'required',
        errorMessage: 'Campo Obrigatorio',
    }])
    .addField('#text-motiv',[{
        rule: 'required',
        errorMessage: 'Campo Obrigatorio',
    },
    {
        rule: 'maxLength',
        value: 500,
    },
    {
        rule:'minLength',
        value: 100,
    },
])
.addField('#datepicker', [
    {
        rule: 'required',
        errorMessage: 'O campo de data é obrigatório.',
    },
  ]);
