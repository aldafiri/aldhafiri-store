const products = [
  {
    id: 1,
    name: "جهاز ألعاب PlayStation 5",
    desc: "تجربة لعب غامرة بجودة عالية وسرعة فائقة",
    price: 1999,
    category: "أجهزة",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80",
    glow: "#174fa7",
    tag: "الأكثر طلبًا"
  },
  {
    id: 2,
    name: "جهاز ألعاب Xbox Series X",
    desc: "أداء قوي ورسومات مذهلة لعالم الألعاب",
    price: 1799,
    category: "أجهزة",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=500&q=80",
    glow: "#155e42",
    tag: "مميز"
  },
  {
    id: 3,
    name: "كمبيوتر قيمنق RGB",
    desc: "قوة أداء خارقة وأضواء ملونة قابلة للتخصيص",
    price: 4299,
    category: "كمبيوتر",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=80",
    glow: "#5b237e",
    tag: "احترافي"
  },
  {
    id: 4,
    name: "سماعة ألعاب احترافية",
    desc: "صوت محيطي نقي وراحة فائقة للاستخدام الطويل",
    price: 249,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    glow: "#174a88",
    tag: ""
  },
  {
    id: 5,
    name: "كيبورد ميكانيكي RGB",
    desc: "استجابة سريعة ومفاتيح ميكانيكية متينة بإضاءة مذهلة",
    price: 329,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80",
    glow: "#70204e",
    tag: ""
  },
  {
    id: 6,
    name: "ماوس قيمنق احترافي",
    desc: "تحكم دقيق وحساسية عالية مصمم لتكون الأسرع",
    price: 159,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=500&q=80",
    glow: "#154c78",
    tag: ""
  },
  {
    id: 7,
    name: "كرسي قيمنق مريح",
    desc: "دعم كامل للظهر والرقبة لجلسات اللعب الطويلة",
    price: 699,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=500&q=80",
    glow: "#1a3f78",
    tag: ""
  },
  {
    id: 8,
    name: "يد تحكم لاسلكية DualSense",
    desc: "تحكم مريح واهتزاز تفاعلي دقيق للألعاب",
    price: 279,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=500&q=80",
    glow: "#55318b",
    tag: "جديد"
  },
  {
    id: 9,
    name: "شاشة قيمنق 27 بوصة",
    desc: "وضوح عالي التحديد بمعدل تحديث سريع لتجربة سلسة",
    price: 1099,
    category: "كمبيوتر",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80",
    glow: "#174fa7",
    tag: ""
  },
  {
    id: 10,
    name: "مايكروفون للبث المباشر",
    desc: "صوت نقي وواضح تماماً للبث والتواصل الاجتماعي",
    price: 389,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=80",
    glow: "#572b8b",
    tag: ""
  },
  {
    id: 11,
    name: "ماوس باد عريض RGB",
    desc: "سطح واسع وناعم بإضاءة محيطية ساحرة",
    price: 119,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=500&q=80",
    glow: "#7b235f",
    tag: ""
  },
  {
    id: 12,
    name: "مقود سباقات تفاعلي",
    desc: "تجربة قيادة واقعية ومحاكية لعشاق ألعاب السيارات",
    price: 899,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80",
    glow: "#174b56",
    tag: ""
  },
  {
    id: 13,
    name: "متحكم سوني DualSense Edge",
    desc: "يد تحكم احترافية مخصصة للبطولات وتعديل الأزرار",
    price: 799,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=500&q=80",
    glow: "#397bff",
    tag: "احترافي"
  },
  {
    id: 14,
    name: "سماعة Razer BlackShark V2",
    desc: "صوت محيطي احترافي مع مايكروفون عزل ضوضاء فائق",
    price: 399,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    glow: "#36e0a1",
    tag: "الأكثر مبيعاً"
  },
  {
    id: 15,
    name: "لوحة مفاتيح Logitech G Pro X",
    desc: "كيبورد ميكانيكي سلكي مخصص للاستجابة السريعة في الألعاب",
    price: 549,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80",
    glow: "#a33dff",
    tag: ""
  },
  {
    id: 16,
    name: "شاشة Asus ROG Swift 360Hz",
    desc: "أسرع شاشة قيمنق في العالم لمحبّي الألعاب السريعة",
    price: 2499,
    category: "كمبيوتر",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80",
    glow: "#ff3838",
    tag: "نخبة الألعاب"
  },
  {
    id: 17,
    name: "كرسي Secretlab Titan Evo",
    desc: "الكرسي الأفضل عالمياً من حيث الراحة الفائقة والجودة",
    price: 1899,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=500&q=80",
    glow: "#ffa502",
    tag: "فخم"
  },
  {
    id: 18,
    name: "منظومة قيمنق متكاملة Intel i9",
    desc: "وحش أداء يجمع أقوى كرت شاشة ومعالج لتشغيل أثقل الألعاب",
    price: 7999,
    category: "كمبيوتر",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=80",
    glow: "#397bff",
    tag: "الأقوى"
  },
  {
    id: 19,
    name: "كرت شاشة Nvidia RTX 4090",
    desc: "أقوى كرت شاشة لتشغيل ألعاب بدقة 4K ورسومات خيالية",
    price: 7499,
    category: "كمبيوتر",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=80",
    glow: "#36e0a1",
    tag: "الأسطورة"
  },
  {
    id: 20,
    name: "طاولة قيمنق كهربائية بارتفاع قابل للتعديل",
    desc: "طاولة احترافية مزودة بإضاءة RGB ومساحة واسعة للشاشات",
    price: 1299,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=500&q=80",
    glow: "#a33dff",
    tag: "جديد"
  },
  {
    id: 21,
    name: "نظارة الواقع الافتراضي Meta Quest 3",
    desc: "عالم افتراضي متكامل وواقعي بأعلى جودة عرض",
    price: 2199,
    category: "أجهزة",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=500&q=80",
    glow: "#397bff",
    tag: "مبتكر"
  },
  {
    id: 22,
    name: "ماوس لاسلكي Logitech G Pro X Superlight",
    desc: "خفيف الوزن بشكل لا يصدق ومخصص للاعبين المحترفين",
    price: 529,
    category: "إكسسوارات",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=500&q=80",
    glow: "#ffa502",
    tag: "الأكثر طلباً"
  }
];