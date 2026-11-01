const marketAssets = [
  { ticker: "BTC", name: "Bitcoin", price: "$—", change: "Awaiting live data", mark: "₿", tone: "gold" },
  { ticker: "ETH", name: "Ethereum", price: "$—", change: "Awaiting live data", mark: "◆", tone: "violet" },
  { ticker: "SOL", name: "Solana", price: "$—", change: "Awaiting live data", mark: "◎", tone: "mint" },
];

const learningCards = [
  {
    number: "01",
    level: "FOUNDATIONS",
    title: "Understand the building blocks",
    description: "Learn what blockchain is, how digital assets work and the ideas behind Bitcoin.",
    time: "Start here",
  },
  {
    number: "02",
    level: "MARKET KNOWLEDGE",
    title: "Read the market with context",
    description: "Explore market capitalisation, liquidity, volatility and the signals investors watch.",
    time: "Beginner friendly",
  },
  {
    number: "03",
    level: "RISK & STRATEGY",
    title: "Build a thoughtful approach",
    description: "Understand risk, custody, scams and the difference between trading and investing.",
    time: "Build confidence",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M20 3.5 35.5 12.4v15.2L20 36.5 4.5 27.6V12.4L20 3.5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 25.8 20 10l8 15.8M15.1 20h9.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        A clearer perspective on digital assets is coming into focus.
        <span className="announcement-link">Explore the platform <ArrowUpRight /></span>
      </div>

      <header className="site-header">
        <a className="brand" href="#" aria-label="ORVANTIS home">
          <BrandMark />
          <span>ORVANTIS</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#markets">Markets</a>
          <a href="#academy">Academy</a>
          <a href="#approach">Our approach</a>
        </nav>
        <div className="header-actions">
          <a className="sign-in" href="#get-started">Sign in</a>
          <a className="button button-small button-light" href="#get-started">Get started <ArrowUpRight /></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> THE DIGITAL ASSET LANDSCAPE, MADE CLEARER</div>
          <h1>See the signal.<br/><span>Understand</span> the future.</h1>
          <p className="hero-description">
            A more considered way to explore digital assets. Build your knowledge,
            follow the markets and make decisions with greater context.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#academy">Explore the academy <ArrowUpRight /></a>
            <a className="text-link" href="#markets">Discover the markets <span>→</span></a>
          </div>
          <div className="hero-footnote">
            <span className="footnote-icon">✳</span>
            Education-first. Insight-led. Built with care.
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract digital market data illustration">
          <div className="visual-topline"><span>MARKET PERSPECTIVE</span><span>01 / 03</span></div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="visual-core">
            <div className="core-symbol">O</div>
            <div className="core-caption">A NEW PERSPECTIVE</div>
          </div>
          <div className="floating-stat stat-one"><span>MARKET DATA</span><strong>In context</strong><i>◎</i></div>
          <div className="floating-stat stat-two"><span>YOUR KNOWLEDGE</span><strong>In progress</strong><i>↗</i></div>
          <div className="visual-bottomline"><span>CLARITY OVER NOISE</span><span>ORVANTIS / EST. 2026</span></div>
        </div>
      </section>

      <section className="trust-strip" id="approach">
        <div><span className="strip-icon">◈</span><span>Knowledge before action</span></div>
        <div><span className="strip-icon">⌁</span><span>Market context, not noise</span></div>
        <div><span className="strip-icon">⬡</span><span>Security-minded by design</span></div>
      </section>

      <section className="section market-section" id="markets">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> MARKET OBSERVER</div>
            <h2>A view of the <em>market.</em></h2>
            <p>Follow the digital asset landscape with information designed to be easier to understand.</p>
          </div>
          <span className="data-status"><span className="status-dot" /> LIVE DATA INTEGRATION: PLANNED</span>
        </div>
        <div className="market-grid">
          {marketAssets.map((asset) => (
            <article className="market-card" key={asset.ticker}>
              <div className="asset-heading">
                <span className={`asset-mark ${asset.tone}`}>{asset.mark}</span>
                <div><strong>{asset.name}</strong><small>{asset.ticker}</small></div>
                <span className="asset-menu">···</span>
              </div>
              <div className="asset-price">{asset.price}</div>
              <div className="asset-change">{asset.change}</div>
              <div className="sparkline" aria-hidden="true"><svg viewBox="0 0 300 54" preserveAspectRatio="none"><path d="M0 39 C20 37 24 17 43 24 S70 42 89 31 S112 34 132 19 S161 30 178 20 S201 28 220 14 S251 22 267 11 S285 17 300 5" /></svg></div>
            </article>
          ))}
        </div>
        <p className="disclaimer">Market cards are design placeholders. No live prices or investment signals are displayed in this preview.</p>
      </section>

      <section className="section academy-section" id="academy">
        <div className="academy-intro">
          <div className="eyebrow"><span className="eyebrow-line" /> THE ORVANTIS ACADEMY</div>
          <h2>Confidence begins<br/>with <em>understanding.</em></h2>
          <p>Financial concepts should feel approachable, not intimidating. Start with the fundamentals and build at your own pace.</p>
          <a className="text-link" href="#get-started">Discover the learning experience <span>→</span></a>
        </div>
        <div className="learning-list">
          {learningCards.map((card) => (
            <article className="learning-card" key={card.number}>
              <span className="learning-number">{card.number}</span>
              <div className="learning-content">
                <div className="learning-meta">{card.level} <span>·</span> {card.time}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <span className="learning-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-cta" id="get-started">
        <div className="eyebrow"><span className="eyebrow-line" /> A MORE INFORMED START</div>
        <h2>Make room for<br/><em>better questions.</em></h2>
        <p>Explore digital finance with a platform designed around learning, perspective and thoughtful decisions.</p>
        <a className="button button-primary" href="#academy">Begin exploring <ArrowUpRight /></a>
        <span className="cta-note">ORVANTIS is under development. Account and transaction features are not yet available.</span>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#"><BrandMark /><span>ORVANTIS</span></a>
        <span className="footer-copy">© 2026 ORVANTIS. A platform in development.</span>
        <div className="footer-links"><a href="#approach">About</a><a href="#academy">Academy</a><a href="mailto:hello@orvantis.example">Contact</a></div>
      </footer>
    </main>
  );
}
