// import React from 'react';
// import { useState } from 'react'
import styles from '../styles/Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface HomeProps {
    triggerLocalNotification: (title: string, description: string, secondaryText: string | undefined, secondaryLink: string | undefined) => void;
}

const Home = ({ triggerLocalNotification }: HomeProps) => {
    const navigate = useNavigate();
    const [openFAQ, setFAQOpen] = useState<number | null>(null);

    const NavigateTo = (path: string) => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        navigate(path);
    }

    const testimonials = [
        {
            stars: '★★★★★',
            description: '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."',
            initials: 'JD',
            name: 'John D.',
            title: 'Bot Developer',
        },
        {
            stars: '★★★★',
            description: '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."',
            initials: 'JD',
            name: 'John D.',
            title: 'Bot Developer',
        },
        {
            stars: '★★★',
            description: '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."',
            initials: 'JD',
            name: 'John D.',
            title: 'Bot Developer',
        },
        {
            stars: '★★',
            description: '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."',
            initials: 'JD',
            name: 'John D.',
            title: 'Bot Developer',
        },
        {
            stars: '★',
            description: '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."',
            initials: 'JD',
            name: 'John D.',
            title: 'Bot Developer',
        },
    ]
    const max_testimonials = 3;
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent(i => Math.max(0, i - 1));
    const next = () => setCurrent(i => Math.min(testimonials.length - max_testimonials, i + 1));
    const visible = testimonials.slice(current, current + max_testimonials);

    const BlogPosts = [
        {
            Icon: "fas fa-layer-group",
            Tags: ["Release", "Hosting"],
            Title: "Cloud Hosting is now available",
            Description: "Our new cloud hosting service is live. Host your bots and apps with 99.9% uptime",
            Date: "Mar 5, 2026",
            LearnMoreRoute: "/hosting",
        },
    ]
    const max_blogposts = 4;
    const blogsVisible = BlogPosts.slice(0, max_blogposts);

    const FAQ = [
        {
            Title: "How long does delivery take?",
            Answer: "Most digital products are delivered instantly after purchase. Custom software projects typically take 3-7 business days depending on complexity."
        },
        {
            Title: "Do you offer refunds?",
            Answer: "We typically do not offer refunds unless the product has not been delivered within 30 days of the purchase. ",
            Extra: [<a key="link" className={styles.FAQLink} onClick={() => NavigateTo('/refund')}><i key = "icon" className="fas fa-book"></i> Read our full refund policy.</a>]
        },
        {
            Title: "What payment methods do you accept?",
            Answer: "We accept payments through Stripe, which includes, but is not limited to Visa, Mastercard, Amex, and Cash App"
        },
        {
            Title: "How do I get support?",
            Answer: ["You can get support by emailing us or filling out our ", <a key="link" className={styles.FAQLink} onClick={() => triggerLocalNotification('Support is coming soon', 'This feature is currently in development. Stay tuned for updates!', undefined, undefined)}>support form.</a>],
            Extra: [<i key = "icon" style = {{fontWeight: 'bold', color: '#7c3aed'}} className="fas fa-envelope"></i>, " telvionsupport@gmail.com"]
        },
        {
            Title: "Can I request custom features?",
            Answer: ["You can request custom features by going to ", <a key="link" className={styles.FAQLink} onClick={() => NavigateTo('/products')}>our products page</a>, " and inquiring about it to get an exact price quote." ]
        }
    ]

    return (
        <>
        <title>Home - Telvion Systems</title>
        <meta name="description" content="Home" />
        <div className={styles.PageContainer}>
            <div className={styles.IntroductionContainer}>
                <h3 className={styles.Title}> SOFTWARE & HOSTING SOLUTIONS </h3>
                <div className={styles.TaglineContainer}>
                    <h1 className={styles.TaglineTitle}>Systems that work.</h1>
                    <h1 className={styles.TaglineUndertitle}>Solutions that scale.</h1>
                </div>
                <h3 className={styles.PurposeText}>Premium apps, tools, and engineering solutions built for reliability</h3>
                {/* <div className={styles.IntroductionBadgesContainer}>
                    <span className={styles.IntroductionBadge}>React</span>
                    <span className={styles.IntroductionBadge}>Node.js</span>
                    <span className={styles.IntroductionBadge}>TypeScript</span>
                    <span className={styles.IntroductionBadge}>APIs</span>
                </div> */}
                <div className={styles.IntroductionDirectoryButtons}>
                    <span className={styles.DirectoryButton}>View Products</span>
                    <span className={styles.DirectoryButton}>Learn More <i className="fas fa-arrow-right"></i></span>
                </div>
            </div>
            <div className={styles.ServicesContainer}>
                <h1>What We Offer</h1>
                <div className={styles.ServicesContainerGroup}>
                    <div className={styles.Service}>
                        <div className={styles.ServicesLogo}><i className="fas fa-columns"></i></div>
                        <p className={styles.ServiceName}>Web Apps</p>
                        <p className={styles.ServiceDescription}>Custom web applications built for performance and scale</p>
                        {/* <span className={styles.ServicesLearnMore}>Learn More <i className="fas fa-arrow-right"></i></span> */}
                    </div>
                    <div className={styles.Service}>
                        <div className={styles.ServicesLogo}><i className="fas fa-cloud"></i></div>
                        <p className={styles.ServiceName}>Cloud Hosting</p>
                        <p className={styles.ServiceDescription}>Reliable, fast hosting with 99.9% uptime guarantee.</p>
                        {/* <span className={styles.ServicesLearnMore}>Learn More <i className="fas fa-arrow-right"></i></span> */}
                    </div>
                    <div className={styles.Service}>
                        <div className={styles.ServicesLogo}><i className="fas fa-layer-group"></i></div>
                        <p className={styles.ServiceName}>Automation</p>
                        <p className={styles.ServiceDescription}>Automate repetitive tasks, workflows, and processed with custom built, and reliable solutions.</p>
                        {/* <span className={styles.ServicesLearnMore}>Learn More <i className="fas fa-arrow-right"></i></span> */}
                    </div>
                    <div className={styles.Service}>
                        <div className={styles.ServicesLogo}><i className="fas fa-code"></i></div>
                        <p className={styles.ServiceName}>Custom Software</p>
                        <p className={styles.ServiceDescription}>Tailored software solutions to fit all of your business needs.</p>
                        {/* <span className={styles.ServicesLearnMore}>Learn More <i className="fas fa-arrow-right"></i></span> */}
                    </div>
                </div>
            </div>

            {/* Stats Bar */}

            <div className={styles.StatsBarContainer}>
                <div className={styles.StatsBar}>
                    <div className={styles.ClientCount}>
                        <p>50+</p>
                        <p>Happy clients</p>
                    </div>
                    <div className={styles.UptimeGuarantee}>
                        <p>99.9%</p>
                        <p>Uptime guarantee</p>
                    </div>
                    <div className={styles.SupportAvailable}>
                        <p>24/7</p>
                        <p>Support available</p>
                    </div>
                    <div className={styles.ProductsBought}>
                        <p>10+</p>
                        <p>Products bought</p>
                    </div>
                </div>
            </div>

            {/* Top Products */}

            {/* <div className={styles.SectionContainer}>
                <div className={styles.SectionHeader}>
                    <span className={styles.HeaderTextOne}>OUR TOP PRODUCTS</span>
                    <span className={styles.HeaderTextTwo}>Built for reliability</span>
                    <span className={styles.HeaderTextThree}>Premium digital products ready to deploy</span>
                </div>
                <div className={styles.TopProductsLayout}>
                    <div className={styles.Product}>
                        <div className={styles.ProductInformation}>
                            <div className={styles.ProductImage}>
                            <img src="/react.svg" alt={styles.product} />
                            </div>
                            <div className={styles.ProductTitleGroup}>
                            <p className={styles.ProductTitle}>Example Product</p>
                            <p className={styles.ProductPrice}>$399.99 / month</p>
                            </div>
                        </div>
                        <div className={styles.ProductBadges}>
                            <span className={styles.ProductBadge}>Website Service</span>
                            <span className={styles.ProductBadge}>24/7 Support</span>
                        </div>
                        <p className={styles.ProductDescription}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                            consectetur.
                        </p>
                        <div className={styles.ProductButtons}>
                            <button className={styles.FeaturesButton}>View Product</button>
                        </div>
                    </div>

                    <div className={styles.Product}>
                        <div className={styles.ProductInformation}>
                            <div className={styles.ProductImage}>
                            <img src="/react.svg" alt={styles.product} />
                            </div>
                            <div className={styles.ProductTitleGroup}>
                            <p className={styles.ProductTitle}>Example Product</p>
                            <p className={styles.ProductPrice}>$399.99 / month</p>
                            </div>
                        </div>
                        <div className={styles.ProductBadges}>
                            <span className={styles.ProductBadge}>Website Service</span>
                            <span className={styles.ProductBadge}>24/7 Support</span>
                        </div>
                        <p className={styles.ProductDescription}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                            consectetur.
                        </p>
                        <div className={styles.ProductButtons}>
                            <button className={styles.FeaturesButton}>View Product</button>
                        </div>
                    </div>

                </div>
                <span className={styles.ViewAllProducts} onClick={() => NavigateTo('/products')}>View All Products <i className="fas fa-arrow-right"></i></span>
            </div> */}

            {/* Testimonials */}
            <div className={styles.SectionContainer}>
                <div className={styles.SectionHeader}>
                    <span className={styles.HeaderTextOne}>TESTIMONIALS</span>
                    <span className={styles.HeaderTextTwo}>Trusted by clients</span>
                    <span className={styles.HeaderTextThree}>See what our customers are saying</span>
                </div>
                <div className={styles.CarouselWrapper}>
                    <button className={styles.CarouselBtn} onClick={prev} disabled={current === 0}>‹</button>
                    <div className={styles.TestimonialsLayout} key={current}>
                        {visible.map((t, i) => (
                            <div className={styles.Testimonial} key={i}>
                                <div className={styles.ServiceStars}>{t.stars}</div>
                                <p className={styles.TestimonialDescription}>{t.description}</p>
                                <div className={styles.TestimonialBy}>
                                    <div className={styles.TestimonialImage}>
                                        <span>{t.initials}</span>
                                    </div>
                                    <div className={styles.TestimonialNames}>
                                        <span className={styles.TestimonialName}>{t.name}</span>
                                        <span className={styles.TestimonialTitle}>{t.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={styles.CarouselBtn} onClick={next} disabled={current >= testimonials.length - max_testimonials}>›</button>
                </div>
                <div className={styles.CarouselDots}>
                    {Array.from({ length: testimonials.length - max_testimonials + 1 }).map((_, i) => (
                        <div key={i} className={`${styles.Dot} ${i === current ? styles.DotActive : ''}`} onClick={() => setCurrent(i)} />
                    ))}
                </div>
            </div>

            {/* Blog Posts */}
            <div className={styles.SectionContainer}>
                <div className={styles.SectionHeader}>
                    <span className={styles.HeaderTextOne}>UPDATES</span>
                    <span className={styles.HeaderTextTwo}>Latest from Telvion</span>
                    <span className={styles.HeaderTextThree}>Stay up to date with our latest news and releases.</span>
                </div>
                <div className={styles.BlogPostLayout} key={current}>
                    {blogsVisible.map((t, i) => (
                        <div className={styles.Blog} key={i} onClick={() => navigate(`${t.LearnMoreRoute}`)}>
                            <div className={styles.BlogHeader}>
                                <i className={t.Icon}></i>
                            </div>
                            <div className={styles.BlogMain}>
                                <div className={styles.BlogTags}>
                                    {t.Tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                                <span className={styles.BlogTitle}>{t.Title}</span>
                                <span className={styles.BlogDescription}>{t.Description}</span>
                                <div className={styles.BlogFooter}>
                                    <span className={styles.BlogDate}>{t.Date}</span>
                                    <span className={styles.ReadMore}>Read more <i className="fas fa-arrow-right-long"></i></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <span className={styles.BlogViewAllButton}>View All Blog Posts <i className="fas fa-arrow-right"></i></span>
            </div>

            {/* FAQ */}
            <div className={styles.SectionContainer}>
                <div className={styles.SectionHeader}>
                    <span className={styles.HeaderTextOne}>FAQ</span>
                    <span className={styles.HeaderTextTwo}>Common questions</span>
                    <span className={styles.HeaderTextThree}>Everything you need to know about Telvion Systems.</span>
                </div>
                <div className={styles.FAQLayout}>
                    {FAQ.map((faq, i) => {
                        return (
                        <div className={`${styles.FAQ} ${openFAQ === i ? styles.FAQOpen : ''}`} onClick={() => setFAQOpen(openFAQ === i ? null : i)} key={i}>
                             <div className={styles.FAQHeader}>
                                <span className={styles.FAQTitle}>{faq.Title}</span>
                                <i className="fas fa-plus"></i>
                            </div>
                            <div className={`${openFAQ === i ? styles.FAQContentVisible : styles.FAQContentHidden}`}>
                                <span className={styles.FAQDescription}>{faq.Answer}</span>
                                {faq.Extra && (
                                    <span className={styles.FAQDescExtra}>{faq.Extra}</span>
                                )}
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            {/* Ending */}
            <div className={styles.SectionContainer}>
                <div className={styles.EndingSectionLayout}>
                    <span className={styles.EndingTitle}>Ready to get started?</span>
                    <span className={styles.EndingDesc}>Browse our products, hosting services, and more. Email us for support</span>
                    <div className={styles.EndingSectionButton}>
                        <span>View our Products</span>
                        <span>View our Hosting</span>
                    </div>
                    <span className={styles.EndingEmail}><i className="fas fa-envelope"></i> telvionsupport@gmail.com</span>
                </div>
            </div>

        </div>
        </>
    );
};

export default Home;