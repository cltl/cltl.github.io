import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function Description() {
  return (
    <header className={clsx('description description--primary-dark', styles.description)}>
      <p>We work on computational models of natural language in a large variety of topics including grounding, human-robot interaction, and NLP for digital humanities and social science. We create a lot of software and have a policy of sharing what we create. You will find an overview of our repositories here. See you on <a href='https://github.com/cltl'>GitHub</a> for the complete list and our <a href='https://home.cltl.labs.vu.nl/'>website</a> for more.</p>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <Description />
    </Layout>
  );
}
