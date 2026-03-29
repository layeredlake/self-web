/**
 * 全站文案（繁體中文）
 * 換語言時可複製此檔為 en.js 等，並在 HTML 改載入檔名即可逐步切換。
 */
window.SITE_CONTENT = {
  lang: "zh-TW",

  /** 品牌／導覽（components.js 使用） */
  brand: {
    name: "開發日記",
    /** 顯示在 logo，可含標點 */
    logoMark: "開發日記.",
  },

  nav: {
    about: "關於我",
    projects: "開發應用",
    articles: "文章",
  },

  footer: {
    sponsorCta: "贊助此專案",
    copyright: "© 2026. Designed with premium paper aesthetics.",
  },

  sponsorModal: {
    title: "支持創作",
    body:
      "如果您喜歡我，我的創作，或是我描述的未來，歡迎透過以下方式贊助一杯咖啡，這會成為我持續創作的動力！",
    /** 收款 QR 圖檔路徑（頁首列與贊助彈窗共用） */
    qrImageSrc: "圖片/qr.ioi.tw-3.png",
    qrAlt: "掃描 QR Code 收款／轉帳",
    /** 頁首收款列左側說明文字 */
    topBarHint: "收款碼 · 掃描即可支持",
    /** 若未設定 qrImageSrc，彈窗內會顯示此提示 */
    qrPlaceholder: "[ 請設定 qrImageSrc 圖檔路徑 ]",
    bankIntro: "或使用銀行匯款：",
    /** 若銀行別不同請自行修改前綴 */
    bankAccount: "中國信託（822）901566509364",
  },

  /** 各頁 meta 與 DOM 對應（apply-page-content.js） */
  pages: {
    index: {
      meta: {
        title: "設計與開發日誌 | 個人空間",
        description: "這是一個紀錄日常、開發作品與 AI 實踐的個人空間。",
      },
      /** 首頁：Gmail / IG / Threads — 請改成你的信箱與個人檔案網址 */
      indexContact: {
        sectionLabel: "聯絡與社群",
        email: {
          href: "lu23670116@gmail.com",
          label: "Gmail",
        },
        instagram: {
          href: "https://www.instagram.com/fillip.app?igsh=MXFua3gxZHM2ZHZocw%3D%3D",
          label: "Instagram",
        },
        threads: {
          href: "https://www.threads.com/@qianshaoluo?hl=zh-tw",
          label: "Threads",
        },
      },

      /** 首頁重點專案：Fillip → App Store（換連結只改這裡） */
      featuredApp: {
        appStoreUrl: "https://apps.apple.com/tw/app/fillip/id6759831971",
      },

      elements: [
        [".hero-tag", "html", "Developer & Creator"],
        [".hero-title", "html", "我是羅謙紹 <br>& 這是我眼中的世界。"],
        [
          ".hero-subtitle",
          "html",
          "你好，這是我分享靈感與實踐的小小空間。<br>如果您對開發日誌、AI 應用或是對未來的實驗產品感興趣，歡迎留下您的 Email 追蹤最新動態。",
        ],
        [".subscribe-input", "placeholder", "輸入 Email 以獲得最新發佈通知..."],
        [".subscribe-btn span", "text", "加入訂閱"],
        ["#projects .section-title", "text", "開發實驗與應用"],
        ["#projects .section-subtitle", "text", "那些我所描繪的數位產品。"],
        [".project-tag", "text", "FEATURED PROJECT"],
        [".project-title", "text", "Fillip 應用程式"],
        [
          ".project-desc",
          "text",
          "一款基於srs間格重複與閃卡機制的背單字工具。用最科學的方法，流程化你背單字的過程。立即下載感受上癮的學習體驗。",
        ],
        [
          ".project-showcase .view-all",
          "html",
          'App Store 下載 <i class="ph ph-arrow-right"></i>',
        ],
        [".app-thumbnail", "alt", "fillip App Screenshot"],
        ["#articles .section-title", "text", "最新文章串"],
        ["#articles .section-subtitle", "text", "逐篇疊加的思緒與筆記。"],
        ["#articles .view-all", "html", '所有文章總覽 <i class="ph ph-arrow-right"></i>'],
        [
          ".article-feed .article-row:nth-of-type(1) .article-row-title",
          "text",
          "如何利用 AI Prompt 系統化提升開發效率",
        ],
        [
          ".article-feed .article-row:nth-of-type(1) .article-row-meta",
          "text",
          "2026年3月27日 · AI 實驗室",
        ],
        [
          ".article-feed .article-row:nth-of-type(2) .article-row-title",
          "text",
          "前端動畫美學：完美柔順的畫布特效",
        ],
        [
          ".article-feed .article-row:nth-of-type(2) .article-row-meta",
          "text",
          "2026年2月15日 · 開發日誌",
        ],
        [
          ".article-feed .article-row:nth-of-type(3) .article-row-title",
          "text",
          "即將發布的新文章...",
        ],
        [".article-feed .article-row:nth-of-type(3) .article-row-meta", "text", "Coming Soon"],
        [".hero-bg-image", "alt", "Atmospheric Background"],
      ],
    },

    about: {
      meta: {
        title: "關於我 | 日誌集",
      },
      elements: [
        [".hero-tag", "html", "About"],
        [".hero-title", "html", "你好，<br>我是羅謙紹。"],
        [
          ".hero-subtitle",
          "html",
          "一名高中生。我的夢想是創造一個任何人都能實現想法的世界。<br>如果讓大家連結自身與世界，讓大家創造出自己的世界。",
        ],
      ],
    },

    gallery: {
      meta: {
        title: "視覺敘事 | 日誌集",
      },
      elements: [
        ["#gallery .section-title", "text", "視覺敘事"],
        [
          "#gallery .section-subtitle",
          "text",
          "點擊影像，這裡將會展開圖片背後的長篇故事。",
        ],
        [".gallery-item.item-1 .gallery-image", "alt", "Visuals"],
        [".gallery-item.item-1 .gallery-caption", "text", "遼闊的感知"],
        [".gallery-item.item-2 .gallery-image", "alt", "Daily Capture"],
        [".gallery-item.item-2 .gallery-caption", "text", "城市的角落"],
      ],
    },

    articles: {
      meta: {
        title: "文章日誌 | 日誌集",
      },
      elements: [
        ["#articles .section-title", "text", "文章日誌"],
        [
          "#articles .section-subtitle",
          "text",
          "未來這裡會存放所有關於技術、AI、開發與隨筆的文章列表。",
        ],
        [".article-grid .article-card:nth-of-type(1) .article-title", "text", "預設文章標題"],
        [".article-grid .article-card:nth-of-type(1) .article-meta", "text", "即將發布"],
        [
          ".article-grid .article-card:nth-of-type(2) .article-title",
          "text",
          "開發者的日常：撰寫高品質語法",
        ],
        [".article-grid .article-card:nth-of-type(2) .article-meta", "text", "開發日誌"],
      ],
    },
  },
};
