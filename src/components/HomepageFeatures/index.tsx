import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import 'bootstrap-icons/font/bootstrap-icons.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  backgroundSvg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '¡Únete al Discord oficial!',
    Svg: require('@site/static/img/landing-page/discover.svg').default,
    backgroundSvg: require('@site/static/img/landing-page/blob-1.svg').default,
    description: (
      <>
        <div>
        Nuestro centro de operaciones, contamos con canales donde discutimos problemas, hacemos CV review, recomendamos y solucionamos dudas, mantente al tanto de nuevos concursos y dinámicas, también hay un canal de memes!
        </div>
        <Link
        className="button button--primary mt-3"
        to="blog/TODO">
        Haz click aquí 
        <i className="bi bi-discord ml-3"></i>
        </Link>  
      </>
    ),
  },
  {
    title: 'Consulta la documentación',
    Svg: require('@site/static/img/landing-page/operation.svg').default,
    backgroundSvg: require('@site/static/img/landing-page/blob-2.svg').default,
    description: (
      <>
        <div>
          Aquí recopilamos las presentaciones que usamos en semestres anteriores, desde básicos a intermedios, también encontrarás tutoriales y artículos útiles. ¡Mejora tus habilidades y no olvides pasarte por nuestro Blog!
        </div>
        <Link
          className="button button--primary mt-3"
          to="docs/intro">
          Ver documentación
          <i className="bi bi-book ml-3"></i>
        </Link>
      </>
    ),
  },
  {
    title: '¡Asiste al Club!',
    Svg: require('@site/static/img/landing-page/attend-class.svg').default,
    backgroundSvg: require('@site/static/img/landing-page/blob-2.svg').default,
    description: (
      <>
        <div>
          Siguiendo un temario definido al inicio del semestre, damos cátedra de diferentes temas clave para entrar a la programación competitiva. Revisa los horarios y aulas en el semestre en curso, ¡te esperamos!
        </div>
        <Link
          className="button button--primary mt-3"
          to="blog/horarios">
          Ver horarios
          <i className="bi bi-calendar ml-3"></i>
        </Link>
      </>
    ),
  },
];

function Feature({title, Svg, backgroundSvg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
