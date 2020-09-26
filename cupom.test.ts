const cupom = require('./cupom');

function verificaCampoObrigatorio(mensagemEsperada: string) {
  try {
    cupom.dados_loja();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}

// Todas as variáveis preenchidas
cupom.dados.nome_loja = "Loja 1";
cupom.dados.logradouro = "Log 1";
cupom.dados.numero = 10;
cupom.dados.complemento = "C1";
cupom.dados.bairro = "Bai 1";
cupom.dados.municipio = "Mun 1";
cupom.dados.estado = "E1";
cupom.dados.cep = "11111-111";
cupom.dados.telefone = "(11) 1111-1111";
cupom.dados.observacao = "Obs 1";
cupom.dados.cnpj = "11.111.111/1111-11";
cupom.dados.inscricao_estadual = "123456789";

const TEXTO_ESPERADO_LOJA_COMPLETA: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_NUMERO: string = `Loja 1
Log 1, s/n C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_COMPLEMENTO: string = `Loja 1
Log 1, 10
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_BAIRRO: string = `Loja 1
Log 1, 10 C1
Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_CEP: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_TELEFONE: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_OBSERVACAO: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111

CNPJ: 11.111.111/1111-11
IE: 123456789
`;

test('Loja Completa', () => {
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_LOJA_COMPLETA);
});

test('Nome vazio', () => {
  cupom.dados.nome_loja = "";
  verificaCampoObrigatorio(`O campo nome da loja é obrigatório`);
  cupom.dados.nome_loja = "Loja 1";
});

test('Logradouro vazio', () => {
  cupom.dados.logradouro = "";
  verificaCampoObrigatorio(`O campo logradouro do endereço é obrigatório`);
  cupom.dados.logradouro = "Log 1";
});

test('Número zero', () => {
  cupom.dados.numero = 0;
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_NUMERO);
  cupom.dados.numero = 10;
});

test('Complemento vazio', () => {
  cupom.dados.complemento = "";
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_COMPLEMENTO);
  cupom.dados.complemento = "C1";
});

test('Bairro vazio', () => {
  cupom.dados.bairro = "";
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_BAIRRO);
  cupom.dados.bairro = "Bai 1";
});

test('Município vazio', () => {
  cupom.dados.municipio = "";
  verificaCampoObrigatorio(`O campo município do endereço é obrigatório`);
  cupom.dados.municipio = "Mun 1";
});

test('Estado vazio', () => {
  cupom.dados.estado = "";
  verificaCampoObrigatorio(`O campo estado do endereço é obrigatório`);
  cupom.dados.estado = "E1";
});

test('CEP vazio', () => {
  cupom.dados.cep = "";
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_CEP);
  cupom.dados.cep = "11111-111";
});

test('Telefone vazio', () => {
  cupom.dados.telefone = "";
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_TELEFONE);
  cupom.dados.telefone = "(11) 1111-1111";
});

test('Observação vazia', () => {
  cupom.dados.observacao = "";
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_OBSERVACAO);
  cupom.dados.observacao = "Obs 1";
});

test('CNPJ vazio', () => {
  cupom.dados.cnpj = "";
  verificaCampoObrigatorio(`O campo CNPJ da loja é obrigatório`);
  cupom.dados.cnpj = "11.111.111/1111-11";
});

test('Inscrição estadual vazia', () => {
  cupom.dados.inscricao_estadual = "";
  verificaCampoObrigatorio(`O campo inscrição estadual da loja é obrigatório`);
  cupom.dados.inscricao_estadual = "123456789";
});

test('Exercício 2 - customizado', () => {

  cupom.dados.nome_loja = "Magic Box";
  cupom.dados.logradouro = "Baker St";
  cupom.dados.numero = 221;
  cupom.dados.complemento = "EDA A24/25/26";
  cupom.dados.bairro = "Marylebone";
  cupom.dados.municipio = "Sunnydale";
  cupom.dados.estado = "CA";
  cupom.dados.cep = "79297";
  cupom.dados.telefone = "(213) 70374-7092";
  cupom.dados.observacao = "Loja TW (BTVS)";
  cupom.dados.cnpj = "98.650.809/0001-63";
  cupom.dados.inscricao_estadual = "55021852-1";

  let expected = "Magic Box\n";
  expected += "Baker St, 221 EDA A24/25/26\n";
  expected += "Marylebone - Sunnydale - CA\n";
  expected += "CEP:79297 Tel (213) 70374-7092\n";
  expected += "Loja TW (BTVS)\n";
  expected += "CNPJ: 98.650.809/0001-63\n";
  expected += "IE: 55021852-1\n";
  
  expect(cupom.dados_loja()).toBe(expected);
  
});
