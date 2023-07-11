import Link from 'next/link';

const Button = ({children, href, title, type}) => {
    return (
        <Link href={href} title={title}>
            <button className={type}>{children}</button>
            <style jsx>
                {`
                    button {
                        padding: 8px 16px;
                        border-radius: 2em;
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 100;
                        min-width: 200px;
                        background: var(--primary);
                        border: 2px solid var(--primary);
                        color: #fff;
                    }
                    button.light {
                        background: var(--primary-light);
                        border: 2px solid var(--primary-light);
                    }
                    button.light.invert {
                        border: 2px solid var(--primary-light);
                        background: rgba(255, 255, 255, 0.2);
                        color: var(--primary-light);
                    }
                `}
            </style>
        </Link>
    );
};
export default Button;
