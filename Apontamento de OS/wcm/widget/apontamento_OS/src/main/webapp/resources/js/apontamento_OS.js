
var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function () {
        // calendário
        FLUIGC.calendar('#modal_dataInicio', {
            language: 'pt-br'
        }).setMaxDate(new Date());

        // cálculo automático
        $('#horaInicial, #horaFinal, #almoco').on('change', function () {
            console.log('Calculando horas...');
            MyWidget.instance().calcularHoras();
        });
    },

    //BIND de eventos
    bindings: {
        local: {
            'adicionar': ['click_chamaFuncao']
        },
        global: {

        }
    },


    chamaFuncao: function () {
        // botão salvar
        $('.btn-info').off('click').on('click', () => {
            console.log('SALVAR CLICADO');
            MyWidget.instance().salvarOS();
        });
    },

    calcularHoras: function () {

        const inicio = $('#horaInicial').val();
        const fim = $('#horaFinal').val();
        const almoco = $('#almoco').val() || '00:00';

        if (!inicio || !fim) return;

        const [h1, m1] = inicio.split(':').map(Number);
        const [h2, m2] = fim.split(':').map(Number);
        const [h3, m3] = almoco.split(':').map(Number);
        const inicioMin = (h1 * 60) + m1;
        const fimMin = (h2 * 60) + m2;
        const almocoMin = (h3 * 60) + m3;

        let diffMin = fimMin - inicioMin;

        // se passou da meia-noite
        if (diffMin < 0) {
            diffMin += 24 * 60;
        }

        // Subtrai 1h de almoço
        diffMin = diffMin - almocoMin;

        // evita ficar negativo
        if (diffMin < 0) diffMin = 0;

        $('#totalHoras').val(
            MyWidget.instance().formatarHoras(diffMin)
        );
    },

    formatarHoras: function (minutos) {
        const h = Math.floor(minutos / 60);
        const m = minutos % 60;

        return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
    },

    salvarOS: function () {
        var nomeTecnicoMod = $('#nomeTecnico').val();
        var nomeClienteMod = $('#nomeCliente').val();
        var tipoAgendamentoMod = $('#tipoAgendamento').val();
        var dataMod = $('#modal_dataInicio').val();
        var horaInicialMod = $('#horaInicial').val();
        var horaFinalMod = $('#horaFinal').val();
        var totalHorasMod = $('#totalHoras').val();
        var tarefasMod = $('#tarefasRealizadas').val();
        var setorTecnicoMod = $('#setorTecnico').val();
        var almocoMod = $('#almoco').val();

        if (!nomeTecnicoMod || !nomeClienteMod || !tipoAgendamentoMod || !dataMod || !horaInicialMod || !horaFinalMod || !tarefasMod || !setorTecnicoMod) {
            FLUIGC.toast({
                message: 'Preencha os campos obrigatórios',
                type: 'warning'
            });
            return;
        }

        var constraints = [
            { _field: "nomeTecnico", _initialValue: nomeTecnicoMod, _finalValue: nomeTecnicoMod, _type: 1 },
            { _field: "nomeCliente", _initialValue: nomeClienteMod, _finalValue: nomeClienteMod, _type: 1 },
            { _field: "tipoAgendamento", _initialValue: tipoAgendamentoMod, _finalValue: tipoAgendamentoMod, _type: 1 },
            { _field: "modal_dataInicio", _initialValue: dataMod, _finalValue: dataMod, _type: 1 },
            { _field: "horaInicial", _initialValue: horaInicialMod, _finalValue: horaInicialMod, _type: 1 },
            { _field: "horaFinal", _initialValue: horaFinalMod, _finalValue: horaFinalMod, _type: 1 },
            { _field: "totalHoras", _initialValue: totalHorasMod, _finalValue: totalHorasMod, _type: 1 },
            { _field: "tarefasRealizadas", _initialValue: tarefasMod, _finalValue: tarefasMod, _type: 1 },
            { _field: "setorTecnico", _initialValue: setorTecnicoMod, _finalValue: setorTecnicoMod, _type: 1 },
            { _field: "almoco", _initialValue: almocoMod, _finalValue: almocoMod, _type: 1 }
        ];

        var loading = FLUIGC.loading(window, {
            textMessage: 'Salvando OS...'
        });

        loading.show();

        $.ajax({
            url: '/api/public/ecm/dataset/datasets',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                name: 'dsStartProcessRest',
                fields: [],
                constraints: constraints,
                order: []
            }),

            success: function (dataset) {

                console.log("Retorno:", dataset);

                loading.hide();

                if (dataset && dataset.content && dataset.content.values && dataset.content.values.length > 0) {

                    var dados = dataset.content.values[0];

                    FLUIGC.toast({
                        message: 'Salvo com sucesso! OS Nº: <strong>' + dados.numSolic + '</strong> Liberado para um novo apontamento.',
                        type: 'success'
                    });

                    $('#MyWidget_1525').find('input, textarea, select').val('')

                    /* setTimeout(function () {
                        $('#nomeTecnico').val('');
                        $('#nomeCliente').val('');
                        $('#tipoAgendamento').val('');
                        $('#modal_dataInicio').val('');
                        $('#horaInicial').val('');
                        $('#almoco').val('');
                        $('#horaFinal').val('');
                        $('#totalHoras').val('');
                        $('#tarefasRealizadas').val('');
                        $('#setorTecnico').val('');
                    }, 300); */

                    /* var linha = `
                        <tr>
                            <td class="text-center">${dados.nomeTecnico}</td>
                            <td class="text-center">${dados.setorTecnico}</td>
                            <td class="text-center">${dados.nomeCliente}</td>
                            <td class="text-center">${dados.data}</td>
                            <td class="text-center">${dados.totalHoras}</td>
                            <td class="text-center">${dados.tipoAgendamento}</td>
                            <td class="text-center"><a href="/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=${dados.numSolic}" target="_blank">
                                    ${dados.numSolic}
                                </a></td>
                        </tr>
                    `; */

                    // $('#tabelaOS').append(linha);               

                } else {

                    console.log("Dataset veio vazio:", dataset);

                    FLUIGC.toast({
                        message: 'Dataset retornou vazio',
                        type: 'warning'
                    });
                }
            },

            error: function (err) {

                console.error("Erro AJAX:", err);

                loading.hide();

                FLUIGC.toast({
                    message: 'Erro ao executar dataset',
                    type: 'danger'
                });
            }
        });
    },

});

