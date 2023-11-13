import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';

const imagens = [massa1, massa2];

export default function Sobre() {
  return (
    <section>
      <h3 className={stylesTema.titulo}> Sobre</h3>
      <div className={styles.sobreNos}>
        <img src={casa} alt="Casa Aluroni" />
        <div className={styles.sobreNos__texto}>
          <p>
            No <span style={{ color: 'red' }}>Fusion Restaurant Hub</span>, acreditamos que cada refeição é uma celebração. Somos apaixonados por oferecer pratos deliciosos em um ambiente acolhedor.
          </p>
          <p>
            Nossa cozinha reflete nossa dedicação a ingredientes frescos e sabores autênticos. Queremos que cada visita seja uma experiência memorável, seja para um jantar casual ou uma ocasião especial.
          </p>
          <p>
            No coração da nossa filosofia está o compromisso com a comunidade e práticas sustentáveis. Estamos felizes em compartilhar nossa paixão pela boa comida com você. Explore nosso menu e junte-se a nós para uma jornada culinária única no <span style={{ color: 'red' }}>Fusion Restaurant Hub</span>.
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}