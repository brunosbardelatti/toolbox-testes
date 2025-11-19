# 📋 PLANO DETALHADO: Aba Validador de XML Fiscal

## 🎯 Objetivo

Criar uma nova aba no QA-Toolbox para validação de XML de documentos fiscais brasileiros (NFe, NFCe, CTe, MDFe, NFSe, CFeSAT), utilizando as funções JavaScript já implementadas em `script.js` (linhas 1747-2299).

---

## 📊 Análise das Funções JavaScript

### Funções Principais Identificadas:

1. **`identificarTipoDocumento(xmlDoc)`**
   - Identifica automaticamente o tipo de documento fiscal
   - Retorna: `'NFe'`, `'NFCe'`, `'CTe'`, `'MDFe'`, `'NFSe'`, `'CFeSAT'` ou `'DESCONHECIDO'`

2. **`validarXMLFiscal(xmlString)`**
   - Função principal de validação
   - Retorna objeto com estrutura:
     ```javascript
     {
         valido: boolean,
         tipo: string,
         erros: array,
         avisos: array,
         dados: object
     }
     ```

3. **Validadores Específicos:**
   - `validarNFe(xmlDoc, result)` - NFe/NFCe
   - `validarCTe(xmlDoc, result)` - CT-e
   - `validarMDFe(xmlDoc, result)` - MDF-e
   - `validarNFSe(xmlDoc, result)` - NFS-e
   - `validarCFeSAT(xmlDoc, result)` - CF-e SAT

---

## 🏗️ ESTRUTURA HTML PROPOSTA

### STEP 1: Adicionar Aba na Navegação

**Localização:** `index.html` linha ~55 (após aba Regex, antes de cURL Tools)

**Código:**
```html
<li class="nav-item" role="presentation">
    <button class="nav-link" id="aba-xml-fiscal-tab" data-bs-toggle="tab" data-bs-target="#aba-xml-fiscal" type="button" role="tab" aria-controls="aba-xml-fiscal" aria-selected="false">Validador XML Fiscal</button>
</li>
```

**Ordem Final das Abas:**
1. Geradores de Dados
2. Gerador Pessoa Física
3. Gerador Pessoa Jurídica
4. Texto
5. Encoders/Decoders
6. Formatadores
7. Comparador
8. JWT & Hash
9. Regex
10. **Validador XML Fiscal** ⬅️ NOVA
11. cURL Tools

---

### STEP 2: Criar Estrutura do Tab-Pane

**Localização:** `index.html` após `</div>` da aba Regex (linha ~643)

**Estrutura Base:**
```html
<!-- Aba: Validador XML Fiscal -->
<div class="tab-pane fade" id="aba-xml-fiscal" role="tabpanel" aria-labelledby="aba-xml-fiscal-tab">
    <h3 class="mb-4">Validador de XML Fiscal</h3>
    
    <!-- Conteúdo será detalhado nos próximos steps -->
</div>
```

---

### STEP 3: Seção de Entrada (Input)

**Estrutura:**
- **Card** com header "📄 XML Fiscal"
- **Textarea** grande para colar XML
- **Placeholder** com exemplo de estrutura XML
- **Botões de ação** (Validar, Limpar)

**Código Proposto:**
```html
<div class="card mb-4">
    <div class="card-header bg-secondary text-white">
        <h5 class="mb-0">📄 XML Fiscal</h5>
    </div>
    <div class="card-body">
        <div class="mb-3">
            <label for="xmlFiscalInput" class="form-label fw-bold">Cole o XML do documento fiscal:</label>
            <textarea 
                class="form-control" 
                id="xmlFiscalInput" 
                rows="12" 
                placeholder='<?xml version="1.0" encoding="UTF-8"?>
<nfeProc>
    <NFe>
        <!-- Conteúdo do XML -->
    </NFe>
</nfeProc>'
                style="font-family: 'Courier New', monospace; font-size: 0.9rem;"></textarea>
            <small class="form-text text-muted">
                Suporta: NFe, NFCe, CT-e, MDF-e, NFS-e, CF-e SAT
            </small>
        </div>
        <div class="d-flex gap-2">
            <button type="button" class="btn btn-primary" id="btnValidarXML">
                ✅ Validar XML
            </button>
            <button type="button" class="btn btn-utility" id="btnLimparXML">
                🗑️ Limpar
            </button>
        </div>
    </div>
</div>
```

**IDs e Classes:**
- `id="xmlFiscalInput"` - Textarea de entrada
- `id="btnValidarXML"` - Botão primário (btn-primary)
- `id="btnLimparXML"` - Botão utilitário (btn-utility)

---

### STEP 4: Seção de Resultados

**Estrutura:**
- **Card** com header dinâmico (Status + Tipo)
- **Badge** de status (Válido/Inválido)
- **Seções colapsáveis** para:
  - Tipo de Documento
  - Erros (se houver)
  - Avisos (se houver)
  - Dados Extraídos (JSON formatado)

**Código Proposto:**
```html
<!-- Resultado da Validação -->
<div id="xmlFiscalResultado" class="d-none">
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center" id="xmlResultadoHeader">
            <h5 class="mb-0">📊 Resultado da Validação</h5>
            <span class="badge" id="xmlStatusBadge"></span>
        </div>
        <div class="card-body">
            <!-- Tipo de Documento -->
            <div class="mb-3">
                <label class="form-label fw-bold">Tipo de Documento:</label>
                <input type="text" class="form-control" id="xmlTipoDocumento" readonly>
            </div>

            <!-- Erros -->
            <div id="xmlErrosContainer" class="d-none mb-3">
                <label class="form-label fw-bold text-danger">❌ Erros Encontrados:</label>
                <div class="alert alert-danger" id="xmlErrosLista" role="alert">
                    <!-- Lista de erros será preenchida via JS -->
                </div>
            </div>

            <!-- Avisos -->
            <div id="xmlAvisosContainer" class="d-none mb-3">
                <label class="form-label fw-bold text-warning">⚠️ Avisos:</label>
                <div class="alert alert-warning" id="xmlAvisosLista" role="alert">
                    <!-- Lista de avisos será preenchida via JS -->
                </div>
            </div>

            <!-- Dados Extraídos -->
            <div class="mb-3">
                <label class="form-label fw-bold">📦 Dados Extraídos:</label>
                <textarea 
                    class="form-control" 
                    id="xmlDadosExtraidos" 
                    rows="15" 
                    readonly
                    style="font-family: 'Courier New', monospace; font-size: 0.85rem; background-color: rgba(17, 24, 39, 0.5);"></textarea>
            </div>

            <!-- Botão Copiar JSON -->
            <div class="d-flex gap-2">
                <button type="button" class="btn btn-secondary" id="btnCopiarXMLJson">
                    { } Copiar JSON
                </button>
            </div>
        </div>
    </div>
</div>
```

**IDs e Classes:**
- `id="xmlFiscalResultado"` - Container principal (inicialmente `d-none`)
- `id="xmlResultadoHeader"` - Header do card
- `id="xmlStatusBadge"` - Badge de status (Válido/Inválido)
- `id="xmlTipoDocumento"` - Input readonly com tipo identificado
- `id="xmlErrosContainer"` - Container de erros (mostra/oculta dinamicamente)
- `id="xmlErrosLista"` - Lista de erros (alert-danger)
- `id="xmlAvisosContainer"` - Container de avisos (mostra/oculta dinamicamente)
- `id="xmlAvisosLista"` - Lista de avisos (alert-warning)
- `id="xmlDadosExtraidos"` - Textarea com JSON formatado
- `id="btnCopiarXMLJson"` - Botão secundário para copiar JSON

---

### STEP 5: Estrutura Completa Consolidada

**HTML Completo da Aba:**
```html
<!-- Aba: Validador XML Fiscal -->
<div class="tab-pane fade" id="aba-xml-fiscal" role="tabpanel" aria-labelledby="aba-xml-fiscal-tab">
    <h3 class="mb-4">Validador de XML Fiscal</h3>
    
    <!-- Card: Entrada XML -->
    <div class="card mb-4">
        <div class="card-header bg-secondary text-white">
            <h5 class="mb-0">📄 XML Fiscal</h5>
        </div>
        <div class="card-body">
            <div class="mb-3">
                <label for="xmlFiscalInput" class="form-label fw-bold">Cole o XML do documento fiscal:</label>
                <textarea 
                    class="form-control" 
                    id="xmlFiscalInput" 
                    rows="12" 
                    placeholder='<?xml version="1.0" encoding="UTF-8"?>
<nfeProc>
    <NFe>
        <!-- Conteúdo do XML -->
    </NFe>
</nfeProc>'
                    style="font-family: 'Courier New', monospace; font-size: 0.9rem;"></textarea>
                <small class="form-text text-muted">
                    Suporta: NFe, NFCe, CT-e, MDF-e, NFS-e, CF-e SAT
                </small>
            </div>
            <div class="d-flex gap-2">
                <button type="button" class="btn btn-primary" id="btnValidarXML">
                    ✅ Validar XML
                </button>
                <button type="button" class="btn btn-utility" id="btnLimparXML">
                    🗑️ Limpar
                </button>
            </div>
        </div>
    </div>

    <!-- Card: Resultado da Validação -->
    <div id="xmlFiscalResultado" class="d-none">
        <div class="card mb-4">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">📊 Resultado da Validação</h5>
                <span class="badge" id="xmlStatusBadge"></span>
            </div>
            <div class="card-body">
                <!-- Tipo de Documento -->
                <div class="mb-3">
                    <label class="form-label fw-bold">Tipo de Documento:</label>
                    <input type="text" class="form-control" id="xmlTipoDocumento" readonly>
                </div>

                <!-- Erros -->
                <div id="xmlErrosContainer" class="d-none mb-3">
                    <label class="form-label fw-bold text-danger">❌ Erros Encontrados:</label>
                    <div class="alert alert-danger" id="xmlErrosLista" role="alert"></div>
                </div>

                <!-- Avisos -->
                <div id="xmlAvisosContainer" class="d-none mb-3">
                    <label class="form-label fw-bold text-warning">⚠️ Avisos:</label>
                    <div class="alert alert-warning" id="xmlAvisosLista" role="alert"></div>
                </div>

                <!-- Dados Extraídos -->
                <div class="mb-3">
                    <label class="form-label fw-bold">📦 Dados Extraídos:</label>
                    <textarea 
                        class="form-control" 
                        id="xmlDadosExtraidos" 
                        rows="15" 
                        readonly
                        style="font-family: 'Courier New', monospace; font-size: 0.85rem; background-color: rgba(17, 24, 39, 0.5);"></textarea>
                </div>

                <!-- Botão Copiar JSON -->
                <div class="d-flex gap-2">
                    <button type="button" class="btn btn-secondary" id="btnCopiarXMLJson">
                        { } Copiar JSON
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
```

---

## 🎨 Padrões Visuais a Seguir

### Classes Bootstrap:
- ✅ `card`, `card-header`, `card-body` - Estrutura de cards
- ✅ `form-label fw-bold` - Labels
- ✅ `form-control` - Inputs e textareas
- ✅ `btn btn-primary` - Botão principal (Validar)
- ✅ `btn btn-secondary` - Botão secundário (Copiar JSON)
- ✅ `btn btn-utility` - Botão utilitário (Limpar)
- ✅ `alert alert-danger` - Erros
- ✅ `alert alert-warning` - Avisos
- ✅ `badge` - Status badge
- ✅ `d-none` - Ocultar elementos inicialmente
- ✅ `d-flex gap-2` - Agrupamento de botões

### Ícones/Emojis:
- ✅ `📄` - XML Fiscal (header)
- ✅ `✅` - Validar XML
- ✅ `🗑️` - Limpar
- ✅ `📊` - Resultado
- ✅ `❌` - Erros
- ✅ `⚠️` - Avisos
- ✅ `📦` - Dados Extraídos
- ✅ `{ }` - Copiar JSON

### Estilos Customizados:
- ✅ `font-family: 'Courier New', monospace` - Textareas de código
- ✅ `font-size: 0.9rem` - Textarea de entrada
- ✅ `font-size: 0.85rem` - Textarea de saída
- ✅ `background-color: rgba(17, 24, 39, 0.5)` - Textarea readonly

---

## 🔗 Integração com JavaScript

### Event Listeners Necessários:

1. **`btnValidarXML` (click)**
   ```javascript
   - Obter valor de `xmlFiscalInput`
   - Chamar `validarXMLFiscal(xmlString)`
   - Processar resultado e atualizar UI
   ```

2. **`btnLimparXML` (click)**
   ```javascript
   - Limpar `xmlFiscalInput`
   - Ocultar `xmlFiscalResultado` (adicionar `d-none`)
   - Resetar todos os campos de resultado
   ```

3. **`btnCopiarXMLJson` (click)**
   ```javascript
   - Copiar conteúdo de `xmlDadosExtraidos`
   - Chamar `mostrarFeedbackCopiar(botao)`
   ```

### Função de Processamento de Resultado:

```javascript
function processarResultadoXML(resultado) {
    // Mostrar container de resultado
    document.getElementById('xmlFiscalResultado').classList.remove('d-none');
    
    // Atualizar badge de status
    const badge = document.getElementById('xmlStatusBadge');
    if (resultado.valido) {
        badge.className = 'badge bg-success';
        badge.textContent = '✓ Válido';
    } else {
        badge.className = 'badge bg-danger';
        badge.textContent = '✗ Inválido';
    }
    
    // Tipo de documento
    document.getElementById('xmlTipoDocumento').value = resultado.tipo || 'Não identificado';
    
    // Erros
    const errosContainer = document.getElementById('xmlErrosContainer');
    const errosLista = document.getElementById('xmlErrosLista');
    if (resultado.erros && resultado.erros.length > 0) {
        errosContainer.classList.remove('d-none');
        errosLista.innerHTML = '<ul class="mb-0">' + 
            resultado.erros.map(erro => `<li>${erro}</li>`).join('') + 
            '</ul>';
    } else {
        errosContainer.classList.add('d-none');
    }
    
    // Avisos
    const avisosContainer = document.getElementById('xmlAvisosContainer');
    const avisosLista = document.getElementById('xmlAvisosLista');
    if (resultado.avisos && resultado.avisos.length > 0) {
        avisosContainer.classList.remove('d-none');
        avisosLista.innerHTML = '<ul class="mb-0">' + 
            resultado.avisos.map(aviso => `<li>${aviso}</li>`).join('') + 
            '</ul>';
    } else {
        avisosContainer.classList.add('d-none');
    }
    
    // Dados extraídos (JSON formatado)
    const dadosJson = JSON.stringify(resultado.dados, null, 2);
    document.getElementById('xmlDadosExtraidos').value = dadosJson;
}
```

---

## 📝 Checklist de Implementação

### Fase 1: HTML Estrutural
- [ ] Adicionar item na navegação (após Regex, antes cURL)
- [ ] Criar `tab-pane` com `id="aba-xml-fiscal"`
- [ ] Adicionar título `<h3>Validador de XML Fiscal</h3>`
- [ ] Criar card de entrada com textarea
- [ ] Adicionar botões (Validar, Limpar)
- [ ] Criar card de resultado (inicialmente oculto)
- [ ] Adicionar campos de resultado (tipo, erros, avisos, dados)

### Fase 2: Estilização
- [ ] Aplicar classes Bootstrap consistentes
- [ ] Adicionar estilos inline para textareas (monospace)
- [ ] Verificar responsividade
- [ ] Testar cores e contrastes (tema escuro)

### Fase 3: Integração JavaScript
- [ ] Adicionar event listener `btnValidarXML`
- [ ] Adicionar event listener `btnLimparXML`
- [ ] Adicionar event listener `btnCopiarXMLJson`
- [ ] Criar função `processarResultadoXML()`
- [ ] Implementar tratamento de erros
- [ ] Testar com XMLs reais (NFe, CTe, etc.)

### Fase 4: Validação e Testes
- [ ] Testar com XML válido (NFe)
- [ ] Testar com XML inválido (malformado)
- [ ] Testar com XML desconhecido
- [ ] Testar botão Limpar
- [ ] Testar botão Copiar JSON
- [ ] Verificar acessibilidade (navegação por teclado)
- [ ] Testar responsividade (mobile, tablet, desktop)

---

## 🎯 Ordem de Implementação Recomendada

1. **STEP 1**: Adicionar aba na navegação
2. **STEP 2**: Criar estrutura base do tab-pane
3. **STEP 3**: Adicionar card de entrada (textarea + botões)
4. **STEP 4**: Adicionar card de resultado (estrutura completa)
5. **STEP 5**: Conectar JavaScript (event listeners)
6. **STEP 6**: Testar e ajustar

---

## 📌 Observações Importantes

1. **IDs Únicos**: Todos os IDs devem ser únicos e seguir o padrão `xml*`
2. **Classes Consistentes**: Seguir sistema de botões do projeto (btn-primary, btn-secondary, btn-utility)
3. **Acessibilidade**: Manter `role`, `aria-*` attributes
4. **Responsividade**: Testar em diferentes tamanhos de tela
5. **Feedback Visual**: Usar badges e alerts do Bootstrap
6. **Monospace Font**: Textareas de código devem usar fonte monoespaçada
7. **Tratamento de Erros**: Validar XML antes de chamar funções JavaScript

---

## ✅ Critérios de Aceite

- [ ] Aba aparece na navegação na posição correta
- [ ] Textarea aceita XML grande (scroll vertical)
- [ ] Botão Validar chama `validarXMLFiscal()`
- [ ] Resultado exibe tipo de documento identificado
- [ ] Erros são exibidos em lista vermelha
- [ ] Avisos são exibidos em lista amarela
- [ ] Dados extraídos são exibidos como JSON formatado
- [ ] Botão Limpar limpa tudo e oculta resultado
- [ ] Botão Copiar JSON copia dados formatados
- [ ] Visual consistente com resto do projeto
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Sem erros no console

---

**Status:** 📋 Plano Detalhado Completo - Pronto para Implementação

