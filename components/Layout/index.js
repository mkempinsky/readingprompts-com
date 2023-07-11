import {Raleway} from 'next/font/google';
import Nav from '../Nav';

const raleway = Raleway({
    weight: ['100', '400', '600', '800'],
    subsets: ['latin'],
});

const Layout = ({children}) => {
    return (
        <>
            <main className={raleway.className}>{children}</main>
        </>
    );
};
export default Layout;
