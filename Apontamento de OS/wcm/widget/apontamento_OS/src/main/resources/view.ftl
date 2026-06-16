<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
    data-params="MyWidget.instance()">

    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">
                <span class="fluigicon fluigicon-form fluigicon-md"></span>
                <b>Apontamento de Ordem de Serviço</b>
            </h3>
        </div>

        <div class="panel-body">
            <div class="form-group row">
                <div class="col-md-12">
                    <div class="alert alert-warning" role="alert">
                        <p>
                            <strong style="color: #000000">Atenção: </strong>Para criar uma nova solicitação de <strong
                                style="color: #000000">Ordem de serviço </strong> basta clicar em <strong
                                style="color: #000000">Adicionar </strong>
                        </p>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="row">
                    <div class="col-md-4">
                        <label for="nomeTecnico">Nome do Técnico</label><strong style="color: red;"> * </strong>
                        <input type="text" class="form-control" name="nomeTecnico" id="nomeTecnico">
                    </div>

                    <div class="col-md-4">
                        <label for="setorTecnico">Setor do Técnico</label><strong style="color: red;"> * </strong>
                        <select class="form-control" name="setorTecnico" id="setorTecnico"
                            placeholder="Selecione um setor">
                            <option value=""></option>
                            <option value="TI">TI</option>
                            <option value="Financeiro">Financeiro</option>
                            <option value="RH">RH</option>
                            <option value="Comercial">Comercial</option>
                            <option value="Suporte">Suporte</option>
                        </select>
                    </div>

                    <div class="col-md-4">
                        <label for="nomeCliente">Nome do Cliente</label><strong style="color: red;"> * </strong>
                        <input type="text" class="form-control" name="nomeCliente" id="nomeCliente">
                    </div>

                    
                </div>
            </div>


            <div class="form-group">
                <div class="row">                    
                    <div class="col-md-2">
                        <label>Data</label> <strong style="color: red;"> * </strong>
                        <div class="input-group">
                            <input class="form-control" type="text" id="modal_dataInicio" name="modal_dataInicio"
                                mask="00/00/0000">
                            <span class="input-group-addon fs-cursor-pointer">
                                <span class="fluigicon fluigicon-calendar"></span>
                            </span>
                        </div>
                    </div>

                    <div class="col-md-2">
                        <label>Hora inicial</label> <strong style="color: red;"> * </strong>
                        <input class="form-control" type="time" id="horaInicial" name="horaInicial">
                    </div>

                    <div class="col-md-2">
                        <label>Almoço</label> <strong style="color: red;"> * </strong>
                        <input class="form-control" type="time" id="almoco" name="almoco">
                    </div>

                    <div class="col-md-2">
                        <label>Hora Final</label> <strong style="color: red;"> * </strong>
                        <input class="form-control" type="time" id="horaFinal" name="horaFinal">
                    </div>

                    <div class="col-md-2">
                        <label>Total de Horas</label> <strong style="color: red;"> * </strong>
                        <input class="form-control" type="text" id="totalHoras" name="totalHoras">
                    </div>

                    <div class="col-md-2">
                        <label for="tipoAgendamento">Agenda</label><strong style="color: red;"> * </strong>
                        <select name="tipoAgendamento" class="form-control" id="tipoAgendamento">
                            <option value=""></option>
                            <option value="Presencial">Presencial</option>
                            <option value="Remoto">Remoto</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <label>Tarefas Realizadas</label> <strong style="color: red;"> * </strong>
                        <textarea class="form-control" name="tarefasRealizadas" id="tarefasRealizadas"
                            rows="3"></textarea>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-md-3">
                    <button id="btnNovaOS" type="button" class="btn btn-info" onclick="" data-adicionar>
                        Adicionar
                    </button>
                </div>
            </div>

            <!-- <div class="form-group row">
                <div class="col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Técnico</th>
                                            <th class="text-center">Setor do Técnico</th>
                                            <th class="text-center">Cliente</th>
                                            <th class="text-center">Data</th>
                                            <th class="text-center">Total de Horas</th>
                                            <th class="text-center">Agendamento</th>
                                            <th class="text-center">Nº da Solicitação</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tabelaOS">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>

</div>