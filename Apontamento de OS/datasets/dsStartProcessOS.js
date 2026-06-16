function createDataset(fields, constraints, sortFields) {
    log.info("ds_startProcess dsStartProcess - Início");

    log.info("Verificando as constraints:");
    log.dir(constraints);


    var dataset = DatasetBuilder.newDataset();

    //Colunas do dataset./
    dataset.addColumn("status");
    dataset.addColumn("numSolic");
    dataset.addColumn("nomeTecnico");
    dataset.addColumn("setorTecnico");
    dataset.addColumn("nomeCliente");
    dataset.addColumn("tipoAgendamento");
    dataset.addColumn("data");
    dataset.addColumn("totalHoras");
    dataset.addColumn("almoco");

    var dsNomeTecnico = ""
    var dsNomeCliente = ""
    var dsTipoAgendamento = ""
    var dsData = ""
    var dsHoraInicial = ""
    var dsHoraFinal = ""
    var dsTotalHoras = ""
    var dsTarefasRealizadas = ""
    var numSolicIndiretos = "";
    var dsSetorTecnico = "";
    var dsAlmoco = "";  

    try {
        log.info("ds_startProcess dsStartProcess - Entrou no try");

        var ECMWorkflowEngineService = ServiceManager.getService("ECMWorkflowEngineService").getBean();
        log.info("passou o ECMWorkflowEngineService");
        var ECMWorkflowEngineServiceService = ECMWorkflowEngineService.instantiate("com.totvs.technology.ecm.workflow.ws.ECMWorkflowEngineServiceService");
        log.info("passou o ECMWorkflowEngineServiceService");
        var service = ECMWorkflowEngineServiceService.getWorkflowEngineServicePort();
        log.info("ds_startProcess dsStartProcess - passou o service");
        var colleagueIds = ECMWorkflowEngineService.instantiate("net.java.dev.jaxb.array.StringArray");
        log.info("ds_startProcess dsStartProcess - passou o colleagueIds");

        var campos = [];

        if (constraints != null) {
            for (var i = 0; i < constraints.length; i++) {
                if (constraints[i].fieldName == "nomeTecnico") {
                    dsNomeTecnico = constraints[i].initialValue;
                } else if (constraints[i].fieldName == "nomeCliente") {
                    dsNomeCliente = constraints[i].initialValue;
                } else if (constraints[i].fieldName == "tipoAgendamento") {
                    dsTipoAgendamento = constraints[i].initialValue;
                } else if (constraints[i].fieldName == "modal_dataInicio") {
                    dsData = constraints[i].initialValue;
                } else if (constraints[i].fieldName == "horaInicial") {
                    dsHoraInicial = constraints[i].initialValue;
                } else if (constraints[i].fieldName == "horaFinal") {
                    dsHoraFinal = constraints[i].initialValue;
                } else if (constraints[i].fieldName == "totalHoras") {
                    dsTotalHoras = constraints[i].initialValue;
                } else if (constraints[i].fieldName == "tarefasRealizadas") {
                    dsTarefasRealizadas = constraints[i].initialValue;
                } else if (constraints[i].fieldName == "setorTecnico") {
                    dsSetorTecnico = constraints[i].initialValue;
                } else if (constraints[i].fieldName == "almoco") {
                    dsAlmoco = constraints[i].initialValue;
                }

                campos.push({
                    field: constraints[i].fieldName,
                    value: constraints[i].initialValue
                });
            }
        }



        campos.push(
            {
                field: "descritorNome",
                value: dsNomeTecnico+" - " + dsSetorTecnico
            },
            {
                field: "automatico",
                value: "sim"
            },
            {
                field: "observacoes",
                value: "Solicitação Iniciada Automaticamente pelo processo de Solicitação de Indiretos N°" + numSolicIndiretos
            }
        );

        log.info("dsStartProcess - campos");
        log.dir(campos);
        var comments = "Solicitação Iniciada Automaticamente pelo processo de Solicitação de Indiretos N°" + numSolicIndiretos;

        var cardData = ECMWorkflowEngineService.instantiate("com.totvs.technology.ecm.workflow.ws.KeyValueDtoArray");

        for (var k = 0; k < campos.length; k++) {
            var keyValue = ECMWorkflowEngineService.instantiate("com.totvs.technology.ecm.workflow.ws.KeyValueDto");
            keyValue.setKey(campos[k].field);
            keyValue.setValue(campos[k].value);
            cardData.getItem().add(keyValue);
        }

        var attachments = ECMWorkflowEngineService.instantiate("com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray");
        var appointment = ECMWorkflowEngineService.instantiate("com.totvs.technology.ecm.workflow.ws.ProcessTaskAppointmentDtoArray");

        var process = service.startProcessClassic(
            "admin",    // usuário que vai iniciar o processo (login)
            "senha#123",    // senha desse usuário
            "1",   // id da empresa/instância Fluig
            "apontamentodeOS",         // id do processo que quer iniciar
            parseInt(0),                 // número do processo pai (0 = processo raiz)
            colleagueIds,      // lista dos usuários envolvidos (ex: aprovadores)
            comments,          // comentário que pode vir junto
            "admin",      // id do usuário no Fluig (matrícula)
            true,              // indica se o processo será iniciado com dados de formulário
            attachments,       // arquivos anexos (se houver)
            cardData,          // dados do formulário para preencher (json)
            appointment,       // agendamento (pode ser null)
            true               // flag para enviar e-mail após iniciar o processo
        );


        log.info("dsStartProcess - START SERVICE - startProcessClassic");
        log.dir(process);

        var id = process.getItem().get(7).getValue();
        dataset.addRow([
            "OK",
            id,
            dsNomeTecnico,
            dsSetorTecnico,
            dsNomeCliente,
            dsTipoAgendamento,
            dsData,
            dsTotalHoras
        ]);

    } catch (error) {
        error = error.toString();

        log.info("dsStartProcess - Error!");
        log.dir(error);

        dataset.addRow([
            error,
            "NOK"
        ]);
    }

    return dataset;
}   