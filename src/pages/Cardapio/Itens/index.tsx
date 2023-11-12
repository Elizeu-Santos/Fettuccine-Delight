import cardapio from 'data/cardapio.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useState, useEffect, useCallback } from 'react';

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro, ordenador } = props;

  const Busca = useCallback(
    (title: string) => {
      const regex = new RegExp(busca, 'i');
      return regex.test(title);
    },
    [busca]
  );

  const Filtro = useCallback(
    (id: number) => {
      if (filtro !== null) return filtro === id;
      return true;
    },
    [filtro]
  );

  const ordenar = useCallback(
    (novaLista: typeof cardapio) => {
      switch (ordenador) {
      case 'porcao':
        return [...novaLista].sort((a, b) => (a.size > b.size ? 1 : -1));
      case 'qtd_pessoas':
        return [...novaLista].sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case 'preco':
        return [...novaLista].sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return novaLista;
      }
    },
    [ordenador]
  );

  useEffect(() => {
    const filteredList = cardapio.filter(
      (item) => Busca(item.title) && Filtro(item.category.id)
    );
    setLista(ordenar(filteredList));
  }, [busca, filtro, ordenador, Busca, Filtro, ordenar]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
