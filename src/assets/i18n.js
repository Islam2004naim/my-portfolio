import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "home": "Home", "about": "About", "Learning Journey": "Learning Journey", "Projeler": "Projeler", "contact": "Contact", "cv": " Download C.V.",
        "hi": "Hi, I'm",
        "name": "Islam Naim",
        "description": "Building Products &",
        "description2": "Brands using 3D visuals and web applications.",
        "button": "Let's Talk",
        "OverView": "OverView.",
        "OverViewText": `"I am a results-driven software developer with technical expertise in TypeScript, JavaScript, and Java, specializing in modern frameworks like React, Node.js, and Three.js. I have a proven track record of building complex systems, including a full-stack real-time Chatting Application using Flutter and a robust Java-based Hospital Management System. I am a quick learner who thrives in collaborative environments, dedicated to delivering scalable,
         user-friendly solutions that solve real-world challenges.
          Let’s work together to bring your vision to life!"`,
        "Projects": "Projects",
        "projectsText": "The following projects demonstrate my technical expertise and professional experience through real-world applications. Each work is presented with its respective code repository and live deployment, showcasing my proficiency in solving complex challenges, adapting to diverse technology stacks, and delivering scalable solutions.",
        "Follow Me": "Follow Me",
        "Name": "Your Name",
        "NameQuestion": "What's your name?",
        "Email": "Your Email",
        "EmailQuestion": "What's your email?",
        "Message": "Your Message",
        "MessageQuestion": "What do you want to say?",
        "Send": "Send",
        "Sending": "Sending...",
        "Exp1Title": "React Developer",
        "Exp2Title": "javascript Developer",
        "Exp3Title": "Flutter Developer",
        "Exp4Title": "Python Developer ",
        "Exp5Title": "C++ Developer",
        "Exp6Title": "java Developer",

        "FlutterAppTitle": "Flutter App",
        "FlutterApp": `A comprehensive communication platform developed with a focus on cross-platform compatibility and real-time data synchronization. 
        The project utilizes a modular architecture, 
        integrating a Flutter-based mobile application with dedicated web frontend and backend services.
        Core Architecture:
        Mobile: Multi-platform support via Flutter.
          Frontend/Backend: Scalable web and server-side infrastructure.
          Real-Time Messaging: Optimized for low-latency user interaction.
        `,
        "JavaSystemTitle": "Java Management System",
        "JavaSystem": `A comprehensive Java-based desktop application designed to streamline healthcare operations,
         managing doctor schedules and patient records through a structured object-oriented architecture.`,
        "DownloadCV": "Download CV"
      }
    },
    tr: {
      translation: {
        "home": "Anasayfa", "about": "Hakkımda", "Learning Journey": "Öğrenme Yolculuğu", "Projeler": "Projeler", "contact": "İletişim", "cv": " C.V indr",
        "hi": "Merhaba, Ben",
        "name": "İslam Naim",
        "description": "3D görseller web uygulamaları kullanarak ürünler ve markalar oluşturuyorum.",
        "button": "İletişime Geç",
        "OverView": "Genel Bakış",
        "OverViewText": `"TypeScript, JavaScript ve Java dillerinde teknik uzmanlığا sahip, sonuç odaklı bir yazılım geliştiricisiyim. React, Node.js ve Three.js gibi modern framework'lerde uzmanlaşmış durumdayım. Flutter kullanarak tam yığınlı gerçek zamanlı bir Sohbet Uygulaması ve sağlam bir Java tabanlı Hastane Yönetim Sistemi de dahil olmak üzere karmaşık sistemler geliştirme konusunda kanıtlanmış bir geçmişe sahibim. Hızlı öğrenen, iş birliğine dayalı ortamlarda başarılı olan ve gerçek dünya sorunlarını çözen ölçeklenebilir, 
        kullanıcı dostu çözümler sunmaya adanmış biriyim.
         Vizyonunuzu hayata geçirmek için birlikte çalışalım!"`,
        "Projects": " Projelerim",
        "projectsText": "Aşağıdaki projeler, gerçek dünya uygulamaları aracılığıyla teknik uzmanlığımı ve mesleki deneyimimi göstermektedir. Her çalışma, ilgili kod deposu ve canlı dağıtımıyla birlikte sunulmakta olup, karmaşık sorunları çözme, various technology stacks, and delivering scalable solutions.",
        "Follow Me": "Beni takip et",
        "Name": "Adınız",
        "NameQuestion": "Adınız nedir?",
        "Email": "Email Adresiniz",
        "EmailQuestion": "Email adresinizi yazınız",
        "Message": "Mesajınızı yazınız",
        "MessageQuestion": "Ne söylemek istersiniz?",
        "Send": "Gönder",
        "Sending": "Gönderiliyor...",
        "FlutterAppTitle": "Flutter Uygulaması",
        "FlutterApp": `Proje Adı: Tam Yığın Gerçek Zamanlı Sohbet Uygulaması
       Açıklama: Çapraz platform uyumluluğuna ve gerçek zamanlı veri senkronizasyonuna odaklanılarak geliştirilmiş kapsamlı bir iletişim platformu. Proje, Flutter tabanlı bir mobil uygulamayı özel web ön uç ve arka uç hizmetleriyle entre eden modüler bir mimari kullanmaktadır.
       Temel Mimari:
       Mobil: Flutter aracılığıyla çoklu platform desteği.
       Ön Uç/Arka Uç: Ölçeklenebilir web ve sunucu tarafı altyapısı.
       Gerçek Zamanlı Mesajlaşma: Düşük gecikmeli kullanıcı etkileşimi için optimize edilmiştir.`,
        "JavaSystemTitle": "Java Yönetim Sistemi",
        "JavaSystem": `Yapılandırılmış nesne yönelimli bir mimari aracılığıyla doktor randevularını ve hasta kayıtlarını yöneterek sağlık hizmetleri operasyonlarını 
        kolaylaştırmak için tasarlanmış kapsamlı bir
         Java tabanlı masaüstü uygulaması.` ,
        "DownloadCV": "CV'yi İndir"
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;