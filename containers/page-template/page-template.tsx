import React from 'react';
import Head from 'next/head';
import styles from './page-template.module.scss';
import Profile from '../profile';

const PageTemplate = (props) => {
    const { title = '' } = props;
    return (
        <React.Fragment>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <meta
                    httpEquiv="Cache-Control"
                    content="no-cache, no-store, must-revalidate"
                />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content="0" />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
                    rel="stylesheet"
                />
                <title>Nandu Vinodan {title && ` | ${title}`}</title>
            </Head>
            <div className={styles.wrapper}>
                <section className={styles.profile}>
                    <Profile />
                </section>
                <section className={styles.details}>
                    {props.children}
                </section>
            </div>
        </React.Fragment>

    )
};

export default PageTemplate;