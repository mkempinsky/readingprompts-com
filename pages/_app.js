import Layout from '../components/Layout';
import Nav from '../components/Nav';

export default function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
