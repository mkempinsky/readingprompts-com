import Image from 'next/image';
import {BREAKPOINT} from '../lib/global-styles';

const Homepage = () => {
    return (
        <div className="gradient-bg">
            <div className="hero">
                <Image
                    src="/homepage-hero.jpg"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="hero__content">
                    <div>
                        <h1 className="hero__header">Reading Prompts</h1>
                        <p className="hero__sub-header">
                            Find, create & share fun reading prompts for your next book.
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .hero {
                        position: relative;
                        min-height: 75vh;
                        text-align: center;
                    }
                    .hero__content {
                        position: relative;
                        background: rgba(000, 000, 000, 0.6);
                        color: var(--primary-light);
                        min-height: 75vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 40px 16px;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .hero__content {
                            padding: 80px 0;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default Homepage;
