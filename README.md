<div align="center">

# Apontamento de Ordem de Serviços

![Status](https://img.shields.io/badge/status-active-success)
![Fluig](https://img.shields.io/badge/Fluig-2.0-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES5-yellow)

Configuração e personalizações do projeto de Apontamento de Ordem de Serviços.

</div>

---

## 📝 Conteúdo

* [Sobre](#-sobre)
* [Pré-configuração](#-pré-configuração)
* [Serviços](#-serviços)
* [Papéis e Grupos](#-papéis-e-grupos)
* [Campos Criados](#-campos-criados)
* [Datasets](#-datasets)
* [Template de E-mail](#-template-de-e-mail)
* [Processo](#-processo)
* [Eventos de Processo e Scripts](#-eventos-de-processo-e-scripts)
* [Widgets](#-widgets)
* [Bibliotecas Utilizadas](#-bibliotecas-utilizadas)
* [Autores](#-autores)

---

## 🧐 Sobre

O objetivo deste projeto é facilitar o cadastro de Apontamentos de Ordem de Serviço (OS) na plataforma Fluig.

As implementações descritas neste documento devem ser executadas na sequência apresentada, pois algumas etapas dependem da conclusão das anteriores.

---

## 🏁 Pré-configuração

Configure os serviços abaixo para permitir a integração de dados e a sincronização dos datasets utilizados pelo processo.

### ⚙️ Serviços

Os seguintes serviços são essenciais para o funcionamento da solução:

#### FluigDSRO

Conexão direta com o banco de dados do Fluig via JDBC.

#### Fluig

API padrão do Fluig.

* URL: `http://SERVIDOR_FLUIG:PORTA`
* Tipo de autenticação: Fluig API
* Teste:

```text
/ecm/api/rest/ecm/processdefinition/getAllProcessDefinition
```

#### ECMCustomFieldsService

Responsável pelo preenchimento de campos customizados em documentos.

---

## 👥 Papéis e Grupos

### Papéis

* Não há papéis definidos.

### Grupos

* Não há grupos definidos.

---

## 📑 Campos Criados

### Formulário Principal

| Campo             | Descrição                  |
| ----------------- | -------------------------- |
| nomeTecnico       | Nome do Técnico            |
| setorTecnico      | Setor do Técnico           |
| nomeCliente       | Nome do Cliente            |
| tipoAgendamento   | Tipo de Agendamento        |
| horaInicial       | Hora Inicial               |
| almoco            | Intervalo de Almoço        |
| horaFinal         | Hora Final                 |
| totalHoras        | Total de Horas Trabalhadas |
| tarefasRealizadas | Tarefas Realizadas         |

---

## 📑 Datasets

| Dataset            | Descrição                        |
| ------------------ | -------------------------------- |
| dsApontamentoOS    | Formulário principal do processo |
| dsStartProcessRest | Inicia o processo via API REST   |
| dsStartProcessOS   | Inicia o processo via API SOAP   |

---

## 📧 Template de E-mail

Não há templates de e-mail definidos.

---

## 🔄 Processo

<div align="center">
    <img width="700" src="./forms\Apontamento de OS\ApontamentoOS.png" alt="Fluxo do Processo Apontamento de Ordem de Serviços">
</div>

### Fluxo do Processo

Este processo descreve as etapas e configurações necessárias para o registro de apontamentos de Ordem de Serviço na plataforma Fluig.

---

## ✔️ Eventos de Processo e Scripts

Nenhum evento de processo ou script foi definido até o momento.

---

## 🌐 Widgets

Foi desenvolvida uma página pública para a realização dos apontamentos de Ordem de Serviço, permitindo que os usuários registrem as informações necessárias de forma simples, rápida e acessível, sem necessidade de autenticação prévia no Fluig.

---

## ⛏️ Bibliotecas Utilizadas

| Biblioteca        | Finalidade                                 |
| ----------------- | ------------------------------------------ |
| Fluig Style Guide | Componentes e recursos da plataforma Fluig |
| jQuery            | Manipulação de DOM e eventos               |
| jQuery Mask       | Máscaras para campos de entrada            |

### Links

* https://style.fluig.com/
* https://jquery.com/
* https://igorescobar.github.io/jQuery-Mask-Plugin/

---

## ✍️ Autor

* **Anderson Fernandes de Souza**

  * GitHub: https://github.com/andersonfes

---

## 📄 Licença

Este projeto é de uso interno e destinado à plataforma Fluig.
