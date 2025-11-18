// QA-Toolbox - Script Principal
// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // ABA 1: TEXTO - Contadores
    // ============================================
    const textInputCounters = document.getElementById('textInputCounters');
    const charCount = document.getElementById('charCount');
    const wordCount = document.getElementById('wordCount');
    const lineCount = document.getElementById('lineCount');
    const byteCount = document.getElementById('byteCount');

    function atualizarContadores() {
        const texto = textInputCounters.value;
        
        // Contagem de caracteres
        const caracteres = texto.length;
        charCount.textContent = `Caracteres: ${caracteres}`;
        
        // Contagem de palavras (remove espaços extras e divide por espaços)
        const palavras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;
        wordCount.textContent = `Palavras: ${palavras}`;
        
        // Contagem de linhas
        const linhas = texto === '' ? 0 : texto.split('\n').length;
        lineCount.textContent = `Linhas: ${linhas}`;
        
        // Contagem de bytes (usando TextEncoder para UTF-8)
        const encoder = new TextEncoder();
        const bytes = encoder.encode(texto).length;
        byteCount.textContent = `Bytes: ${bytes}`;
    }

    // Atualiza contadores em tempo real
    textInputCounters.addEventListener('input', atualizarContadores);

    // ============================================
    // ABA 1: TEXTO - Conversores de Case
    // ============================================
    const textInputCase = document.getElementById('textInputCase');
    const btnUppercase = document.getElementById('btnUppercase');
    const btnLowercase = document.getElementById('btnLowercase');
    const btnTitlecase = document.getElementById('btnTitlecase');
    const btnCopyText = document.getElementById('btnCopyText');
    const btnClearText = document.getElementById('btnClearText');

    // Converte para MAIÚSCULAS
    btnUppercase.addEventListener('click', function() {
        textInputCase.value = textInputCase.value.toUpperCase();
    });

    // Converte para minúsculas
    btnLowercase.addEventListener('click', function() {
        textInputCase.value = textInputCase.value.toLowerCase();
    });

    // Converte para Primeira Letra Maiúscula (Title Case)
    btnTitlecase.addEventListener('click', function() {
        const texto = textInputCase.value.toLowerCase();
        const textoFormatado = texto.replace(/\b\w/g, function(letra) {
            return letra.toUpperCase();
        });
        textInputCase.value = textoFormatado;
    });

    // Copiar texto
    btnCopyText.addEventListener('click', function() {
        textInputCase.select();
        document.execCommand('copy');
        
        // Feedback visual
        const textoOriginal = btnCopyText.textContent;
        btnCopyText.textContent = 'Copiado!';
        btnCopyText.classList.add('btn-success');
        btnCopyText.classList.remove('btn-secondary');
        
        setTimeout(function() {
            btnCopyText.textContent = textoOriginal;
            btnCopyText.classList.remove('btn-success');
            btnCopyText.classList.add('btn-secondary');
        }, 1500);
    });

    // Limpar texto
    btnClearText.addEventListener('click', function() {
        textInputCase.value = '';
    });

    // ============================================
    // ABA 2: ENCODERS/DECODERS - Base64
    // ============================================
    const base64Input = document.getElementById('base64Input');
    const base64Output = document.getElementById('base64Output');
    const btnBase64Encode = document.getElementById('btnBase64Encode');
    const btnBase64Decode = document.getElementById('btnBase64Decode');
    const btnBase64Swap = document.getElementById('btnBase64Swap');

    // Encode Base64
    btnBase64Encode.addEventListener('click', function() {
        try {
            const texto = base64Input.value;
            const codificado = btoa(unescape(encodeURIComponent(texto)));
            base64Output.value = codificado;
        } catch (erro) {
            alert('Erro ao codificar: ' + erro.message);
        }
    });

    // Decode Base64
    btnBase64Decode.addEventListener('click', function() {
        try {
            const codificado = base64Input.value.trim();
            const decodificado = decodeURIComponent(escape(atob(codificado)));
            base64Output.value = decodificado;
        } catch (erro) {
            alert('Erro ao decodificar. Verifique se o texto é um Base64 válido.');
        }
    });

    // Trocar (Swap) campos Base64
    btnBase64Swap.addEventListener('click', function() {
        const temp = base64Input.value;
        base64Input.value = base64Output.value;
        base64Output.value = temp;
    });

    // ============================================
    // ABA 2: ENCODERS/DECODERS - URL
    // ============================================
    const urlInput = document.getElementById('urlInput');
    const urlOutput = document.getElementById('urlOutput');
    const btnUrlEncode = document.getElementById('btnUrlEncode');
    const btnUrlDecode = document.getElementById('btnUrlDecode');

    // Encode URL
    btnUrlEncode.addEventListener('click', function() {
        try {
            const texto = urlInput.value;
            const codificado = encodeURIComponent(texto);
            urlOutput.value = codificado;
        } catch (erro) {
            alert('Erro ao codificar: ' + erro.message);
        }
    });

    // Decode URL
    btnUrlDecode.addEventListener('click', function() {
        try {
            const codificado = urlInput.value;
            const decodificado = decodeURIComponent(codificado);
            urlOutput.value = decodificado;
        } catch (erro) {
            alert('Erro ao decodificar. Verifique se o texto é uma URL codificada válida.');
        }
    });

    // ============================================
    // ABA 3: FORMATADORES - JSON
    // ============================================
    const jsonInput = document.getElementById('jsonInput');
    const btnJsonPrettify = document.getElementById('btnJsonPrettify');
    const btnJsonMinify = document.getElementById('btnJsonMinify');
    const btnJsonCopy = document.getElementById('btnJsonCopy');
    const btnJsonClear = document.getElementById('btnJsonClear');
    const jsonAlertContainer = document.getElementById('jsonAlertContainer');

    function mostrarAlertaJson(mensagem) {
        jsonAlertContainer.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                ${mensagem}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        
        // Remove o alerta após 5 segundos
        setTimeout(function() {
            const alerta = jsonAlertContainer.querySelector('.alert');
            if (alerta) {
                alerta.remove();
            }
        }, 5000);
    }

    // Prettify / Formatar JSON
    btnJsonPrettify.addEventListener('click', function() {
        try {
            const jsonTexto = jsonInput.value.trim();
            if (jsonTexto === '') {
                mostrarAlertaJson('Por favor, insira um JSON válido.');
                return;
            }
            
            const objetoJson = JSON.parse(jsonTexto);
            const jsonFormatado = JSON.stringify(objetoJson, null, 2);
            jsonInput.value = jsonFormatado;
            
            // Remove alertas anteriores se houver
            jsonAlertContainer.innerHTML = '';
        } catch (erro) {
            mostrarAlertaJson('JSON inválido! Verifique a sintaxe do JSON.');
        }
    });

    // Minify / Compactar JSON
    btnJsonMinify.addEventListener('click', function() {
        try {
            const jsonTexto = jsonInput.value.trim();
            if (jsonTexto === '') {
                mostrarAlertaJson('Por favor, insira um JSON válido.');
                return;
            }
            
            const objetoJson = JSON.parse(jsonTexto);
            const jsonCompactado = JSON.stringify(objetoJson);
            jsonInput.value = jsonCompactado;
            
            // Remove alertas anteriores se houver
            jsonAlertContainer.innerHTML = '';
        } catch (erro) {
            mostrarAlertaJson('JSON inválido! Verifique a sintaxe do JSON.');
        }
    });

    // Copiar JSON
    btnJsonCopy.addEventListener('click', function() {
        jsonInput.select();
        document.execCommand('copy');
        
        // Feedback visual
        const textoOriginal = btnJsonCopy.textContent;
        btnJsonCopy.textContent = 'Copiado!';
        btnJsonCopy.classList.add('btn-success');
        btnJsonCopy.classList.remove('btn-secondary');
        
        setTimeout(function() {
            btnJsonCopy.textContent = textoOriginal;
            btnJsonCopy.classList.remove('btn-success');
            btnJsonCopy.classList.add('btn-secondary');
        }, 1500);
    });

    // Limpar JSON
    btnJsonClear.addEventListener('click', function() {
        jsonInput.value = '';
        jsonAlertContainer.innerHTML = '';
    });

    // ============================================
    // ABA 4: GERADORES DE DADOS - CPF
    // ============================================
    const cpfOutput = document.getElementById('cpfOutput');
    const btnGenerateCpf = document.getElementById('btnGenerateCpf');
    const btnCopyCpf = document.getElementById('btnCopyCpf');

    // Função para calcular dígito verificador do CPF
    function calcularDigitoCPF(cpf, posicao) {
        let soma = 0;
        let peso = posicao + 1;
        
        for (let i = 0; i < posicao; i++) {
            soma += parseInt(cpf[i]) * peso;
            peso--;
        }
        
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }

    // Função para gerar CPF válido
    function generateCPF() {
        // Gera 9 dígitos aleatórios
        let cpf = '';
        for (let i = 0; i < 9; i++) {
            cpf += Math.floor(Math.random() * 10).toString();
        }
        
        // Calcula primeiro dígito verificador
        const digito1 = calcularDigitoCPF(cpf, 9);
        cpf += digito1.toString();
        
        // Calcula segundo dígito verificador
        const digito2 = calcularDigitoCPF(cpf, 10);
        cpf += digito2.toString();
        
        // Aplica máscara XXX.XXX.XXX-XX
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    // Gerar CPF
    btnGenerateCpf.addEventListener('click', function() {
        cpfOutput.value = generateCPF();
    });

    // Copiar CPF
    btnCopyCpf.addEventListener('click', function() {
        if (cpfOutput.value) {
            cpfOutput.select();
            document.execCommand('copy');
            
            // Feedback visual
            const textoOriginal = btnCopyCpf.textContent;
            btnCopyCpf.textContent = 'Copiado!';
            btnCopyCpf.classList.add('btn-success');
            btnCopyCpf.classList.remove('btn-outline-secondary');
            
            setTimeout(function() {
                btnCopyCpf.textContent = textoOriginal;
                btnCopyCpf.classList.remove('btn-success');
                btnCopyCpf.classList.add('btn-outline-secondary');
            }, 1500);
        }
    });

    // ============================================
    // ABA 4: GERADORES DE DADOS - CNPJ
    // ============================================
    const cnpjOutput = document.getElementById('cnpjOutput');
    const btnGenerateCnpj = document.getElementById('btnGenerateCnpj');
    const btnCopyCnpj = document.getElementById('btnCopyCnpj');

    // Função para calcular dígito verificador do CNPJ
    function calcularDigitoCNPJ(cnpj, posicao) {
        const pesos = posicao === 12 
            ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
            : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        
        let soma = 0;
        for (let i = 0; i < posicao; i++) {
            soma += parseInt(cnpj[i]) * pesos[i];
        }
        
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }

    // Função para gerar CNPJ válido
    function generateCNPJ() {
        // Gera 12 dígitos aleatórios
        let cnpj = '';
        for (let i = 0; i < 12; i++) {
            cnpj += Math.floor(Math.random() * 10).toString();
        }
        
        // Calcula primeiro dígito verificador
        const digito1 = calcularDigitoCNPJ(cnpj, 12);
        cnpj += digito1.toString();
        
        // Calcula segundo dígito verificador
        const digito2 = calcularDigitoCNPJ(cnpj, 13);
        cnpj += digito2.toString();
        
        // Aplica máscara XX.XXX.XXX/XXXX-XX
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    // Gerar CNPJ
    btnGenerateCnpj.addEventListener('click', function() {
        cnpjOutput.value = generateCNPJ();
    });

    // Copiar CNPJ
    btnCopyCnpj.addEventListener('click', function() {
        if (cnpjOutput.value) {
            cnpjOutput.select();
            document.execCommand('copy');
            
            // Feedback visual
            const textoOriginal = btnCopyCnpj.textContent;
            btnCopyCnpj.textContent = 'Copiado!';
            btnCopyCnpj.classList.add('btn-success');
            btnCopyCnpj.classList.remove('btn-outline-secondary');
            
            setTimeout(function() {
                btnCopyCnpj.textContent = textoOriginal;
                btnCopyCnpj.classList.remove('btn-success');
                btnCopyCnpj.classList.add('btn-outline-secondary');
            }, 1500);
        }
    });

    // ============================================
    // ABA 4: GERADORES DE DADOS EXPANDIDOS
    // ============================================
    
    // Gerador Email
    const emailOutput = document.getElementById('emailOutput');
    const btnGenerateEmail = document.getElementById('btnGenerateEmail');
    const btnCopyEmail = document.getElementById('btnCopyEmail');

    function generateEmail() {
        const nomes = ['usuario', 'teste', 'admin', 'cliente', 'vendedor', 'suporte', 'dev', 'qa'];
        const dominios = ['gmail.com', 'hotmail.com', 'yahoo.com', 'exemplo.com', 'teste.com.br', 'empresa.com'];
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const numero = Math.floor(Math.random() * 9999);
        const dominio = dominios[Math.floor(Math.random() * dominios.length)];
        return `${nome}${numero}@${dominio}`;
    }

    btnGenerateEmail.addEventListener('click', function() {
        emailOutput.value = generateEmail();
    });

    btnCopyEmail.addEventListener('click', function() {
        if (emailOutput.value) {
            emailOutput.select();
            document.execCommand('copy');
            mostrarFeedbackCopiar(btnCopyEmail);
        }
    });

    // Gerador Telefone
    const telefoneOutput = document.getElementById('telefoneOutput');
    const btnGenerateTelefone = document.getElementById('btnGenerateTelefone');
    const btnCopyTelefone = document.getElementById('btnCopyTelefone');

    function generateTelefone() {
        const ddd = Math.floor(Math.random() * 90) + 10; // DDD entre 10 e 99
        const numero = Math.floor(Math.random() * 90000000) + 10000000; // 8 dígitos
        return `(${ddd}) ${numero.toString().substring(0, 5)}-${numero.toString().substring(5)}`;
    }

    btnGenerateTelefone.addEventListener('click', function() {
        telefoneOutput.value = generateTelefone();
    });

    btnCopyTelefone.addEventListener('click', function() {
        if (telefoneOutput.value) {
            telefoneOutput.select();
            document.execCommand('copy');
            mostrarFeedbackCopiar(btnCopyTelefone);
        }
    });

    // Gerador Data/Hora
    const dataOutput = document.getElementById('dataOutput');
    const btnGenerateDataBR = document.getElementById('btnGenerateDataBR');
    const btnGenerateDataISO = document.getElementById('btnGenerateDataISO');
    const btnGenerateTimestamp = document.getElementById('btnGenerateTimestamp');
    const btnCopyData = document.getElementById('btnCopyData');

    btnGenerateDataBR.addEventListener('click', function() {
        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        const hora = String(data.getHours()).padStart(2, '0');
        const minuto = String(data.getMinutes()).padStart(2, '0');
        dataOutput.value = `${dia}/${mes}/${ano} ${hora}:${minuto}`;
    });

    btnGenerateDataISO.addEventListener('click', function() {
        const data = new Date();
        dataOutput.value = data.toISOString();
    });

    btnGenerateTimestamp.addEventListener('click', function() {
        dataOutput.value = Math.floor(Date.now() / 1000).toString();
    });

    btnCopyData.addEventListener('click', function() {
        if (dataOutput.value) {
            dataOutput.select();
            document.execCommand('copy');
            mostrarFeedbackCopiar(btnCopyData);
        }
    });

    // Gerador UUID
    const uuidOutput = document.getElementById('uuidOutput');
    const btnGenerateUuid = document.getElementById('btnGenerateUuid');
    const btnCopyUuid = document.getElementById('btnCopyUuid');

    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    btnGenerateUuid.addEventListener('click', function() {
        uuidOutput.value = generateUUID();
    });

    btnCopyUuid.addEventListener('click', function() {
        if (uuidOutput.value) {
            uuidOutput.select();
            document.execCommand('copy');
            mostrarFeedbackCopiar(btnCopyUuid);
        }
    });

    // Gerador CEP
    const cepOutput = document.getElementById('cepOutput');
    const btnGenerateCep = document.getElementById('btnGenerateCep');
    const btnCopyCep = document.getElementById('btnCopyCep');

    function generateCEP() {
        const cep = Math.floor(Math.random() * 90000000) + 10000000; // 8 dígitos
        return cep.toString().replace(/(\d{5})(\d{3})/, '$1-$2');
    }

    btnGenerateCep.addEventListener('click', function() {
        cepOutput.value = generateCEP();
    });

    btnCopyCep.addEventListener('click', function() {
        if (cepOutput.value) {
            cepOutput.select();
            document.execCommand('copy');
            mostrarFeedbackCopiar(btnCopyCep);
        }
    });

    // Gerador Nome Completo
    const nomeOutput = document.getElementById('nomeOutput');
    const btnGenerateNome = document.getElementById('btnGenerateNome');
    const btnCopyNome = document.getElementById('btnCopyNome');

    const primeirosNomes = ['Maria', 'João', 'Ana', 'Pedro', 'Julia', 'Carlos', 'Fernanda', 'Ricardo', 'Patricia', 'Lucas'];
    const sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Pereira', 'Costa', 'Rodrigues', 'Almeida', 'Nascimento', 'Lima'];

    function generateNome() {
        const primeiroNome = primeirosNomes[Math.floor(Math.random() * primeirosNomes.length)];
        const sobrenome1 = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
        const sobrenome2 = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
        return `${primeiroNome} ${sobrenome1} ${sobrenome2}`;
    }

    btnGenerateNome.addEventListener('click', function() {
        nomeOutput.value = generateNome();
    });

    btnCopyNome.addEventListener('click', function() {
        if (nomeOutput.value) {
            nomeOutput.select();
            document.execCommand('copy');
            mostrarFeedbackCopiar(btnCopyNome);
        }
    });

    // Função auxiliar para feedback de copiar
    function mostrarFeedbackCopiar(botao) {
        const textoOriginal = botao.textContent;
        botao.textContent = 'Copiado!';
        botao.classList.add('btn-success');
        botao.classList.remove('btn-outline-secondary');
        
        setTimeout(function() {
            botao.textContent = textoOriginal;
            botao.classList.remove('btn-success');
            botao.classList.add('btn-outline-secondary');
        }, 1500);
    }

    // ============================================  
// ABA 5: GERADORES COMPLETOS  
// ============================================
  
// ============================================  
// DADOS BASE PARA GERADORES  
// ============================================  
const dadosBase = {  
    nomesMasculinos: ['João', 'Pedro', 'Lucas', 'Gabriel', 'Rafael', 'Felipe', 'Bruno', 'Gustavo', 'Rodrigo', 'Thiago',   
                      'Matheus', 'Leonardo', 'Daniel', 'André', 'Fernando', 'Marcelo', 'Ricardo', 'Paulo', 'Carlos', 'Diego'],  
    nomesFemininos: ['Maria', 'Ana', 'Julia', 'Beatriz', 'Larissa', 'Fernanda', 'Patricia', 'Camila', 'Amanda', 'Juliana',  
                     'Mariana', 'Gabriela', 'Carolina', 'Bruna', 'Leticia', 'Vanessa', 'Priscila', 'Renata', 'Aline', 'Bianca'],  
    sobrenomes: ['Silva', 'Santos', 'Oliveira', 'Souza', 'Pereira', 'Costa', 'Rodrigues', 'Almeida', 'Nascimento', 'Lima',  
                 'Araújo', 'Fernandes', 'Carvalho', 'Gomes', 'Martins', 'Rocha', 'Ribeiro', 'Alves', 'Monteiro', 'Mendes',  
                 'Barros', 'Freitas', 'Barbosa', 'Pinto', 'Moreira', 'Cavalcanti', 'Dias', 'Castro', 'Campos', 'Cardoso'],  
    logradouros: ['Rua das Flores', 'Avenida Paulista', 'Rua Augusta', 'Alameda Santos', 'Rua Consolação',   
                  'Avenida Brasil', 'Rua XV de Novembro', 'Praça da Sé', 'Rua Direita', 'Avenida Independência',  
                  'Rua Sete de Setembro', 'Travessa do Comércio', 'Rua Barão de Itapetininga', 'Avenida Ipiranga',  
                  'Rua Oscar Freire', 'Avenida Rebouças', 'Rua Haddock Lobo', 'Alameda Jaú', 'Rua Estados Unidos'],  
    bairros: ['Centro', 'Jardim Paulista', 'Vila Mariana', 'Mooca', 'Pinheiros', 'Brooklin', 'Santana', 'Ipiranga',  
              'Tatuapé', 'Vila Prudente', 'Lapa', 'Butantã', 'Saúde', 'Perdizes', 'Bela Vista', 'Liberdade'],  
    cidades: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Curitiba', 'Porto Alegre', 'Salvador',  
              'Fortaleza', 'Recife', 'Manaus', 'Belém', 'Goiânia', 'Campinas', 'São Luís', 'Florianópolis'],  
    estados: {  
        'São Paulo': 'SP', 'Rio de Janeiro': 'RJ', 'Belo Horizonte': 'MG', 'Brasília': 'DF', 'Curitiba': 'PR',  
        'Porto Alegre': 'RS', 'Salvador': 'BA', 'Fortaleza': 'CE', 'Recife': 'PE', 'Manaus': 'AM',  
        'Belém': 'PA', 'Goiânia': 'GO', 'Campinas': 'SP', 'São Luís': 'MA', 'Florianópolis': 'SC'  
    },  
    complementos: ['Apto 101', 'Apto 205', 'Casa', 'Sala 301', 'Bloco A', 'Bloco B', 'Fundos', 'Sobrado', 'Cobertura', ''],  
    tiposEmpresa: ['Comércio', 'Serviços', 'Indústria', 'Tecnologia', 'Consultoria', 'Logística', 'Alimentação', 'Saúde'],  
    sufixosEmpresa: ['Ltda', 'EIRELI', 'S.A.', 'ME', 'EPP'],  
    portes: ['MEI', 'Microempresa', 'Pequeno Porte', 'Médio Porte', 'Grande Porte'],  
    cnaes: [  
        '4711-3/02 - Comércio varejista',  
        '6201-5/00 - Desenvolvimento de software',  
        '7020-4/00 - Consultoria empresarial',  
        '5611-2/01 - Restaurantes e similares',  
        '8630-5/03 - Atividade médica ambulatorial',  
        '4120-4/00 - Construção de edifícios',  
        '5310-5/01 - Atividades de Correio',  
        '8599-6/04 - Treinamento em desenvolvimento profissional'  
    ]  
};
  
// ============================================  
// FUNÇÕES AUXILIARES REUTILIZÁVEIS  
// ============================================
  
function randomItem(array) {  
    return array[Math.floor(Math.random() * array.length)];  
}
  
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}
  
function gerarDataAleatoria(idadeMin, idadeMax) {  
    const hoje = new Date();  
    const anoNascimento = hoje.getFullYear() - randomNumber(idadeMin, idadeMax);  
    const mes = String(randomNumber(1, 12)).padStart(2, '0');  
    const dia = String(randomNumber(1, 28)).padStart(2, '0');  
    return `${dia}/${mes}/${anoNascimento}`;  
}
  
function gerarDataAberturaEmpresa() {  
    const anoAbertura = randomNumber(1990, 2023);  
    const mes = String(randomNumber(1, 12)).padStart(2, '0');  
    const dia = String(randomNumber(1, 28)).padStart(2, '0');  
    return `${dia}/${mes}/${anoAbertura}`;  
}
  
function gerarRG() {  
    const numero = randomNumber(10000000, 99999999);  
    const digito = randomNumber(0, 9);  
    return `${numero.toString().substring(0, 2)}.${numero.toString().substring(2, 5)}.${numero.toString().substring(5, 8)}-${digito}`;  
}
  
function gerarInscricaoEstadual() {  
    let ie = '';  
    for (let i = 0; i < 9; i++) {  
        ie += randomNumber(0, 9);  
    }  
    return ie.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');  
}
  
function gerarTelefoneFixo() {  
    const ddd = randomNumber(11, 99);  
    const prefixo = randomNumber(2000, 5999);  
    const sufixo = randomNumber(1000, 9999);  
    return `(${ddd}) ${prefixo}-${sufixo}`;  
}
  
function gerarCelular() {  
    const ddd = randomNumber(11, 99);  
    const prefixo = randomNumber(90000, 99999);  
    const sufixo = randomNumber(1000, 9999);  
    return `(${ddd}) ${prefixo}-${sufixo}`;  
}
  
function gerarEmailPF(nome) {  
    const nomeFormatado = nome.toLowerCase()  
        .normalize('NFD')  
        .replace(/[\u0300-\u036f]/g, '')  
        .replace(/\s+/g, '.');  
    const dominios = ['gmail.com', 'hotmail.com', 'yahoo.com.br', 'outlook.com', 'email.com'];  
    return `${nomeFormatado}${randomNumber(1, 999)}@${randomItem(dominios)}`;  
}
  
function gerarEmailPJ(nomeFantasia) {  
    const nomeFormatado = nomeFantasia.toLowerCase()  
        .normalize('NFD')  
        .replace(/[\u0300-\u036f]/g, '')  
        .replace(/\s+/g, '')  
        .replace(/[^a-z0-9]/g, '');  
    const dominios = ['contato', 'comercial', 'vendas', 'atendimento', 'sac'];  
    return `${randomItem(dominios)}@${nomeFormatado}.com.br`;  
}
  
// Reutilizando funções existentes  
function calcularDigitoCPF(cpf, posicao) {  
    let soma = 0;  
    let peso = posicao + 1;
      
    for (let i = 0; i < posicao; i++) {  
        soma += parseInt(cpf[i]) * peso;  
        peso--;  
    }
      
    const resto = soma % 11;  
    return resto < 2 ? 0 : 11 - resto;  
}
  
function gerarCPFValido() {  
    let cpf = '';  
    for (let i = 0; i < 9; i++) {  
        cpf += Math.floor(Math.random() * 10).toString();  
    }
      
    const digito1 = calcularDigitoCPF(cpf, 9);  
    cpf += digito1.toString();
      
    const digito2 = calcularDigitoCPF(cpf, 10);  
    cpf += digito2.toString();
      
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');  
}
  
function calcularDigitoCNPJ(cnpj, posicao) {  
    const pesos = posicao === 12   
        ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]  
        : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      
    let soma = 0;  
    for (let i = 0; i < posicao; i++) {  
        soma += parseInt(cnpj[i]) * pesos[i];  
    }
      
    const resto = soma % 11;  
    return resto < 2 ? 0 : 11 - resto;  
}
  
function gerarCNPJValido() {  
    let cnpj = '';  
    for (let i = 0; i < 12; i++) {  
        cnpj += Math.floor(Math.random() * 10).toString();  
    }
      
    const digito1 = calcularDigitoCNPJ(cnpj, 12);  
    cnpj += digito1.toString();
      
    const digito2 = calcularDigitoCNPJ(cnpj, 13);  
    cnpj += digito2.toString();
      
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');  
}
  
function gerarCEPValido() {  
    const cep = randomNumber(10000000, 99999999);  
    return cep.toString().replace(/(\d{5})(\d{3})/, '$1-$2');  
}
  
// ============================================  
// GERADOR DE PESSOA FÍSICA COMPLETA  
// ============================================
  
function gerarPessoaFisica() {  
    const genero = Math.random() > 0.5 ? 'M' : 'F';  
    const primeiroNome = genero === 'M'   
        ? randomItem(dadosBase.nomesMasculinos)   
        : randomItem(dadosBase.nomesFemininos);  
    const sobrenome1 = randomItem(dadosBase.sobrenomes);  
    const sobrenome2 = randomItem(dadosBase.sobrenomes);  
    const nomeCompleto = `${primeiroNome} ${sobrenome1} ${sobrenome2}`;
      
    const nomeMae = `${randomItem(dadosBase.nomesFemininos)} ${randomItem(dadosBase.sobrenomes)} ${randomItem(dadosBase.sobrenomes)}`;  
    const nomePai = `${randomItem(dadosBase.nomesMasculinos)} ${randomItem(dadosBase.sobrenomes)} ${randomItem(dadosBase.sobrenomes)}`;
      
    const cidade = randomItem(dadosBase.cidades);  
    const uf = dadosBase.estados[cidade];
      
    return {  
        nome: nomeCompleto,  
        cpf: gerarCPFValido(),  
        rg: gerarRG(),  
        dataNascimento: gerarDataAleatoria(18, 80),  
        email: gerarEmailPF(nomeCompleto),  
        telefone: gerarTelefoneFixo(),  
        celular: gerarCelular(),  
        cep: gerarCEPValido(),  
        endereco: randomItem(dadosBase.logradouros),  
        numero: randomNumber(1, 9999).toString(),  
        complemento: randomItem(dadosBase.complementos),  
        bairro: randomItem(dadosBase.bairros),  
        cidade: cidade,  
        uf: uf,  
        nomeMae: nomeMae,  
        nomePai: nomePai  
    };  
}
  
// ============================================  
// GERADOR DE PESSOA JURÍDICA COMPLETA  
// ============================================
  
function gerarPessoaJuridica() {  
    const tipoEmpresa = randomItem(dadosBase.tiposEmpresa);  
    const sufixo = randomItem(dadosBase.sufixosEmpresa);  
    const nomeBase = randomItem(dadosBase.sobrenomes);  
    const razaoSocial = `${nomeBase} ${tipoEmpresa} ${sufixo}`;  
    const nomeFantasia = `${nomeBase} ${tipoEmpresa}`;
      
    const responsavel = `${randomItem(dadosBase.nomesMasculinos)} ${randomItem(dadosBase.sobrenomes)}`;  
    const cidade = randomItem(dadosBase.cidades);  
    const uf = dadosBase.estados[cidade];
      
    return {  
        razaoSocial: razaoSocial,  
        nomeFantasia: nomeFantasia,  
        cnpj: gerarCNPJValido(),  
        inscricaoEstadual: gerarInscricaoEstadual(),  
        dataAbertura: gerarDataAberturaEmpresa(),  
        porte: randomItem(dadosBase.portes),  
        email: gerarEmailPJ(nomeFantasia),  
        telefone: gerarTelefoneFixo(),  
        cep: gerarCEPValido(),  
        cnae: randomItem(dadosBase.cnaes),  
        endereco: randomItem(dadosBase.logradouros),  
        numero: randomNumber(1, 9999).toString(),  
        complemento: randomItem(['Sala 101', 'Sala 205', 'Galpão 1', 'Loja A', 'Andar 3', '']),  
        bairro: randomItem(dadosBase.bairros),  
        cidade: cidade,  
        uf: uf,  
        responsavel: responsavel,  
        cpfResponsavel: gerarCPFValido()  
    };  
}
  
// ============================================  
// EVENT LISTENERS - PESSOA FÍSICA  
// ============================================
  
document.getElementById('btnGerarPF').addEventListener('click', function() {  
    const pf = gerarPessoaFisica();
      
    document.getElementById('pfNome').value = pf.nome;  
    document.getElementById('pfCpf').value = pf.cpf;  
    document.getElementById('pfRg').value = pf.rg;  
    document.getElementById('pfDataNascimento').value = pf.dataNascimento;  
    document.getElementById('pfEmail').value = pf.email;  
    document.getElementById('pfTelefone').value = pf.telefone;  
    document.getElementById('pfCelular').value = pf.celular;  
    document.getElementById('pfCep').value = pf.cep;  
    document.getElementById('pfEndereco').value = pf.endereco;  
    document.getElementById('pfNumero').value = pf.numero;  
    document.getElementById('pfComplemento').value = pf.complemento;  
    document.getElementById('pfBairro').value = pf.bairro;  
    document.getElementById('pfCidade').value = pf.cidade;  
    document.getElementById('pfUf').value = pf.uf;  
    document.getElementById('pfNomeMae').value = pf.nomeMae;  
    document.getElementById('pfNomePai').value = pf.nomePai;  
});
  
document.getElementById('btnCopiarPF').addEventListener('click', function() {  
    const pf = {  
        'Nome Completo': document.getElementById('pfNome').value,  
        'CPF': document.getElementById('pfCpf').value,  
        'RG': document.getElementById('pfRg').value,  
        'Data de Nascimento': document.getElementById('pfDataNascimento').value,  
        'Email': document.getElementById('pfEmail').value,  
        'Telefone': document.getElementById('pfTelefone').value,  
        'Celular': document.getElementById('pfCelular').value,  
        'CEP': document.getElementById('pfCep').value,  
        'Endereço': document.getElementById('pfEndereco').value,  
        'Número': document.getElementById('pfNumero').value,  
        'Complemento': document.getElementById('pfComplemento').value,  
        'Bairro': document.getElementById('pfBairro').value,  
        'Cidade': document.getElementById('pfCidade').value,  
        'UF': document.getElementById('pfUf').value,  
        'Nome da Mãe': document.getElementById('pfNomeMae').value,  
        'Nome do Pai': document.getElementById('pfNomePai').value  
    };
      
    let texto = '=== PESSOA FÍSICA ===\n\n';  
    for (const [chave, valor] of Object.entries(pf)) {  
        if (valor) texto += `${chave}: ${valor}\n`;  
    }
      
    navigator.clipboard.writeText(texto).then(() => {  
        mostrarFeedbackBotao(document.getElementById('btnCopiarPF'), 'Copiado!');  
    });  
});
  
document.getElementById('btnCopiarPFJson').addEventListener('click', function() {  
    const pf = {  
        nome: document.getElementById('pfNome').value,  
        cpf: document.getElementById('pfCpf').value,  
        rg: document.getElementById('pfRg').value,  
        dataNascimento: document.getElementById('pfDataNascimento').value,  
        email: document.getElementById('pfEmail').value,  
        telefone: document.getElementById('pfTelefone').value,  
        celular: document.getElementById('pfCelular').value,  
        endereco: {  
            cep: document.getElementById('pfCep').value,  
            logradouro: document.getElementById('pfEndereco').value,  
            numero: document.getElementById('pfNumero').value,  
            complemento: document.getElementById('pfComplemento').value,  
            bairro: document.getElementById('pfBairro').value,  
            cidade: document.getElementById('pfCidade').value,  
            uf: document.getElementById('pfUf').value  
        },  
        filiacao: {  
            mae: document.getElementById('pfNomeMae').value,  
            pai: document.getElementById('pfNomePai').value  
        }  
    };
      
    const json = JSON.stringify(pf, null, 2);  
    navigator.clipboard.writeText(json).then(() => {  
        mostrarFeedbackBotao(document.getElementById('btnCopiarPFJson'), 'JSON Copiado!');  
    });  
});
  
// ============================================  
// EVENT LISTENERS - PESSOA JURÍDICA  
// ============================================
  
document.getElementById('btnGerarPJ').addEventListener('click', function() {  
    const pj = gerarPessoaJuridica();
      
    document.getElementById('pjRazaoSocial').value = pj.razaoSocial;  
    document.getElementById('pjNomeFantasia').value = pj.nomeFantasia;  
    document.getElementById('pjCnpj').value = pj.cnpj;  
    document.getElementById('pjInscricaoEstadual').value = pj.inscricaoEstadual;  
    document.getElementById('pjDataAbertura').value = pj.dataAbertura;  
    document.getElementById('pjPorte').value = pj.porte;  
    document.getElementById('pjEmail').value = pj.email;  
    document.getElementById('pjTelefone').value = pj.telefone;  
    document.getElementById('pjCep').value = pj.cep;  
    document.getElementById('pjCnae').value = pj.cnae;  
    document.getElementById('pjEndereco').value = pj.endereco;  
    document.getElementById('pjNumero').value = pj.numero;  
    document.getElementById('pjComplemento').value = pj.complemento;  
    document.getElementById('pjBairro').value = pj.bairro;  
    document.getElementById('pjCidade').value = pj.cidade;  
    document.getElementById('pjUf').value = pj.uf;  
    document.getElementById('pjResponsavel').value = pj.responsavel;  
    document.getElementById('pjCpfResponsavel').value = pj.cpfResponsavel;  
});
  
document.getElementById('btnCopiarPJ').addEventListener('click', function() {  
    const pj = {  
        'Razão Social': document.getElementById('pjRazaoSocial').value,  
        'Nome Fantasia': document.getElementById('pjNomeFantasia').value,  
        'CNPJ': document.getElementById('pjCnpj').value,  
        'Inscrição Estadual': document.getElementById('pjInscricaoEstadual').value,  
        'Data de Abertura': document.getElementById('pjDataAbertura').value,  
        'Porte': document.getElementById('pjPorte').value,  
        'Email': document.getElementById('pjEmail').value,  
        'Telefone': document.getElementById('pjTelefone').value,  
        'CEP': document.getElementById('pjCep').value,  
        'CNAE': document.getElementById('pjCnae').value,  
        'Endereço': document.getElementById('pjEndereco').value,  
        'Número': document.getElementById('pjNumero').value,  
        'Complemento': document.getElementById('pjComplemento').value,  
        'Bairro': document.getElementById('pjBairro').value,  
        'Cidade': document.getElementById('pjCidade').value,  
        'UF': document.getElementById('pjUf').value,  
        'Responsável Legal': document.getElementById('pjResponsavel').value,  
        'CPF do Responsável': document.getElementById('pjCpfResponsavel').value  
    };
      
    let texto = '=== PESSOA JURÍDICA ===\n\n';  
    for (const [chave, valor] of Object.entries(pj)) {  
        if (valor) texto += `${chave}: ${valor}\n`;  
    }
      
    navigator.clipboard.writeText(texto).then(() => {  
        mostrarFeedbackBotao(document.getElementById('btnCopiarPJ'), 'Copiado!');  
    });  
});
  
document.getElementById('btnCopiarPJJson').addEventListener('click', function() {  
    const pj = {  
        razaoSocial: document.getElementById('pjRazaoSocial').value,  
        nomeFantasia: document.getElementById('pjNomeFantasia').value,  
        cnpj: document.getElementById('pjCnpj').value,  
        inscricaoEstadual: document.getElementById('pjInscricaoEstadual').value,  
        dataAbertura: document.getElementById('pjDataAbertura').value,  
        porte: document.getElementById('pjPorte').value,  
        email: document.getElementById('pjEmail').value,  
        telefone: document.getElementById('pjTelefone').value,  
        cnae: document.getElementById('pjCnae').value,  
        endereco: {  
            cep: document.getElementById('pjCep').value,  
            logradouro: document.getElementById('pjEndereco').value,  
            numero: document.getElementById('pjNumero').value,  
            complemento: document.getElementById('pjComplemento').value,  
            bairro: document.getElementById('pjBairro').value,  
            cidade: document.getElementById('pjCidade').value,  
            uf: document.getElementById('pjUf').value  
        },  
        responsavel: {  
            nome: document.getElementById('pjResponsavel').value,  
            cpf: document.getElementById('pjCpfResponsavel').value  
        }  
    };
      
    const json = JSON.stringify(pj, null, 2);  
    navigator.clipboard.writeText(json).then(() => {  
        mostrarFeedbackBotao(document.getElementById('btnCopiarPJJson'), 'JSON Copiado!');  
    });  
});
  
// ============================================  
// FUNÇÃO AUXILIAR PARA FEEDBACK  
// ============================================
  
function mostrarFeedbackBotao(botao, mensagem) {  
    const textoOriginal = botao.innerHTML;  
    const classesOriginais = botao.className;
      
    botao.innerHTML = mensagem;  
    botao.className = 'btn btn-success';
      
    setTimeout(function() {  
        botao.innerHTML = textoOriginal;  
        botao.className = classesOriginais;  
    }, 1500);  
}  

    // ============================================
    // ABA 6: COMPARADOR DE TEXTOS/JSON
    // ============================================
    const comparadorTexto1 = document.getElementById('comparadorTexto1');
    const comparadorTexto2 = document.getElementById('comparadorTexto2');
    const btnComparar = document.getElementById('btnComparar');
    const btnLimparComparador = document.getElementById('btnLimparComparador');
    const comparadorResultado = document.getElementById('comparadorResultado');

    function compararTextos(texto1, texto2) {
        const linhas1 = texto1.split('\n');
        const linhas2 = texto2.split('\n');
        const maxLinhas = Math.max(linhas1.length, linhas2.length);
        
        let html = '<div class="card"><div class="card-body"><h5 class="card-title">Resultado da Comparação</h5>';
        html += '<div class="table-responsive"><table class="table table-sm table-bordered">';
        html += '<thead><tr><th style="width: 5%">Linha</th><th style="width: 47.5%">Texto 1</th><th style="width: 47.5%">Texto 2</th></tr></thead><tbody>';
        
        let diferencas = 0;
        for (let i = 0; i < maxLinhas; i++) {
            const linha1 = linhas1[i] || '';
            const linha2 = linhas2[i] || '';
            const saoIguais = linha1 === linha2;
            
            if (!saoIguais) {
                diferencas++;
            }
            
            const classeLinha = saoIguais ? '' : 'table-warning';
            html += `<tr class="${classeLinha}">`;
            html += `<td>${i + 1}</td>`;
            html += `<td><code class="${saoIguais ? '' : 'text-danger'}">${escapeHtml(linha1)}</code></td>`;
            html += `<td><code class="${saoIguais ? '' : 'text-danger'}">${escapeHtml(linha2)}</code></td>`;
            html += '</tr>';
        }
        
        html += '</tbody></table></div>';
        
        if (diferencas === 0) {
            html += '<div class="alert alert-success mt-3">✓ Os textos são idênticos!</div>';
        } else {
            html += `<div class="alert alert-warning mt-3">⚠ Foram encontradas ${diferencas} linha(s) diferente(s).</div>`;
        }
        
        html += '</div></div>';
        return html;
    }

    function escapeHtml(texto) {
        const div = document.createElement('div');
        div.textContent = texto;
        return div.innerHTML;
    }

    btnComparar.addEventListener('click', function() {
        const texto1 = comparadorTexto1.value;
        const texto2 = comparadorTexto2.value;
        
        if (!texto1 && !texto2) {
            comparadorResultado.innerHTML = '<div class="alert alert-info">Por favor, insira textos para comparar.</div>';
            return;
        }
        
        comparadorResultado.innerHTML = compararTextos(texto1, texto2);
    });

    btnLimparComparador.addEventListener('click', function() {
        comparadorTexto1.value = '';
        comparadorTexto2.value = '';
        comparadorResultado.innerHTML = '';
    });

    // ============================================
    // ABA 7: JWT DECODER
    // ============================================
    const jwtInput = document.getElementById('jwtInput');
    const btnDecodificarJwt = document.getElementById('btnDecodificarJwt');
    const jwtResultado = document.getElementById('jwtResultado');

    function base64UrlDecode(str) {
        let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        const pad = base64.length % 4;
        if (pad) {
            base64 += new Array(5 - pad).join('=');
        }
        try {
            return decodeURIComponent(escape(atob(base64)));
        } catch (e) {
            return null;
        }
    }

    btnDecodificarJwt.addEventListener('click', function() {
        const token = jwtInput.value.trim();
        
        if (!token) {
            jwtResultado.innerHTML = '<div class="alert alert-warning">Por favor, insira um token JWT.</div>';
            return;
        }
        
        const partes = token.split('.');
        if (partes.length !== 3) {
            jwtResultado.innerHTML = '<div class="alert alert-danger">Token JWT inválido. Um JWT deve ter 3 partes separadas por ponto.</div>';
            return;
        }
        
        try {
            const header = base64UrlDecode(partes[0]);
            const payload = base64UrlDecode(partes[1]);
            const signature = partes[2];
            
            if (!header || !payload) {
                jwtResultado.innerHTML = '<div class="alert alert-danger">Erro ao decodificar o token JWT.</div>';
                return;
            }
            
            let html = '<div class="card"><div class="card-body">';
            html += '<h5 class="card-title">Token JWT Decodificado</h5>';
            
            // Header
            html += '<div class="mb-3"><h6>Header:</h6>';
            html += '<pre class="bg-light p-3 rounded"><code>' + escapeHtml(JSON.stringify(JSON.parse(header), null, 2)) + '</code></pre></div>';
            
            // Payload
            html += '<div class="mb-3"><h6>Payload:</h6>';
            const payloadObj = JSON.parse(payload);
            html += '<pre class="bg-light p-3 rounded"><code>' + escapeHtml(JSON.stringify(payloadObj, null, 2)) + '</code></pre></div>';
            
            // Verificar expiração
            if (payloadObj.exp) {
                const expDate = new Date(payloadObj.exp * 1000);
                const agora = new Date();
                const expirado = agora > expDate;
                html += `<div class="alert ${expirado ? 'alert-danger' : 'alert-success'}">`;
                html += `Token ${expirado ? 'EXPIRADO' : 'VÁLIDO'} - Expira em: ${expDate.toLocaleString('pt-BR')}`;
                html += '</div>';
            }
            
            // Signature (apenas mostrar que existe)
            html += '<div class="mb-3"><h6>Signature:</h6>';
            html += '<pre class="bg-light p-3 rounded"><code>' + signature.substring(0, 50) + '...</code></pre></div>';
            
            html += '</div></div>';
            jwtResultado.innerHTML = html;
        } catch (erro) {
            jwtResultado.innerHTML = '<div class="alert alert-danger">Erro ao processar o token JWT: ' + erro.message + '</div>';
        }
    });

    // ============================================
    // ABA 8: HASH GENERATOR
    // ============================================
    const hashInput = document.getElementById('hashInput');
    const hashOutput = document.getElementById('hashOutput');
    const btnHashMD5 = document.getElementById('btnHashMD5');
    const btnHashSHA256 = document.getElementById('btnHashSHA256');
    const btnHashSHA512 = document.getElementById('btnHashSHA512');
    const btnCopyHash = document.getElementById('btnCopyHash');

    // MD5 usando Crypto-JS (biblioteca externa via CDN)
    async function gerarHashMD5(texto) {
        if (typeof CryptoJS !== 'undefined') {
            return CryptoJS.MD5(texto).toString();
        } else {
            return 'Erro: Biblioteca Crypto-JS não carregada.';
        }
    }

    async function gerarHashSHA256(texto) {
        const encoder = new TextEncoder();
        const data = encoder.encode(texto);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    async function gerarHashSHA512(texto) {
        const encoder = new TextEncoder();
        const data = encoder.encode(texto);
        const hashBuffer = await crypto.subtle.digest('SHA-512', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    btnHashMD5.addEventListener('click', async function() {
        const texto = hashInput.value;
        if (!texto) {
            hashOutput.value = 'Por favor, insira um texto para gerar o hash.';
            return;
        }
        hashOutput.value = await gerarHashMD5(texto);
    });

    btnHashSHA256.addEventListener('click', async function() {
        const texto = hashInput.value;
        if (!texto) {
            hashOutput.value = 'Por favor, insira um texto para gerar o hash.';
            return;
        }
        hashOutput.value = await gerarHashSHA256(texto);
    });

    btnHashSHA512.addEventListener('click', async function() {
        const texto = hashInput.value;
        if (!texto) {
            hashOutput.value = 'Por favor, insira um texto para gerar o hash.';
            return;
        }
        hashOutput.value = await gerarHashSHA512(texto);
    });

    btnCopyHash.addEventListener('click', function() {
        if (hashOutput.value) {
            hashOutput.select();
            document.execCommand('copy');
            mostrarFeedbackCopiar(btnCopyHash);
        }
    });

    // ============================================
    // ABA 9: REGEX TESTER
    // ============================================
    const regexPattern = document.getElementById('regexPattern');
    const regexTestText = document.getElementById('regexTestText');
    const regexFlagG = document.getElementById('regexFlagG');
    const regexFlagI = document.getElementById('regexFlagI');
    const regexFlagM = document.getElementById('regexFlagM');
    const btnTestarRegex = document.getElementById('btnTestarRegex');
    const regexResultado = document.getElementById('regexResultado');

    btnTestarRegex.addEventListener('click', function() {
        const pattern = regexPattern.value.trim();
        const texto = regexTestText.value;
        
        if (!pattern) {
            regexResultado.innerHTML = '<div class="alert alert-warning">Por favor, insira uma expressão regular.</div>';
            return;
        }
        
        try {
            // Construir flags
            let flags = '';
            if (regexFlagG.checked) flags += 'g';
            if (regexFlagI.checked) flags += 'i';
            if (regexFlagM.checked) flags += 'm';
            
            const regex = new RegExp(pattern, flags);
            const matches = texto.match(regex);
            const todasMatches = [];
            let match;
            const regexGlobal = new RegExp(pattern, flags + 'g');
            
            // Resetar regex para buscar todas as ocorrências
            regexGlobal.lastIndex = 0;
            while ((match = regexGlobal.exec(texto)) !== null) {
                todasMatches.push({
                    texto: match[0],
                    index: match.index,
                    grupos: match.slice(1)
                });
            }
            
            let html = '<div class="card"><div class="card-body">';
            html += '<h5 class="card-title">Resultado do Teste Regex</h5>';
            
            if (todasMatches.length === 0) {
                let dica = '';
                // Verificar se a regex usa âncoras de início/fim
                if (pattern.startsWith('^') || pattern.endsWith('$')) {
                    dica = '<div class="alert alert-info mt-2"><small><strong>💡 Dica:</strong> Sua regex usa âncoras <code>^</code> (início) ou <code>$</code> (fim). Isso significa que ela só encontra correspondências quando o padrão é a string inteira. Para encontrar padrões no meio do texto, remova essas âncoras.</small></div>';
                }
                html += '<div class="alert alert-warning">Nenhuma correspondência encontrada.</div>' + dica;
            } else {
                html += `<div class="alert alert-success">Encontradas ${todasMatches.length} correspondência(s).</div>`;
                html += '<div class="table-responsive"><table class="table table-sm table-bordered">';
                html += '<thead><tr><th>#</th><th>Correspondência</th><th>Posição</th><th>Grupos</th></tr></thead><tbody>';
                
                todasMatches.forEach((match, index) => {
                    html += '<tr>';
                    html += `<td>${index + 1}</td>`;
                    html += `<td><code>${escapeHtml(match.texto)}</code></td>`;
                    html += `<td>${match.index}</td>`;
                    html += `<td>${match.grupos.length > 0 ? match.grupos.map((g, i) => `Grupo ${i + 1}: <code>${escapeHtml(g || '')}</code>`).join('<br>') : '-'}</td>`;
                    html += '</tr>';
                });
                
                html += '</tbody></table></div>';
                
                // Mostrar texto com highlights
                let textoHighlight = escapeHtml(texto);
                todasMatches.reverse().forEach(match => {
                    const inicio = match.index;
                    const fim = inicio + match.texto.length;
                    textoHighlight = textoHighlight.substring(0, inicio) + 
                                   '<mark>' + textoHighlight.substring(inicio, fim) + '</mark>' + 
                                   textoHighlight.substring(fim);
                });
                
                html += '<div class="mt-3"><h6>Texto com correspondências destacadas:</h6>';
                html += `<div class="bg-light p-3 rounded"><pre style="white-space: pre-wrap; word-wrap: break-word;">${textoHighlight}</pre></div></div>`;
            }
            
            html += '</div></div>';
            regexResultado.innerHTML = html;
        } catch (erro) {
            regexResultado.innerHTML = '<div class="alert alert-danger">Erro na expressão regular: ' + escapeHtml(erro.message) + '</div>';
        }
    });

});

