import Layout from '../components/Layout';
import {Raleway} from 'next/font/google';

const raleway = Raleway({
    weight: ['100', '400', '600', '800'],
    subsets: ['latin'],
});

export default function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <main className={raleway.className}>
                <Component {...pageProps} />
            </main>
        </Layout>
    );
}
