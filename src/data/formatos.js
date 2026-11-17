export function formatarPreco(valor) {
  return 'R$ ' + Number(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatarData(data) {
  const [ano, mes, dia] = data.split('-');
  return dia + '/' + mes + '/' + ano;
}

export function dataDeHoje() {
  const hoje = new Date();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const dia = String(hoje.getDate()).padStart(2, '0');
  return hoje.getFullYear() + '-' + mes + '-' + dia;
}
