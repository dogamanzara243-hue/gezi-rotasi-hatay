const SPOT_DATA = {
    theme: "history",
    title: "Hatay Gezi Rehberi",
    subtitle: "Medeniyetler Sofrası, Tarih ve Kültür Mozaği",
    category: "Tarih & Lezzet",
    hero: {
        badge: "Hoşgörü Kenti",
        coverImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1600&q=80&fm=webp",
        stats: [
            { label: "Ziyaretçi", value: "Yıllık 1M+" },
            { label: "İdeal Süre", value: "2-3 Gün" },
            { label: "Puan", value: "4.9 / 5" },
            { label: "Bölge", value: "Akdeniz / Güneydoğu" }
        ]
    },
    venueSummary: {
        badgeTitle: "MEDENİYETLER GEZİSİ",
        typeTitle: "Hatay Ziyaret Rehberi",
        description: "St. Pierre Kilisesi'nden Arkeoloji Müzesi'ne, Uzun Çarşı'dan meşhur Antakya künefesine kültür ve lezzet rotası.",
        details: [{"label": "Bölge", "value": "Akdeniz / Güneydoğu"}, {"label": "Öne Çıkan", "value": "St. Pierre & Künefe"}, {"label": "İdeal Süre", "value": "2-3 Gün"}]
    },
    overview: {
        title: "Hatay Gezi Rehberi Genel Bakış",
        paragraphs: ["Hatay (Antakya), farklı dinlerin ve kültürlerin yüzyıllardır barış içinde bir arada yaşadığı, dünyanın en eski yerleşim merkezlerinden biridir.", "Dünyanın ilk mağara kilisesi olan St. Pierre Kilisesi, zengin Hatay Arkeoloji Müzesi ve meşhur közde Hatay künefesi unutulmaz deneyimler sunar."],
        visitorNotes: [{"label": "En İyi Zaman", "value": "Sonbahar & İlkbahar"}, {"label": "Tarih", "value": "Dünyanın En Büyük Mozaik Müzelerinden"}, {"label": "Ne Yenir", "value": "Künefe, Tepsi Kebabı, Humus"}]
    },
    
    whyVisit: {
        title: "Hatay Keşif Rotaları",
        subtitle: "Şehrin en gözde mekanlarını tematik kategorilere göre keşfedin",
        cards: [
            {
                icon: "fa-solid fa-landmark",
                title: "Tarihi Yerler",
                description: "Yüzyıllık anıtlar, kaleler, müzeler ve köklü medeniyet izleri.",
                linkText: "Tarihi Keşfet",
                url: "#must-see-items"
            },
            {
                icon: "fa-solid fa-city",
                title: "Modern Yerler",
                description: "Şehrin en popüler meydanları, alışveriş merkezleri ve plazas.",
                linkText: "Moderni İncele",
                url: "#must-see-items"
            },
            {
                icon: "fa-solid fa-gem",
                title: "Sofistike Yerler",
                description: "Seçkin kafeler, sanat galerileri ve nezih buluşma noktaları.",
                linkText: "Sofistike Noktalar",
                url: "#where-to-stay-title"
            },
            {
                icon: "fa-solid fa-tree",
                title: "Doğal Güzellikler",
                description: "Parklar, sahil şeritleri, kanyonlar ve nefis manzara noktaları.",
                linkText: "Doğayı Gör",
                url: "#transport-title"
            }
        ]
    },
     {"icon": "fa-solid fa-utensils", "title": "Hatay Mutfağı", "description": "Közde künefesi, humusu, tepsi kebabı ve kağıt kebabı ile gastronomi ziyafeti."}, {"icon": "fa-solid fa-store", "title": "Tarihi Uzun Çarşı", "description": "Baharatçılar, demirciler ve fırınlarla dolu tarihi alışveriş merkezi."}]},
    mustSee: {
        title: "Görülmesi Gereken Öne Çıkan Noktalar",
        items: [{"category": "Müze", "title": "Hatay Arkeoloji Müzesi", "description": "Muhteşem mozaik koleksiyonu."}, {"category": "Inanç", "title": "St. Pierre Kilisesi", "description": "Hristiyanlık tarihinin en önemli kutsal alanı."}, {"category": "Tarih", "title": "Titus Tüneli & Beşikli Mağara", "description": "Roma dönemi insan eliyle yapılmış devasa tünel."}, {"category": "Çarşı", "title": "Uzun Çarşı", "description": "Antakya'nın kalbi tarihi esnaf çarşısı."}]
    },
    transportation: {"title": "Hatay'a Ulaşım Seçenekleri", "tip": "Hatay Havalimanı şehir merkezine otobüs ve servislerle bağlıdır.", "mapUrl": "https://maps.google.com/?q=Hatay+Turkey", "methods": [{"icon": "fa-solid fa-plane", "title": "Hatay Havalimanı", "detail": "Havaş otobüsleri ile Antakya ve İskenderun'a ulaşım."}, {"icon": "fa-solid fa-bus", "title": "Hatay Otogarı", "detail": "Türkiye'nin dört bir yanından otobüs seferleri."}]},
    whereToStay: {
        title: "Konaklama Önerileri",
        hotels: [{"badge": "Tarihi Müze", "name": "The Museum Hotel Antakya", "distance": "Antik Mozaikler Üzerinde Lüks", "link": "https://www.google.com/travel/hotels"}, {"badge": "Butik Konak", "name": "Savon Hotel Antakya", "distance": "Eski Antakya Evleri", "link": "https://www.google.com/travel/hotels"}]
    },
    whereToEat: {
        title: "Nerede Ne Yenir?",
        restaurants: [{"badge": "Künefe", "name": "Çınaraltı Yusuf Usta", "detail": "Tarihi Çınar Altında Közde Künefe", "rating": "4.9"}, {"badge": "Tepsi Kebabı", "name": "Pipo Restaurant / Fırınlar", "detail": "Geleneksel Antakya Tepsi Kebabı", "rating": "4.8"}]
    }
};