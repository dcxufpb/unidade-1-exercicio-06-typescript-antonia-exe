let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};

function isEmpty(str: string): boolean {
  let spaceCount = str.length - str.replace(" ", "").length;
  return str == null || spaceCount == str.length;
}

function dados_loja() {
  if (dados.logradouro == "") {
    throw new Error(`O campo logradouro do endereço é obrigatório`);
  }

  if (dados.municipio == "") {
    throw new Error(`O campo município do endereço é obrigatório`);
  }

  if (dados.estado == "") {
    throw new Error(`O campo estado do endereço é obrigatório`);
  }

  if (dados.cnpj == "") {
    throw new Error(`O campo CNPJ da loja é obrigatório`);
  }

  if (dados.inscricao_estadual == "") {
    throw new Error(`O campo inscrição estadual da loja é obrigatório`);
  }

  var numero1 : string = dados.numero + "";
	if(dados.numero == 0){
		numero1 = "s/n";
  }

  var linha2 = `${dados.logradouro}, ${numero1}`;
  if (! isEmpty(dados.complemento)){
      linha2 += ` ${dados.complemento}`;
  }
  
  var linha3 = "";
  if (! isEmpty(dados.bairro)){
    linha3 += `${dados.bairro} - `;
  }
  linha3 += `${dados.municipio} - ${dados.estado}`;

  var linha4 = "";
  if (! isEmpty(dados.cep)){
    linha4 = `CEP:${dados.cep}`;
  }
  if (! isEmpty(dados.telefone)){
    if (! isEmpty(linha4)){
      linha4 += ` `;
    }
    linha4 += `Tel ${dados.telefone}`;
  }
  if (! isEmpty(linha4)){
    linha4 += `\n`;
  }

  var linha5 = "";
  if (! isEmpty(dados.observacao)){
    linha5 += `${dados.observacao}`;
  }

  let output = `${dados.nome_loja}\n`
  output += `${linha2}\n`
  output += `${linha3}\n`
  output += `${linha4}`
  output += `${linha5}\n`
  output += `CNPJ: ${dados.cnpj}\n`
  output += `IE: ${dados.inscricao_estadual}\n`

  return output;
}

module.exports = {
  dados: dados,
  dados_loja:  dados_loja
};
