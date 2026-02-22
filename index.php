<?php
/**
 * Decade Street Ekam — Hyderabad
 * Structured Hospitality Investment | Pre-Launch Brochure
 */
$project_name = "DECADE STREET EKAM";
$tagline = "A Structured Hospitality Investment";
$location = "Hyderabad";
$operator = "Valora Vista";
$img = 'assets/images';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($project_name) ?> — <?= htmlspecialchars($location) ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header class="site-header">
        <a href="#hero" class="header-logo">
            <img src="<?= $img ?>/ChatGPT_Image_Feb_11__2026__04_20_32_PM-63ebe642-6faa-4377-a818-1d4be356d848.png" alt="Decade Street" class="header-logo-img">
            <span class="header-ekam">EKAM</span>
        </a>
        <nav class="header-nav">
            <a href="#hero">Home</a>
            <a href="#concept">Concept</a>
            <a href="#idea">Idea</a>
            <a href="#overview">Overview</a>
            <a href="#pricing">Pricing</a>
            <a href="#quality">Quality</a>
            <a href="#income">Income</a>
            <a href="#exit">Exit</a>
            <a href="#summary">Summary</a>
            <a href="#close">Close</a>
        </nav>
        <button class="header-toggle" aria-label="Menu"></button>
    </header>

    <div id="fullpage">
        <!-- SECTION 1 — HERO -->
        <section id="hero" class="fp-section fp-hero">
            <div class="hero-bg" style="background-image: url('<?= $img ?>/702-cc725481-7b78-4f62-bdc9-c4e5624d21a0.png');"></div>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <img src="<?= $img ?>/ChatGPT_Image_Feb_11__2026__04_20_32_PM-63ebe642-6faa-4377-a818-1d4be356d848.png" alt="Decade Street" class="hero-logo">
                <span class="hero-ekam">EKAM</span>
                <p class="hero-label">Pre-Launch Phase | <?= htmlspecialchars($location) ?></p>
                <h1 class="hero-title"><?= htmlspecialchars($project_name) ?></h1>
                <p class="hero-tagline"><?= htmlspecialchars($tagline) ?></p>
                <div class="hero-banner">
                    <span>18 Cottages</span>
                    <span>2 Acres</span>
                    <span>Structured Hospitality Model</span>
                </div>
                <p class="hero-cta">Own a built asset. Generate income. Exit with clarity.</p>
                <p class="hero-operator">Operated by <?= htmlspecialchars($operator) ?></p>
                <a href="#concept" class="hero-scroll">Explore ↓</a>
            </div>
        </section>

        <!-- SECTION 2 — CONCEPT -->
        <section id="concept" class="fp-section fp-concept">
            <div class="section-bg" style="background-image: url('<?= $img ?>/elivation-8c8e224f-2559-440c-a2cc-9380c55147ed.png');"></div>
            <div class="section-content">
                <span class="section-num">02</span>
                <h2>The Concept</h2>
                <p class="section-subtitle">Decade Street — Time Through Space</p>
                <p class="concept-lead">An architectural street that celebrates time through space, proportion, and atmosphere—rather than overt symbolism.</p>
                <div class="concept-text">
                    <p>The project draws from the evolving language of different decades—how materials aged, how streets were lived in, how people gathered—and reinterprets these through contemporary construction, scale, and comfort.</p>
                    <p>The soul of Decade Street lies in its human-centric planning: a walkable spine, layered thresholds, shaded edges, and a central plaza that naturally becomes a place of pause and interaction.</p>
                    <p class="concept-quote">Emotion emerges not from nostalgia, but from familiarity—spaces that feel grounded, intimate, and enduring—allowing the street to function both as a meaningful lived environment and as a timeless hospitality destination that can adapt, age gracefully, and retain relevance over time.</p>
                </div>
            </div>
        </section>

        <!-- SECTION 3 — THE IDEA -->
        <section id="idea" class="fp-section fp-alt">
            <div class="section-content">
                <span class="section-num">03</span>
                <h2>The Idea</h2>
                <p class="section-subtitle">Why This Investment Exists</p>
                <p class="copy-text">Most real estate investments offer either appreciation or rental income. Hospitality projects often offer income but lack exit clarity.</p>
                <p class="highlight">Decade Street Ekam is designed to solve both.</p>
                <div class="idea-grid">
                    <div class="idea-card">
                        <span class="idea-icon">◆</span>
                        <h4>Fully constructed</h4>
                        <p>hospitality asset</p>
                    </div>
                    <div class="idea-card">
                        <span class="idea-icon">◆</span>
                        <h4>Defined revenue</h4>
                        <p>generation</p>
                    </div>
                    <div class="idea-card">
                        <span class="idea-icon">◆</span>
                        <h4>Clear legal</h4>
                        <p>ownership</p>
                    </div>
                    <div class="idea-card">
                        <span class="idea-icon">◆</span>
                        <h4>Planned exit</h4>
                        <p>pathways</p>
                    </div>
                </div>
                <div class="clarify-box">
                    <p><strong>This is not speculative land.</strong> This is not an unmanaged holiday home.</p>
                </div>
            </div>
        </section>

        <!-- SECTION 4 — OVERVIEW -->
        <section id="overview" class="fp-section fp-overview">
            <div class="overview-bg" style="background-image: url('<?= $img ?>/90s-8d399499-27af-4cbf-be2c-c64f925acebc.png');"></div>
            <div class="overview-layout">
                <div class="overview-info">
                    <span class="section-num">04</span>
                    <h2>Project Overview</h2>
                    <div class="overview-grid">
                        <div class="overview-item"><span class="label">Location</span><span><?= htmlspecialchars($location) ?></span></div>
                        <div class="overview-item"><span class="label">Land</span><span>2 Acres</span></div>
                        <div class="overview-item"><span class="label">Phase 1</span><span>18 Cottages</span></div>
                        <div class="overview-item"><span class="label">Type</span><span>Hospitality-first</span></div>
                    </div>
                    <p class="overview-amenities">Central Event Plaza + Café</p>
                    <p class="overview-operator">Operated by <?= htmlspecialchars($operator) ?></p>
                    <ul class="overview-list">
                        <li>Consistent usage</li>
                        <li>Predictable operations</li>
                        <li>Asset value protection</li>
                    </ul>
                    <div class="advantages">
                        <h4>Additional Advantages</h4>
                        <div class="adv-grid">
                            <div class="adv-item">
                                <strong>Kanha Shantivanam</strong> — 4 km away, ideal for spiritual retreat visitors
                            </div>
                            <div class="adv-item">
                                <strong>Symbiosis University</strong> — Parents visiting students can stay in comfort
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 5 — PRICING -->
        <section id="pricing" class="fp-section fp-accent">
            <div class="section-content">
                <span class="section-num">05</span>
                <h2>Unit Cost Structure</h2>
                <p class="section-subtitle">All-Inclusive</p>
                <div class="price-block">
                    <span class="price">₹20,000</span>
                    <span class="price-unit">per sq. yard</span>
                </div>
                <p class="price-note">including construction</p>
                <ul class="inclusions">
                    <li>Undivided share of land</li>
                    <li>Fully constructed cottage</li>
                    <li>Infrastructure & common areas</li>
                    <li>Internal roads & services</li>
                </ul>
                <div class="assurance">
                    <p>No escalation. No hidden charges. Registered & bankable after UDS.</p>
                </div>
            </div>
        </section>

        <!-- SECTION 6 — QUALITY -->
        <section id="quality" class="fp-section fp-alt fp-split">
            <div class="split-img">
                <img src="<?= $img ?>/70s1-36015b1f-e44b-41ae-a374-07e3d6b35614.png" alt="Cottage exterior">
            </div>
            <div class="split-content">
                <span class="section-num">06</span>
                <h2>Construction & Quality</h2>
                <p class="lead">Hospitality-grade durability, not residential shortcuts.</p>
                <ul class="standards">
                    <li>RCC framed structure</li>
                    <li>Standardized cottage typology</li>
                    <li>Weather-resistant finishes</li>
                    <li>Easy-maintenance interiors</li>
                </ul>
                <div class="benchmark">
                    <p>~₹45 Lakhs per cottage</p>
                </div>
            </div>
        </section>

        <!-- SECTION 7 — REVENUE STREAMS -->
        <section id="revenue" class="fp-section">
            <div class="section-content">
                <span class="section-num">07</span>
                <h2>How Income Is Generated</h2>
                <p class="lead">Multiple non-competing revenue streams</p>
                <div class="revenue-grid">
                    <div class="revenue-card"><span>◆</span><h4>Weekend Resort Stays</h4></div>
                    <div class="revenue-card"><span>◆</span><h4>Corporate Offsites</h4></div>
                    <div class="revenue-card"><span>◆</span><h4>Wedding Shoots</h4></div>
                    <div class="revenue-card"><span>◆</span><h4>Commercial & Film</h4></div>
                </div>
                <div class="split-model">
                    <div class="split-box owner"><span class="pct">60%</span><span>Investor</span></div>
                    <div class="split-box operator"><span class="pct">40%</span><span>Operator</span></div>
                </div>
                <p class="disclaimer"><sup>*</sup> Conceptual revenue numbers; actuals may vary.</p>
            </div>
        </section>

        <!-- SECTION 8 — INVESTOR INCOME -->
        <section id="income" class="fp-section fp-alt fp-income">
            <div class="section-content wide">
                <span class="section-num">08</span>
                <h2>Investor Income — Conservative Case</h2>
                <p class="section-subtitle">20% Utilization</p>
                <div class="income-layout">
                    <div class="income-col">
                        <h4>Assumptions</h4>
                        <ul>
                            <li>18 cottages</li>
                            <li>73 days/year</li>
                            <li>Stay ₹5,000 / Shoot ₹10,000</li>
                            <li>OpEx ₹60.5L annual</li>
                        </ul>
                    </div>
                    <div class="income-col">
                        <h4>Per Cottage</h4>
                        <p>Gross: ₹10,95,000/yr</p>
                        <p>Project gross: ₹2.25 Cr</p>
                        <p>Net pool: ₹1.44 Cr</p>
                    </div>
                    <div class="income-col highlight-col">
                        <h4>Your Payout</h4>
                        <p class="big-num">₹4,80,654</p>
                        <p class="per-year">per cottage / year</p>
                        <p class="per-month">→ ₹40,054 / month</p>
                    </div>
                </div>
                <p class="disclaimer"><sup>*</sup> Conceptual revenue numbers; actuals may vary.</p>
            </div>
        </section>

        <!-- SECTION 9 — EXIT -->
        <section id="exit" class="fp-section fp-accent">
            <div class="section-content">
                <span class="section-num">09</span>
                <h2>Exit & Buy-Back Options</h2>
                <div class="exit-cards">
                    <div class="exit-card"><h4>Individual Exit</h4><p>Resale after lock-in</p></div>
                    <div class="exit-card"><h4>Bulk Buy-Back</h4><p>After 24 months for multi-unit holders</p></div>
                    <div class="exit-card"><h4>Hold for Yield</h4><p>Continue earning, asset matures</p></div>
                </div>
                <p class="legal-note">Exit terms documented upfront.</p>
            </div>
        </section>

        <!-- SECTION 10 — LEGAL -->
        <section id="legal" class="fp-section fp-alt">
            <div class="section-content">
                <span class="section-num">10</span>
                <h2>Legal & Structural Safety</h2>
                <ul class="legal-list">
                    <li>Joint Development with landowner</li>
                    <li>Registered sale deed for UDS + unit</li>
                    <li>Mandatory lease-back</li>
                    <li>Escrow-based collections</li>
                </ul>
                <p class="legal-highlight">Banks participate after UDS allocation.</p>
            </div>
        </section>

        <!-- SECTION 11 — AUDIENCE -->
        <section id="audience" class="fp-section">
            <div class="section-content">
                <span class="section-num">11</span>
                <h2>Who This Is For</h2>
                <div class="audience-grid">
                    <div class="audience-yes">
                        <h4>Suited For</h4>
                        <ul>
                            <li>Investors seeking income + exit clarity</li>
                            <li>Professionals wanting managed assets</li>
                            <li>NRIs, bulk buyers</li>
                        </ul>
                    </div>
                    <div class="audience-no">
                        <h4>Not Suited</h4>
                        <ul>
                            <li>End-use residential living</li>
                            <li>Unmanaged self-leasing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 12 — SUMMARY -->
        <section id="summary" class="fp-section fp-alt">
            <div class="section-content">
                <span class="section-num">12</span>
                <h2>Summary</h2>
                <ul class="summary-list">
                    <li>₹20,000 per sq. yard all-inclusive</li>
                    <li>Fully constructed hospitality asset</li>
                    <li>Multi-revenue income model</li>
                    <li>60/40 revenue sharing</li>
                    <li>Documented exit pathways</li>
                    <li>Limited Phase 1 inventory</li>
                </ul>
                <p class="summary-tagline">Ownership with structure—not speculation.</p>
            </div>
        </section>

        <!-- SECTION 13 — Q&A -->
        <section id="faq" class="fp-section fp-faq">
            <div class="section-content">
                <span class="section-num">13</span>
                <h2>Investor Q&A</h2>
                <div class="faq-list">
                    <div class="faq-item"><h4>Lower occupancy?</h4><p>Conservative base assumed; multiple streams reduce stay dependency.</p></div>
                    <div class="faq-item"><h4>Who controls bookings?</h4><p>Operator for brand consistency.</p></div>
                    <div class="faq-item"><h4>Personal use?</h4><p>Yes, limited, per lease agreement.</p></div>
                    <div class="faq-item"><h4>Buy-back guaranteed?</h4><p>Structured, linked to cash flows and terms.</p></div>
                    <div class="faq-item"><h4>Banks fund this?</h4><p>Yes, after UDS allocation.</p></div>
                </div>
            </div>
        </section>

        <!-- SECTION 14 — CLOSE -->
        <section id="close" class="fp-section fp-close">
            <div class="close-bg" style="background-image: url('<?= $img ?>/ChatGPT_Image_Feb_11__2026__04_38_08_PM-07bc1809-2e0d-47a0-a0c7-e47fb89d3752.png');"></div>
            <div class="close-overlay"></div>
            <div class="section-content">
                <p class="close-text">Decade Street Ekam is built for investors who value clarity, control, and long-term thinking.</p>
                <h2 class="close-brand"><?= htmlspecialchars($project_name) ?></h2>
                <p class="close-location"><?= htmlspecialchars($location) ?></p>
                <p class="close-tagline"><?= htmlspecialchars($tagline) ?></p>
            </div>
        </section>
    </div>

    <nav class="fp-dots">
        <?php for ($i = 1; $i <= 14; $i++): ?>
        <a href="#" class="fp-dot" data-index="<?= $i ?>"></a>
        <?php endfor; ?>
    </nav>

    <script src="assets/js/main.js"></script>
</body>
</html>
