# Spike O-Auth Simulation
Este projeto é uma spike que simula um processo OAuth simples. Ele é composto por dois microserviços: um serviço de autenticação (OAuth) e um serviço de teste. O objetivo é demonstrar o fluxo básico de login e autenticação OAuth.

Estrutura do Projeto
Serviço de Autenticação (OAuth): Responsável por simular o processo de autenticação com uma tela de login.
Serviço de Teste: Testa a autenticação através de um iframe que consome o serviço de autenticação.
Requisitos
Node.js versão 20: Este projeto requer o Node.js na versão 20. Para gerenciar versões de Node.js de maneira eficiente, recomendamos instalar o nvm (Node Version Manager).

## Instalação do nvm no linux:

```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Carregar nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Instalar Node.js versão 20
nvm install 20
```

## Instalação

1. Clone o repositório

```bash
git clone https://github.com/ClemersonAssuncao/Spike-OAuth.git
```

2. Acesse a pasta do projeto:

```bash
cd Spike-OAuth
```

3. Instale as dependências:

```bash
npm install
```
---

## Como Rodar os Serviços

### Serviço de Autenticação (OAuth)
Este serviço simula o processo de autenticação OAuth com uma tela de login simples.

#### Endpoints:

* GET /api/login: Exibe a página de login.
* POST /api/login: Processa o login.

#### Login Simulado:

* Username: user1
* Password: user1

#### Como executar:
Para iniciar o serviço OAuth na porta 3001, execute o seguinte comando:

```bash
npm run start:oauth
```

O serviço ficará disponível em: http://localhost:3001.

### Serviço de Teste

O segundo serviço é responsável por testar a autenticação do primeiro serviço OAuth. Ele exibe uma página que contém um iframe para interagir com a tela de autenticação.

#### Como executar:
Para iniciar o serviço de teste na porta 3002, basta executar o comando:

```bash
npm run start:tester
```

O serviço ficará disponível em: http://localhost:3002.

# Licença
Este projeto está licenciado sob a licença MIT. Para mais detalhes, veja o arquivo LICENSE.