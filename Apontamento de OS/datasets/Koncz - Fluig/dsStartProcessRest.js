
function createDataset(fields, constraints, sortFields) {

    log.info("startProcess usando uma API Rest - Início");

    var dataset = DatasetBuilder.newDataset();

    // COLUNAS DO DATASET

    dataset.addColumn("status");
    dataset.addColumn("numSolic");

    // var campos = [];

    if (constraints != null) {
        for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == "nomeTecnico") {
                var dsNomeTecnico = constraints[i].initialValue;
            } else if (constraints[i].fieldName == "nomeCliente") {
                var dsNomeCliente = constraints[i].initialValue;
            } else if (constraints[i].fieldName == "tipoAgendamento") {
                var dsTipoAgendamento = constraints[i].initialValue;
            } else if (constraints[i].fieldName == "modal_dataInicio") {
                var dsData = constraints[i].initialValue;
            } else if (constraints[i].fieldName == "horaInicial") {
                var dsHoraInicial = constraints[i].initialValue;
            } else if (constraints[i].fieldName == "horaFinal") {
                var dsHoraFinal = constraints[i].initialValue;
            } else if (constraints[i].fieldName == "totalHoras") {
                var dsTotalHoras = constraints[i].initialValue;
            } else if (constraints[i].fieldName == "tarefasRealizadas") {
                var dsTarefasRealizadas = constraints[i].initialValue;
            } else if (constraints[i].fieldName == "setorTecnico") {
                var dsSetorTecnico = constraints[i].initialValue;
            } else if (constraints[i].fieldName == "almoco") {
                var dsAlmoco = constraints[i].initialValue;
            }

            // campos.push({
            //     field: constraints[i].fieldName,
            //     value: constraints[i].initialValue
            // });
        }
    }

    var parametros = {
        "targetState": "0",
        "targetAssignee": "admin",
        "subProcessTargetState": "0",
        "comment": "Teste",
        "formFields": {
            "nomeTecnico": dsNomeTecnico,
            "setorTecnico": dsSetorTecnico,
            "nomeCliente": dsNomeCliente,
            "tipoAgendamento": dsTipoAgendamento,
            "modal_dataInicio": dsData,
            "horaInicial": dsHoraInicial,
            "almoco": dsAlmoco,
            "horaFinal": dsHoraFinal,

            "totalHoras": dsTotalHoras,
            "tarefasRealizadas": dsTarefasRealizadas,
            "descritorNome": dsNomeTecnico + " - " + dsSetorTecnico,
            "automatico": "sim",
            "observacoes": "Solicitação Iniciada Automaticamente pelo processo de Solicitação de Indiretos N°" + numSolicIndiretos
        }
    };

    try {

        var data = {
            companyId: String(getValue("WKCompany")),
            serviceCode: "New_API_Corporativo",
            endpoint: "/process-management/api/v2/processes/apontamentodeOS/start",
            method: "POST",
            params: parametros,
            timeoutService: "10000"
        };

        log.info("#### data ####");
        log.info(data);

        var clientService = fluigAPI.getAuthorizeClientService();

        log.info("#### clientService ####");
        log.info(clientService);

        var response = clientService.invoke(JSON.stringify(data));

        log.info("#### RESPONSE ####");
        log.info(response.getResult());

        if (!response || !response.getResult()) {
            throw "A chamada retornou vazia.";
        }

        if (response.getHttpStatusResult() != 200) {
            throw "Erro HTTP: " + response.getHttpStatusResult();
        }

        var result = JSON.parse(response.getResult());

        dataset.addRow([
            "SUCESSO",
            JSON.stringify(result)
        ]);

    } catch (e) {

        dataset.addRow([
            "ERRO",
            String(e)
        ]);

        log.error("Erro ao iniciar processo: " + e);
    }
    return dataset;

}