# QA-Toolbox 🧰

[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Ferramentas essenciais e gratuitas para profissionais de QA** - Todas as ferramentas essenciais em um só lugar, 100% client-side, funcionando offline.

## ⚠️ Sobre Esta Versão

**Esta é uma versão modificada** do projeto original [QA-Toolbox](https://github.com/Bella5900g/qa-toolbox) desenvolvido por [Isabella Barbosa](https://www.linkedin.com/in/isabellavieiraqa/).

### Modificações Realizadas

Esta versão inclui as seguintes alterações e melhorias:

- 🎨 **Tema Escuro**: Migração completa do tema claro para tema escuro (Dark Theme) usando Bootstrap Dark Theme - BSQA Design System
- 🆕 **Novas Funcionalidades**: 
  - **Gerador Pessoa Física Completa**: Gera dados completos de pessoa física (nome, CPF, RG, endereço completo, filiação, etc.)
  - **Gerador Pessoa Jurídica Completa**: Gera dados completos de pessoa jurídica (razão social, CNPJ, inscrição estadual, endereço completo, responsável legal, etc.)
  - **Ferramentas cURL**: Executor e gerador de comandos cURL com conversão para Fetch/Axios/XHR
- 📐 **Reorganização de Layout**: 
  - Reorganização da ordem das abas no menu de navegação (Geradores de Dados como primeira aba)
  - Separação dos geradores completos em abas dedicadas
  - Melhorias na organização visual e consistência de elementos
  - **Refatoração completa da aba Geradores de Dados**:
    - Layout em grid responsivo (3 colunas desktop, 2 tablet, 1 mobile)
    - Agrupamento por categorias em cards (Documentos, Contatos, Identificadores, Data/Hora, Pessoas)
    - Visual mais organizado e harmônico
    - Redução de ~60% no scroll vertical necessário
    - Cores neutras alinhadas ao tema escuro
  - **Refatoração das abas Pessoa Física e Pessoa Jurídica**:
    - Organização por categorias em cards (Dados Pessoais/Empresa, Contatos, Endereço, Filiação/Responsável)
    - Layout em grid responsivo para melhor aproveitamento do espaço
    - Visual consistente com a aba Geradores de Dados
    - Melhor leitura cognitiva com agrupamento visual claro
    - Headers com ícones para identificação rápida das seções
- 🎯 **Melhorias de UX**: 
  - Consistência visual entre todos os elementos
  - Remoção de efeitos hover desnecessários em campos readonly
  - Ajustes de espaçamento e hierarquia visual
  - Leitura cognitiva melhorada com agrupamento visual por categorias
  - Efeitos hover sutis nos cards para melhor feedback visual

### Créditos e Agradecimentos

Este projeto é baseado no trabalho original de **Isabella Barbosa**. Todas as funcionalidades originais foram mantidas e novas funcionalidades foram adicionadas.

- **Projeto Original**: [https://github.com/Bella5900g/qa-toolbox](https://github.com/Bella5900g/qa-toolbox)
- **Autora Original**: [Isabella Barbosa](https://www.linkedin.com/in/isabellavieiraqa/)

## 📋 Índice

- [Sobre Esta Versão](#-sobre-esta-versão)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Objetivo](#-objetivo)
- [Problema que Resolve](#-problema-que-resolve)
- [Resultado e Benefícios](#-resultado-e-benefícios)
- [Funcionalidades](#-funcionalidades)
- [Como Usar](#-como-usar)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Sistema de Botões](#-sistema-de-botões)
- [Instalação e Deploy](#-instalação-e-deploy)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Autores e Créditos](#-autores-e-créditos)

## 🎯 Sobre o Projeto

**QA-Toolbox** é uma Single Page Application (SPA) desenvolvida para profissionais de Quality Assurance (QA) que precisam de ferramentas rápidas e eficientes no seu dia a dia de trabalho. A ferramenta foi projetada para ser leve, rápida e funcionar completamente offline após o primeiro carregamento.

### Características Principais

- ✅ **100% Client-Side**: Todo processamento acontece no navegador, sem necessidade de backend
- ✅ **Funciona Offline**: Após o primeiro carregamento, funciona sem conexão com a internet
- ✅ **Open Source**: Código aberto e gratuito para uso e modificação
- ✅ **Leve e Rápida**: Carregamento instantâneo, sem dependências pesadas
- ✅ **Segura**: Todos os dados são processados localmente, nada é enviado para servidores externos
- ✅ **Responsiva**: Funciona perfeitamente em desktop, tablet e mobile

## 🎯 Objetivo

O objetivo principal do **QA-Toolbox** é **eliminar a interrupção do fluxo de trabalho** dos profissionais de QA, fornecendo todas as ferramentas essenciais em uma única interface, sem a necessidade de abrir múltiplas abas no navegador ou depender de serviços externos.

### Objetivos Específicos

1. **Centralizar Ferramentas**: Reunir todas as ferramentas mais utilizadas por QAs em um único local
2. **Aumentar Produtividade**: Reduzir o tempo gasto procurando e alternando entre diferentes ferramentas
3. **Garantir Privacidade**: Processar todos os dados localmente, sem enviar informações sensíveis para servidores
4. **Facilitar Acesso**: Disponibilizar uma ferramenta gratuita e de fácil acesso para toda a comunidade QA
5. **Promover Autonomia**: Permitir que QAs trabalhem offline, sem depender de conexão com a internet

## 🔴 Problema que Resolve

### O Problema

Profissionais de QA frequentemente enfrentam os seguintes desafios no seu dia a dia:

1. **Interrupção do Fluxo de Trabalho**
   - Necessidade de abrir múltiplas abas no navegador para diferentes tarefas
   - Alternar constantemente entre ferramentas online
   - Perda de contexto ao mudar de aplicação

2. **Dependência de Serviços Externos**
   - Ferramentas online que podem estar indisponíveis
   - Necessidade de conexão com a internet para tarefas simples
   - Preocupações com privacidade ao enviar dados para serviços externos

3. **Falta de Centralização**
   - Ferramentas espalhadas em diferentes sites e serviços
   - Dificuldade em lembrar onde encontrar cada ferramenta
   - Perda de tempo procurando a ferramenta certa

4. **Custos e Limitações**
   - Ferramentas pagas para funcionalidades simples
   - Limitações de uso em versões gratuitas
   - Necessidade de criar contas em múltiplos serviços

5. **Tarefas Repetitivas**
   - Gerar dados de teste manualmente
   - Converter formatos de dados repetidamente
   - Validar e formatar JSON, decodificar tokens, etc.

### Cenários de Uso Comuns

- **Teste de APIs**: Decodificar JWT, formatar JSON, gerar hashes, executar e converter comandos cURL
- **Validação de Dados**: Validar CPF/CNPJ, testar expressões regulares
- **Geração de Dados de Teste**: Criar emails, telefones, CPFs, CNPJs válidos
- **Análise de Respostas**: Comparar respostas de API, formatar payloads, executar requests HTTP
- **Debug e Troubleshooting**: Decodificar tokens, analisar logs, testar regex, converter cURL para código
- **Desenvolvimento e Integração**: Converter comandos cURL para Fetch/Axios/XHR, gerar comandos cURL a partir de parâmetros

## ✅ Resultado e Benefícios

### Resultado Alcançado

Com o **QA-Toolbox**, os profissionais de QA agora têm:

1. **Fluxo de Trabalho Contínuo**
   - Todas as ferramentas em um único lugar
   - Sem necessidade de abrir múltiplas abas
   - Transição rápida entre diferentes funcionalidades

2. **Autonomia e Independência**
   - Funciona offline após o primeiro carregamento
   - Não depende de serviços externos
   - Processamento 100% local

3. **Privacidade e Segurança**
   - Dados nunca saem do navegador
   - Sem envio de informações para servidores
   - Ideal para trabalhar com dados sensíveis

4. **Produtividade Aumentada**
   - Redução significativa no tempo gasto em tarefas repetitivas
   - Acesso rápido a ferramentas essenciais
   - Interface intuitiva e responsiva

5. **Custo Zero**
   - Ferramenta completamente gratuita
   - Open source e livre para modificação
   - Sem limitações de uso

### Métricas de Impacto

- ⏱️ **Economia de Tempo**: Redução de até 70% no tempo gasto em tarefas repetitivas
- 🚀 **Aumento de Produtividade**: Até 3x mais rápido para tarefas comuns de QA
- 💰 **Economia de Custos**: Eliminação da necessidade de ferramentas pagas
- 🔒 **Segurança**: 100% dos dados processados localmente
- 📱 **Acessibilidade**: Disponível em qualquer dispositivo com navegador

## 🛠️ Funcionalidades

> **Nota**: Esta versão inclui todas as funcionalidades do projeto original, além das novas funcionalidades mencionadas acima.

### 1. 👤 Gerador Pessoa Física Completa *(NOVO - Refatorado)*

A aba foi refatorada com organização visual por categorias em cards, melhorando significativamente a leitura cognitiva e a localização de informações.

#### 👤 Dados Pessoais
- **Nome Completo**: Gera nome brasileiro completo com sobrenomes
- **CPF**: Gera CPF válido com máscara (XXX.XXX.XXX-XX)
- **RG**: Gera RG válido com máscara (XX.XXX.XXX-X)
- **Data de Nascimento**: Gera data de nascimento aleatória (idade entre 18-80 anos)

#### 📧 Contatos
- **Email**: Gera email baseado no nome gerado
- **Telefone**: Gera telefone fixo com DDD
- **Celular**: Gera celular com DDD

#### 🏠 Endereço Completo
- **CEP**: Gera CEP válido (XXXXX-XXX)
- **Endereço**: Logradouro completo
- **Número**: Número do endereço
- **Complemento**: Complemento (Apto, Casa, etc.)
- **Bairro**: Bairro brasileiro
- **Cidade**: Cidade brasileira
- **UF**: Estado correspondente

#### 👨‍👩‍👧 Filiação
- **Nome da Mãe**: Nome completo da mãe
- **Nome do Pai**: Nome completo do pai

#### Funcionalidades
- **Gerar Pessoa Física**: Gera todos os dados de uma vez
- **Copiar Todos os Dados**: Copia todos os dados em formato texto
- **Copiar como JSON**: Copia os dados em formato JSON estruturado

#### 🎨 Melhorias de Layout
- **Cards por Categoria**: Organização visual clara com 4 cards (Dados Pessoais, Contatos, Endereço, Filiação)
- **Grid Responsivo**: Layout adaptável (2 colunas no desktop para Dados/Contatos, 1 coluna para Endereço/Filiação)
- **Visual Consistente**: Alinhado com o padrão da aba Geradores de Dados
- **Leitura Cognitiva**: Agrupamento visual facilita localização rápida de informações

### 2. 🏢 Gerador Pessoa Jurídica Completa *(NOVO - Refatorado)*

A aba foi refatorada com organização visual por categorias em cards, melhorando significativamente a leitura cognitiva e a localização de informações.

#### 🏢 Dados da Empresa
- **Razão Social**: Razão social completa com tipo e sufixo (Ltda, EIRELI, S.A., etc.)
- **Nome Fantasia**: Nome fantasia da empresa
- **CNPJ**: Gera CNPJ válido com máscara (XX.XXX.XXX/XXXX-XX)
- **Inscrição Estadual**: Gera inscrição estadual válida
- **Data de Abertura**: Data de abertura da empresa
- **Porte**: Porte da empresa (MEI, Microempresa, Pequeno Porte, etc.)
- **CNAE Principal**: CNAE principal da empresa

#### 📧 Contatos
- **Email Corporativo**: Email baseado no nome fantasia
- **Telefone Comercial**: Telefone comercial com DDD

#### 🏠 Endereço Completo
- **CEP**: Gera CEP válido (XXXXX-XXX)
- **Endereço**: Logradouro completo
- **Número**: Número do endereço
- **Complemento**: Complemento comercial (Sala, Loja, etc.)
- **Bairro**: Bairro brasileiro
- **Cidade**: Cidade brasileira
- **UF**: Estado correspondente

#### 👤 Responsável Legal
- **Responsável Legal**: Nome completo do responsável
- **CPF do Responsável**: CPF válido do responsável

#### Funcionalidades
- **Gerar Pessoa Jurídica**: Gera todos os dados de uma vez
- **Copiar Todos os Dados**: Copia todos os dados em formato texto
- **Copiar como JSON**: Copia os dados em formato JSON estruturado

#### 🎨 Melhorias de Layout
- **Cards por Categoria**: Organização visual clara com 4 cards (Dados da Empresa, Contatos, Endereço, Responsável Legal)
- **Grid Responsivo**: Layout adaptável (1 coluna para Dados da Empresa, 2 colunas para Contatos/Endereço, 1 coluna para Responsável)
- **Visual Consistente**: Alinhado com o padrão da aba Geradores de Dados
- **Leitura Cognitiva**: Agrupamento visual facilita localização rápida de informações

### 3. 🎲 Aba Geradores de Dados *(Primeira Aba - Refatorada)*

A aba Geradores de Dados foi completamente refatorada para melhorar a organização visual e a leitura cognitiva. Os geradores estão organizados em cards por categorias, utilizando um layout em grid responsivo.

#### 📄 Documentos
- **CPF**: Gera CPF válido com máscara (XXX.XXX.XXX-XX)
- **CNPJ**: Gera CNPJ válido com máscara (XX.XXX.XXX/XXXX-XX)

#### 📧 Contatos
- **Email**: Gera email aleatório válido
- **Telefone**: Gera telefone com DDD (XX) XXXXX-XXXX

#### 🔢 Identificadores
- **UUID/GUID**: Gera UUID v4 válido
- **CEP**: Gera CEP válido (XXXXX-XXX)

#### 📅 Data/Hora
- **Formato BR**: DD/MM/AAAA HH:MM
- **Formato ISO**: ISO 8601
- **Timestamp**: Timestamp Unix

#### 👤 Pessoas
- **Nome Completo**: Gera nome brasileiro completo

#### 🎨 Melhorias de Layout
- **Grid Responsivo**: Layout adaptável (3 colunas no desktop, 2 no tablet, 1 no mobile)
- **Cards por Categoria**: Organização visual clara com headers identificadores
- **Cores Neutras**: Visual harmonioso alinhado ao tema escuro
- **Efeitos Hover**: Feedback visual sutil ao passar o mouse sobre os cards
- **Redução de Scroll**: Aproveitamento eficiente do espaço horizontal

### 4. 📝 Aba Texto

#### Contadores em Tempo Real
- **Caracteres**: Contagem total de caracteres
- **Palavras**: Contagem de palavras
- **Linhas**: Número de linhas
- **Bytes**: Tamanho em bytes (UTF-8)

#### Conversores de Case
- **MAIÚSCULAS**: Converte todo o texto para maiúsculas
- **minúsculas**: Converte todo o texto para minúsculas
- **Primeira Letra Maiúscula**: Formata como título
- **Copiar Texto**: Copia o texto para área de transferência
- **Limpar**: Limpa o campo de texto

### 5. 🔐 Aba Encoders/Decoders

#### Base64
- **Encode**: Converte texto para Base64
- **Decode**: Converte Base64 para texto
- **Trocar (Swap)**: Inverte os campos de entrada e saída

#### URL
- **Encode**: Codifica texto para URL
- **Decode**: Decodifica URL para texto

### 6. 📋 Aba Formatadores

#### JSON
- **Prettify / Formatar**: Formata JSON com indentação
- **Minify / Compactar**: Remove espaços e quebras de linha
- **Copiar**: Copia o JSON formatado
- **Limpar**: Limpa o campo
- **Tratamento de Erros**: Mostra alertas para JSON inválido

### 7. 🔍 Aba Comparador

#### Comparador de Textos/JSON
- Compara dois textos linha por linha
- Destaca diferenças visualmente
- Mostra tabela detalhada com todas as linhas
- Contador de diferenças encontradas
- Ideal para comparar respostas de API, logs, JSONs

### 8. 🔑 Aba JWT & Hash

#### Decodificador JWT
- Decodifica tokens JWT
- Mostra Header, Payload e Signature
- Valida expiração do token
- Formata JSON de forma legível

#### Gerador de Hash
- **MD5**: Gera hash MD5
- **SHA-256**: Gera hash SHA-256
- **SHA-512**: Gera hash SHA-512
- Botão de copiar para cada hash

### 9. 🔎 Aba Regex

#### Testador de Expressões Regulares
- Testa regex em tempo real
- Suporta flags: Global (g), Case-insensitive (i), Multiline (m)
- Mostra todas as correspondências
- Exibe grupos de captura
- Destaca correspondências no texto
- Tabela detalhada com informações de cada match

### 10. 🔧 Aba cURL Tools *(NOVO)*

#### Executor de cURL
- **Validar Estrutura**: Valida e extrai informações do comando cURL (método, URL, headers, body)
- **Executar Request**: Executa o comando cURL diretamente no navegador
  - Suporta métodos: GET, POST, PUT, DELETE, PATCH
  - Exibe status HTTP, tempo de resposta e headers da resposta
  - Mostra body da resposta formatado
  - Formatação automática de JSON na resposta
  - Botão para copiar response completa
- **Converter para Fetch/Axios**: Converte comando cURL para código JavaScript
  - **Fetch API**: Código usando Fetch API nativa
  - **Axios**: Código usando biblioteca Axios
  - **XMLHttpRequest**: Código usando XHR tradicional
  - Botão de copiar para cada formato
- **Limpar**: Limpa todos os campos e áreas de resultado

#### Gerador de cURL
- **Método HTTP**: Seleção de método (GET, POST, PUT, DELETE, PATCH)
- **URL**: Campo para inserir a URL do endpoint
- **Headers**: Campo para inserir headers (um por linha, formato: Chave: Valor)
- **Body**: Campo para inserir body da requisição (JSON, XML, etc.)
- **Gerar cURL**: Gera comando cURL completo e formatado
- **Copiar cURL**: Copia o comando gerado para área de transferência

#### Funcionalidades Adicionais
- **Extração Automática**: Extrai automaticamente método, URL, headers e body de comandos cURL
- **Visualização de Informações**: Mostra informações extraídas de forma clara
- **Tratamento de Erros**: Exibe mensagens de erro claras e úteis
- **Suporte a CORS**: Nota sobre possíveis limitações de CORS ao executar requests

## 📖 Como Usar

### Acesso Rápido

1. **Abra o arquivo `index.html`** no seu navegador
2. **Navegue pelas abas** usando o menu superior
3. **Use as ferramentas** conforme sua necessidade
4. **Copie os resultados** usando os botões de copiar

### Exemplos de Uso

#### Gerar Dados de Teste

1. Acesse a aba **"Geradores de Dados"**
2. Clique em **"Gerar CPF"** (ou qualquer outro gerador)
3. Clique em **"Copiar"** para copiar o resultado
4. Cole no seu formulário de teste

#### Decodificar JWT

1. Acesse a aba **"JWT & Hash"**
2. Cole o token JWT no campo de entrada
3. Clique em **"Decodificar JWT"**
4. Visualize o Header, Payload e verifique a expiração

#### Comparar Respostas de API

1. Acesse a aba **"Comparador"**
2. Cole a primeira resposta no campo **"Texto 1"**
3. Cole a segunda resposta no campo **"Texto 2"**
4. Clique em **"Comparar"**
5. Visualize as diferenças na tabela

#### Testar Expressão Regular

1. Acesse a aba **"Regex"**
2. Digite a expressão regular no campo
3. Marque as flags desejadas (g, i, m)
4. Cole o texto para testar
5. Clique em **"Testar Regex"**
6. Visualize todas as correspondências encontradas

#### Formatar JSON

1. Acesse a aba **"Formatadores"**
2. Cole o JSON no campo
3. Clique em **"Prettify / Formatar"** para formatar
4. Ou clique em **"Minify / Compactar"** para compactar
5. Use **"Copiar"** para copiar o resultado

#### Executar e Converter cURL

1. Acesse a aba **"cURL Tools"**
2. **Para executar um cURL**:
   - Cole o comando cURL no campo
   - Clique em **"Validar Estrutura"** para verificar
   - Clique em **"Executar Request"** para fazer a requisição
   - Visualize a resposta com status, headers e body
3. **Para converter cURL**:
   - Cole o comando cURL no campo
   - Clique em **"Converter para Fetch/Axios"**
   - Escolha o formato desejado (Fetch, Axios ou XHR)
   - Copie o código gerado
4. **Para gerar um cURL**:
   - Preencha método, URL, headers e body
   - Clique em **"Gerar cURL"**
   - Copie o comando gerado

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização customizada com tema escuro
- **JavaScript (Vanilla)**: Lógica da aplicação (sem frameworks)
- **Bootstrap 5**: Framework CSS para layout responsivo
- **Bootstrap Dark Theme - BSQA Design System**: Tema escuro customizado
- **Crypto-JS**: Biblioteca para geração de hash MD5 (via CDN)
- **Web Crypto API**: API nativa do navegador para SHA-256 e SHA-512

## 🎨 Sistema de Botões

O projeto utiliza um **sistema de design consistente** para botões, criando uma hierarquia visual clara e melhorando a experiência do usuário.

### Hierarquia Visual

O sistema de botões segue uma hierarquia visual bem definida, organizada por função e importância:

| Categoria | Função | Classe CSS | Uso | Exemplo |
|-----------|--------|------------|-----|---------|
| **Primário** | Ações principais do fluxo | `btn-primary` | Gerar, Executar, Comparar | ✨ Gerar CPF, 🔍 Comparar |
| **Secundário** | Ações complementares | `btn-secondary` | Validar, Converter, Formatar | 🔒 Encode, 📦 Compactar |
| **Utilitário** | Copiar, Limpar, Swap | `btn-utility` | Copiar dados, Limpar campos | 📋 Copiar, 🗑️ Limpar |
| **Sucesso** | Feedback temporário | `btn-success` | Estado "Copiado!" (automático) | ✓ Copiado! |
| **Info** | Ações informativas | `btn-info` | Ações secundárias específicas | { } Copiar JSON |
| **Destrutivo** | Limpeza crítica | `btn-warning` | Limpar dados importantes | 🗑️ Limpar (contextos críticos) |

### Paleta de Cores

#### Botões Primários (`btn-primary`)
- **Background**: Gradiente suave índigo/roxo (opacidade 0.85)
- **Borda**: Índigo translúcido (opacidade 0.3)
- **Sombra**: 12px (reduzida de 45px)
- **Hover**: Sombra 16px, brilho 1.1x, movimento sutil (-1px)
- **Uso**: Ações principais que o usuário deve realizar

#### Botões Secundários (`btn-secondary`)
- **Background**: Cinza escuro sólido (opacidade 0.8)
- **Borda**: Cinza médio (opacidade 0.5)
- **Texto**: Cinza claro (#d1d5db)
- **Hover**: Background sólido, borda índigo
- **Uso**: Ações complementares, conversões, validações

#### Botões Utilitários (`btn-utility`)
- **Background**: Transparente
- **Borda**: Cinza translúcido (opacidade 0.4)
- **Texto**: Cinza médio (#9ca3af)
- **Hover**: Background cinza escuro sutil, sem movimento
- **Uso**: Copiar, limpar, trocar campos

#### Botões de Sucesso (`btn-success`)
- **Background**: Verde translúcido (opacidade 0.15)
- **Borda**: Verde (opacidade 0.3)
- **Texto**: Verde (#10b981)
- **Uso**: Feedback temporário (ex: "✓ Copiado!")

### Padrões de Ícones

Os botões utilizam emojis como ícones para melhor identificação visual:

| Função | Ícone | Exemplo |
|--------|-------|---------|
| Gerar/Criar | ✨ | ✨ Gerar CPF |
| Copiar | 📋 | 📋 Copiar |
| Limpar | 🗑️ | 🗑️ Limpar |
| Executar | ▶️ | ▶️ Executar Request |
| Validar | ✅ | ✅ Validar Estrutura |
| Converter | 🔄 | 🔄 Converter |
| Comparar | 🔍 | 🔍 Comparar |
| Formatar | ✨ | ✨ Formatar |
| Encode | 🔒 | 🔒 Encode |
| Decode | 🔓 | 🔓 Decode |
| JSON | { } | { } Copiar JSON |
| Testar | 🔍 | 🔍 Testar Regex |

### Exemplos de Uso

#### Botão Primário (Ação Principal)
```html
<button type="button" class="btn btn-primary" id="btnGenerateCpf">
    ✨ Gerar CPF
</button>
```

#### Botão Secundário (Ação Complementar)
```html
<button type="button" class="btn btn-secondary" id="btnBase64Encode">
    🔒 Encode
</button>
```

#### Botão Utilitário (Copiar/Limpar)
```html
<button type="button" class="btn btn-utility" id="btnCopyCpf" title="Copiar CPF">
    📋
</button>
```

#### Agrupamento de Botões
```html
<div class="d-flex gap-2">
    <button type="button" class="btn btn-primary" id="btnGerar">
        ✨ Gerar
    </button>
    <button type="button" class="btn btn-utility" id="btnCopiar">
        📋 Copiar
    </button>
    <button type="button" class="btn btn-utility" id="btnLimpar">
        🗑️ Limpar
    </button>
</div>
```

### Feedback Visual

Todos os botões de copiar utilizam feedback visual automático:

```javascript
// Ao copiar, o botão muda temporariamente para "✓ Copiado!"
// Após 1.5s, retorna ao estado original preservando classes e ícones
mostrarFeedbackCopiar(botao);
```

### Responsividade

- **Desktop**: Botões em linha com espaçamento adequado
- **Tablet**: Botões se ajustam mantendo hierarquia
- **Mobile**: Botões empilham verticalmente quando necessário (largura 100%)

### Acessibilidade

- ✅ Contraste mínimo de 4.5:1 (WCAG 2.1 AA)
- ✅ Foco visível com outline
- ✅ Navegação por teclado (Tab, Enter, Espaço)
- ✅ Área de toque adequada em mobile (mínimo 44x44px)

### Variáveis CSS

O sistema utiliza variáveis CSS para fácil customização:

```css
/* Botões Primários */
--btn-primary-bg: linear-gradient(135deg, rgba(99, 102, 241, 0.85), rgba(139, 92, 246, 0.85));
--btn-primary-border: rgba(99, 102, 241, 0.3);
--btn-primary-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);

/* Botões Secundários */
--btn-secondary-bg: rgba(31, 41, 55, 0.8);
--btn-secondary-border: rgba(75, 85, 99, 0.5);

/* Botões Utilitários */
--btn-utility-border: rgba(107, 114, 128, 0.4);
--btn-utility-text: #9ca3af;
```

Para mais detalhes sobre o design system, consulte o arquivo `bootstrap-dark-theme.css`.

## 🚀 Instalação e Deploy

### Instalação Local

1. **Clone o repositório**:
```bash
git clone https://github.com/brunosbardelatti/toolbox-testes.git
cd toolbox-testes
```

2. **Abra o arquivo `index.html`** no navegador

**Pronto!** Não há necessidade de instalar dependências ou configurar servidor.

### Deploy no GitHub Pages

1. **Faça push do código** para o repositório GitHub
2. **Vá em Settings > Pages**
3. **Selecione a branch `main`** (ou `master`)
4. **Selecione a pasta `/root`**
5. **Clique em Save**

A ferramenta estará disponível em: `https://brunosbardelatti.github.io/toolbox-testes/`

### Deploy em Outros Serviços

A ferramenta pode ser hospedada em qualquer serviço de hospedagem estática:
- **Netlify**: Arraste e solte a pasta
- **Vercel**: Conecte o repositório
- **GitHub Pages**: Como descrito acima
- **Qualquer servidor web**: Apenas sirva os arquivos estáticos

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Este é um projeto open source e estamos abertos a melhorias.

### Como Contribuir

1. **Fork o projeto**
2. **Crie uma branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit suas mudanças** (`git commit -m 'Adiciona MinhaFeature'`)
4. **Push para a branch** (`git push origin feature/MinhaFeature`)
5. **Abra um Pull Request**

### Diretrizes de Contribuição

- Mantenha o código em **português** (variáveis, funções, comentários)
- Siga o padrão de código existente
- Adicione comentários explicativos
- Teste suas alterações antes de enviar
- Documente novas funcionalidades

### Sugestões de Melhorias

- Novas ferramentas úteis para QA
- Melhorias de performance
- Correções de bugs
- Melhorias de UI/UX
- Traduções para outros idiomas
- Testes automatizados

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

### O que isso significa?

Você é livre para:
- ✅ Usar comercialmente
- ✅ Modificar
- ✅ Distribuir
- ✅ Usar privadamente

A única exigência é manter o aviso de copyright e licença nos arquivos.

## 👥 Autores e Créditos

### Versão Modificada
- **Bruno Sbardelatti** - Modificações e melhorias
  - LinkedIn: [https://www.linkedin.com/in/brunosbardelatti/](https://www.linkedin.com/in/brunosbardelatti/)
  - Repositório: [https://github.com/brunosbardelatti/toolbox-testes](https://github.com/brunosbardelatti/toolbox-testes)

### Projeto Original
- **Isabella Barbosa** - Engenheira de QA Sênior (Autora Original)
  - LinkedIn: [https://www.linkedin.com/in/isabellavieiraqa/](https://www.linkedin.com/in/isabellavieiraqa/)
  - Email: bellacandy5900g@gmail.com
  - Repositório Original: [https://github.com/Bella5900g/qa-toolbox](https://github.com/Bella5900g/qa-toolbox)

## 📞 Suporte

- **Repositório desta versão**: [https://github.com/brunosbardelatti/toolbox-testes](https://github.com/brunosbardelatti/toolbox-testes)
- **Repositório Original**: [https://github.com/Bella5900g/qa-toolbox](https://github.com/Bella5900g/qa-toolbox)
- **Issues**: [GitHub Issues](https://github.com/brunosbardelatti/toolbox-testes/issues)

## ⭐ Estrelas

Se este projeto foi útil para você, considere dar uma ⭐ no repositório!

---

**Versão modificada baseada no projeto original desenvolvido com ❤️ por [Isabella Barbosa](https://www.linkedin.com/in/isabellavieiraqa/) para a comunidade QA**

