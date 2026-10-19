import { Reveal } from "../components/reveal";
import { HeroCarousel } from "../components/hero-carousel";
import { QualityInteractive } from "../components/quality-interactive";

const mapUrl = "https://maps.app.goo.gl/EyXq4t2A1N3cCCjSA";
const mapEmbedUrl = "https://www.google.com/maps?q=Al%20Jerf%20Industrial%202%2C%20Ajman%2C%20United%20Arab%20Emirates&output=embed";
const primaryPhone = "+971503755006";
const primaryPhoneDisplay = "+971 50 375 5006";
const whatsappUrl = "https://wa.me/971503755006";

const heroSlides = [
  {
    src: "/images/plastic/plastic-01-specimen-container.jpeg",
    alt: "Sterile specimen container sealed in a sterile pouch",
    eyebrow: "Collection and containment",
    caption: "Made for the moments that need to go right.",
    detail: "Collection / containment",
  },
  {
    src: "/images/plastic/plastic-04-sharps-container-red.jpeg",
    alt: "Red sharps container with a secure lid",
    eyebrow: "Safety and disposal",
    caption: "Built around safer handling.",
    detail: "Safety / disposal",
  },
  {
    src: "/images/plastic/plastic-10-kidney-tray-blue.jpeg",
    alt: "Blue kidney tray for patient care and procedure use",
    eyebrow: "Patient care and procedure",
    caption: "Simple forms. Considered details.",
    detail: "Patient care / procedure",
  },
  {
    src: "/images/paper-cups.png",
    alt: "Custom double-wall paper cups in four sizes",
    eyebrow: "Custom paper cups",
    caption: "A cup that carries your brand.",
    detail: "Double wall / custom print",
  },
];

type IconName =
  | "arrow"
  | "box"
  | "check"
  | "cup"
  | "drop"
  | "instagram"
  | "mail"
  | "map"
  | "phone"
  | "shield"
  | "spark"
  | "whatsapp";

function Icon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
    box: (
      <>
        <path d="m4 7 8-4 8 4-8 4-8-4Z" />
        <path d="M4 7v10l8 4 8-4V7M12 11v10" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    cup: (
      <>
        <path d="M6 7h10v7.2A4.8 4.8 0 0 1 11.2 19h-.4A4.8 4.8 0 0 1 6 14.2V7Z" />
        <path d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16M4 21h14" />
      </>
    ),
    drop: <path d="M12 3s5.5 6.1 5.5 10A5.5 5.5 0 0 1 6.5 13C6.5 9.1 12 3 12 3Z" />,
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    map: (
      <>
        <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15m6-12v15" />
      </>
    ),
    phone: <path d="M7 3h3l1.2 4-2 1.5a15 15 0 0 0 5.3 5.3l1.5-2 4 1.2v3c0 1.1-.9 2-2 2C10.3 18 6 13.7 6 8c0-1.1.9-2 2-2" />,
    shield: (
      <>
        <path d="M12 3 20 6v5c0 5.2-3.4 8.4-8 10-4.6-1.6-8-4.8-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m6.9 6.9 2.8 2.8m0-12.5-2.8 2.8m-6.9 6.9-2.8 2.8" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20.2 11.5a8.2 8.2 0 0 1-12.1 7.2L4 20l1.4-4.1A8.2 8.2 0 1 1 20.2 11.5Z" />
        <path d="M8.7 8.6c.2-.4.5-.6.8-.6h.6c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .4-.1.6l-.5.6c.4.8 1.1 1.5 1.9 1.9l.6-.5c.2-.2.4-.2.6-.1l1.5.6c.3.1.4.3.4.5v.6c0 .3-.1.6-.5.8-.5.3-1.1.4-1.6.2-2.9-.9-5.1-3.1-6-6-.2-.5-.1-1.1.2-1.6Z" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...common}>
      {paths[name]}
    </svg>
  );
}

const plasticProducts = [
  // {
  //   image: "/images/plastic/plastic-01-specimen-container.jpeg",
  //   imageAlt: "Sterile specimen container sealed in a sterile pouch",
  //   category: "Collection & containment",
  //   title: "Specimen container",
  // },
  {
    image: "/images/plastic/plastic-02-male-urinal-green.jpeg",
    imageAlt: "Green male urinal with graduated markings",
    category: "Patient care",
    title: "Male urinal · green",
  },
  {
    image: "/images/plastic/plastic-03-male-urinal-red.jpeg",
    imageAlt: "Red male urinal with graduated markings",
    category: "Patient care",
    title: "Male urinal · red",
  },
  {
    image: "/images/plastic/plastic-04-sharps-container-red.jpeg",
    imageAlt: "Red sharps container with a secure lid",
    category: "Safety & disposal",
    title: "Sharps container · red",
  },
  {
    image: "/images/plastic/plastic-05-sharps-container-green.jpeg",
    imageAlt: "Green sharps container with a secure lid",
    category: "Safety & disposal",
    title: "Sharps container · green",
  },
  {
    image: "/images/plastic/plastic-06-safety-container-yellow-red.jpeg",
    imageAlt: "Yellow safety container with a red closure",
    category: "Safety & disposal",
    title: "Safety container · red lid",
  },
  {
    image: "/images/plastic/plastic-07-safety-container-yellow-blue.jpeg",
    imageAlt: "Yellow safety container with a blue closure",
    category: "Safety & disposal",
    title: "Safety container · blue lid",
  },
  {
    image: "/images/plastic/plastic-08-basin-yellow.jpeg",
    imageAlt: "Yellow rectangular basin",
    category: "Patient care",
    title: "Rectangular basin · yellow",
  },
  {
    image: "/images/plastic/plastic-09-sharps-container-yellow.jpeg",
    imageAlt: "Yellow sharps container with biohazard marking",
    category: "Safety & disposal",
    title: "Sharps container · yellow",
  },
  {
    image: "/images/plastic/plastic-10-kidney-tray-blue.jpeg",
    imageAlt: "Blue kidney tray",
    category: "Patient care",
    title: "Kidney tray · blue",
  },
  {
    image: "/images/plastic/plastic-11-basin-pink.jpeg",
    imageAlt: "Pink rectangular basin",
    category: "Patient care",
    title: "Rectangular basin · pink",
  },
  {
    image: "/images/plastic/plastic-12-kidney-tray-clear.jpeg",
    imageAlt: "Clear kidney tray",
    category: "Patient care",
    title: "Kidney tray · clear",
  },
  {
    image: "/images/plastic/plastic-13-medicine-cup.jpeg",
    imageAlt: "Graduated medicine cup marked up to 30 millilitres",
    category: "Collection & containment",
    title: "Medicine cup · 30 ml",
  },
  {
    image: "/images/plastic/plastic-14-kidney-tray-yellow.jpeg",
    imageAlt: "Yellow kidney tray",
    category: "Patient care",
    title: "Kidney tray · yellow",
  },
  {
    image: "/images/plastic/plastic-15-stool-container.jpeg",
    imageAlt: "60 ml stool container with red lid",
    category: "Collection & containment",
    title: "Stool container · 60 ml",
  },
  {
    image: "/images/plastic/plastic-16-urine-container.jpeg",
    imageAlt: "60 ml urine container with a white lid",
    category: "Collection & containment",
    title: "Urine container · 60 ml",
  },
  {
    image: "/images/plastic/plastic-17-specimen-container-packaged.jpeg",
    imageAlt: "Specimen container sealed in a sterile pouch",
    category: "Collection & containment",
    title: "Specimen container · packaged",
  },
  {
    image: "/images/plastic/plastic-18-male-urinal-white.jpeg",
    imageAlt: "White male urinal with graduated markings",
    category: "Patient care",
    title: "Male urinal · white",
  },
];

const faqs = [
  {
    question: "What does Sterile Manufacturing produce?",
    answer:
      "Sterile Manufacturing produces single-use plastic medical disposables including medicine cups, specimen containers, stool containers, deep bottles, sharps containers, male urinals, kidney trays and rectangular basins. The company also offers custom paper cups.",
  },
  {
    question: "Where is the company located?",
    answer:
      "The manufacturing company is based in Al Jerf Industrial 2, Ajman, United Arab Emirates, with a strategic location for supply across the UAE and nearby markets.",
  },
  {
    question: "Can paper cups be customized for a brand?",
    answer:
      "Yes. The paper cup line supports custom sizes, colours, printed patterns and brand messages, including double-wall options in 4 oz, 6.5 oz, 8 oz and 12 oz formats.",
  },
  {
    question: "How can I request product information or a quotation?",
    answer:
      `Call ${primaryPhoneDisplay}, message +971 54 712 6700, or email sterileuae@gmail.com. Share your product, quantity and delivery requirements so the team can respond with the right information.`,
  },
];

export default function Home() {
  return (
    <main>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Sterile Manufacturing on WhatsApp">
        <span className="floating-whatsapp-icon"><Icon name="whatsapp" /></span>
        <span className="floating-whatsapp-copy"><small>WhatsApp</small>Chat with us</span>
      </a>
      <a className="back-to-top" href="#top" aria-label="Back to top"><Icon name="arrow" /><span>Top</span></a>
      <div className="site-chrome">
        <div className="topline">
          <div className="container topline-inner">
            <span>UAE-made medical disposables</span>
            <span className="topline-dot" />
            <span>Al Jurf Industrial 2, Ajman</span>
            <a href={`tel:${primaryPhone}`}>Call {primaryPhoneDisplay} <Icon name="arrow" /></a>
          </div>
        </div>

        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="#top" aria-label="Sterile Manufacturing home">
              <span className="brand-image"><img src="/images/sterile-logo-transparent.png" alt="Sterile Manufacturing LLC" /></span>
            </a>

            <nav className="desktop-nav" aria-label="Primary navigation">
              <a href="#products">Products</a>
              <a href="#quality">Quality</a>
              <a href="#certification">Certification</a>
              <a href="#paper-cups">Paper products</a>
              <a href="#contact">Contact</a>
            </nav>

            <details className="mobile-menu">
              <summary aria-label="Open menu"><span /><span /></summary>
              <nav aria-label="Mobile navigation">
                <a href="#products">Products</a>
                <a href="#quality">Quality</a>
                <a href="#certification">Certification</a>
                <a href="#paper-cups">Paper products</a>
                <a href="#contact">Contact</a>
              </nav>
            </details>

            <a className="header-cta" href={`tel:${primaryPhone}`}>
              <Icon name="phone" /><span className="header-cta-full">Call {primaryPhoneDisplay}</span><span className="header-cta-mobile">Call now</span>
            </a>
          </div>
        </header>
      </div>
      <div className="site-chrome-spacer" aria-hidden="true" />

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="kicker"><span className="kicker-line" /> Built for the care behind care</p>
            <h1>The everyday essentials behind <em>safer</em> care.</h1>
            <p className="hero-lede">
              Sterile Manufacturing makes dependable, single-use medical disposables and brand-ready paper cups for the teams that keep people, facilities and service moving.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">Explore capabilities <Icon name="arrow" /></a>
              <a className="button button-quiet" href="#contact">Talk to our team <Icon name="arrow" /></a>
            </div>
            <div className="hero-proof" aria-label="Company highlights">
              <div><span className="proof-icon"><Icon name="map" /></span><span>UAE manufacturing<br />from Ajman</span></div>
              <div><span className="proof-icon"><Icon name="box" /></span><span>Single-use formats<br />for daily workflows</span></div>
              <div><span className="proof-icon"><Icon name="spark" /></span><span>Flexible support<br />for bulk requirements</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-label"><span /> Product range / 2026</div>
            <div className="hero-image-frame">
              <HeroCarousel slides={heroSlides} />
            </div>
            <div className="floating-note note-top"><Icon name="spark" /><span>Quality-led<br />manufacturing</span></div>
            <div className="floating-note note-bottom"><span className="note-number">+971</span><span>Ajman, UAE<br />Supply partner</span></div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Product categories">
        <div className="marquee-track"><span>Medical disposables</span><i>✳</i><span>Clinical essentials</span><i>✳</i><span>Custom paper cups</span><i>✳</i><span>UAE-made</span><i>✳</i><span>Medical disposables</span><i>✳</i><span>Clinical essentials</span><i>✳</i></div>
      </section>

      <section className="section products-section" id="products">
        <div className="container">
          <Reveal className="reveal-block">
            <div className="section-heading split-heading">
              <div><p className="eyebrow">Plastic products</p><h2>Useful by design.<br /><em>Reliable</em> by habit.</h2></div>
              <p className="section-intro">A broader view of our plastic medical disposables, shown in the product colours and formats supplied for this range.</p>
            </div>
          </Reveal>

          <div className="plastic-products-grid">
            {plasticProducts.map((product, index) => (
              <Reveal className="reveal-card" delay={(index % 4) * 70} key={`${product.title}-${index}`}>
                <article className="plastic-product-card">
                  <div className="plastic-product-media">
                    <img src={product.image} alt={product.imageAlt} loading="lazy" />
                    <span className="plastic-product-tag">{product.category}</span>
                  </div>
                  <div className="plastic-product-body">
                    <p className="eyebrow">{product.category}</p>
                    <h3>{product.title}</h3>
                    <a href="#contact" className="text-link">Ask about this product <Icon name="arrow" /></a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-section" id="paper-cups">
        <div className="container paper-grid">
          <Reveal className="reveal-column">
            <div className="paper-copy">
              <p className="eyebrow">Paper products · custom cups</p>
              <h2>Make every cup carry <em>your brand.</em></h2>
              <p>Our paper cup range gives hospitality, events and institutional buyers a dependable canvas for hot drinks, brand stories and thoughtful design.</p>
              <div className="cup-specs"><span>4 oz</span><span>6.5 oz</span><span>8 oz</span><span>12 oz</span></div>
              <div className="paper-features"><span><Icon name="cup" /> Double-wall insulation</span><span><Icon name="spark" /> Custom printed</span><span><Icon name="drop" /> Brand-ready</span></div>
              <a className="button button-light" href="#contact">Discuss your cup range <Icon name="arrow" /></a>
            </div>
          </Reveal>
          <Reveal className="reveal-column" delay={100}>
            <div className="paper-image-wrap"><img src="/images/paper-cups.png" alt="Custom double-wall paper cups in four sizes" /><div className="paper-image-tag">Double wall / custom print</div></div>
          </Reveal>
        </div>
        <div className="container catalogue-gallery">
          <Reveal className="reveal-block">
            <div className="catalogue-gallery-heading"><p className="eyebrow">More from the catalogue</p><p>Browse the paper formats and custom-print directions shown in the supplied catalogue.</p></div>
          </Reveal>
          <div className="catalogue-gallery-grid">
            <Reveal className="reveal-card"><figure><img src="/images/paper-catalogue-double-wall.png" alt="Double-wall and ripple paper cup catalogue page" /><figcaption>Double-wall and ripple cups</figcaption></figure></Reveal>
            <Reveal className="reveal-card" delay={100}><figure><img src="/images/paper-catalogue-custom-cups.png" alt="Custom PET, U-shape and frosted cup catalogue page" /><figcaption>Custom printed cup formats</figcaption></figure></Reveal>
            <Reveal className="reveal-card" delay={200}><figure><img src="/images/paper-catalogue-packaging.png" alt="Custom paper packaging catalogue page" /><figcaption>Paper packaging directions</figcaption></figure></Reveal>
          </div>
        </div>
      </section>

      <section className="section quality-section" id="quality">
        <div className="container quality-grid">
          <Reveal className="reveal-column">
            <QualityInteractive />
          </Reveal>
          <Reveal className="reveal-column" delay={100}>
            <div className="quality-copy">
              <p className="eyebrow">Why Sterile</p>
              <h2>Precision from material <em>to shipment.</em></h2>
              <p className="large-copy">Sterile Manufacturing is a UAE-based production company in Ajman. It makes single-use plastic medical disposables for collection, patient care, containment and disposal, alongside custom double-wall paper cups. Good healthcare products should feel simple to use — that simplicity starts with focused manufacturing, thoughtful forms and a quality mindset carried through every step.</p>
              <div className="quality-list">
                <div><span className="list-icon"><Icon name="box" /></span><div><h3>Purpose-built range</h3><p>Formats selected around collection, care, containment and disposal workflows.</p></div></div>
                <div><span className="list-icon"><Icon name="spark" /></span><div><h3>Modern production mindset</h3><p>European-standard machinery and structured processes support consistency and productivity.</p></div></div>
                <div><span className="list-icon"><Icon name="map" /></span><div><h3>Built for supply confidence</h3><p>Ajman-based manufacturing helps make regional supply practical, responsive and easier to plan.</p></div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section certificate-section" id="certification">
        <div className="container certificate-grid">
          <Reveal className="reveal-column">
            <div className="certificate-copy">
              <p className="eyebrow">Quality &amp; compliance</p>
              <h2>Confidence you can <em>put on paper.</em></h2>
              <p className="section-intro">From ISO 9001:2015 quality management to CE conformity for core medical disposable products, our certificates make the standards behind our work visible.</p>
              <div className="certificate-meta"><span className="list-icon"><Icon name="shield" /></span><span><strong>Documented standards</strong><small>Quality system and product conformity</small></span></div>
              <p className="certificate-note">The CE certificate covers kidney trays, specimen containers, medicine cups, rectangular basins, sharps containers, male urinals and HDPE bottles.</p>
            </div>
          </Reveal>
          <div className="certificate-cards">
            <Reveal className="reveal-card">
              <a className="certificate-card" href="/images/ce-certificate-2026.pdf" target="_blank" rel="noreferrer" aria-label="Open the CE certificate in a new tab">
                <div className="certificate-card-image"><img src="/images/ce-certificate-2026.png" alt="CE certificate for Sterile Manufacturing LLC, certificate AE10143U-2026" /></div>
                <div className="certificate-card-body">
                  <p className="certificate-card-kicker"><span /> CE certificate</p>
                  <h3>Medical Devices Directive (93/42/EEC)</h3>
                  <p>Certificate AE10143U-2026 · valid through 27 July 2029</p>
                  <span className="text-link">Open certificate <Icon name="arrow" /></span>
                </div>
              </a>
            </Reveal>
            <Reveal className="reveal-card" delay={100}>
              <a className="certificate-card" href="/images/iso-26-27.webp" target="_blank" rel="noreferrer" aria-label="Open the ISO 9001:2015 certificate in a new tab">
                <div className="certificate-card-image"><img src="/images/iso-26-27.webp" alt="ISO 9001:2015 certificate for Sterile Manufacturing LLC" /></div>
                <div className="certificate-card-body">
                  <p className="certificate-card-kicker"><span /> Quality management</p>
                  <h3>ISO 9001:2015</h3>
                  <p>Quality management system certificate</p>
                  <span className="text-link">Open certificate <Icon name="arrow" /></span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <Reveal className="reveal-column"><div><p className="eyebrow">Straight answers</p><h2>Need the short<br /><em>version?</em></h2><p className="section-intro">Here are the questions buyers most often ask before they start a conversation.</p><a className="text-link" href="#contact">Ask something else <Icon name="arrow" /></a></div></Reveal>
          <Reveal className="reveal-column" delay={100}><div className="faq-list">{faqs.map((faq, index) => <details className="faq-item" key={faq.question} open={index === 0}><summary><span>{faq.question}</span><b>+</b></summary><p>{faq.answer}</p></details>)}</div></Reveal>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <Reveal className="reveal-column"><div className="contact-copy"><p className="eyebrow">Let’s make the next order easier</p><h2>Tell us what your team <em>needs.</em></h2><p>Share the product, quantity and delivery requirement. We’ll help you find the right format and next step.</p><div className="contact-buttons"><a className="button button-primary" href="mailto:sterileuae@gmail.com">Email the team <Icon name="mail" /></a><a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <Icon name="arrow" /></a></div></div></Reveal>
          <Reveal className="reveal-column" delay={100}>
            <div className="contact-visual">
              <div className="map-card">
                <div className="map-card-heading"><span className="detail-icon"><Icon name="map" /></span><span><small>Find the factory</small><strong>Al Jerf Industrial 2, Ajman</strong></span></div>
                <iframe title="Sterile Manufacturing location in Ajman, UAE" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <a className="map-card-link" href={mapUrl} target="_blank" rel="noreferrer">Open in Google Maps <Icon name="arrow" /></a>
              </div>
              <div className="contact-card"><div className="contact-card-top"><span className="brand-symbol small" aria-hidden="true"><span className="brand-symbol-top" /><span className="brand-symbol-bottom" /><span className="brand-symbol-bar" /></span><span>STERILE / CONTACT</span></div><div className="contact-details"><a href={`tel:${primaryPhone}`}><span className="detail-icon"><Icon name="phone" /></span><span><small>Call</small>{primaryPhoneDisplay}</span></a><a href="mailto:sterileuae@gmail.com"><span className="detail-icon"><Icon name="mail" /></span><span><small>Email</small>sterileuae@gmail.com</span></a></div><div className="contact-card-bottom"><span>Open to regional supply conversations</span><a href={mapUrl} target="_blank" rel="noreferrer">Get directions <Icon name="arrow" /></a></div></div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><a className="brand footer-logo-link" href="#top" aria-label="Sterile Manufacturing home"><span className="brand-image"><img src="/images/sterile-logo-transparent.png" alt="Sterile Manufacturing LLC" /></span></a><p>UAE-made medical disposables<br />for the everyday work of care.</p></div><div className="footer-links"><a href="#products">Products</a><a href="#quality">Quality</a><a href="#certification">Certification</a><a href="#paper-cups">Paper products</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></div><div className="footer-social"><span>Connect with Sterile</span><a className="footer-social-link" href="https://www.instagram.com/sterilemanufacturing/" target="_blank" rel="noreferrer" aria-label="Open Sterile Manufacturing on Instagram"><Icon name="instagram" /> @sterilemanufacturing <Icon name="arrow" /></a><a className="footer-social-link" href={mapUrl} target="_blank" rel="noreferrer" aria-label="Open Sterile Manufacturing location in Google Maps"><Icon name="map" /> Ajman, UAE <Icon name="arrow" /></a></div></div><div className="container legal-row"><span>© 2026 Sterile Manufacturing LLC. All rights reserved.</span><span>Made in Ajman, UAE</span></div></footer>
    </main>
  );
}
