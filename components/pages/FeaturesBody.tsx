export function FeaturesBody() {
  return (
    <>
      <section className="page-hero">
          <div className="container">
            <span className="hero-eyebrow"><span className="dot" aria-hidden="true"></span> Every workflow an FFL needs</span>
            <h1>The complete A and D Software for Federal Firearms Licensees.</h1>
            <p>From the back-office bound book to the front-counter 4473 to the after-hours ATF inspection — every BoundPro feature in detail.</p>
          </div>
        </section>

        
        <section id="ledger" style={{ padding: 0 }}>
          <div className="container">
            <div className="feature-block">
              <div className="feature-text">
                <span className="section-eyebrow">Acquisition &amp; Disposition Ledger</span>
                <h2>The core A and D Software functionality, done right.</h2>
                <p>The columns and structure mirror 27 CFR § 478.125 exactly — line numbers preserved, manufacturer / importer / model / serial / type / caliber / receipt / disposition. Filter by status, search any field, and hand the ATF a print-perfect PDF.</p>
                <ul className="feature-list">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Multiple bound books per FFL — perfect for splitting NFA, pawn, gunsmithing</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Saved filter sets — bookmark "all NFA in stock" or "Q1 dispositions"</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Cross-book serial-number search across every FFL you operate</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Batch acquisitions — auto-incrementing line numbers for shipment intake</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> CSV export, formatted PDF print-out, and ATF-ready ZIP</li>
                </ul>
              </div>
              <div className="feature-visual">
                <img src="/images/screenshots/ledger.svg" alt="BoundPro A and D ledger with filter tabs, status pills, NFA and PAWN badges" width="1200" height="800" loading="lazy" />
              </div>
            </div>

            
            <div id="form-4473" className="feature-block flip">
              <div className="feature-text">
                <span className="section-eyebrow">Form 4473 Workflow</span>
                <h2>From "ready to buy" to "proceed" in under five minutes.</h2>
                <p>Start a 4473 from any in-stock firearm with two clicks. Buyer information auto-populates from a driver's-license scan or photo ID. The QR code on screen lets the buyer review and sign on their own phone — no kiosk hardware, no tablet to wipe down.</p>
                <ul className="feature-list">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> QR-code buyer signing on the customer's own phone</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Multi-firearm 4473s for batch transfers</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Spanish-language version, fully ATF-aligned</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Topaz signature pad and touchscreen as alternates</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Batch print &amp; download — multiple completed 4473s as one PDF or ZIP</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 20-year archival per ATF retention requirement, hash-chained</li>
                </ul>
              </div>
              <div className="feature-visual">
                <img src="/images/screenshots/4473.svg" alt="Electronic Form 4473 in progress with QR code panel for buyer signing" width="1200" height="800" loading="lazy" />
              </div>
            </div>

            
            <div id="compliance" className="feature-block">
              <div className="feature-text">
                <span className="section-eyebrow">NICS &amp; Compliance Detections</span>
                <h2>The compliance items most A and D Software misses, caught automatically.</h2>
                <p>BoundPro counts NICS the way ATF actually counts — business days, with federal holidays applied — and watches every transfer for the ATF reports your previous software made you hunt down manually.</p>
                <ul className="feature-list">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> NICS countdown by business day, holiday-aware</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Form 3310.4 auto-detect — multiple-handgun sales within 5 business days</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Form 3310.12 auto-detect — multiple-long-gun sales to non-residents in border states (AZ, CA, NM, TX)</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> NTC trace logging with 24-hour ATF response window timer</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Stolen-gun verification (NCIC) on every acquisition</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> FFL renewal reminders at 90, 60, 30, and 7 days</li>
                </ul>
              </div>
              <div className="feature-visual">
                <img src="/images/screenshots/compliance.svg" alt="Compliance center with 3310.4 alert, NICS countdown, FFL expiry warning, and audit log" width="1200" height="800" loading="lazy" />
              </div>
            </div>

            
            <div id="nfa" className="feature-block flip">
              <div className="feature-text">
                <span className="section-eyebrow">NFA Tracking &amp; Dealer Samples</span>
                <h2>NFA-aware A and D Software for Class III dealers.</h2>
                <p>Track every Form 1, 3, and 4 application from filing to tax stamp. Dedicated dealer-sample workflow keeps loaner suppressors and post-86 samples out of your customer-facing inventory while still satisfying ATF retention rules.</p>
                <ul className="feature-list">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> NFA-item registry (suppressors, SBRs, SBSs, machine guns, AOWs, DDs)</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Form 1, 3, 4 status tracking with serial-tied tax stamps</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Dealer-sample loaner workflow — intake, checkout, return</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> SOT Class II/III year tracking with renewal reminders</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Tax-stamp document vault with revision history</li>
                </ul>
              </div>
              <div className="feature-visual">
                <img src="/images/screenshots/dashboard.svg" alt="BoundPro NFA tracking shown alongside the workspace selector with SOT Class III badge" width="1200" height="800" loading="lazy" />
              </div>
            </div>

            
            <div id="multi-ffl" className="feature-block">
              <div className="feature-text">
                <span className="section-eyebrow">Multi-license &amp; SOT Management</span>
                <h2>One account. Every license. Every location.</h2>
                <p>Run all your FFLs — main store, satellite, gunsmith bench, manufacturer, importer — from one workspace. Books are scoped per license, but search and reporting span the whole org. Each user gets per-license permissions.</p>
                <ul className="feature-list">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Unlimited FFLs (Pro &amp; Enterprise)</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Per-license user permissions (owner, manager, counter, attorney read-only)</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Inter-FFL transfers logged on both sides automatically</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Compliance pack scoped per FFL or rolled-up across the org</li>
                </ul>
              </div>
              <div className="feature-visual">
                <img src="/images/screenshots/reports.svg" alt="Reports across multiple FFLs with acquisition trend chart, NICS donut, firearm-type breakdown" width="1200" height="800" loading="lazy" />
              </div>
            </div>

            
            <div id="api" className="feature-block flip">
              <div className="feature-text">
                <span className="section-eyebrow">API &amp; Integrations</span>
                <h2>Wire BoundPro into your POS, ERP, or e-commerce stack.</h2>
                <p>A clean REST API and HTTPS-signed webhooks let you push acquisitions from your distributor feeds, sync 4473 completion to your POS, or pull bound-book exports nightly into your accounting system.</p>
                <ul className="feature-list">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> REST API with pagination, idempotency keys, and rate limits</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Webhooks for acquisition, disposition, 4473 completed, NICS response</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> CSV import scheduled or ad-hoc</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> SAML SSO &amp; SCIM (Enterprise)</li>
                </ul>
              </div>
              <div className="feature-visual">
                <img src="/images/screenshots/dashboard.svg" alt="BoundPro dashboard with shortcut tiles for ledger, transfers, NTC traces, and stolen checks" width="1200" height="800" loading="lazy" />
              </div>
            </div>

            
            <div id="audit" className="feature-block">
              <div className="feature-text">
                <span className="section-eyebrow">Audit Mode &amp; ATF Inspections</span>
                <h2>One toggle, one PDF, one calm inspector.</h2>
                <p>Audit mode hides everything that isn't directly relevant to the inspector — pricing, internal notes, customer demographics — and surfaces only the records and reports the ATF can subpoena. The compliance pack ZIP includes the full ledger, every 4473 in the date range, all stolen-gun checks, NTC traces, and 3310.4/12 reports.</p>
                <ul className="feature-list">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Read-only audit mode with single-toggle activation</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Hash-chained immutable audit log per record</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Date-range compliance pack ZIP (ledger PDF + every 4473 + reports)</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Cease-of-business export with 20-year retention bundle</li>
                </ul>
              </div>
              <div className="feature-visual">
                <img src="/images/screenshots/compliance.svg" alt="Audit log with hash-chained badge and timestamped action history" width="1200" height="800" loading="lazy" />
              </div>
            </div>

            
            <div id="import" className="feature-block flip">
              <div className="feature-text">
                <span className="section-eyebrow">Bulk Import &amp; Migration</span>
                <h2>Bring your existing book over in an afternoon.</h2>
                <p>BoundPro ships with importers for FastBound, Orchid eBound, Easybound, and AIM CSV exports — column mapping, status normalization, line-number preservation, and dry-run preview. White-glove migration is free on every plan.</p>
                <ul className="feature-list">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Pre-built mappings for FastBound, Orchid, Easybound, AIM</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Generic CSV importer with column mapper</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Dry-run preview with row-level validation before commit</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Free migration assist on every plan, including Starter</li>
                </ul>
              </div>
              <div className="feature-visual">
                <img src="/images/screenshots/ledger.svg" alt="Imported A and D ledger with line numbers preserved" width="1200" height="800" loading="lazy" />
              </div>
            </div>

          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <h2>One A and D Software. Every workflow. Zero spreadsheets.</h2>
            <p>Start a free 14-day trial — no credit card, no setup call required.</p>
            <div className="hero-ctas">
              <a href="https://app.boundpro.app/signup" className="btn btn-amber btn-lg">Start free trial</a>
              <a href="/comparison" className="btn btn-ghost btn-lg" style={{ color: "#fff", background: "rgba(255,255,255,0.08)" }}>Compare to FastBound &amp; Orchid →</a>
            </div>
          </div>
        </section>
    </>
  );
}
