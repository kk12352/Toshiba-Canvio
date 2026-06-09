const products = [
  {
    id: 1,
    slug: "pulse-buds",
    image: "assets/product1-pulse-buds.png",
    page: "product1.html",
    category: { zh: "音频", en: "Audio" },
    name: { zh: "Toshiba Canvio Pulse Buds", en: "Toshiba Canvio Pulse Buds" },
    price: "$89.00",
    short: {
      zh: "轻巧降噪耳机，适合通勤、会议和长时间在线协作。",
      en: "Compact noise-reducing earbuds for commuting, meetings, and long connected work."
    },
    desc: {
      zh: "Pulse Buds 以低延迟蓝牙、舒适耳塞和清晰通话麦克风为核心，把日常移动音频做得更轻、更稳定。",
      en: "Pulse Buds combine low-latency Bluetooth, comfortable tips, and crisp call microphones for lighter everyday mobile audio."
    },
    specs: [
      { zh: "主动降噪与通透模式", en: "Active noise reduction and transparency mode" },
      { zh: "最长 32 小时综合续航", en: "Up to 32 hours total battery life" },
      { zh: "双麦克风通话降噪", en: "Dual-mic voice noise reduction" },
      { zh: "USB-C 快速充电盒", en: "USB-C fast charging case" }
    ]
  },
  {
    id: 2,
    slug: "airhub",
    image: "assets/product2-airhub.png",
    page: "product2.html",
    category: { zh: "智能家居", en: "Smart Home" },
    name: { zh: "Toshiba Canvio AirHub", en: "Toshiba Canvio AirHub" },
    price: "$129.00",
    short: {
      zh: "小型 Wi-Fi 7 智能中枢，为家庭设备提供稳定连接。",
      en: "A compact Wi-Fi 7 smart hub for steady home device connectivity."
    },
    desc: {
      zh: "AirHub 用低调圆柱形外观、环形状态灯和网状声学外壳，统一承担网络、设备联动与家庭场景控制。",
      en: "AirHub blends a quiet cylinder form, ring status light, and mesh shell to handle network, device pairing, and home scenes."
    },
    specs: [
      { zh: "Wi-Fi 7 双频连接", en: "Dual-band Wi-Fi 7 connectivity" },
      { zh: "Matter 智能设备支持", en: "Matter smart-device support" },
      { zh: "低功耗夜间模式", en: "Low-power night mode" },
      { zh: "360° 状态光环", en: "360-degree status light ring" }
    ]
  },
  {
    id: 3,
    slug: "slate-11",
    image: "assets/product3-slate-11.png",
    page: "product3.html",
    category: { zh: "移动办公", en: "Mobile Work" },
    name: { zh: "Toshiba Canvio Slate 11", en: "Toshiba Canvio Slate 11" },
    price: "$399.00",
    short: {
      zh: "11 英寸轻薄平板，配键盘与手写笔，面向移动创作。",
      en: "An 11-inch tablet with keyboard and stylus for mobile creation."
    },
    desc: {
      zh: "Slate 11 把轻薄机身、键盘保护套和手写笔组合在一起，适合记录、演示、轻量剪辑和远程协作。",
      en: "Slate 11 pairs a slim body, keyboard cover, and stylus for notes, presentations, light editing, and remote work."
    },
    specs: [
      { zh: "11 英寸高亮触控屏", en: "11-inch bright touch display" },
      { zh: "磁吸键盘保护套", en: "Magnetic keyboard cover" },
      { zh: "低延迟主动手写笔", en: "Low-latency active stylus" },
      { zh: "全天候移动续航", en: "All-day mobile battery life" }
    ]
  },
  {
    id: 4,
    slug: "voltcube-100",
    image: "assets/product4-voltcube-100.png",
    page: "product4.html",
    category: { zh: "充电", en: "Charging" },
    name: { zh: "Toshiba Canvio VoltCube 100", en: "Toshiba Canvio VoltCube 100" },
    price: "$79.00",
    short: {
      zh: "100W 多口 GaN 充电方块，兼顾桌面与旅行使用。",
      en: "A 100W multi-port GaN charging cube for desk and travel use."
    },
    desc: {
      zh: "VoltCube 100 将高功率输出、紧凑外壳和可视状态灯压缩进一枚金属质感方块。",
      en: "VoltCube 100 compresses high-output charging, a compact shell, and visible status lighting into a metal-finish cube."
    },
    specs: [
      { zh: "最高 100W USB-C 输出", en: "Up to 100W USB-C output" },
      { zh: "3 个 USB-C 与 1 个 USB-A 端口", en: "3 USB-C ports and 1 USB-A port" },
      { zh: "智能功率分配", en: "Smart power allocation" },
      { zh: "旅行友好紧凑体积", en: "Travel-friendly compact body" }
    ]
  },
  {
    id: 5,
    slug: "beamlamp",
    image: "assets/product5-beamlamp.png",
    page: "product5.html",
    category: { zh: "桌面", en: "Workspace" },
    name: { zh: "Toshiba Canvio BeamLamp", en: "Toshiba Canvio BeamLamp" },
    price: "$69.00",
    short: {
      zh: "智能显示器灯条，柔和照亮键盘、桌面与阅读区域。",
      en: "A smart monitor light bar for keyboard, desk, and reading zones."
    },
    desc: {
      zh: "BeamLamp 用非对称光学、触控调光和稳定底座，给桌面提供舒适、干净的工作照明。",
      en: "BeamLamp uses asymmetric optics, touch dimming, and a stable base to deliver comfortable clean desk lighting."
    },
    specs: [
      { zh: "无屏幕反光光路", en: "Screen-glare-free light path" },
      { zh: "冷暖色温调节", en: "Warm and cool color adjustment" },
      { zh: "触控亮度滑条", en: "Touch brightness strip" },
      { zh: "USB-C 供电", en: "USB-C powered" }
    ]
  },
  {
    id: 6,
    slug: "viewcam-4k",
    image: "assets/product6-viewcam-4k.png",
    page: "product6.html",
    category: { zh: "影像", en: "Video" },
    name: { zh: "Toshiba Canvio ViewCam 4K", en: "Toshiba Canvio ViewCam 4K" },
    price: "$119.00",
    short: {
      zh: "4K 会议摄像头，配隐私滑盖与清晰拾音。",
      en: "A 4K meeting webcam with a privacy slider and clear voice pickup."
    },
    desc: {
      zh: "ViewCam 4K 面向视频会议、直播课和小型团队协作，强调自然肤色、稳定自动对焦和一键隐私控制。",
      en: "ViewCam 4K is built for meetings, online classes, and small-team collaboration with natural color, stable autofocus, and one-step privacy."
    },
    specs: [
      { zh: "4K 超清传感器", en: "4K ultra-clear sensor" },
      { zh: "物理隐私滑盖", en: "Physical privacy slider" },
      { zh: "自动对焦与自动曝光", en: "Autofocus and auto exposure" },
      { zh: "双麦克风阵列", en: "Dual microphone array" }
    ]
  },
  {
    id: 7,
    slug: "soundbar-mini",
    image: "assets/product7-soundbar-mini.png",
    page: "product7.html",
    category: { zh: "音频", en: "Audio" },
    name: { zh: "Toshiba Canvio SoundBar Mini", en: "Toshiba Canvio SoundBar Mini" },
    price: "$99.00",
    short: {
      zh: "桌面迷你声霸，适合显示器、笔记本和小空间娱乐。",
      en: "A compact desktop speaker bar for monitors, laptops, and small rooms."
    },
    desc: {
      zh: "SoundBar Mini 以紧凑声腔、低频增强和蓝牙/USB 双连接，为桌面带来更饱满的声音。",
      en: "SoundBar Mini brings fuller desk audio through a compact chamber, bass enhancement, and Bluetooth/USB connectivity."
    },
    specs: [
      { zh: "双全频单元", en: "Dual full-range drivers" },
      { zh: "低频增强声腔", en: "Bass-enhanced chamber" },
      { zh: "蓝牙与 USB-C 输入", en: "Bluetooth and USB-C input" },
      { zh: "桌面低眩光状态灯", en: "Low-glare desktop status light" }
    ]
  },
  {
    id: 8,
    slug: "frameone",
    image: "assets/product8-frameone.png",
    page: "product8.html",
    category: { zh: "智能家居", en: "Smart Home" },
    name: { zh: "Toshiba Canvio FrameOne", en: "Toshiba Canvio FrameOne" },
    price: "$149.00",
    short: {
      zh: "智能电子相框与家庭信息屏，适合客厅、书房与玄关。",
      en: "A smart digital frame and home dashboard for living rooms, studies, and entryways."
    },
    desc: {
      zh: "FrameOne 让照片、天气、日程和家庭提醒以低打扰方式呈现，适合每天自然查看。",
      en: "FrameOne presents photos, weather, schedules, and home reminders in a low-friction format for everyday glances."
    },
    specs: [
      { zh: "10.1 英寸柔和显示屏", en: "10.1-inch soft display" },
      { zh: "桌面支架与壁挂支持", en: "Desktop stand and wall mount support" },
      { zh: "家庭日程与提醒", en: "Home schedule and reminders" },
      { zh: "自动亮度调节", en: "Auto brightness adjustment" }
    ]
  }
];

const translations = {
  zh: {
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.about": "关于",
    "nav.contact": "联系",
    "hero.eyebrow": "独立概念电子品牌",
    "hero.title": "连接每一个清晰时刻",
    "hero.body": "Toshiba Canvio 面向移动办公与智能生活，打造耳机、智能中枢、平板、充电、影像与桌面设备。",
    "hero.ctaProducts": "探索产品",
    "hero.ctaAbout": "品牌说明",
    "hero.note": "说明：这是一个独立电子产品概念品牌网站，不隶属于 Toshiba Corporation，也不是东芝硬盘产品线。",
    "intro.kicker": "Product Ecosystem",
    "intro.title": "从移动效率到智能居家",
    "intro.body": "统一的 TC 品牌语言、轻量化硬件形态和冷静的蓝银色视觉，让每件设备都能自然融入日常场景。",
    "products.kicker": "Featured Products",
    "products.title": "精选产品",
    "products.body": "8 款非硬盘电子产品，覆盖移动办公、智能家居、创作会议和桌面体验。",
    "products.view": "查看详情",
    "about.kicker": "About Toshiba Canvio",
    "about.title": "一个更轻、更安静的电子产品系列",
    "about.body": "Toshiba Canvio 的设计核心是减少设备之间的割裂感。无论是桌面灯、会议摄像头、智能中枢，还是随身耳机和充电设备，它们都共享一致的识别、材质和交互节奏。",
    "about.statProducts": "款首发产品",
    "about.statIdentity": "统一品牌标识",
    "about.statDrives": "硬盘类产品",
    "contact.kicker": "Contact",
    "contact.title": "为下一代工作与生活设备而来",
    "contact.body": "如需品牌合作、渠道洽谈或产品资料，请联系 Toshiba Canvio 品牌团队。",
    "contact.cta": "联系品牌团队",
    "footer.copy": "© 2026 Toshiba Canvio. Independent concept electronics brand.",
    "footer.note": "Not affiliated with Toshiba Corporation. No hard drive products are represented on this site.",
    "detail.back": "返回首页",
    "detail.overview": "产品概览",
    "detail.specs": "核心规格",
    "detail.next": "下一款产品",
    "detail.contact": "咨询产品",
    "detail.note": "独立概念电子品牌，不代表东芝硬盘或 Toshiba Corporation 官方产品。"
  },
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Independent Concept Electronics",
    "hero.title": "Clearer Connections for Everyday Devices",
    "hero.body": "Toshiba Canvio builds connected devices for mobile work and smart living, from earbuds and tablets to lighting, video, audio, and home hubs.",
    "hero.ctaProducts": "Explore Products",
    "hero.ctaAbout": "About Brand",
    "hero.note": "Note: this is an independent concept electronics brand site. It is not affiliated with Toshiba Corporation and is not a Toshiba hard drive line.",
    "intro.kicker": "Product Ecosystem",
    "intro.title": "From Mobile Work to Smart Home",
    "intro.body": "A unified TC identity, light hardware forms, and a calm blue-silver visual language help every device fit naturally into daily life.",
    "products.kicker": "Featured Products",
    "products.title": "Featured Products",
    "products.body": "Eight non-hard-drive electronics across mobile work, smart home, creator meetings, and desktop experience.",
    "products.view": "View Details",
    "about.kicker": "About Toshiba Canvio",
    "about.title": "A Lighter, Quieter Electronics Line",
    "about.body": "Toshiba Canvio is designed to reduce friction between devices. Desk lighting, video meetings, smart hubs, earbuds, and chargers share one clear identity, material language, and interaction rhythm.",
    "about.statProducts": "Launch products",
    "about.statIdentity": "Unified identity",
    "about.statDrives": "Hard drive products",
    "contact.kicker": "Contact",
    "contact.title": "Built for the Next Generation of Work and Home Devices",
    "contact.body": "For brand partnerships, channel discussions, or product materials, contact the Toshiba Canvio brand team.",
    "contact.cta": "Contact Brand Team",
    "footer.copy": "© 2026 Toshiba Canvio. Independent concept electronics brand.",
    "footer.note": "Not affiliated with Toshiba Corporation. No hard drive products are represented on this site.",
    "detail.back": "Back Home",
    "detail.overview": "Overview",
    "detail.specs": "Key Specs",
    "detail.next": "Next Product",
    "detail.contact": "Ask About Product",
    "detail.note": "Independent concept electronics brand. Not an official Toshiba hard drive or Toshiba Corporation product."
  }
};
