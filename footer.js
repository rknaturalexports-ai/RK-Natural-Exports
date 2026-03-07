/**
 * footer.js — Global footer component for RK Natural Exports
 * Injects the shared footer + floating WhatsApp button into every page.
 * Quick-link anchors are automatically prefixed with "index.html" on non-home pages.
 */
(function () {
  'use strict';

  /* ── Detect current page so Quick Links resolve correctly ── */
  const path = window.location.pathname;
  const isHome = path === '/' ||
                 path.endsWith('/index.html') ||
                 path.endsWith('/');          // dev server root

  function h(anchor) {
    /* Returns the correct href for an index-page anchor from any page */
    return isHome ? anchor : 'index.html' + anchor;
  }

  /* ── Footer HTML ── */
  const footerHTML = `
<footer class="site-footer">
  <div class="container footer-grid">

    <!-- Col 1: Brand -->
    <div class="foot-brand">
      <img src="https://raw.githubusercontent.com/rknaturalexports-ai/RK-Website-Images/refs/heads/main/Company%20Logo%20Transparent.png"
           alt="RK Natural Exports logo" loading="lazy" width="60" height="60">
      <p class="tagline">From the highlands of Chikkamagaluru to global markets — responsibly sourced coffee, tea, and spices.</p>
      <p class="foot-brand-sub">Serving buyers worldwide from Chikkamagaluru, India.</p>

      <div class="cta-stack">
        <a class="btn" href="mailto:rknaturalexports@gmail.com" aria-label="Request a quote by email">Request a Quote</a>
      </div>

      <div class="social" aria-label="Social links">
        <a href="https://www.instagram.com/rk_natural_exports" target="_blank" rel="noopener" aria-label="Instagram">
          <i class="fa-brands fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61580130311213" target="_blank" rel="noopener" aria-label="Facebook">
          <i class="fa-brands fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/venu-r-gowda-761464373/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://www.youtube.com/@RKNaturalExports" target="_blank" rel="noopener" aria-label="YouTube">
          <i class="fa-brands fa-youtube" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <!-- Col 2: Quick Links -->
    <div>
      <h6 class="foot-heading">Quick Links</h6>
      <ul class="link-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="${h('#about')}">About</a></li>
        <li><a href="${h('#products')}">Products</a></li>
        <li class="foot-sublink"><a href="coffee.html">Coffee</a></li>
        <li class="foot-sublink"><a href="tea.html">Tea</a></li>
        <li class="foot-sublink"><a href="${h('#products')}">Pepper</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="${h('#quality')}">Sourcing &amp; Quality</a></li>
        <li><a href="compliance.html">Compliance</a></li>
        <li><a href="${h('#reach')}">Global Reach</a></li>
        <li><a href="${h('#lead-capture')}">Contact</a></li>
      </ul>
    </div>

    <!-- Col 3: Compliance -->
    <div>
      <h6 class="foot-heading">Compliance</h6>
      <ul class="link-list compliance-list">
        <li>
          <i class="fa-solid fa-id-card" aria-hidden="true"></i>
          <span><strong>IEC:</strong> DPHPR7870Q</span>
        </li>
        <li>
          <i class="fa-solid fa-receipt" aria-hidden="true"></i>
          <span><strong>GST:</strong> 29DPHPR7870Q1ZK</span>
        </li>
        <li>
          <i class="fa-solid fa-certificate" aria-hidden="true"></i>
          <span><strong>Coffee Board RCMC / APEDA:</strong> <span class="avail">Available</span></span>
        </li>
        <li>
          <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
          <span><strong>FSSAI:</strong> <span class="avail">Available</span></span>
        </li>
        <li>
          <i class="fa-solid fa-file-circle-check" aria-hidden="true"></i>
          <span>Phytosanitary &amp; Fumigation certificates per shipment &middot; COO available</span>
        </li>
      </ul>
    </div>

    <!-- Col 4: Get a Quote -->
    <div id="lead-capture">
      <h6 class="foot-heading">Get a Quote</h6>
      <form class="lead-form" action="https://formsubmit.co/rknaturalexports@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_subject" value="New Quote Request - RK Natural Exports">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required>
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="name@example.com" required>
        </label>
        <label>
          <span>WhatsApp</span>
          <input type="tel" name="whatsapp" placeholder="+91 9XXXXXXXXX">
        </label>
        <label>
          <span>What are you looking to import?</span>
          <textarea name="message" rows="3" placeholder="e.g., 20 MT Robusta parchment, Screen 17/18\u2026" required></textarea>
        </label>
        <button class="btn btn--block" type="submit" aria-label="Submit to get a quote in 24h">Get Quote</button>
      </form>

      <ul class="link-list contact-links">
        <li class="contact-item contact-item--phone">
          <i class="fa-solid fa-phone" aria-hidden="true"></i>
          <div>
            <a href="tel:+919449767262" aria-label="Call +91 94497 67262"><strong>+91 94497 67262</strong></a>
            <span class="contact-helper">WhatsApp available</span>
          </div>
        </li>
        <li class="contact-item contact-item--email">
          <i class="fa-solid fa-envelope" aria-hidden="true"></i>
          <a href="mailto:rknaturalexports@gmail.com" aria-label="Email rknaturalexports@gmail.com">
            <strong>rknaturalexports@gmail.com</strong>
          </a>
        </li>
        <li class="contact-item contact-item--location">
          <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
          <a href="https://maps.google.com/?q=Chikkamagaluru,+Karnataka,+India" target="_blank" rel="noopener"
             aria-label="Open address in Google Maps">
            <strong>Chikkamagaluru, Karnataka, India</strong>
          </a>
        </li>
        <li class="muted small">Registered Office: Chikkamagaluru, Karnataka &bull; GSTIN/IEC available on request.</li>
      </ul>
    </div>

  </div><!-- /.footer-grid -->

  <!-- Trust strip -->
  <div class="container foot-trust">
    <div class="foot-trust-item"><i class="fa-solid fa-check-circle"></i> IEC Registered</div>
    <div class="foot-trust-item"><i class="fa-solid fa-check-circle"></i> Coffee Board Approved</div>
    <div class="foot-trust-item"><i class="fa-solid fa-check-circle"></i> Tea Board Licensed</div>
    <div class="foot-trust-item"><i class="fa-solid fa-check-circle"></i> Export Compliant</div>
  </div>

  <!-- Copyright -->
  <div class="container foot-bottom">
    <small>&copy; <span class="footer-year"></span> RK Natural Exports. All rights reserved.</small>
  </div>
</footer>

<!-- Floating WhatsApp Button -->
<a href="https://wa.me/919449767262" class="wa-float" target="_blank" rel="noopener"
   aria-label="Chat with us on WhatsApp">
  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
</a>
`;

  /* ── Inject footer ── */
  const placeholder = document.getElementById('site-footer-placeholder');
  if (placeholder) {
    placeholder.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  /* ── Set copyright year ── */
  document.querySelectorAll('.footer-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ── mailto fallback when opened as a local file (file://) ── */
  var form = document.querySelector('.lead-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      if (window.location.protocol !== 'file:') return;
      e.preventDefault();
      var data = new FormData(form);
      var body = [];
      data.forEach(function (v, k) {
        if (!k.startsWith('_')) body.push(k + ': ' + v);
      });
      window.location.href =
        'mailto:rknaturalexports@gmail.com' +
        '?subject=' + encodeURIComponent('Quote Request - RK Natural Exports') +
        '&body=' + encodeURIComponent(body.join('\n'));
    });
  }

})();
