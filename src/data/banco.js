import { createClient } from '@supabase/supabase-js';

const ENDERECO = 'https://ywxjlwkdaswuewxvvwkh.supabase.co';
const CHAVE_PUBLICA = 'sb_publishable_u8ltoYhxyPPzBTcveDQ24w_Y2do4rAm';

const banco = createClient(ENDERECO, CHAVE_PUBLICA);

export async function buscarProdutos() {
  const { data, error } = await banco.from('produtos').select('*').order('ordem');
  if (error) {
    throw error;
  }
  return data;
}

export async function registrarEncomenda(encomenda) {
  const { error } = await banco.from('encomendas').insert(encomenda);
  if (error) {
    throw error;
  }
}
