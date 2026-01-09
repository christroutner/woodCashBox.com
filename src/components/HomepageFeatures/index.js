import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FaBookOpen, FaShoppingCart } from 'react-icons/fa';

const FeatureList = [
  {
    title: 'Documentation',
    Svg: FaBookOpen,
    link: '/docs/intro',
    description: (
      <>
        Learn about the Cash Box, what goes into it, and how to build your own.
      </>
    ),
  },
  {
    title: 'Store',
    Svg: FaShoppingCart,
    link: 'http://store.woodcashbox.com',
    isExternal: true,
    description: (
      <>
        Building a Cash Box is complex, requires specific knowlege, and specific
        equipment. You can purchase a complete Cash Box from the store. You can
        also order parts to speed up your build.
      </>
    ),
  },
];

function Feature({Svg, title, description, link, isExternal}) {
  const content = (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </>
  );

  return (
    <div className={clsx('col col--6')}>
      {isExternal ? (
        <a href={link} className={styles.featureLink} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link to={link} className={styles.featureLink}>
          {content}
        </Link>
      )}
    </div>
  );
}

export default function HomepageFeatures() {
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
