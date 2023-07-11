import Image from 'next/image';
import {BREAKPOINT, MAX_WIDTH} from '../lib/global-styles';
import Button from '../components/Button';

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
            <div className="ctas">
                <div className="cta">
                    <div className="cta__title">Explore Prompts</div>
                    <div className="cta__copy">
                        Discover and browse tons of reading prompts to chose from.
                    </div>
                    <Button href="/explore">Explore</Button>
                </div>
                <div className="cta">
                    <div className="cta__title">Contribute</div>
                    <div className="cta__copy">
                        Share your ideas for reading prompts and challenges with the
                        community.
                    </div>
                    <Button href="/contribute">Contribute</Button>
                </div>
                <div className="cta">
                    <div className="cta__title">Draw a Prompt</div>
                    <div className="cta__copy">
                        Feeling lucky? Draw a random prompt for your next read.
                    </div>
                    <Button href="/random">Randomize</Button>
                </div>
            </div>
            <div className="articles">
                <div className="articles__container">
                    <h2>Articles</h2>
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
                    .ctas {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-gap: 24px;
                        padding: 24px 16px;
                        position: relative;
                        margin: -80px auto 80px auto;
                        max-width: 100%;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .ctas {
                            grid-template-columns: repeat(3, 1fr);
                            max-width: ${MAX_WIDTH};
                            grid-gap: 40px;
                            justify-content: center;
                            padding: 0;
                            margin: -80px auto 80px auto;
                        }
                    }
                    .cta {
                        background: #fff;
                        padding: 24px 18px;
                        border-radius: 8px;
                        text-align: center;
                        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
                            rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                        max-width: 280px;
                        margin: 0 auto;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .cta {
                            max-width: 100%;
                        }
                    }
                    .cta__title {
                        margin-bottom: 24px;
                        font-weight: 600;
                        font-size: 18px;
                    }
                    .cta__copy {
                        font-size: 16px;
                        line-height: 24px;
                        margin-bottom: 24px;
                    }
                    .articles {
                        background: #fff;
                    }
                    .articles__container {
                        max-width: ${MAX_WIDTH};
                        margin: 0 auto;
                        padding: 80px 0;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .articles__container {
                            padding: 80px 16px;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default Homepage;
