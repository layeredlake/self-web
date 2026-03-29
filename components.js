const C = window.SITE_CONTENT || {};
const brand = C.brand || {};
const nav = C.nav || {};
const footer = C.footer || {};
const sponsorModal = C.sponsorModal || {};

const layoutCanvas = `
  <canvas id="bg-canvas"></canvas>
`;

const layoutHeader = `
  <header class="site-header" id="header">
    <div class="container header-container">
      <a href="index.html" class="logo title-font" style="color:var(--text-primary);">${brand.logoMark ?? "日誌集."}</a>
      <nav class="nav-links sans-font">
        <a href="about.html" class="nav-link">${nav.about ?? "關於我"}</a>
        <a href="index.html#projects" class="nav-link">${nav.projects ?? "開發應用"}</a>
        <a href="articles.html" class="nav-link">${nav.articles ?? "文章"}</a>
      </nav>
    </div>
  </header>
`;

const layoutFooter = `
  <footer class="site-footer sans-font">
    <div style="margin-bottom: 2.5rem;">
      <a href="#" id="open-sponsor-footer" class="btn-primary" style="font-size: 0.9rem; padding: 0.6rem 1.25rem; background: var(--glass-bg); color: var(--text-primary); border: 1px solid rgba(0,0,0,0.08);">
        <i class="ph ph-coffee"></i> ${footer.sponsorCta ?? "贊助此專案"}
      </a>
    </div>
    <p>${footer.copyright ?? "© 2026. Designed with premium paper aesthetics."}</p>
  </footer>

  <!-- 動態贊助彈出視窗 Modal -->
  <div class="modal-overlay" id="sponsor-modal">
    <div class="modal-content">
      <button class="modal-close" id="close-modal"><i class="ph ph-x"></i></button>
      <h3 class="title-font" style="font-size: 1.8rem; margin-bottom: 0.5rem;">${sponsorModal.title ?? "支持創作"}</h3>
      <p class="sans-font" style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">
        ${sponsorModal.body ?? "如果您喜歡我的文章與靈感，歡迎透過以下方式贊助一杯咖啡，這會成為我持續創作的動力！"}
      </p>
      
      <div class="sponsor-qr sans-font" style="color: #999;">
        ${sponsorModal.qrPlaceholder ?? "[ 收款 QR Code 預定地 ]"}
      </div>
      
      <p class="sans-font" style="font-size: 0.95rem; font-weight: 500; color: var(--text-secondary);">
        ${sponsorModal.bankIntro ?? "或使用銀行匯款："}<br>
        <span style="letter-spacing: 1.5px; color: var(--text-primary); font-size: 1.1rem; display: inline-block; margin-top: 0.5rem;">${sponsorModal.bankAccount ?? "中國信託 822-1234-5678-900"}</span>
      </p>
    </div>
  </div>
`;

// Inject components synchronously into the page
const cCanvas = document.getElementById("layout-canvas");
if (cCanvas) cCanvas.outerHTML = layoutCanvas;

const cHeader = document.getElementById("layout-header");
if (cHeader) cHeader.outerHTML = layoutHeader;

const cFooter = document.getElementById("layout-footer");
if (cFooter) cFooter.outerHTML = layoutFooter;
