/**
 * 依 <html data-page="index|about|gallery|articles"> 套用 SITE_CONTENT.pages.*
 * 需在 content/zh-TW.js 與 components.js 之後載入；在 GSAP 前載入可避免動畫抓到舊文字節點的問題。
 */
(function () {
  const C = window.SITE_CONTENT;
  if (!C || !C.pages) return;

  const page = document.documentElement.getAttribute("data-page");
  if (!page) return;

  const cfg = C.pages[page];
  if (!cfg) return;

  if (cfg.meta) {
    if (cfg.meta.title) document.title = cfg.meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl && cfg.meta.description != null) {
      descEl.setAttribute("content", cfg.meta.description);
    }
  }

  const list = cfg.elements;
  if (Array.isArray(list)) {
    for (const row of list) {
      const [selector, mode, value] = row;
      if (!selector || !mode) continue;
      const el = document.querySelector(selector);
      if (!el) continue;
      if (mode === "text") el.textContent = value;
      else if (mode === "html") el.innerHTML = value;
      else if (mode === "placeholder") el.setAttribute("placeholder", value);
      else if (mode === "alt") el.setAttribute("alt", value);
      else if (mode === "href") el.setAttribute("href", value);
    }
  }

  const contact = cfg.indexContact;
  if (contact) {
    const labelEl = document.querySelector(".hero-connect-label");
    if (labelEl && contact.sectionLabel != null) {
      labelEl.textContent = contact.sectionLabel;
    }
    const pairs = [
      [".hero-social-email", contact.email],
      [".hero-social-ig", contact.instagram],
      [".hero-social-threads", contact.threads],
    ];
    for (const [selector, item] of pairs) {
      if (!item) continue;
      const link = document.querySelector(selector);
      if (!link) continue;
      if (item.href != null) link.setAttribute("href", item.href);
      const span = link.querySelector("span");
      if (span && item.label != null) span.textContent = item.label;
    }
  }

  const featured = cfg.featuredApp;
  if (featured && featured.appStoreUrl) {
    document.querySelectorAll("a.project-app-store-link").forEach((a) => {
      a.setAttribute("href", featured.appStoreUrl);
    });
  }

  /** 首頁贊助按鈕文字與 footer.sponsorCta 同步 */
  if (page === "index" && C.footer && C.footer.sponsorCta) {
    const homeBtn = document.querySelector(".home-sponsor-cta");
    if (homeBtn) {
      const label = String(C.footer.sponsorCta)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      homeBtn.innerHTML = `<i class="ph ph-coffee"></i> ${label}`;
    }
  }
})();
