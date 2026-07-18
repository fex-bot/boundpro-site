export function AboutBody() {
  return (
    <>
      <section className="page-hero">
          <div className="container">
            <span className="hero-eyebrow"><span className="dot" aria-hidden="true"></span> About BoundPro</span>
            <h1>The A and D Software FFLs actually want to use.</h1>
            <p>We're building modern compliance software for Federal Firearms Licensees — fast, clean, and designed around the way you actually run your gun shop.</p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="about-grid">
              <div>
                <h2>Why we're building this</h2>
                <p>Most A and D Software for FFLs was designed before the iPhone. The bound book gets done, but the workflow around it — finding a record, completing a 4473 between customers at the counter, catching a 3310.4 deadline before it lapses, exporting an inspection pack at 8 PM the night before ATF shows up — feels like it was bolted on after the fact.</p>
                <p>BoundPro is the version that wasn't bolted on. We started with the actual regulation (27 CFR § 478.125 and the ATF rulings that authorize electronic bound books), worked outward to the workflows real FFLs run dozens of times a day, and built the UI for the device the back-counter clerk actually has in their hand — usually a phone or a tired laptop, not a dedicated kiosk.</p>

                <h2 style={{ marginTop: "56px" }}>What we promise</h2>
                <p><strong>Honest claims, cited.</strong> Every feature comparison we make is sourced. Every legal claim about the ATF references the actual regulation. We'll never claim a feature we haven't shipped.</p>
                <p><strong>Your data is yours.</strong> Full CSV and PDF export at any time, no friction. If you decide BoundPro isn't for you, your bound book leaves with you in one click.</p>
                <p><strong>Real humans.</strong> Support is staffed by people who can read 27 CFR fluently and have actually completed a 4473 themselves. No tier-1 script readers.</p>
                <p><strong>Stay independent.</strong> BoundPro is not affiliated with the ATF, FastBound, Orchid, Easybound, AIM, or Silencer Shop. We don't take vendor money, we don't sell customer data, and our pricing isn't engineered to push you to call sales.</p>
              </div>

              <aside className="about-side" aria-labelledby="commitments-heading">
                <h3 id="commitments-heading">Our commitments</h3>
                <ul>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L4 5v6c0 5 3 9 8 11 5-2 8-6 8-11V5l-8-3z"/></svg>
                    <span>US-based hosting, AES-256 encryption at rest, TLS 1.3 in transit.</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <span>Bound-book retention well beyond ATF's 20-year requirement. Hash-chained records for tamper evidence.</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Free white-glove migration from FastBound, Orchid, Easybound, AIM, or your own spreadsheet — even on the Starter plan.</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>
                    <span>Your data exports in one click, any time, in CSV or formatted PDF — no retention games on cancellation.</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
                    <span>Support staffed by people who can quote 27 CFR § 478.125 and have actually run a 4473 at the counter.</span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section style={{ background: "var(--slate-50)", borderTop: "1px solid var(--slate-200)", borderBottom: "1px solid var(--slate-200)" }}>
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">Built on the regulation, not around it</span>
              <h2>What "ATF-compliant" actually means here.</h2>
              <p>BoundPro was designed against the text of 27 CFR § 478.125 and ATF Ruling 2016-1 (the rulings that authorize cloud-based electronic bound books). Every column, every status, every retention rule maps to specific regulatory language.</p>
            </div>

            <div className="features-grid">
              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <h3>27 CFR § 478.125</h3>
                <p>The federal regulation that defines what an A&amp;D record must contain. BoundPro's ledger schema matches the required fields column-for-column.</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-4v-7H10v7H6a2 2 0 01-2-2V9z"/></svg>
                </div>
                <h3>ATF Ruling 2016-1</h3>
                <p>Authorizes cloud-based electronic bound books with specific safeguards. BoundPro's hash chain, immutable audit log, and US data hosting are designed to those exact requirements.</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L4 5v6c0 5 3 9 8 11 5-2 8-6 8-11V5l-8-3z"/></svg>
                </div>
                <h3>27 CFR § 478.126a / .126b</h3>
                <p>The multiple-handgun-sale (3310.4) and border-state long-gun (3310.12) reporting requirements. BoundPro's auto-detection runs against every transaction in real time.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <h2>Want to talk to a human?</h2>
            <p>If you're evaluating BoundPro for a multi-store rollout or a Class III shop with a non-trivial migration, drop us a line — a real human (probably a co-founder) will reply.</p>
            <div className="hero-ctas">
              <a href="mailto:hello@boundpro.app" className="btn btn-amber btn-lg">Email hello@boundpro.app</a>
              <a href="https://app.boundpro.app/signup" className="btn btn-ghost btn-lg" style={{ color: "#fff", background: "rgba(255,255,255,0.08)" }}>Or just start a free trial →</a>
            </div>
          </div>
        </section>
    </>
  );
}
