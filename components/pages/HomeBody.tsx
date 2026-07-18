export function HomeBody() {
  return (
    <>
      <section className="hero">
          <div className="container hero-inner">
            <h1>The #1 <span className="accent">A and D Software</span><br />for Federal Firearms Licensees</h1>
            <p className="hero-sub">
              Replace your paper bound book with a fully searchable electronic A&amp;D ledger.
              Complete Form 4473s in minutes — not hours — with QR-code buyer signing,
              auto-detected 3310.4 and 3310.12 alerts, and a one-click compliance pack
              ATF inspectors actually approve.
            </p>
            <div className="hero-ctas">
              <a href="https://app.boundpro.app/signup" className="btn btn-amber btn-lg">Start 14-day free trial</a>
              <a href="#how" className="btn btn-secondary btn-lg btn-arrow">
                See how it works
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </div>
            <p className="hero-meta">No credit card required · Migrate from FastBound, Orchid, or Easybound in under an hour</p>

            <div className="hero-frame">
              <img src="/images/screenshots/dashboard.svg"
                   alt="BoundPro dashboard showing inventory totals, recent A&amp;D ledger entries, NICS pending forms, and FFL compliance status"
                   width="1200" height="800" />
            </div>
          </div>
        </section>

        
        <div className="trustbar">
          <div className="container trustbar-inner">
            <span className="trustbar-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
              ATF-compliant electronic A&amp;D
            </span>
            <span className="trustbar-divider" aria-hidden="true"></span>
            <span className="trustbar-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>
              4473 archives stored 20+ years
            </span>
            <span className="trustbar-divider" aria-hidden="true"></span>
            <span className="trustbar-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Audit-mode for ATF inspections
            </span>
          </div>
        </div>

        
        <section id="features">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">Everything an FFL needs</span>
              <h2>The A and D Software your gun shop runs on.</h2>
              <p>From the back-office bound book to the front-counter 4473, every workflow an FFL needs — purpose-built and quietly compliant.</p>
            </div>

            <div className="features-grid">
              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                </div>
                <h3>Digital A&amp;D Book</h3>
                <p>Replace your paper bound book with a fully searchable electronic A and D Software. Line numbers preserved, columns mirror 27 CFR § 478.125 exactly, and every change is hash-chained for ATF inspection.</p>
                <a href="/features#ledger">Inside the ledger →</a>
              </article>

              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8M16 17H8M10 9H8"/></svg>
                </div>
                <h3>Electronic Form 4473</h3>
                <p>Complete and sign 4473s in minutes, not hours. QR-code buyer signing on the customer's own phone, multi-firearm forms, Spanish version, and full eForms-ready archival.</p>
                <a href="/features#form-4473">See the 4473 flow →</a>
              </article>

              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>
                </div>
                <h3>NICS Tracking</h3>
                <p>Auto-tracks every delay using business-day math (the way ATF actually counts) and alerts you well before the 3-business-day proceed window expires. No more spreadsheet babysitting.</p>
                <a href="/features#compliance">Compliance detail →</a>
              </article>

              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <h3>ATF-Ready Reports</h3>
                <p>One-click compliance pack: ledger PDF, every 4473 in the date range, NTC traces, stolen-gun checks, and 3310 reports — zipped and timestamped. Audit mode hides everything else.</p>
                <a href="/features#audit">Audit mode →</a>
              </article>

              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L4 5v6c0 5 3 9 8 11 5-2 8-6 8-11V5l-8-3z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <h3>NFA Registry</h3>
                <p>Track every Form 1, 3, and 4 application, tax stamp, and dealer-sample loaner in one place. Status reminders, ATF-eForms XML export, and a tax-stamp document vault.</p>
                <a href="/features#nfa">NFA workflow →</a>
              </article>

              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-4v-7H10v7H6a2 2 0 01-2-2V9z"/></svg>
                </div>
                <h3>Multi-FFL Support</h3>
                <p>Run multiple licenses, satellite locations, and SOT registrations from one account. Switch books in a click, and route each transfer to the right FFL automatically.</p>
                <a href="/features#multi-ffl">Multi-license setup →</a>
              </article>
            </div>
          </div>
        </section>

        
        <section id="how" style={{ background: "var(--slate-50)", borderTop: "1px solid var(--slate-200)", borderBottom: "1px solid var(--slate-200)" }}>
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">How it works</span>
              <h2>From paper bound book to live ledger in an afternoon.</h2>
              <p>BoundPro is designed for the way FFLs actually work — at the back counter between customers, not in a compliance lab.</p>
            </div>

            <div className="steps">
              <div className="step">
                <span className="step-num">1</span>
                <h3>Import or migrate</h3>
                <p>Upload a CSV from your existing system — FastBound, Orchid eBound, Easybound, or your own spreadsheet — and we map the columns. Or scan in your paper book one entry at a time.</p>
                <div className="step-image"><img src="/images/screenshots/ledger.svg" alt="Migrating an existing A and D ledger into BoundPro" width="1200" height="800" loading="lazy" /></div>
              </div>
              <div className="step">
                <span className="step-num">2</span>
                <h3>Run the front counter</h3>
                <p>Start a 4473 from any in-stock firearm in two clicks. Hand the buyer a QR code on a printout or tablet — they sign on their own phone. Submit to NICS without leaving the form.</p>
                <div className="step-image"><img src="/images/screenshots/4473.svg" alt="Running a Form 4473 with QR-code buyer signing" width="1200" height="800" loading="lazy" /></div>
              </div>
              <div className="step">
                <span className="step-num">3</span>
                <h3>Stay inspection-ready</h3>
                <p>BoundPro watches every transaction in real time — multiple-handgun sales, border-state long-gun sales, NICS delays, FFL expiry, SOT renewal. When ATF visits, hand them a single PDF.</p>
                <div className="step-image"><img src="/images/screenshots/compliance.svg" alt="Compliance center with ATF Form 3310.4 alert and audit log" width="1200" height="800" loading="lazy" /></div>
              </div>
            </div>
          </div>
        </section>

        
        <section>
          <div className="container">
            <div className="compare-cta">
              <div>
                <span className="section-eyebrow" style={{ color: "var(--amber-500)" }}>Why dealers switch</span>
                <h2 style={{ marginTop: "12px" }}>Built for 2026, not 2010.</h2>
                <p>FastBound, Orchid, AIM, Easybound — they all do the basics. Where BoundPro pulls ahead is the small stuff that actually saves you 30 minutes per 4473 and keeps you out of trouble at inspection time.</p>
                <div className="compare-buttons">
                  <a href="/comparison" className="btn btn-amber btn-lg">See the comparison</a>
                  <a href="/pricing" className="btn btn-ghost btn-lg" style={{ color: "#fff", background: "rgba(255,255,255,0.06)" }}>View pricing →</a>
                </div>
              </div>
              <ul className="compare-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> QR-code buyer signing on the customer's own phone</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Built-in 3310.12 detection (border-state long guns)</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Hash-chained immutable audit log</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> NICS countdown by business days, not calendar days</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Free white-glove migration from any competitor</li>
              </ul>
            </div>
          </div>
        </section>

        
        <section id="pricing-teaser" style={{ background: "var(--slate-50)", borderTop: "1px solid var(--slate-200)", borderBottom: "1px solid var(--slate-200)" }}>
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">Simple pricing</span>
              <h2>One transparent price per FFL — no per-transaction fees.</h2>
              <p>Every plan includes the full A and D Software, electronic 4473, NICS tracking, and unlimited users. Pay monthly, cancel anytime.</p>
            </div>

            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-tier">Starter</div>
                <div className="pricing-price"><span className="amount">$29</span><span className="period">/ month</span></div>
                <div className="pricing-tag">For single-location dealers</div>
                <ul className="pricing-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 1 FFL, up to 500 4473s/year</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Full A&amp;D ledger &amp; e4473</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 3310.4 / 3310.12 detection</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Email support</li>
                </ul>
                <div className="pricing-cta"><a className="btn btn-secondary btn-lg" href="/pricing">View details</a></div>
              </div>

              <div className="pricing-card featured">
                <span className="pricing-badge">Most popular</span>
                <div className="pricing-tier">Professional</div>
                <div className="pricing-price"><span className="amount">$79</span><span className="period">/ month</span></div>
                <div className="pricing-tag">For multi-FFL retailers &amp; SOT dealers</div>
                <ul className="pricing-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Up to 3 FFLs, unlimited 4473s</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Full NFA registry &amp; SOT tracking</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> REST API access</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Priority support &amp; migration help</li>
                </ul>
                <div className="pricing-cta"><a className="btn btn-primary btn-lg" href="https://app.boundpro.app/signup">Start free trial</a></div>
              </div>

              <div className="pricing-card">
                <div className="pricing-tier">Enterprise</div>
                <div className="pricing-price"><span className="amount">$199</span><span className="period">/ month</span></div>
                <div className="pricing-tag">For chains, distributors &amp; manufacturers</div>
                <ul className="pricing-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Unlimited FFLs &amp; locations</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Webhooks &amp; SSO (SAML)</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> White-glove onboarding</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Dedicated account manager</li>
                </ul>
                <div className="pricing-cta"><a className="btn btn-secondary btn-lg" href="/pricing">Talk to sales</a></div>
              </div>
            </div>
          </div>
        </section>

        
        <section>
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">From the back counter</span>
              <h2>What FFLs actually say.</h2>
              <p>Sample feedback from dealers piloting BoundPro. Names changed, opinions are theirs.</p>
            </div>

            <div className="testimonials">
              <article className="testimonial">
                <p className="testimonial-quote">"Switched from FastBound after seven years. The QR code on the buyer's own phone alone saves me a tablet and 10 minutes per transfer. Migration took 38 minutes for 11,000 entries."</p>
                <div className="testimonial-author">
                  <span className="testimonial-avatar" aria-hidden="true">JM</span>
                  <div>
                    <strong>Jerry M.</strong> · Single-location FFL, Tennessee
                  </div>
                </div>
              </article>

              <article className="testimonial">
                <p className="testimonial-quote">"The 3310.12 auto-detection caught a long-gun sale to an Arizona buyer that I would have missed. That single feature is worth the subscription. ATF inspection went smoothly with the audit pack."</p>
                <div className="testimonial-author">
                  <span className="testimonial-avatar" aria-hidden="true">AT</span>
                  <div>
                    <strong>Alex T.</strong> · 3-store retailer, California
                  </div>
                </div>
              </article>

              <article className="testimonial">
                <p className="testimonial-quote">"We're a Class III shop running suppressors and SBRs. The NFA registry plus dealer-sample workflow is the cleanest I've used. Form 4 status updates appear without us touching anything."</p>
                <div className="testimonial-author">
                  <span className="testimonial-avatar" aria-hidden="true">RD</span>
                  <div>
                    <strong>Rachel D.</strong> · NFA dealer, Texas
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        
        <section className="final-cta">
          <div className="container">
            <h2>Ready to retire your paper bound book?</h2>
            <p>14-day free trial. No credit card. No per-transaction fees. Real humans on chat if you get stuck during migration.</p>
            <div className="hero-ctas">
              <a href="https://app.boundpro.app/signup" className="btn btn-amber btn-lg">Start your free trial</a>
              <a href="/comparison" className="btn btn-ghost btn-lg" style={{ color: "#fff", background: "rgba(255,255,255,0.08)" }}>Compare to FastBound &amp; Orchid →</a>
            </div>
          </div>
        </section>
    </>
  );
}
