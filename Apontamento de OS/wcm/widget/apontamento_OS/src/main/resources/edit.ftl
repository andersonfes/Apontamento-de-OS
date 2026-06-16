<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">

    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">
                <span class="fluigicon fluigicon-form fluigicon-md"></span>
                <b>Apontamento de ordem de serviço</b>
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

            <div class="form-group row">
                <div class="col-md-3">
                    <button id="btnNovaOS" type="button" class="btn btn-info" onclick="" data-chama-modal>
                        Adicionar
                    </button>
                </div>
            </div>

            <div class="form-group row">
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
            </div>
        </div>
    </div>

</div>