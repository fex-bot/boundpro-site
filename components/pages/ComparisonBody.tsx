export function ComparisonBody() {
  return (
    <>
      <section className="page-hero">
          <div className="container">
            <h1>The honest A and D Software comparison.</h1>
            <p>Every claim about a competitor below is sourced from that vendor's own public pricing or feature page. We'll update this page as competitors ship new features. If something is wrong, <a href="mailto:hello@boundpro.app">tell us</a> — we'll fix it.</p>
          </div>
        </section>

        <section style={{ paddingTop: "56px" }}>
          <div className="container">

            <div className="compare-table-wrap">
              <div className="compare-table-scroll">
                <table className="compare-table">
                  <caption className="sr-only">Feature comparison of BoundPro, FastBound, Orchid eBound, Easybound, and AIM POS A and D Software</caption>
                  <thead>
                    <tr>
                      <th></th>
                      <th className="brand-col us">BoundPro</th>
                      <th className="brand-col">FastBound</th>
                      <th className="brand-col">Orchid eBound</th>
                      <th className="brand-col">Easybound</th>
                      <th className="brand-col">AIM POS</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>Starting price</td>
                      <td className="cell-center us-col"><strong>$29 / mo</strong></td>
                      <td className="cell-center">$9 / mo<sup className="fn"><a href="#fn1">1</a></sup></td>
                      <td className="cell-center">Free → $25 / mo<sup className="fn"><a href="#fn2">2</a></sup></td>
                      <td className="cell-center">$30 / mo<sup className="fn"><a href="#fn3">3</a></sup></td>
                      <td className="cell-center cell-text">Demo only<sup className="fn"><a href="#fn4">4</a></sup></td>
                    </tr>

                    <tr>
                      <td>Volume / pricing model</td>
                      <td className="cell-center us-col cell-text">Flat per-FFL · unlimited 4473s on Pro+</td>
                      <td className="cell-center cell-text">Tiered by acquisitions/yr · $9–$99<sup className="fn"><a href="#fn1">1</a></sup></td>
                      <td className="cell-center cell-text">Tiered by acquisitions/yr · $0–$35<sup className="fn"><a href="#fn2">2</a></sup></td>
                      <td className="cell-center cell-text">Per-user · e4473 add-on extra<sup className="fn"><a href="#fn3">3</a></sup></td>
                      <td className="cell-center cell-text">Quote-based POS bundle<sup className="fn"><a href="#fn4">4</a></sup></td>
                    </tr>

                    <tr>
                      <td>Free trial</td>
                      <td className="cell-center us-col cell-text">14 days, no card</td>
                      <td className="cell-center cell-text">14 days, no card<sup className="fn"><a href="#fn1">1</a></sup></td>
                      <td className="cell-center cell-text">Free Starter tier</td>
                      <td className="cell-center cell-text">Free trial</td>
                      <td className="cell-center cell-text">Demo</td>
                    </tr>

                    <tr>
                      <td>Electronic 4473</td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-text">Add-on<sup className="fn"><a href="#fn3">3</a></sup></td>
                      <td className="cell-center cell-text">Via FastBound<sup className="fn"><a href="#fn4">4</a></sup></td>
                    </tr>

                    <tr>
                      <td>QR-code buyer signing<br /><span style={{ fontSize: "11.5px", color: "var(--slate-500)", fontWeight: 400 }}>(buyer signs on their own phone)</span></td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-text">Touchscreen / Topaz<sup className="fn"><a href="#fn5">5</a></sup></td>
                      <td className="cell-center cell-text">Kiosk mode<sup className="fn"><a href="#fn2">2</a></sup></td>
                      <td className="cell-center cell-no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>Multi-firearm 4473</td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-text">—</td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>Spanish 4473</td>
                      <td className="cell-center us-col cell-text">Q2 2026<sup className="fn"><a href="#fn-bp">★</a></sup></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><sup className="fn"><a href="#fn6">6</a></sup></td>
                      <td className="cell-center cell-text">—</td>
                      <td className="cell-center cell-text">—</td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>3310.4 auto-detection<br /><span style={{ fontSize: "11.5px", color: "var(--slate-500)", fontWeight: 400 }}>(multiple-handgun sale)</span></td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><sup className="fn"><a href="#fn7">7</a></sup></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><sup className="fn"><a href="#fn2">2</a></sup></td>
                      <td className="cell-center cell-text">—</td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>3310.12 auto-detection<br /><span style={{ fontSize: "11.5px", color: "var(--slate-500)", fontWeight: 400 }}>(border-state long gun)</span></td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><sup className="fn"><a href="#fn7">7</a></sup></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><sup className="fn"><a href="#fn2">2</a></sup></td>
                      <td className="cell-center cell-text">—</td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>NICS delay alerts<br /><span style={{ fontSize: "11.5px", color: "var(--slate-500)", fontWeight: 400 }}>(business-day countdown)</span></td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-text">Add-on<sup className="fn"><a href="#fn3">3</a></sup></td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>NFA registry tracking</td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><sup className="fn"><a href="#fn1">1</a></sup></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>SOT Class III tracking</td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-text">Manual</td>
                      <td className="cell-center cell-text">Manual</td>
                      <td className="cell-center cell-text">Manual</td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>Dealer-sample workflow</td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-text">Manual tag</td>
                      <td className="cell-center cell-text">Manual tag</td>
                      <td className="cell-center cell-text">Manual tag</td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>Multi-FFL support</td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><sup className="fn"><a href="#fn1">1</a></sup></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                    </tr>

                    <tr>
                      <td>REST API access</td>
                      <td className="cell-center us-col cell-text">Pro+</td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><sup className="fn"><a href="#fn8">8</a></sup></td>
                      <td className="cell-center cell-text">Custom tier<sup className="fn"><a href="#fn2">2</a></sup></td>
                      <td className="cell-center cell-text">—</td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                    </tr>

                    <tr>
                      <td>Outbound webhooks</td>
                      <td className="cell-center us-col cell-text">Enterprise</td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><sup className="fn"><a href="#fn9">9</a></sup></td>
                      <td className="cell-center cell-text">—</td>
                      <td className="cell-center cell-text">—</td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>Bulk CSV import</td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                    </tr>

                    <tr>
                      <td>Audit mode for ATF inspection</td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-text">Read-only access<sup className="fn"><a href="#fn1">1</a></sup></td>
                      <td className="cell-center cell-text">"Rapid Review"<sup className="fn"><a href="#fn2">2</a></sup></td>
                      <td className="cell-center cell-text">—</td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>Hash-chained audit log</td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-text">Standard log</td>
                      <td className="cell-center cell-text">Standard log</td>
                      <td className="cell-center cell-text">Standard log</td>
                      <td className="cell-center cell-text">Standard log</td>
                    </tr>

                    <tr>
                      <td>White-glove migration</td>
                      <td className="cell-center us-col cell-text">Free, all plans</td>
                      <td className="cell-center cell-text">Free support<sup className="fn"><a href="#fn1">1</a></sup></td>
                      <td className="cell-center cell-text">Concierge service</td>
                      <td className="cell-center cell-text">Onboarding included<sup className="fn"><a href="#fn3">3</a></sup></td>
                      <td className="cell-center cell-text">Quote-based</td>
                    </tr>

                    <tr>
                      <td>ATF legal-defense backing</td>
                      <td className="cell-center us-col cell-text">—</td>
                      <td className="cell-center cell-text">FFLGuard<sup className="fn"><a href="#fn1">1</a></sup></td>
                      <td className="cell-center cell-text">In-house attorneys<sup className="fn"><a href="#fn2">2</a></sup></td>
                      <td className="cell-center cell-text">—</td>
                      <td className="cell-center cell-text">—</td>
                    </tr>

                    <tr>
                      <td>Modern UI / mobile-friendly</td>
                      <td className="cell-center us-col cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-partial">Partial</td>
                      <td className="cell-center cell-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></td>
                      <td className="cell-center cell-partial">Desktop-first</td>
                      <td className="cell-center cell-partial">Desktop-first</td>
                    </tr>

                    <tr>
                      <td>Annual billing discount</td>
                      <td className="cell-center us-col cell-text">15% off</td>
                      <td className="cell-center cell-text">Available</td>
                      <td className="cell-center cell-text">Available</td>
                      <td className="cell-center cell-text">Available<sup className="fn"><a href="#fn3">3</a></sup></td>
                      <td className="cell-center cell-text">Quote-based</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            <p style={{ marginTop: "12px", fontSize: "12.5px", color: "var(--slate-500)" }}>Last verified: <time dateTime="2026-05-04">May 2026</time>. Pricing and feature data sourced from each vendor's public pages — see footnotes below. ✓ = ships today · — = not advertised on the vendor's public materials · "Manual" = the data field exists but the workflow isn't automated.</p>

            
            <div className="compare-narrative" style={{ maxWidth: "880px", marginTop: "64px" }}>
              <h2>How the players actually compare</h2>

              <h3>FastBound vs BoundPro</h3>
              <p>FastBound has been the industry standard since 2010 and remains the deepest, most battle-tested platform. Its tiered $9–$99/month pricing is genuinely competitive — a small dealer doing under 100 acquisitions/year pays less than at any other vendor.<sup className="fn"><a href="#fn1">1</a></sup> What FastBound doesn't lead on anymore is interaction design. The 4473 still requires a touchscreen or Topaz signature pad on the dealer's hardware<sup className="fn"><a href="#fn5">5</a></sup>; BoundPro's QR-code workflow lets the buyer sign on their own phone, no shared device required. FastBound's webhooks and API are mature and well-documented<sup className="fn"><a href="#fn8">8</a></sup><sup className="fn"><a href="#fn9">9</a></sup> — for now BoundPro matches features but not depth here.</p>

              <h3>Orchid eBound vs BoundPro</h3>
              <p>Orchid is the enterprise pick. It powers a published 60% of US-made firearms<sup className="fn"><a href="#fn2">2</a></sup>, ships native 3310.4 and 3310.12 automation, and bundles in-house attorney compliance review — the latter is genuinely unique and a real differentiator for dealers that have been audited. The flip side: Orchid's value really starts at the Performance tier ($35/mo for 2,500 acquisitions); the Free starter caps at 100 acquisitions/year and the $25/mo Essentials tier caps at 1,000.<sup className="fn"><a href="#fn2">2</a></sup> Multi-store retailers often end up on the Custom Advanced/API plan with quote-based pricing. BoundPro is flat per-FFL with unlimited 4473s on Pro and up.</p>

              <h3>Easybound vs BoundPro</h3>
              <p>Easybound (Easy Bound Book) is the long-running utility option. The Lite tier is $30/mo for dealers ($50 for manufacturers/importers).<sup className="fn"><a href="#fn3">3</a></sup> The catch is that the integrated electronic 4473 and NICS background checks are <em>add-ons</em>, not included in Lite — to get a full A and D Software workflow you're looking at Easybound's AD Book tier ($150/mo for the first user, $100 each additional)<sup className="fn"><a href="#fn3">3</a></sup>. Easybound's strength is depth on inventory ERP for manufacturers; its weakness is that the e4473 / counter experience is bolted on rather than designed in.</p>

              <h3>AIM POS vs BoundPro</h3>
              <p>AIM is a point-of-sale system first; bound-book features are integrated through a partnership with FastBound rather than built natively.<sup className="fn"><a href="#fn4">4</a></sup> If you need a full retail POS — registers, receipts, inventory, layaway — and bound-book functionality on top, AIM is a real candidate, but the bound-book workflow is essentially FastBound under the hood. Pricing is quote-based and not published. BoundPro is the inverse trade: a deep A and D Software with REST/webhook hooks for integrating into your POS, rather than a full POS that includes a bound book.</p>

              <h3>Silencer Shop / Silencer Central tools</h3>
              <p>Silencer Shop's "Full Auto" software is laser-focused on NFA — Form 4 prep, kiosk fingerprinting, customer onboarding for suppressor sales. For the actual A and D Software (bound book + 4473), Silencer Shop partners with Orchid eBound rather than building its own.<sup className="fn"><a href="#fn10">10</a></sup> If you're a NFA-heavy shop that's already on Silencer Shop's stack, the path of least resistance is staying on Orchid through that partnership. BoundPro's NFA registry covers the same ground (Forms 1/3/4, tax stamps, dealer samples) without requiring the kiosk integration.</p>

              <h3>The honest summary</h3>
              <p>If you're a high-volume single-FFL dealer with under 100 acquisitions/year and you don't care about UI polish, FastBound's $9/mo Starter is hard to beat on cost. If you want the most established compliance backing and don't mind tier-hopping as you grow, Orchid is excellent. If you want a modern A and D Software designed in 2026 — clean UI, QR-code 4473 signing, hash-chained audit log, dealer-sample workflow built in, flat per-FFL pricing — that's where BoundPro lives. Try it free for 14 days; if it's not for you, your CSV exports are one click away.</p>
            </div>

          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <h2>Try the new A and D Software for yourself.</h2>
            <p>14-day free trial — keep your existing FastBound or Orchid subscription running side-by-side until you're sure.</p>
            <div className="hero-ctas">
              <a href="https://app.boundpro.app/signup" className="btn btn-amber btn-lg">Start free trial</a>
              <a href="/features" className="btn btn-ghost btn-lg" style={{ color: "#fff", background: "rgba(255,255,255,0.08)" }}>See full features →</a>
            </div>
          </div>
        </section>
    </>
  );
}
