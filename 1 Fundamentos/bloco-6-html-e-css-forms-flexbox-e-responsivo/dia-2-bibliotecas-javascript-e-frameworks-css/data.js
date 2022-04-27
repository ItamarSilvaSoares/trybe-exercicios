const picker = new Pikaday({
    field: document.getElementById("datepicker"),
    format: "D MMM YYYY",
    i18n: {
      previousMonth: "Mês Anterior",
      nextMonth: "Próximo mês",
      months: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      weekdays: [
        "Domigo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sabado",
      ],
      weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    },
    onSelect: function () {
      console.log(this.getMoment().format("Do MMMM YYYY"));
    },
  });