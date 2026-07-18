import type { Locale } from './locales';

const site: Record<Locale, Record<string, string>> = {
  en: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'Premium Fullscreen Utilities',
    'hero.eyebrow': 'FREE FULLSCREEN UTILITIES',
    'hero.heading': 'The fastest way to turn any display into a useful screen.',
    'hero.subtitle': 'Color screens, display tests, ambient savers, prank screens, and fake update pages in one premium, static-first web app.',
    'hero.browse': 'Browse tools',
    'hero.run_test': 'Run a screen test',
    'analysis.eyebrow': 'PRODUCT ANALYSIS',
    'analysis.heading': 'Built beyond a link directory.',
    'analysis.p1': 'Competitor screen sites usually rank with many simple URL targets, but the product experience is thin: duplicated copy, limited controls, weak internal linking, inconsistent mobile navigation, and pages that feel like isolated utilities.',
    'analysis.p2': 'Free Online Screen keeps the useful IA, clear individual URLs, color pages, testing pages, prank pages, fake screens, multilingual targeting, FAQ schema, breadcrumbs, and related links, then adds a reusable application-like control surface, stronger accessibility, cleaner category architecture, richer articles, and a premium visual system.',
    'nav.tools': 'Tools',
    'nav.search': 'Search...',
    'nav.search_tools': 'Search tools...',
    'nav.menu': 'Menu',
    'nav.language': 'Language',
    'nav.theme': 'Toggle theme',
    'footer.description': 'Premium fullscreen utilities for color, display testing, ambience, pranks, and fake screens. Static, fast, accessible, and free.',
    'footer.categories': 'Categories',
    'footer.popular': 'Popular Pages',
    'footer.languages': 'Languages',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'SHORTCUTS',
    'tool.shortcuts_heading': 'Designed for fast repeat use.',
    'tool.shortcut_fullscreen': 'Fullscreen mode',
    'tool.shortcut_random': 'Random color',
    'tool.shortcut_copy': 'Copy current color',
    'tool.shortcut_download': 'Download image',
    'tool.faq': 'FAQ',
    'tool.faq_heading': 'Questions about {name}.',
    'tool.related': 'RELATED TOOLS',
    'tool.related_heading': 'Similar fullscreen utilities.',
    'tool.related_searches': 'PEOPLE ALSO SEARCH FOR',
    'tool.related_searches_heading': 'Common terms related to white screens.',
    'tool.all_tools': 'All tools',
    'tool.breadcrumb_home': 'Home',
    'screen.color': 'Color',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'Brightness',
    'screen.fullscreen': 'Fullscreen',
    'screen.copy_hex': 'Copy HEX',
    'screen.copy_rgb': 'Copy RGB',
    'screen.random': 'Random',
    'screen.favorite': 'Favorite color',
    'screen.favorites': 'Favorite colors',
    'screen.choose_color': 'Choose screen color',
    'screen.hex_value': 'HEX color value',
    'screen.rgb_value': 'RGB color value',
    'screen.hsl_value': 'HSL color value',
    'screen.brightness_label': 'Screen brightness',
    'screen.fullscreen_hint': 'Press Escape to exit fullscreen',
    'screen.status_hex_copied': 'HEX copied',
    'screen.status_rgb_copied': 'RGB copied',
    'screen.status_color_copied': 'Color copied',
    'screen.status_favorite_added': 'Favorite added',
    'screen.status_favorite_removed': 'Favorite removed',
    'screen.status_already_saved': 'Already saved',
    'screen.download': 'Download',
    'screen.orientation_landscape': 'Landscape (1920x1080)',
    'screen.orientation_portrait': 'Portrait (1080x1920)',
    'screen.orientation_square': 'Square (1080x1080)',
    'screen.orientation_device': 'My screen size',
  },
  es: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'Utilidades de pantalla completa premium',
    'hero.eyebrow': 'UTILIDADES GRATUITAS DE PANTALLA COMPLETA',
    'hero.heading': 'La forma más rápida de convertir cualquier pantalla en una herramienta útil.',
    'hero.subtitle': 'Pantallas de color, pruebas de display, salvapantallas, bromas y pantallas falsas en una sola app web premium y estática.',
    'hero.browse': 'Explorar herramientas',
    'hero.run_test': 'Hacer una prueba',
    'analysis.eyebrow': 'ANÁLISIS DEL PRODUCTO',
    'analysis.heading': 'Construido más allá de un directorio de enlaces.',
    'analysis.p1': 'Los sitios de pantallas competidores suelen posicionarse con muchas URLs simples, pero la experiencia del producto es pobre: contenido duplicado, controles limitados, enlazado interno débil, navegación móvil inconsistente y páginas que parecen utilidades aisladas.',
    'analysis.p2': 'Free Online Screen mantiene la IA útil, URLs individuales claras, páginas de color, pruebas, bromas, pantallas falsas, segmentación multilingüe, esquema FAQ, migas de pan y enlaces relacionados, luego añade una superficie de control reutilizable, mejor accesibilidad, arquitectura de categorías más limpia, artículos más ricos y un sistema visual premium.',
    'nav.tools': 'Herramientas',
    'nav.search': 'Buscar...',
    'nav.search_tools': 'Buscar herramientas...',
    'nav.menu': 'Menú',
    'nav.language': 'Idioma',
    'nav.theme': 'Cambiar tema',
    'footer.description': 'Utilidades premium de pantalla completa para color, pruebas de display, ambiente, bromas y pantallas falsas. Estático, rápido, accesible y gratuito.',
    'footer.categories': 'Categorías',
    'footer.popular': 'Páginas Populares',
    'footer.languages': 'Idiomas',
    'footer.company': 'Empresa',
    'footer.about': 'Acerca de',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.contact': 'Contacto',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'ATAJOS',
    'tool.shortcuts_heading': 'Diseñado para uso rápido y repetido.',
    'tool.shortcut_fullscreen': 'Modo pantalla completa',
    'tool.shortcut_random': 'Color aleatorio',
    'tool.shortcut_copy': 'Copiar color actual',
    'tool.shortcut_download': 'Descargar imagen',
    'tool.faq': 'PREGUNTAS FRECUENTES',
    'tool.faq_heading': 'Preguntas sobre {name}.',
    'tool.related': 'HERRAMIENTAS RELACIONADAS',
    'tool.related_heading': 'Utilidades de pantalla completa similares.',
    'tool.related_searches': 'LA GENTE TAMBIÉN BUSCA',
    'tool.related_searches_heading': 'Términos comunes para pantallas blancas.',
    'tool.all_tools': 'Todas las herramientas',
    'tool.breadcrumb_home': 'Inicio',
    'screen.color': 'Color',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'Brillo',
    'screen.fullscreen': 'Pantalla completa',
    'screen.copy_hex': 'Copiar HEX',
    'screen.copy_rgb': 'Copiar RGB',
    'screen.random': 'Aleatorio',
    'screen.favorite': 'Color favorito',
    'screen.favorites': 'Colores favoritos',
    'screen.choose_color': 'Elegir color',
    'screen.hex_value': 'Valor HEX',
    'screen.rgb_value': 'Valor RGB',
    'screen.hsl_value': 'Valor HSL',
    'screen.brightness_label': 'Brillo de pantalla',
    'screen.fullscreen_hint': 'Presiona Escape para salir',
    'screen.status_hex_copied': 'HEX copiado',
    'screen.status_rgb_copied': 'RGB copiado',
    'screen.status_color_copied': 'Color copiado',
    'screen.status_favorite_added': 'Favorito añadido',
    'screen.status_favorite_removed': 'Favorito eliminado',
    'screen.status_already_saved': 'Ya guardado',
    'screen.download': 'Descargar',
    'screen.orientation_landscape': 'Horizontal (1920x1080)',
    'screen.orientation_portrait': 'Vertical (1080x1920)',
    'screen.orientation_square': 'Cuadrada (1080x1080)',
    'screen.orientation_device': 'Mi pantalla',
  },
  pt: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'Utilitários Premium de Tela Cheia',
    'hero.eyebrow': 'UTILITÁRIOS GRATUITOS DE TELA CHEIA',
    'hero.heading': 'A maneira mais rápida de transformar qualquer tela em uma ferramenta útil.',
    'hero.subtitle': 'Telas coloridas, testes de display, protetores de tela, brincadeiras e telas falsas em um único app web premium e estático.',
    'hero.browse': 'Explorar ferramentas',
    'hero.run_test': 'Fazer um teste',
    'analysis.eyebrow': 'ANÁLISE DO PRODUTO',
    'analysis.heading': 'Construído além de um diretório de links.',
    'analysis.p1': 'Sites concorrentes de telas geralmente rankeiam com muitas URLs simples, mas a experiência do produto é fraca: conteúdo duplicado, controles limitados, linking interno fraco, navegação móvel inconsistente e páginas que parecem utilitários isolados.',
    'analysis.p2': 'O Free Online Screen mantém a IA útil, URLs individuais claras, páginas de cor, teste, brincadeiras, telas falsas, segmentação multilíngue, esquema FAQ, breadcrumbs e links relacionados, e adiciona uma superfície de controle reutilizável, acessibilidade mais forte, arquitetura de categorias mais limpa, artigos mais ricos e um sistema visual premium.',
    'nav.tools': 'Ferramentas',
    'nav.search': 'Pesquisar...',
    'nav.search_tools': 'Pesquisar ferramentas...',
    'nav.menu': 'Menu',
    'nav.language': 'Idioma',
    'nav.theme': 'Alternar tema',
    'footer.description': 'Utilitários premium de tela cheia para cor, teste de display, ambiente, brincadeiras e telas falsas. Estático, rápido, acessível e gratuito.',
    'footer.categories': 'Categorias',
    'footer.popular': 'Páginas Populares',
    'footer.languages': 'Idiomas',
    'footer.company': 'Empresa',
    'footer.about': 'Sobre',
    'footer.privacy': 'Privacidade',
    'footer.terms': 'Termos',
    'footer.contact': 'Contato',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'ATALHOS',
    'tool.shortcuts_heading': 'Projetado para uso rápido e repetido.',
    'tool.shortcut_fullscreen': 'Modo tela cheia',
    'tool.shortcut_random': 'Cor aleatória',
    'tool.shortcut_copy': 'Copiar cor atual',
    'tool.shortcut_download': 'Baixar imagem',
    'tool.faq': 'PERGUNTAS FREQUENTES',
    'tool.faq_heading': 'Perguntas sobre {name}.',
    'tool.related': 'FERRAMENTAS RELACIONADAS',
    'tool.related_heading': 'Utilitários de tela cheia similares.',
    'tool.related_searches': 'AS PESSOAS TAMBÉM PESQUISAM',
    'tool.related_searches_heading': 'Termos comuns para telas brancas.',
    'tool.all_tools': 'Todas as ferramentas',
    'tool.breadcrumb_home': 'Início',
    'screen.color': 'Cor',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'Brilho',
    'screen.fullscreen': 'Tela cheia',
    'screen.copy_hex': 'Copiar HEX',
    'screen.copy_rgb': 'Copiar RGB',
    'screen.random': 'Aleatório',
    'screen.favorite': 'Cor favorita',
    'screen.favorites': 'Cores favoritas',
    'screen.choose_color': 'Escolher cor',
    'screen.hex_value': 'Valor HEX',
    'screen.rgb_value': 'Valor RGB',
    'screen.hsl_value': 'Valor HSL',
    'screen.brightness_label': 'Brilho da tela',
    'screen.fullscreen_hint': 'Pressione Escape para sair',
    'screen.status_hex_copied': 'HEX copiado',
    'screen.status_rgb_copied': 'RGB copiado',
    'screen.status_color_copied': 'Cor copiada',
    'screen.status_favorite_added': 'Favorito adicionado',
    'screen.status_favorite_removed': 'Favorito removido',
    'screen.status_already_saved': 'Já salvo',
    'screen.download': 'Baixar',
    'screen.orientation_landscape': 'Paisagem (1920x1080)',
    'screen.orientation_portrait': 'Retrato (1080x1920)',
    'screen.orientation_square': 'Quadrado (1080x1080)',
    'screen.orientation_device': 'Minha tela',
  },
  fr: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'Utilitaires Premium Plein Écran',
    'hero.eyebrow': 'UTILITAIRES GRATUITS PLEIN ÉCRAN',
    'hero.heading': 'Le moyen le plus rapide de transformer n\'importe quel écran en un outil utile.',
    'hero.subtitle': 'Écrans colorés, tests d\'affichage, économiseurs d\'écran, farces et faux écrans dans une seule application web premium et statique.',
    'hero.browse': 'Parcourir les outils',
    'hero.run_test': 'Effectuer un test',
    'analysis.eyebrow': 'ANALYSE DU PRODUIT',
    'analysis.heading': 'Construit au-delà d\'un répertoire de liens.',
    'analysis.p1': 'Les sites concurrents d\'écrans se classent généralement avec de nombreuses URL simples, mais l\'expérience produit est mince : contenu dupliqué, contrôles limités, maillage interne faible, navigation mobile incohérente et pages qui ressemblent à des utilitaires isolés.',
    'analysis.p2': 'Free Online Screen conserve l\'architecture utile, des URL individuelles claires, des pages de couleur, de test, de farces, de faux écrans, le ciblage multilingue, le schéma FAQ, le fil d\'Ariane et les liens connexes, puis ajoute une surface de contrôle réutilisable, une meilleure accessibilité, une architecture de catégories plus propre, des articles plus riches et un système visuel premium.',
    'nav.tools': 'Outils',
    'nav.search': 'Rechercher...',
    'nav.search_tools': 'Rechercher des outils...',
    'nav.menu': 'Menu',
    'nav.language': 'Langue',
    'nav.theme': 'Changer le thème',
    'footer.description': 'Utilitaires premium plein écran pour la couleur, les tests d\'affichage, l\'ambiance, les farces et les faux écrans. Statique, rapide, accessible et gratuit.',
    'footer.categories': 'Catégories',
    'footer.popular': 'Pages Populaires',
    'footer.languages': 'Langues',
    'footer.company': 'Entreprise',
    'footer.about': 'À propos',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions',
    'footer.contact': 'Contact',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'RACCOURCIS',
    'tool.shortcuts_heading': 'Conçu pour une utilisation rapide et répétée.',
    'tool.shortcut_fullscreen': 'Mode plein écran',
    'tool.shortcut_random': 'Couleur aléatoire',
    'tool.shortcut_copy': 'Copier la couleur',
    'tool.shortcut_download': 'Télécharger l\'image',
    'tool.faq': 'FAQ',
    'tool.faq_heading': 'Questions sur {name}.',
    'tool.related': 'OUTILS CONNEXES',
    'tool.related_heading': 'Utilitaires plein écran similaires.',
    'tool.related_searches': 'LES GENS RECHERCHENT AUSSI',
    'tool.related_searches_heading': 'Termes courants liés aux écrans blancs.',
    'tool.all_tools': 'Tous les outils',
    'tool.breadcrumb_home': 'Accueil',
    'screen.color': 'Couleur',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'Luminosité',
    'screen.fullscreen': 'Plein écran',
    'screen.copy_hex': 'Copier HEX',
    'screen.copy_rgb': 'Copier RGB',
    'screen.random': 'Aléatoire',
    'screen.favorite': 'Couleur favorite',
    'screen.favorites': 'Couleurs favorites',
    'screen.choose_color': 'Choisir une couleur',
    'screen.hex_value': 'Valeur HEX',
    'screen.rgb_value': 'Valeur RGB',
    'screen.hsl_value': 'Valeur HSL',
    'screen.brightness_label': 'Luminosité',
    'screen.fullscreen_hint': 'Appuyez sur Échap pour quitter',
    'screen.status_hex_copied': 'HEX copié',
    'screen.status_rgb_copied': 'RGB copié',
    'screen.status_color_copied': 'Couleur copiée',
    'screen.status_favorite_added': 'Favori ajouté',
    'screen.status_favorite_removed': 'Favori supprimé',
    'screen.status_already_saved': 'Déjà enregistré',
    'screen.download': 'Télécharger',
    'screen.orientation_landscape': 'Paysage (1920x1080)',
    'screen.orientation_portrait': 'Portrait (1080x1920)',
    'screen.orientation_square': 'Carré (1080x1080)',
    'screen.orientation_device': 'Mon écran',
  },
  de: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'Premium Vollbild-Dienstprogramme',
    'hero.eyebrow': 'KOSTENLOSE VOLLBILD-DIENSTPROGRAMME',
    'hero.heading': 'Der schnellste Weg, jeden Bildschirm in ein nützliches Werkzeug zu verwandeln.',
    'hero.subtitle': 'Farbbildschirme, Display-Tests, Bildschirmschoner, Scherze und gefälschte Bildschirme in einer einzigen premium, statischen Web-App.',
    'hero.browse': 'Werkzeuge durchsuchen',
    'hero.run_test': 'Einen Test durchführen',
    'analysis.eyebrow': 'PRODUKTANALYSE',
    'analysis.heading': 'Über ein Linkverzeichnis hinaus entwickelt.',
    'analysis.p1': 'Konkurrierende Bildschirmseiten ranken meist mit vielen einfachen URLs, aber die Produkterfahrung ist dünn: duplizierte Inhalte, begrenzte Steuerung, schwache interne Verlinkung, inkonsistente mobile Navigation und Seiten, die sich wie isolierte Dienstprogramme anfühlen.',
    'analysis.p2': 'Free Online Screen behält die nützliche IA, klare individuelle URLs, Farbseiten, Testseiten, Scherzseiten, gefälschte Bildschirme, mehrsprachiges Targeting, FAQ-Schema, Breadcrumbs und verwandte Links bei und fügt eine wiederverwendbare Steueroberfläche, bessere Zugänglichkeit, sauberere Kategoriearchitektur, reichhaltigere Artikel und ein Premium-Visualsystem hinzu.',
    'nav.tools': 'Werkzeuge',
    'nav.search': 'Suchen...',
    'nav.search_tools': 'Werkzeuge suchen...',
    'nav.menu': 'Menü',
    'nav.language': 'Sprache',
    'nav.theme': 'Design wechseln',
    'footer.description': 'Premium Vollbild-Dienstprogramme für Farbe, Display-Tests, Ambiente, Scherze und gefälschte Bildschirme. Statisch, schnell, zugänglich und kostenlos.',
    'footer.categories': 'Kategorien',
    'footer.popular': 'Beliebte Seiten',
    'footer.languages': 'Sprachen',
    'footer.company': 'Unternehmen',
    'footer.about': 'Über uns',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.contact': 'Kontakt',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'TASTENKÜRZEL',
    'tool.shortcuts_heading': 'Konzipiert für schnelle, wiederholte Nutzung.',
    'tool.shortcut_fullscreen': 'Vollbildmodus',
    'tool.shortcut_random': 'Zufällige Farbe',
    'tool.shortcut_copy': 'Aktuelle Farbe kopieren',
    'tool.shortcut_download': 'Bild herunterladen',
    'tool.faq': 'FAQ',
    'tool.faq_heading': 'Fragen zu {name}.',
    'tool.related': 'VERWANDTE WERKZEUGE',
    'tool.related_heading': 'Ähnliche Vollbild-Dienstprogramme.',
    'tool.related_searches': 'BELIEBTE SUCHANFRAGEN',
    'tool.related_searches_heading': 'Häufige Begriffe zu weißem Bildschirm.',
    'tool.all_tools': 'Alle Werkzeuge',
    'tool.breadcrumb_home': 'Startseite',
    'screen.color': 'Farbe',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'Helligkeit',
    'screen.fullscreen': 'Vollbild',
    'screen.copy_hex': 'HEX kopieren',
    'screen.copy_rgb': 'RGB kopieren',
    'screen.random': 'Zufällig',
    'screen.favorite': 'Lieblingsfarbe',
    'screen.favorites': 'Lieblingsfarben',
    'screen.choose_color': 'Farbe auswählen',
    'screen.hex_value': 'HEX-Wert',
    'screen.rgb_value': 'RGB-Wert',
    'screen.hsl_value': 'HSL-Wert',
    'screen.brightness_label': 'Bildschirmhelligkeit',
    'screen.fullscreen_hint': 'Drücken Sie Escape zum Beenden',
    'screen.status_hex_copied': 'HEX kopiert',
    'screen.status_rgb_copied': 'RGB kopiert',
    'screen.status_color_copied': 'Farbe kopiert',
    'screen.status_favorite_added': 'Favorit hinzugefügt',
    'screen.status_favorite_removed': 'Favorit entfernt',
    'screen.status_already_saved': 'Bereits gespeichert',
    'screen.download': 'Herunterladen',
    'screen.orientation_landscape': 'Querformat (1920x1080)',
    'screen.orientation_portrait': 'Hochformat (1080x1920)',
    'screen.orientation_square': 'Quadratisch (1080x1080)',
    'screen.orientation_device': 'Bildschirmgröße',
  },
  hi: {
    'site.title': 'फ्री ऑनलाइन स्क्रीन',
    'site.tagline': 'प्रीमियम फुलस्क्रीन उपयोगिताएँ',
    'hero.eyebrow': 'मुफ्त फुलस्क्रीन उपयोगिताएँ',
    'hero.heading': 'किसी भी डिस्प्ले को उपयोगी स्क्रीन में बदलने का सबसे तेज़ तरीका।',
    'hero.subtitle': 'रंग स्क्रीन, डिस्प्ले टेस्ट, एम्बिएंट सेवर, प्रैंक स्क्रीन और फर्जी अपडेट पेज सभी एक प्रीमियम, स्टैटिक-फर्स्ट वेब ऐप में।',
    'hero.browse': 'उपकरण देखें',
    'hero.run_test': 'स्क्रीन टेस्ट करें',
    'analysis.eyebrow': 'उत्पाद विश्लेषण',
    'analysis.heading': 'एक लिंक डायरेक्टरी से आगे बनाया गया।',
    'analysis.p1': 'प्रतिस्पर्धी स्क्रीन साइटें आमतौर पर कई सरल URL लक्ष्यों के साथ रैंक करती हैं, लेकिन उत्पाद अनुभव पतला होता है: डुप्लिकेट कॉपी, सीमित नियंत्रण, कमजोर आंतरिक लिंकिंग, असंगत मोबाइल नेविगेशन और पेज जो अलग-थलग उपयोगिताओं की तरह लगते हैं।',
    'analysis.p2': 'Free Online Screen उपयोगी IA, स्पष्ट व्यक्तिगत URLs, रंग पेज, टेस्टिंग पेज, प्रैंक पेज, फर्जी स्क्रीन, बहुभाषी लक्ष्यीकरण, FAQ स्कीमा, ब्रेडक्रंब और संबंधित लिंक रखता है, फिर एक पुन: प्रयोज्य नियंत्रण सतह, मजबूत पहुंच, स्वच्छ श्रेणी आर्किटेक्चर, समृद्ध लेख और एक प्रीमियम विजुअल सिस्टम जोड़ता है।',
    'nav.tools': 'उपकरण',
    'nav.search': 'खोजें...',
    'nav.search_tools': 'उपकरण खोजें...',
    'nav.menu': 'मेन्यू',
    'nav.language': 'भाषा',
    'nav.theme': 'थीम बदलें',
    'footer.description': 'रंग, डिस्प्ले टेस्टिंग, एम्बिएंस, प्रैंक और फर्जी स्क्रीन के लिए प्रीमियम फुलस्क्रीन उपयोगिताएँ। स्टैटिक, तेज़, सुलभ और मुफ्त।',
    'footer.categories': 'श्रेणियाँ',
    'footer.popular': 'लोकप्रिय पेज',
    'footer.languages': 'भाषाएँ',
    'footer.company': 'कंपनी',
    'footer.about': 'हमारे बारे में',
    'footer.privacy': 'गोपनीयता',
    'footer.terms': 'शर्तें',
    'footer.contact': 'संपर्क',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'शॉर्टकट',
    'tool.shortcuts_heading': 'तेज़ और दोहराव उपयोग के लिए डिज़ाइन किया गया।',
    'tool.shortcut_fullscreen': 'फुलस्क्रीन मोड',
    'tool.shortcut_random': 'रैंडम रंग',
    'tool.shortcut_copy': 'वर्तमान रंग कॉपी करें',
    'tool.shortcut_download': 'छवि डाउनलोड करें',
    'tool.faq': 'सामान्य प्रश्न',
    'tool.faq_heading': '{name} के बारे में प्रश्न।',
    'tool.related': 'संबंधित उपकरण',
    'tool.related_heading': 'समान फुलस्क्रीन उपयोगिताएँ।',
    'tool.related_searches': 'लोग यह भी खोजते हैं',
    'tool.related_searches_heading': 'सफेद स्क्रीन से जुड़े सामान्य शब्द।',
    'tool.all_tools': 'सभी उपकरण',
    'tool.breadcrumb_home': 'होम',
    'screen.color': 'रंग',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'चमक',
    'screen.fullscreen': 'फुलस्क्रीन',
    'screen.copy_hex': 'HEX कॉपी करें',
    'screen.copy_rgb': 'RGB कॉपी करें',
    'screen.random': 'रैंडम',
    'screen.favorite': 'पसंदीदा रंग',
    'screen.favorites': 'पसंदीदा रंग',
    'screen.choose_color': 'स्क्रीन का रंग चुनें',
    'screen.hex_value': 'HEX रंग मान',
    'screen.rgb_value': 'RGB रंग मान',
    'screen.hsl_value': 'HSL रंग मान',
    'screen.brightness_label': 'स्क्रीन की चमक',
    'screen.fullscreen_hint': 'बाहर निकलने के लिए Escape दबाएं',
    'screen.status_hex_copied': 'HEX कॉपी हुआ',
    'screen.status_rgb_copied': 'RGB कॉपी हुआ',
    'screen.status_color_copied': 'रंग कॉपी हुआ',
    'screen.status_favorite_added': 'पसंदीदा जोड़ा गया',
    'screen.status_favorite_removed': 'पसंदीदा हटाया गया',
    'screen.status_already_saved': 'पहले से सहेजा हुआ',
    'screen.download': 'डाउनलोड',
    'screen.orientation_landscape': 'लैंडस्केप (1920x1080)',
    'screen.orientation_portrait': 'पोर्ट्रेट (1080x1920)',
    'screen.orientation_square': 'वर्गाकार (1080x1080)',
    'screen.orientation_device': 'मेरा स्क्रीन आकार',
  },
  ja: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'プレミアム全画面ユーティリティ',
    'hero.eyebrow': '無料の全画面ユーティリティ',
    'hero.heading': 'あらゆるディスプレイを便利な画面に変える最速の方法。',
    'hero.subtitle': 'カラー画面、ディスプレイテスト、アンビエントセーバー、いたずら画面、偽のアップデートページを1つのプレミアムな静的ファーストWebアプリに。',
    'hero.browse': 'ツールを見る',
    'hero.run_test': '画面テストを実行',
    'analysis.eyebrow': 'プロダクト分析',
    'analysis.heading': 'リンクディレクトリを超えて構築されました。',
    'analysis.p1': '競合の画面サイトは通常、多くの単純なURLターゲットでランク付けされますが、製品体験は薄いです：重複したコピー、限られたコントロール、弱い内部リンク、一貫性のないモバイルナビゲーション、そして孤立したユーティリティのように感じられるページ。',
    'analysis.p2': 'Free Online Screenは、有用なIA、明確な個別URL、カラーページ、テストページ、いたずらページ、偽の画面、多言語ターゲティング、FAQスキーマ、パンくずリスト、関連リンクを維持し、再利用可能なコントロールサーフェス、より強力なアクセシビリティ、よりクリーンなカテゴリアーキテクチャ、より豊かな記事、プレミアムなビジュアルシステムを追加します。',
    'nav.tools': 'ツール',
    'nav.search': '検索...',
    'nav.search_tools': 'ツールを検索...',
    'nav.menu': 'メニュー',
    'nav.language': '言語',
    'nav.theme': 'テーマ切替',
    'footer.description': 'カラー、ディスプレイテスト、アンビエンス、いたずら、偽の画面のためのプレミアム全画面ユーティリティ。静的、高速、アクセシブル、無料。',
    'footer.categories': 'カテゴリ',
    'footer.popular': '人気のページ',
    'footer.languages': '言語',
    'footer.company': '会社',
    'footer.about': '概要',
    'footer.privacy': 'プライバシー',
    'footer.terms': '利用規約',
    'footer.contact': 'お問い合わせ',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'ショートカット',
    'tool.shortcuts_heading': '高速な繰り返し使用のために設計。',
    'tool.shortcut_fullscreen': '全画面モード',
    'tool.shortcut_random': 'ランダムカラー',
    'tool.shortcut_copy': '現在の色をコピー',
    'tool.shortcut_download': '画像をダウンロード',
    'tool.faq': 'よくある質問',
    'tool.faq_heading': '{name}についての質問。',
    'tool.related': '関連ツール',
    'tool.related_heading': '類似の全画面ユーティリティ。',
    'tool.related_searches': '関連規格・他の人はこちらも検索',
    'tool.related_searches_heading': '白い画面に関連するよく検索される用語。',
    'tool.all_tools': 'すべてのツール',
    'tool.breadcrumb_home': 'ホーム',
    'screen.color': '色',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': '明るさ',
    'screen.fullscreen': '全画面',
    'screen.copy_hex': 'HEXをコピー',
    'screen.copy_rgb': 'RGBをコピー',
    'screen.random': 'ランダム',
    'screen.favorite': 'お気に入りの色',
    'screen.favorites': 'お気に入りの色',
    'screen.choose_color': '画面の色を選択',
    'screen.hex_value': 'HEX色の値',
    'screen.rgb_value': 'RGB色の値',
    'screen.hsl_value': 'HSL色の値',
    'screen.brightness_label': '画面の明るさ',
    'screen.fullscreen_hint': '終了するにはEscapeを押してください',
    'screen.status_hex_copied': 'HEXをコピーしました',
    'screen.status_rgb_copied': 'RGBをコピーしました',
    'screen.status_color_copied': '色をコピーしました',
    'screen.status_favorite_added': 'お気に入りに追加',
    'screen.status_favorite_removed': 'お気に入りを削除',
    'screen.status_already_saved': 'すでに保存済み',
    'screen.download': 'ダウンロード',
    'screen.orientation_landscape': '横長 (1920x1080)',
    'screen.orientation_portrait': '縦長 (1080x1920)',
    'screen.orientation_square': '正方形 (1080x1080)',
    'screen.orientation_device': '画面サイズ',
  },
};

const toolNames: Record<string, Partial<Record<Locale, string>>> = {
  'white-screen': { es: 'Pantalla Blanca', pt: 'Tela Branca', fr: 'Écran Blanc', de: 'Weißer Bildschirm', hi: 'सफेद स्क्रीन', ja: '白い画面' },
  'black-screen': { es: 'Pantalla Negra', pt: 'Tela Preta', fr: 'Écran Noir', de: 'Schwarzer Bildschirm', hi: 'काली स्क्रीन', ja: '黒い画面' },
  'green-screen': { es: 'Pantalla Verde', pt: 'Tela Verde', fr: 'Écran Vert', de: 'Grüner Bildschirm', hi: 'हरी स्क्रीन', ja: '緑の画面' },
  'blue-screen': { es: 'Pantalla Azul', pt: 'Tela Azul', fr: 'Écran Bleu', de: 'Blauer Bildschirm', hi: 'नीली स्क्रीन', ja: '青い画面' },
  'red-screen': { es: 'Pantalla Roja', pt: 'Tela Vermelha', fr: 'Écran Rouge', de: 'Roter Bildschirm', hi: 'लाल स्क्रीन', ja: '赤い画面' },
  'orange-screen': { es: 'Pantalla Naranja', pt: 'Tela Laranja', fr: 'Écran Orange', de: 'Oranger Bildschirm', hi: 'नारंगी स्क्रीन', ja: 'オレンジの画面' },
  'yellow-screen': { es: 'Pantalla Amarilla', pt: 'Tela Amarela', fr: 'Écran Jaune', de: 'Gelber Bildschirm', hi: 'पीली स्क्रीन', ja: '黄色の画面' },
  'purple-screen': { es: 'Pantalla Morada', pt: 'Tela Roxa', fr: 'Écran Violet', de: 'Lila Bildschirm', hi: 'बैंगनी स्क्रीन', ja: '紫の画面' },
  'pink-screen': { es: 'Pantalla Rosa', pt: 'Tela Rosa', fr: 'Écran Rose', de: 'Rosa Bildschirm', hi: 'गुलाबी स्क्रीन', ja: 'ピンクの画面' },
  'cyan-screen': { es: 'Pantalla Cian', pt: 'Tela Ciano', fr: 'Écran Cyan', de: 'Cyan Bildschirm', hi: 'स्यान स्क्रीन', ja: 'シアンの画面' },
  'brown-screen': { es: 'Pantalla Marrón', pt: 'Tela Marrom', fr: 'Écran Marron', de: 'Brauner Bildschirm', hi: 'भूरी स्क्रीन', ja: '茶色の画面' },
  'grey-screen': { es: 'Pantalla Gris', pt: 'Tela Cinza', fr: 'Écran Gris', de: 'Grauer Bildschirm', hi: 'स्लेटी स्क्रीन', ja: '灰色の画面' },
  'macos-screen': { es: 'Actualización de macOS', pt: 'Atualização do macOS', fr: 'Mise à jour macOS', de: 'macOS-Aktualisierung', hi: 'macOS अपडेट', ja: 'macOSアップデート' },
  'radar-screen': { es: 'Pantalla de Radar', pt: 'Tela de Radar', fr: 'Écran Radar', de: 'Radar-Bildschirm', hi: 'रडार स्क्रीन', ja: 'レーダー画面' },
  'fireplace-screen': { es: 'Pantalla de Chimenea', pt: 'Tela de Lareira', fr: 'Écran de Cheminée', de: 'Kaminfeuer-Bildschirm', hi: 'फायरप्लेस स्क्रीन', ja: '暖炉の画面' },
  'snow-screen': { es: 'Pantalla de Nieve', pt: 'Tela de Neve', fr: 'Écran de Neige', de: 'Schneefall-Bildschirm', hi: 'स्नो स्क्रीन', ja: '雪の画面' },
  'matrix-screen': { es: 'Pantalla Matrix', pt: 'Tela Matrix', fr: 'Écran Matrix', de: 'Matrix-Bildschirm', hi: 'मैट्रिक्स स्क्रीन', ja: 'マトリックス画面' },
  'clock-screen': { es: 'Reloj Flip', pt: 'Relógio Flip', fr: 'Horloge à Volets', de: 'Klipp-Klapp-Uhr', hi: 'फ्लिप घड़ी', ja: 'フリップ時計' },
};

const toolSummaries: Record<string, Partial<Record<Locale, string>>> = {
  'white-screen': { hi: 'सफाई जांच, नरम रोशनी, डिस्प्ले निरीक्षण और फोटोग्राफी फिल के लिए एक शुद्ध सफेद फुलस्क्रीन टूल।' },
  'black-screen': { hi: 'OLED जांच, डेड पिक्सल खोज, चकाचौंध कम करने और अंधेरे कमरे में उपयोग के लिए एक वास्तविक काली फुलस्क्रीन सतह।' },
  'green-screen': { hi: 'क्रोमा की प्रीव्यू, पैनल जांच और रंग संदर्भ के लिए एक जीवंत हरा फुलस्क्रीन पेज।' },
  'blue-screen': { hi: 'डिस्प्ले रंग जांच, एम्बिएंट टोन और वीडियो सेटअप के लिए एक संतृप्त नीला फुलस्क्रीन क्षेत्र।' },
  'radar-screen': {
    es: 'Una pantalla de radar a pantalla completa para tableros teatrales, videos y configuraciones divertidas.',
    pt: 'Uma tela de radar em tela cheia para painéis teatrais, vídeos e setups divertidos.',
    fr: 'Un affichage radar en plein écran pour les tableaux de bord théâtraux, les vidéos et les configurations ludiques.',
    de: 'Ein Radar-Vollbildschirm für theatralische Dashboards, Videos und spielerische Setups.',
    hi: 'नाटकीय डैशबोर्ड, वीडियो और चंचल सेटअप के लिए रडार-शैली का फुलस्क्रीन डिस्प्ले।',
    ja: '演劇用ダッシュボード、ビデオ、および遊び心のあるセットアップ用のレーダー風全画面表示。',
  },
  'fireplace-screen': {
    es: 'Un protector de pantalla cálido inspirado en una chimenea para ambientación, calor de fondo y configuraciones de escritorio acogedoras.',
    pt: 'Um protetor de tela quente inspirado em lareiras para ambiente, calor de fundo e setups de mesa aconchegantes.',
    fr: 'Un économiseur d\'écran chaleureux inspiré d\'une cheminée pour l\'ambiance, la chaleur de fond et les installations de bureau douillettes.',
    de: 'Ein warmer Kaminfeuer-Bildschirmschoner für Ambiente, Hintergrundwärme und gemütliche Schreibtische.',
    hi: 'एम्बिएंस, बैकग्राउंड गर्मी और आरामदायक डेस्क सेटअप के लिए एक गर्म फायरप्लेस से प्रेरित स्क्रीन सेवर।',
    ja: '雰囲気、背景の温かさ、心地よいデスクセットアップのための、温かみのある暖炉風スクリーンセーバー。',
  },
  'snow-screen': {
    es: 'Un salvapantallas de nieve interactivo y estético con viento personalizable, velocidad de caída, tamaño de copos y opciones de color o imágenes.',
    pt: 'Um protetor de tela de neve interativo e estético com vento, velocidade, tamanho dos flocos personalizáveis, e suporte a cores ou imagens.',
    fr: 'Un économiseur d\'écran de neige interactif et esthétique avec vent, vitesse et taille de flocons personnalisables, ainsi que des modes couleur ou image.',
    de: 'Ein interaktiver und ästhetischer Schneefall-Bildschirmschoner mit anpassbarem Wind, Geschwindigkeit, Flakengröße, Farb- oder Grafikmodus.',
    hi: 'एक इंटरैक्टिव और सौंदर्य स्नो स्क्रीन सेवर जिसमें अनुकूलन योग्य हवा, गति, बर्फ के आकार और चुनिंदा रंग या छवियों का समर्थन है।',
    ja: '風向き、速度、雪片の大きさ、カラーまたは画像モードを自由にカスタマイズできる、インタラクティブで美しい雪 of スクリーンセーバー。',
  },
  'matrix-screen': {
    es: 'Un salvapantallas interactivo con efecto de lluvia de código de Matrix, velocidad ajustable, colores de brillo cyberpunk y texto/nombre personalizado.',
    pt: 'Um protetor de tela do Matrix interativo com efeito de chuva de código, velocidade ajustável, cores cyberpunk e texto/nome personalizado.',
    fr: 'Un économiseur d\'écran Matrix interactif avec effet de pluie de code, vitesse ajustable, couleurs cyberpunk et texte/nom personnalisé.',
    de: 'Ein interaktiver Matrix-Coderegen-Bildschirmschoner mit anpassbarer Geschwindigkeit, leuchtenden Cyberpunk-Farben und eigenem Text oder Namen.',
    hi: 'एक इंटरैक्टिव मैट्रिक्स कोड रेन स्क्रीन सेवर जिसमें अनुकूलन योग्य गति, नियॉन ग्लो रंग और कस्टम टेक्स्ट या नाम का समर्थन है।',
    ja: '速度、サイバーパンクのグローカラー、カスタムテキストや名前をカスタマイズできる、インタラクティブなマトリックス・コードレイン・スクリーンセーバー。',
  },
  'clock-screen': {
    es: 'Un salvapantallas de reloj flip estético y minimalista con soporte para formato de 12/24 horas, temas premium (OLED, cristal) y un temporizador Pomodoro integrado.',
    pt: 'Um protetor de tela de relógio flip estético e minimalista com suporte a formato de 12/24 horas, temas premium (OLED, vidro) e um temporizador Pomodoro integrado.',
    fr: 'Un économiseur d\'écran d\'horloge à volets esthétique et minimaliste avec prise en charge du format 12/24 heures, des thèmes premium (OLED, verre) et un minuteur Pomodoro intégré.',
    de: 'Ein ästhetischer und minimalistischer Klipp-Klapp-Uhr-Bildschirmschoner mit Unterstützung für das 12/24-Stunden-Format, Premium-Designs (OLED, Glas) und integriertem Pomodoro-Timer.',
    hi: '12/24 घंटे के प्रारूप, प्रीमियम थीम (OLED, ग्लास) और एक एकीकृत पोमोडोरो टाइमर के समर्थन के साथ एक सौंदर्यपूर्ण और न्यूनतम फ्लिप घड़ी स्क्रीनसेवर।',
    ja: '12/24時間表示、プレミアムテーマ（OLED、ガラス）、および統合されたポモドーロタイマーをサポートした、美しくミニマルなフリップ時計スクリーンセーバー。',
  },
};

export function t(locale: Locale, key: string, params?: Record<string, string>): string {
  const value = site[locale]?.[key] ?? site.en[key] ?? key;
  if (params) {
    return Object.entries(params).reduce((str, [k, v]) => str.replace(`{${k}}`, v), value);
  }
  return value;
}

export function toolName(locale: Locale, tool: { id: string; name: string }): string {
  return toolNames[tool.id]?.[locale] ?? tool.name;
}

export function toolSummary(locale: Locale, tool: { id: string; summary: string }): string {
  return toolSummaries[tool.id]?.[locale] ?? tool.summary;
}

export const localizedFaqs: Record<string, Partial<Record<Locale, { question: string; answer: string }[]>>> = {
  'white-screen': {
    en: [
      {
        question: 'What is a white screen? (What does a white screen mean?)',
        answer: 'A white screen is a pure white color field that covers your entire display. It acts as a neutral visual utility for monitor testing, checking for dead or stuck subpixels, providing soft illumination, or serving as a photography background.'
      },
      {
        question: 'How to get a white screen? (How do I get a white screen? / How do I open a white screen?)',
        answer: 'You can easily open a white screen on this website. Choose the White Screen tool and click the Fullscreen button or press the "F" shortcut key to fill your entire display with neutral white.'
      },
      {
        question: 'How do I open a full white screen?',
        answer: 'To open a full white screen without browser tabs or search bars, click the "Fullscreen" button on our white screen tool, or press "F" on your keyboard. This hides all distractions and lets the white color occupy the entire display area.'
      },
      {
        question: 'Can I use a white screen on a phone? (How to get white screen on phone?)',
        answer: 'Yes, our white screen tool is fully compatible with all smartphones and tablets. Open the page in your mobile browser, optionally adjust the brightness using the slider, and enter fullscreen mode to use it as a mobile light panel or screen checker.'
      },
      {
        question: 'What is a white screen used for?',
        answer: 'Common uses for a white screen include checking for screen dirt or dust, finding dead and stuck display pixels, acting as light for video calls or selfies, and casting soft, neutral fill light for product photography.'
      },
      {
        question: 'Is this white screen good for monitor testing?',
        answer: 'Yes, a clean white screen is one of the best tools to inspect a display for uniformity issues, backlight bleeding at the edges, and stuck or dead pixels. We suggest setting it to fullscreen and adjusting the brightness to inspect the panel clearly.'
      },
      {
        question: 'Can I use this as a bright white screen?',
        answer: 'Yes! The tool renders a solid #ffffff color, which is the maximum brightness output for any screen. You can raise your device\'s physical brightness and use our on-screen brightness slider to fine-tune the amount of light.'
      },
      {
        question: 'How to photo a white background?',
        answer: 'Place your subject in front of a monitor or television running our fullscreen white screen. It will act as a bright, even white background and light source. Adjust camera exposure or use additional ambient lighting to avoid harsh silhouettes.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla blanca? (¿Qué significa una pantalla blanca?)',
        answer: 'Una pantalla blanca es un campo de color blanco puro que cubre toda la pantalla. Funciona como una herramienta visual neutra para pruebas de monitores, comprobación de píxeles muertos o atascados, iluminación suave o como fondo fotográfico.'
      },
      {
        question: '¿Cómo obtener una pantalla blanca? (¿Cómo pongo la pantalla en blanco?)',
        answer: 'Puedes abrir fácilmente una pantalla blanca en esta web. Selecciona la herramienta Pantalla Blanca y haz clic en el botón de Pantalla Completa o presiona la tecla de acceso rápido "F" para llenar tu pantalla.'
      },
      {
        question: '¿Cómo abro una pantalla blanca completa?',
        answer: 'Para abrir una pantalla blanca completa sin pestañas del navegador ni barras de búsqueda, haz clic en el botón de "Pantalla Completa" en nuestra herramienta de pantalla blanca, o presiona "F" en tu teclado.'
      },
      {
        question: '¿Puedo usar la pantalla blanca en un teléfono? (¿Cómo tener pantalla blanca en el celular?)',
        answer: 'Sí, nuestra herramienta es compatible con todos los smartphones y tablets. Abre la página en el navegador de tu móvil, ajusta el brillo si es necesario y entra en modo de pantalla completa para usarla como panel de luz o comprobador.'
      },
      {
        question: '¿Para qué sirve una pantalla blanca?',
        answer: 'Los usos más comunes incluyen comprobar si hay suciedad o polvo en la pantalla, detectar píxeles muertos y atascados, iluminar videollamadas o selfies, y servir de luz suave de relleno para fotografía de producto.'
      },
      {
        question: '¿Es buena esta pantalla blanca para probar mi monitor?',
        answer: 'Sí, una pantalla blanca limpia es de las mejores utilidades para inspeccionar uniformidad del panel, fugas de luz en los bordes y píxeles atascados. Recomendamos ponerla a pantalla completa y ajustar el brillo para revisarlo con claridad.'
      },
      {
        question: '¿Puedo usar esto como una pantalla blanca brillante?',
        answer: 'Sí. La herramienta muestra el color sólido #ffffff (máxima salida de brillo). Sube el brillo físico de tu dispositivo y usa el deslizador integrado en la web para regular la luz a tu gusto.'
      },
      {
        question: '¿Cómo fotografiar con un fondo blanco?',
        answer: 'Coloca el objeto delante de un monitor o televisión con nuestra pantalla blanca a pantalla completa. Servirá de fondo blanco brillante y homogéneo. Ajusta la exposición de la cámara para lograr la mejor iluminación.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela branca? (O que significa uma tela branca?)',
        answer: 'Uma tela branca é um campo de cor branca pura que cobre todo o seu monitor. Funciona como um utilitário visual neutro para testes de monitor, verificação de pixels mortos ou travados, iluminação suave ou fundo fotográfico.'
      },
      {
        question: 'Como conseguir uma tela branca? (Como faço para ter tela branca?)',
        answer: 'Você pode abrir facilmente uma tela branca neste site. Escolha a ferramenta de Tela Branca e clique no botão de Tela Cheia ou pressione a tecla de atalho "F" para preencher seu monitor com branco puro.'
      },
      {
        question: 'Como abrir uma tela branca completa?',
        answer: 'Para abrir uma tela branca completa sem abas de navegador ou barras de pesquisa, clique no botão "Tela Cheia" ou pressione "F" no seu teclado. Isso oculta distrações para que a cor branca preencha toda a tela.'
      },
      {
        question: 'Posso usar a tela branca no celular? (Como ter tela branca no celular?)',
        answer: 'Sim, nosso site é totalmente compatível com smartphones e tablets. Abra a página no navegador do celular, ajuste o brilho e entre em tela cheia para usar como painel de luz ou testador.'
      },
      {
        question: 'Para que serve uma tela branca?',
        answer: 'Os usos mais comuns incluem verificar sujeira ou poeira na tela, encontrar pixels mortos e travados, iluminar chamadas de vídeo ou selfies, e fornecer luz de preenchimento neutra para fotografia.'
      },
      {
        question: 'Esta tela branca é boa para testar monitor?',
        answer: 'Sim, uma tela branca limpa é excelente para inspecionar problemas de uniformidade de painel, vazamento de luz nas bordas e pixels defeituosos. Recomendamos usar o modo tela cheia e ajustar o brilho para inspecionar melhor.'
      },
      {
        question: 'Posso usar isso como uma tela branca brilhante?',
        answer: 'Sim! A ferramenta renderiza a cor sólida #ffffff, que representa o brilho máximo de qualquer tela. Você pode aumentar o brilho físico do aparelho e usar o nosso controle de brilho interno para ajustar.'
      },
      {
        question: 'Como fotografar com fundo branco?',
        answer: 'Posicione seu objeto à frente de um monitor ou TV exibindo nossa tela branca em tela cheia. Ela servirá como fundo brilhante e uniforme. Ajuste a exposição da câmera para evitar silhuetas indesejadas.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran blanc ? (Que signifie un écran blanc ?)',
        answer: 'Un écran blanc est un champ de couleur blanc pur qui recouvre tout votre affichage. Il sert d\'utilitaire neutre pour tester les moniteurs, détecter les pixels morts ou bloqués, fournir un éclairage doux ou de fond pour la photo.'
      },
      {
        question: 'Comment avoir un écran blanc ? (Comment afficher un écran blanc ?)',
        answer: 'Vous pouvez facilement ouvrir un écran blanc sur ce site. Sélectionnez l\'outil Écran Blanc et cliquez sur le bouton Plein Écran ou appuyez sur la touche "F" pour remplir tout votre affichage de blanc pur.'
      },
      {
        question: 'Comment ouvrir un écran blanc complet ?',
        answer: 'Pour ouvrir un écran blanc complet sans onglets ou barres de recherche, cliquez sur le bouton "Plein Écran" ou appuyez sur "F" sur votre clavier. Cela masquera les distractions pour afficher uniquement du blanc.'
      },
      {
        question: 'Puis-je utiliser un écran blanc sur un téléphone ? (Comment avoir un écran blanc sur mobile ?)',
        answer: 'Oui, notre outil est compatible avec tous les smartphones et toutes les tablettes. Ouvrez la page dans votre navigateur mobile, ajustez la luminosité si besoin, et passez en plein écran pour l\'utiliser comme panneau lumineux.'
      },
      {
        question: 'À quoi sert un écran blanc ?',
        answer: 'Il est couramment utilisé pour détecter la poussière et les saletés sur l\'écran, repérer les pixels morts ou bloqués, éclairer vos appels vidéo ou selfies, ou servir de lumière douce de remplissage pour la photo de produits.'
      },
      {
        question: 'Cet écran blanc est-il adapté pour tester un moniteur ?',
        answer: 'Oui, un écran blanc propre est l\'un des meilleurs moyens d\'inspecter l\'uniformité de la dalle, le "backlight bleeding" sur les bords, et les défauts de pixels. Mettez en plein écran et réglez la luminosité pour inspecter l\'écran.'
      },
      {
        question: 'Puis-je l\'utiliser comme un écran blanc très brillant ?',
        answer: 'Oui ! L\'outil affiche la couleur unie #ffffff, correspondant à la luminosité maximale de votre écran. Augmentez la luminosité physique de votre appareil et utilisez notre curseur pour ajuster le rendu.'
      },
      {
        question: 'Comment photographier sur fond blanc ?',
        answer: 'Placez votre sujet devant un écran ou un téléviseur affichant notre écran blanc en plein écran. Il agira comme un fond blanc lumineux et uniforme. Ajustez l\'exposition de l\'appareil photo.'
      }
    ],
    de: [
      {
        question: 'Was ist ein weißer Bildschirm? (Was bedeutet ein weißer Bildschirm?)',
        answer: 'Ein weißer Bildschirm ist ein rein weißes Farbfeld, das das gesamte Display abdeckt. Er dient als neutrales Werkzeug für Monitortests, das Finden toter Pixel, sanfte Beleuchtung oder als Fotohintergrund.'
      },
      {
        question: 'Wie bekomme ich einen weißen Bildschirm? (Wie öffne ich einen weißen Bildschirm?)',
        answer: 'Sie können einen weißen Bildschirm ganz einfach auf dieser Website öffnen. Wählen Sie das Werkzeug "Weißer Bildschirm" und klicken Sie auf Vollbild oder drücken Sie die Taste "F", um das gesamte Display weiß auszufüllen.'
      },
      {
        question: 'Wie öffne ich einen kompletten weißer Bildschirm?',
        answer: 'Um einen vollständigen weißen Bildschirm ohne Browsertabs oder Suchleisten zu öffnen, klicken Sie auf den Button "Vollbild" oder drücken Sie "F" auf Ihrer Tastatur. Dadurch wird jegliche Ablenkung ausgeblendet.'
      },
      {
        question: 'Kann ich einen weißen Bildschirm auf dem Handy nutzen?',
        answer: 'Ja, unser Tool ist vollständig mit Smartphones und Tablets kompatibel. Öffnen Sie die Seite im mobilen Browser, passen Sie die Helligkeit an und aktivieren Sie den Vollbildmodus für ein helles Leuchtpanel.'
      },
      {
        question: 'Wofür wird ein weißer Bildschirm verwendet?',
        answer: 'Häufige Anwendungsfälle sind das Überprüfen von Displays auf Staub oder Schmutz, das Aufspüren toter und hängender Pixel, die Beleuchtung bei Videoanrufen oder Selfies sowie als weiches Studiolicht für Produktfotos.'
      },
      {
        question: 'Ist dieser weiße Bildschirm gut für Monitortests geeignet?',
        answer: 'Ja, ein sauberer weißer Bildschirm eignet sich hervorragend zur Überprüfung der Ausleuchtung, von Lichthöfen (Backlight Bleeding) und Pixelfehlern. Wir empfehlen, den Vollbildmodus zu nutzen und die Helligkeit anzupassen.'
      },
      {
        question: 'Kann ich das als besonders hellen weißen Bildschirm nutzen?',
        answer: 'Ja! Das Tool gibt die reine Farbe #ffffff aus, was der maximalen Helligkeit jedes Bildschirms entspricht. Maximieren Sie die Helligkeit Ihres Geräts und nutzen Sie unseren Helligkeitsregler zur Feinabstimmung.'
      },
      {
        question: 'Wie fotografiere ich einen weißen Hintergrund?',
        answer: 'Platzieren Sie Ihr Motiv vor einem Monitor oder TV, auf dem unser weißer Bildschirm im Vollbildmodus läuft. Er fungiert als gleichmäßiger weißer Hintergrund. Passen Sie die Belichtung an, um Silhouetten zu vermeiden.'
      }
    ],
    hi: [
      {
        question: 'व्हाइट स्क्रीन क्या है? (सफेद स्क्रीन का क्या मतलब है?)',
        answer: 'सफेद स्क्रीन एक शुद्ध सफेद रंग का क्षेत्र है जो आपके पूरे डिस्प्ले को कवर करता है। यह मॉनिटर परीक्षण, खराब या फंसे हुए पिक्सल की जांच करने, नरम रोशनी प्रदान करने, या फोटोग्राफी पृष्ठभूमि के रूप में उपयोग किया जाता है।'
      },
      {
        question: 'सफेद स्क्रीन कैसे प्राप्त करें? (सफेद स्क्रीन कैसे खोलें?)',
        answer: 'आप इस वेबसाइट पर आसानी से सफेद स्क्रीन खोल सकते हैं। व्हाइट स्क्रीन टूल चुनें और अपने पूरे डिस्प्ले को सफेद रंग से भरने के लिए फुलस्क्रीन बटन पर क्लिक करें या "F" शॉर्टकट बटन दबाएं।'
      },
      {
        question: 'मैं पूरी सफेद स्क्रीन कैसे खोलूं?',
        answer: 'बिना ब्राउज़र टैब या सर्च बार के पूरी सफेद स्क्रीन खोलने के लिए, हमारे व्हाइट स्क्रीन टूल पर "फुलस्क्रीन" बटन पर क्लिक करें, या कीबोर्ड पर "F" दबाएं। इससे अन्य सभी चीजें छिप जाती हैं।'
      },
      {
        question: 'क्या मैं फोन पर सफेद स्क्रीन का उपयोग कर सकता हूं?',
        answer: 'हाँ, हमारा टूल सभी स्मार्टफोन और टैबलेट के साथ पूरी तरह से काम करता है। मोबाइल ब्राउज़र में पेज खोलें, आवश्यकतानुसार ब्राइटनेस बढ़ाएं और फुलस्क्रीन मोड में जाकर इसका उपयोग लाइट पैनल के रूप में करें।'
      },
      {
        question: 'सफेद स्क्रीन का उपयोग किस लिए किया जाता है?',
        answer: 'सफेद स्क्रीन का उपयोग धूल की जांच करने, खराब पिक्सल खोजने, वीडियो कॉल या सेल्फी के लिए चेहरे पर रोशनी डालने, और छोटी वस्तुओं की फोटोग्राफी के लिए किया जाता है।'
      },
      {
        question: 'क्या यह सफेद स्क्रीन मॉनिटर परीक्षण के लिए अच्छी है?',
        answer: 'हाँ, एक साफ सफेद स्क्रीन डिस्प्ले की कलर यूनिफॉर्मिटी, किनारों पर बैकलाइट लीकेज (ब्लीडिंग) और खराब पिक्सल की जांच करने का उत्कृष्ट तरीका है। सर्वोत्तम जांच के लिए फुलस्क्रीन मोड चालू करें।'
      },
      {
        question: 'क्या मैं इसे एक चमकदार सफेद स्क्रीन के रूप में उपयोग कर सकता हूं?',
        answer: 'हाँ! यह टूल सॉलिड #ffffff रंग प्रदर्शित करता है जो स्क्रीन की अधिकतम चमक आउटपुट है। अपने डिवाइस की ब्राइटनेस बढ़ाएं और एडजस्ट करने के लिए हमारे ब्राइटनेस स्लाइडर का उपयोग करें।'
      },
      {
        question: 'सफेद बैकग्राउंड की फोटो कैसे लें?',
        answer: 'अपनी वस्तु को मॉनिटर या टीवी के सामने रखें जिस पर हमारा सफेद स्क्रीन टूल फुलस्क्रीन में चल रहा हो। यह एक चमकदार और समान सफेद बैकग्राउंड के रूप में कार्य करेगा। सही एक्सपोजर सेटिंग्स का प्रयोग करें।'
      }
    ],
    ja: [
      {
        question: '白い画面（ホワイトスクリーン）とは何ですか？',
        answer: '白い画面とは、画面全体を純白のカラーフィールドで覆う機能です。モニターの検査、ドット抜けやスタックピクセルの確認、簡易的な照明、撮影用の背景など、多目的に利用できるツールです。'
      },
      {
        question: '白い画面を表示させるには？（どうやって白い画面を出しますか？）',
        answer: '当サイトで簡単に白い画面を開くことができます。「ホワイトスクリーン」ツールを選択し、全画面ボタンをクリックするか、ショートカットキー「F」を押すと画面全体が真っ白になります。'
      },
      {
        question: '全画面で真っ白な画面を開くにはどうすればいいですか？',
        answer: 'ブラウザのタブや検索バーを非表示にして全画面表示にするには、白い画面ツールの「全画面」ボタンをクリックするか、キーボードの「F」キーを押します。これにより白い背景のみが表示されます。'
      },
      {
        question: 'スマホで白い画面を使えますか？',
        answer: 'はい、スマートフォンやタブレット of ブラウザでも完全に動作します。ページを開いて明るさを調整し、全画面ボタンをタップすることで、簡易的なライトパネルやディスプレイチェック器として使えます。'
      },
      {
        question: '白い画面はどのような用途に使われますか？',
        answer: 'ドット抜けのチェック、画面のホコリや汚れの検知、Webカメラでのビデオ通話やセルフィー時のレフ板（顔を明るく照らすライト）、小物撮影の背景照明などに使われます。'
      },
      {
        question: 'この白い画面はモニターのテストに適していますか？',
        answer: 'はい、モニターの色ムラや四隅のバックライト漏れ、ドット抜けを入念にテストするには、全画面の白い画面が最もシンプルで効果的です。全画面表示にし、明るさを調節して確認することをおすすめします。'
      },
      {
        question: '高輝度な明るい白い画面として使えますか？',
        answer: 'はい！最高輝度のソリッドカラー「#ffffff」を出力します。お使いのパソコンやスマートフォンの画面輝度を最大に設定し、当ツール上の明るさ調整スライダーと合わせて細かく光量をカスタムしてください。'
      },
      {
        question: '背景を白くして写真を撮るにはどうすればいいですか？',
        answer: '白い画面を全画面表示したモニターやテレビの前に被写体を置きます。これが均一で明るい白い背景およびソフトライトの役割を果たします。カメラの露出を調整することで、綺麗な白背景の写真が撮れます。'
      }
    ]
  },
  'black-screen': {
    en: [
      {
        question: 'How to show black screen?',
        answer: 'You can easily show a black screen by opening this page and clicking the "Fullscreen" button or pressing the "F" shortcut key on your keyboard. This expands a pure #000000 black field to cover your entire display.'
      },
      {
        question: 'What is a black screen?',
        answer: 'A black screen is a solid color display panel running pure black (#000000). It is used for monitor testing, checking backlight bleeding, saving battery on OLED screens, and creating a neutral dark frame.'
      },
      {
        question: 'What is black screen mode?',
        answer: 'Black screen mode is a browser-based blank state that fills the screen with flat black. It acts as a standby visual to reduce brightness, clean dust off physical panels, or dim second monitors without going into OS sleep mode.'
      },
      {
        question: 'How can I turn my screen black?',
        answer: 'To turn your screen black instantly, load this free online tool on any monitor, laptop, or handset browser and activate fullscreen. Escape at any time by pressing Esc or clicking target settings.'
      }
    ],
    es: [
      {
        question: '¿Cómo mostrar una pantalla negra?',
        answer: 'Puedes mostrar una pantalla negra fácilmente abriendo esta página y haciendo clic en el botón "Pantalla completa" o presionando la tecla de acceso rápido "F". Esto expande un campo negro puro (#000000) en todo tu monitor.'
      },
      {
        question: '¿Qué es una pantalla negra?',
        answer: 'Una pantalla negra es una visualización de color sólido en negro puro (#000000). Se utiliza para probar monitores, comprobar fugas de luz, ahorrar batería en pantallas OLED y crear un panel oscuro neutro.'
      },
      {
        question: '¿Qué es el modo de pantalla negra?',
        answer: 'El modo de pantalla negra es un estado en blanco basado en el navegador que llena la pantalla con negro plano. Sirve como estado de espera para reducir el brillo, limpiar el polvo de paneles o atenuar pantallas secundarias sin apagar la computadora.'
      },
      {
        question: '¿Cómo puedo poner mi pantalla en negro?',
        answer: 'Para poner tu pantalla en negro al instante, abre esta utilidad gratuita en cualquier monitor, portátil o móvil y activa la pantalla completa. Sal en cualquier momento presionando la tecla Esc.'
      }
    ],
    pt: [
      {
        question: 'Como mostrar uma tela preta?',
        answer: 'Você pode exibir uma tela preta facilmente abrindo esta página e clicando no botão "Tela Cheia" ou pressionando a tecla de atalho "F". Isso estende um campo preto puro (#000000) para cobrir todo o seu monitor.'
      },
      {
        question: 'O que é uma tela preta?',
        answer: 'Uma tela preta é um display de cor sólida que roda preto puro (#000000). É usada para testes de monitor, verificar vazamento de luz, economizar bateria em telas OLED e criar um quadro escuro neutro.'
      },
      {
        question: 'O que é o modo tela preta?',
        answer: 'O modo tela preta é um estado em branco baseado no navegador que preenche a tela com preto plano. Funciona como um descanso visual para reduzir o brilho, limpar poeira de painéis ou escurecer telas secundárias.'
      },
      {
        question: 'Como posso deixar minha tela preta?',
        answer: 'Para deixar sua tela preta instantaneamente, carregue esta ferramenta online gratuita em qualquer monitor, notebook ou celular e ative o modo tela cheia. Saia a qualquer momento com a tecla Esc.'
      }
    ],
    fr: [
      {
        question: 'Comment afficher un écran noir?',
        answer: 'Vous pouvez facilement afficher un écran noir en ouvrant cette page et en cliquant sur "Plein écran" ou en appuyant sur la touche de raccourci "F". Cela affiche un fond noir pur #000000 sur toute la surface de votre moniteur.'
      },
      {
        question: 'Qu\'est-ce qu\'un écran noir?',
        answer: 'Un écran noir est une surface de couleur unie affichant du noir pur #000000. Il sert à tester les moniteurs, vérifier les fuites de lumière, économiser la batterie sur écran OLED et servir de fond neutre sombre.'
      },
      {
        question: 'Qu\'est-ce que le mode écran noir?',
        answer: 'Le mode écran noir est un état vide basé sur le navigateur qui remplit l\'écran de noir mat. Il s\'utilise comme veille visuelle pour réduire la luminosité, nettoyer la poussière des dalles ou assombrir un écran secondaire.'
      },
      {
        question: 'Comment puis-je rendre mon écran noir?',
        answer: 'Pour rendre votre écran noir instantanément, chargez cet outil gratuit dans le navigateur de votre PC, portable ou smartphone et passez en plein écran. Quittez à tout moment via la touche Échap.'
      }
    ],
    de: [
      {
        question: 'Wie zeigt man einen schwarzen Bildschirm an?',
        answer: 'Sie können ganz einfach einen schwarzen Bildschirm anzeigen, indem Sie diese Seite öffnen und auf die Schaltfläche "Vollbild" klicken oder die Schnellwahltaste "F" drücken. Dadurch wird eine rein schwarze Fläche (#000000) über Ihr gesamtes Display gelegt.'
      },
      {
        question: 'Was ist ein schwarzer Bildschirm?',
        answer: 'Ein schwarzer Bildschirm ist eine solide Farbfläche mit reinem Schwarz (#000000). Er wird für Monitortests, Kontrollen auf Backlight-Bleeding, zum Stromsparen bei OLED-Displays und als neutraler dunkler Hintergrund verwendet.'
      },
      {
        question: 'Was ist der Schwarzbild-Modus?',
        answer: 'Der Schwarzbild-Modus ist ein browserbasierter Leerzustand, der das Display mit flachem Schwarz füllt. Er dient als Standby-Visualisierung, um die Helligkeit zu reduzieren, Staub von physischen Panels zu wischen oder Zweitmonitore abzudunkeln.'
      },
      {
        question: 'Wie kann ich meinen Bildschirm schwarz machen?',
        answer: 'Um Ihren Bildschirm sofort schwarz zu schalten, laden Sie dieses kostenlose Online-Tool auf einem beliebigen Monitor, Laptop oder Mobiltelefon und aktivieren Sie das Vollbild. Drücken Sie jederzeit die Esc-Taste zum Verlassen.'
      }
    ],
    hi: [
      {
        question: 'ब्लैक स्क्रीन कैसे दिखाएं?',
        answer: 'आप इस पेज को खोलकर और "फुलस्क्रीन" बटन पर क्लिक करके या अपने कीबोर्ड पर "F" शॉर्टकट की दबाकर आसानी से ब्लैक स्क्रीन दिखा सकते हैं। यह आपके पूरे डिस्प्ले को कवर करने के लिए एक शुद्ध #000000 काला फील्ड प्रदर्शित करता है।'
      },
      {
        question: 'ब्लैक स्क्रीन क्या है?',
        answer: 'ब्लैक स्क्रीन एक ठोस काले रंग (#000000) का एक फील्ड है। इसका उपयोग मॉनिटर परीक्षण, बैकलाइट लीकेज की जांच, OLED स्क्रीन पर बैटरी बचाने और एक गहरे रंग के फ्रेम के निर्माण के लिए किया जाता है।'
      },
      {
        question: 'ब्लैक स्क्रीन मोड क्या है?',
        answer: 'ब्लैक स्क्रीन मोड एक ब्राउज़र-आधारित रिक्त अवस्था है जो स्क्रीन को समतल काले रंग से भर देती है। यह चमक कम करने, मॉनिटर से धूल साफ करने और सहायक स्क्रीन को बिना बंद किए धीमा करने का काम करता है।'
      },
      {
        question: 'मैं अपनी स्क्रीन को काला कैसे कर सकता हूँ?',
        answer: 'अपनी स्क्रीन को तुरंत काला करने के लिए, किसी भी मॉनिटर, लैपटॉप या मोबाइल ब्राउज़र पर इस मुफ्त ऑनलाइन टूल को लोड करें और फुलस्क्रीन मोड सक्रिय करें। आप किसी भी समय Esc दबाकर बाहर आ सकते हैं।'
      }
    ],
    ja: [
      {
        question: '黒い画面を表示するにはどうすればよいですか？',
        answer: 'このページを開いて、「全画面」ボタンをクリックするか、キーボードの「F」キーを押すだけで、簡単に黒い画面を表示できます。これにより、画面全体に完全な黒（#000000）の表示が広がります。'
      },
      {
        question: '黒い画面とは何ですか？',
        answer: '黒い画面とは、完全な黒（#000000）を表示するソリッドカラーの機能です。液晶のバックライト漏れ検査、OLED（有機EL）画面のピクセル消灯による節電、モニターのドット抜けテストなどに活用されています。'
      },
      {
        question: '黒い画面モードとは何ですか？',
        answer: '黒い画面モードは、画面全体をフラットな黒で埋めるブラウザ上のスリープ状態です。ディスプレイの明るさを減らしたり、画面表面のホコリを拭き取ったり、電源を切らずにサブモニターを暗転させるのに最適です。'
      },
      {
        question: '画面を黒くする方法は？',
        answer: '画面を今すぐ真っ黒にするには、PC、ノートパソコン、スマホのブラウザでこの無料オンラインツールを開き、全画面表示にするだけです。キーボードのEscキーを押すことでいつでも解除できます。'
      }
    ]
  },
  'green-screen': {
    en: [
      {
        question: 'How to get a green screen online? (Full green screen online free)',
        answer: 'You can easily open a <strong>full green screen online</strong> by loading this free tool in any browser and entering fullscreen mode. It offers a <strong>real green screen free</strong> of banners and watermarks, suitable for chroma key checks.'
      },
      {
        question: 'What is an online green screen tool used for? (Green screen generator)',
        answer: 'A <strong>green screen online tool</strong> serves as a <strong>green screen generator</strong> for video content and Zoom calls. It is used to cast a green glow for selfies, create <strong>green screen backgrounds</strong>, relax eyes with a calming forest hue, and identify monitor dead pixels.'
      },
      {
        question: 'How do I test my screen for color or display problems? (Green screen test online)',
        answer: 'Start a <strong>green screen test online</strong> to evaluate backlight uniformity and check for stuck pixels. If you have a <strong>green screen display problem</strong> on a monitor or projector, a solid green screen makes anomalies visible.'
      },
      {
        question: 'Can I download green screen backgrounds? (Green screen backgrounds free / 4k)',
        answer: 'Yes, click the download button in the toolbar to save <strong>green screen backgrounds free</strong> of charge. You can save a high-res <strong>real green screen png</strong> or capture <strong>green screen backgrounds 4k</strong> templates without copyright limits.'
      }
    ],
    es: [
      {
        question: '¿Cómo obtener una pantalla verde online gratis? (Pantalla verde completa)',
        answer: 'Puedes abrir una <strong>pantalla verde completa online</strong> de forma gratuita cargando esta herramienta en tu navegador e ingresando al modo de pantalla completa. Ofrece un fondo verde puro y limpio sin marcas de agua.'
      },
      {
        question: '¿Para qué sirve una herramienta de pantalla verde online?',
        answer: 'Se utiliza principalmente como un generador de <strong>fondos de pantalla verde</strong> para efectos de video y edición en Photoshop. También es ideal para proyectar una luz de color verde en videollamadas, limpiar la pantalla o relajar los ojos imitando el tono de la naturaleza.'
      },
      {
        question: '¿Cómo probar mi monitor en busca de píxeles muertos o problemas de pantalla? (Prueba de pantalla verde online)',
        answer: 'Ejecuta una <strong>prueba de pantalla verde online</strong> para verificar la uniformidad del color. Si sospechas de un <strong>problema en la pantalla verde</strong> o píxeles defectuosos, este color brillante revela rápidamente motas de suciedad o píxeles quemados.'
      },
      {
        question: '¿Puedo descargar fondos de pantalla verde?',
        answer: 'Sí, puedes realizar una <strong>descarga de fondos de pantalla verde gratis</strong> desde la barra lateral. Descarga una <strong>imagen de pantalla verde png</strong> real o plantillas en resolución 4K sin derechos de autor.'
      }
    ],
    pt: [
      {
        question: 'Como colocar a tela verde inteira online grátis? (Tela verde completa)',
        answer: 'Você pode abrir uma <strong>tela verde completa online</strong> carregando esta ferramenta gratuita no navegador e ativando o modo tela cheia. Ela fornece um fundo cromaqui real livre de anúncios.'
      },
      {
        question: 'Para que serve um gerador de tela verde online?',
        answer: 'Um <strong>gerador de tela verde</strong> serve para criar <strong>fundos de tela verde</strong> para gravação de vídeos e montagens no Photoshop. Também deita uma luz verde relaxante para videochamadas e ajuda na limpeza do monitor.'
      },
      {
        question: 'Como fazer um teste de tela verde online no monitor?',
        answer: 'Inicie um <strong>teste de tela verde online</strong> para avaliar a integridade das cores do seu painel. Se notar algum <strong>problema de exibição na tela verde</strong>, esse fundo sólido facilita localizar pixels mortos ou poeira física no visor.'
      },
      {
        question: 'Como baixar fundo de tela verde grátis? (Fundo de tela verde grátis / 4k)',
        answer: 'Você pode <strong>baixar fundos de tela verde gratuitamente</strong> em alta definição. Obtenha uma <strong>imagem de tela verde png</strong> ou layouts em 4K sem direitos autorais para usar em suas edições.'
      }
    ],
    fr: [
      {
        question: 'Comment afficher un écran vert complet en ligne ? (Écran vert complet en ligne)',
        answer: 'Lancez notre outil dans votre navigateur et activez le mode plein écran pour obtenir un <strong>écran vert complet en ligne</strong>. C\'est un outil d\'<strong>écran vert réel gratuit</strong> sans logo ni distorsion.'
      },
      {
        question: 'Quelle est l\'utilité d\'un outil d\'écran vert en ligne ?',
        answer: 'Cet <strong>outil d\'écran vert en ligne</strong> sert de générateur pour créer des <strong>arrière-plans d\'écran vert</strong> pour le montage vidéo et Photoshop. Il fournit également une lumière verte apaisante pour réduire la fatigue oculaire et éclairer les appels vidéo.'
      },
      {
        question: 'Comment faire un test d\'écran vert pour détecter les défauts d\'affichage ?',
        answer: 'Faites un <strong>test d\'écran vert en ligne</strong> pour vérifier l\'uniformité de la dalle et trouver d\'éventuels pixels morts. Si votre moniteur présente un <strong>problème d\'affichage d\'écran vert</strong>, la couleur pure rend visible chaque anomalie.'
      },
      {
        question: 'Comment télécharger des arrière-plans d\'écran vert gratuits ?',
        answer: 'Utilisez les commandes pour <strong>télécharger des arrière-plans d\'écran vert gratuits</strong>. Enregistrez une image d\'<strong>écran vert réel png</strong> ou des fonds en 4K libres de droits pour vos créations.'
      }
    ],
    de: [
      {
        question: 'Wie bekomme ich einen grünen Bildschirm online? (Vollständig grüner Bildschirm online)',
        answer: 'Sie können einen <strong>vollständig grünen Bildschirm online</strong> kostenlos anzeigen, indem Sie dieses Tool im Browser öffnen und den Vollbildmodus aktivieren. Es dient als <strong>echter grüner Bildschirm</strong> ohne störende Banner.'
      },
      {
        question: 'Wofür wird ein Online-Grünschirm-Generator verwendet?',
        answer: 'Ein <strong>grüner Bildschirm online</strong> wird als Generator für <strong>Grünschirm-Hintergründe</strong> bei der Videobearbeitung und in Photoshop genutzt. Er strahlt ein beruhigendes grünes Licht aus, um die Augen zu entspannen und dient als Videocall-Beleuchtung.'
      },
      {
        question: 'Wie teste ich meinen Monitor auf Pixelfehler und Probleme? (Grüner bildschirm test online)',
        answer: 'Führen Sie einen <strong>grüner bildschirm test online</strong> durch. Falls Ihr Display ein <strong>grüner bildschirm anzeigeproblem</strong> aufweist, lassen sich tote Pixel und Schmutzflecken auf der reinen grünen Fläche sofort identifizieren.'
      },
      {
        question: 'Kann ich grüne Hintergründe kostenlos herunterladen?',
        answer: 'Ja, Sie können <strong>freie grüne bildschirmhintergründe</strong> über die Seitenleiste herunterladen. Sichern Sie sich eine <strong>echte grüne bildschirmdatei als png</strong> oder 4K-Hintergründe ohne Urheberrecht.'
      }
    ],
    hi: [
      {
        question: 'ऑनलाइन फुल ग्रीन स्क्रीन कैसे प्राप्त करें? (फुल ग्रीन स्क्रीन ऑनलाइन)',
        answer: 'आप किसी भी ब्राउज़र में इस टूल को खोलकर और फुलस्क्रीन मोड चालू करके <strong>फुल ग्रीन स्क्रीन ऑनलाइन</strong> प्राप्त कर सकते हैं। यह वॉटरमार्क के बिना एक <strong>वास्तविक फ्री ग्रीन स्क्रीन</strong> प्रदान करता है।'
      },
      {
        question: 'ऑनलाइन ग्रीन स्क्रीन टूल का उपयोग किस लिए किया जाता है?',
        answer: 'एक <strong>ग्रीन स्क्रीन ऑनलाइन टूल</strong> का उपयोग वीडियो एडिटिंग और फ़ोटोशॉप के लिए <strong>ग्रीन स्क्रीन बैकग्राउंड</strong> जनरेटर के रूप में किया जाता है। यह आँखों के तनाव को कम करने के लिए शांत हरी रोशनी और वीडियो कॉल्स के लिए लाइटिंग भी देता है।'
      },
      {
        question: 'डिस्प्ले या कलर की समस्याओं के लिए स्क्रीन टेस्ट कैसे करें? (ग्रीन स्क्रीन टेस्ट ऑनलाइन)',
        answer: 'डिस्प्ले यूनिफॉर्मिटी जांचने के लिए <strong>ग्रीन स्क्रीन टेस्ट ऑनलाइन</strong> चलाएं। यदि आपके मॉनिटर या प्रोजेक्टर में <strong>ग्रीन स्क्रीन डिस्प्ले समस्या</strong> है, तो यह ठोस हरा रंग डेड पिक्सल और धूल के धब्बों को आसानी से दिखाता है।'
      },
      {
        question: 'क्या मैं नो-कॉपीराइट ग्रीन स्क्रीन बैकग्राउंड डाउनलोड कर सकता हूँ?',
        answer: 'हाँ, साइडबार का उपयोग करके <strong>फ्री ग्रीन स्क्रीन बैकग्राउंड</strong> डाउनलोड करें। आप अपनी एडिटिंग के लिए 4k और <strong>असली ग्रीन स्क्रीन PNG</strong> फाइलें बिना किसी कॉपीराइट के डाउनलोड कर सकते।'
      }
    ],
    ja: [
      {
        question: 'オンラインでグリーンバックを全画面で表示するには？ (グリーンバック全画面)',
        answer: 'ブラウザでこのツールを開き、全画面表示にするだけで、簡単に<strong>グリーンバック全画面</strong>を表示できます。広告や透かしのない、完全無料の**リアルなグリーンスクリーン**をご利用いただけます。'
      },
      {
        question: 'グリーンスクリーンツールの用途は何ですか？',
        answer: 'この<strong>グリーンスクリーンオンラインツール</strong>は、動画編集やフォトショップのクロマキー背景ジェネレーターとして利用されます。その他、目の疲れを癒すリラックス照明、ウェブ会議のグリーンライト、画面のドット抜けや汚れの掃除用としても役立ちます。'
      },
      {
        question: 'モニターのドット抜けやディスプレイ問題をテストするには？ (グリーンスクリーンテストオンライン)',
        answer: '画面のドット抜けやバックライト漏れを確かめるには、<strong>グリーンスクリーンテストオンライン</strong>を実行してください。モニターに<strong>グリーンスクリーン表示問題</strong>がある場合、均一な緑色背景が不具合のあるピクセルやガラスの汚れを浮かび上がらせます。'
      },
      {
        question: 'クロマキー合成用のグリーン背景素材をダウンロードできますか？',
        answer: 'はい、サイドメニューから**グリーンスクリーン背景無料ダウンロード**が可能です。動画や写真編集に最適な高解像度の**グリーンスクリーンpng**や4Kグリーン背景素材を、著作権フリーで保存していただけます。'
      }
    ]
  },
  'blue-screen': {
    en: [
      {
        question: 'What is a blue screen? (What does a blue screen mean?)',
        answer: 'A <strong>blue screen</strong> is a solid blue display field covering the entire monitor. While historically associated with a system crash or error, a clean <strong>blue screen online</strong> serves as an interactive utility for screen cleaning, detecting dead pixels, testing projector colors, or casting a serene <strong>blue screen light effect</strong>.'
      },
      {
        question: 'How to get a blue screen online? (Fake blue screen online)',
        answer: 'You can launch a full <strong>blue screen online</strong> directly from this website. Open the page and click the Fullscreen button or press the "F" hotkey to display a clean, high-resolution blue field. It is also useful as a <strong>fake blue screen online</strong> mockup for presentation mockups, digital video production, or software testing.'
      },
      {
        question: 'Is there a sysinternals blue screen tool simulation?',
        answer: 'Sysinternals offers diagnostic tools (like NotMyFault) to trigger actual system crashes for developers. If you want a safe visual simulator rather than crashing your OS, our online <strong>blue screen</strong> tool provides a harmless full-screen blue display that can be used to simulate backgrounds or test monitor coloring safely.'
      },
      {
        question: 'How to use a blue screen for monitor cleaning and dead pixel tests?',
        answer: 'In fullscreen mode, a deep solid blue is ideal for <strong>blue screen monitor cleaning</strong> and finding display imperfections. Setting a bright blue background helps you <strong>find dead pixels</strong> or <strong>find dirty spots</strong> on the panel. The color channel highlights stuck pixels that are failing to render blue, making it easy to wipe down the glass clean.'
      },
      {
        question: 'How can I use a blue screen light effect for remote calls?',
        answer: 'You can turn your display into a soft <strong>blue color light</strong> panel. By casting a solid <strong>blue light online</strong>, it creates a modern blue background or glow. It functions as a <strong>blue light for video calls</strong> and a <strong>blue light for selfie</strong> lighting, providing a cool LED ambient vibe directly from your browser.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla azul? (¿Qué significa la pantalla azul?)',
        answer: 'Una <strong>pantalla azul</strong> es un campo de visualización de color azul sólido. Aunque históricamente se asocia con un error del sistema, una <strong>pantalla azul online</strong> limpia sirve como una utilidad para la limpieza de monitores, detección de píxeles muertos o para proyectar un relajante <strong>efecto de luz de pantalla azul</strong>.'
      },
      {
        question: '¿Cómo obtener una pantalla azul online? (Pantalla azul falsa online)',
        answer: 'Puedes abrir una <strong>pantalla azul online</strong> completa directamente en esta web. Elige la herramienta y activa el modo de pantalla completa para simular una <strong>pantalla azul de error falsa online</strong> sin dañar tu ordenador, útil para presentaciones, desarrollo web o desarrollo artístico.'
      },
      {
        question: '¿Existe una simulación de la herramienta de pantalla azul de Sysinternals?',
        answer: 'Las herramientas de desarrollo de Sysinternals (como NotMyFault) están diseñadas para forzar fallos del sistema reales. Si buscas una simulación puramente visual e inofensiva de color sólido, nuestra utilidad online ofrece un fondo azul completo seguro para pruebas de color e iluminación.'
      },
      {
        question: '¿Cómo usar la pantalla azul para la limpieza de monitores y buscar píxeles muertos?',
        answer: 'La visualización sólida en azul es ideal para la <strong>limpieza de pantalla del monitor</strong> y detectar imperfecciones. Un fondo azul te ayuda a <strong>encontrar píxeles muertos</strong> u obstruidos y <strong>localizar manchas sucias</strong> en el panel físico, facilitando el mantenimiento del cristal.'
      },
      {
        question: '¿Cómo usar un efecto de luz de pantalla azul para videollamadas y selfies?',
        answer: 'Puedes usar tu pantalla como un panel de <strong>luz azul online</strong> o <strong>luz de color azul</strong> suave. Funciona como una excelente <strong>luz azul para videollamadas</strong> y <strong>luz azul para selfies</strong>, generando un ambiente futurista o iluminación fría desde tu navegador.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela azul? (O que significa tela azul?)',
        answer: 'Uma <strong>tela azul</strong> é um campo visual de cor azul sólida. Embora remeta historicamente a um erro crítico do sistema, nossa <strong>tela azul online</strong> limpa serve para limpeza de monitores, avaliação de pixels ou como um <strong>efeito de luz de tela azul</strong> para iluminação.'
      },
      {
        question: 'Como iniciar uma tela azul online? (Tela azul falsa online)',
        answer: 'Você pode iniciar uma <strong>tela azul online</strong> cheia nesta plataforma. Basta abrir o site e clicar no botão "Tela Cheia" para ter uma <strong>tela azul falsa online</strong> inofensiva, ideal para testes de vídeo, demonstrações em slides ou mockups.'
      },
      {
        question: 'Existe simulação para a ferramenta de tela azul da Sysinternals?',
        answer: 'A suíte de desenvolvedores Sysinternals possui utilitários como NotMyFault para induzir travamentos reais. Se você deseja apenas um fundo sólido azul seguro, use nosso simulador de tela azul online para testes visuais sem risco de corromper seu sistema de arquivos.'
      },
      {
        question: 'Como usar a tela azul para limpeza de monitor e pixels mortos?',
        answer: 'O azul puro é muito útil para a <strong>limpeza de monitor com tela azul</strong> e detecção de falhas. A projeção azul ajuda você a <strong>encontrar pixels mortos</strong> ou travados e <strong>achar manchas de poeira</strong> no vidro, permitindo limpar o monitor perfeitamente.'
      },
      {
        question: 'Como usar o efeito de luz azul para reuniões e selfies?',
        answer: 'Ajuste sua tela como um painel de <strong>luz azul online</strong> ou emissor de <strong>luz de cor azul</strong>. Este utilitário atua como <strong>luz azul para videochamadas</strong> e <strong>luz azul para selfie</strong>, proporcionando uma iluminação LED ideal diretamente no navegador.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran bleu ? (Que signifie un écran bleu ?)',
        answer: 'Un <strong>écran bleu</strong> est un fond uni de couleur bleue. Bien qu\'associé traditionnellement à une panne du système d\'exploitation, notre <strong>écran bleu en ligne</strong> propre sert d\'outil utile pour nettoyer son moniteur, détecter des pixels morts, ou projeter un <strong>effet de lumière d\'écran bleu</strong> relaxant.'
      },
      {
        question: 'Comment afficher un écran bleu en ligne ? (Faux écran bleu en ligne)',
        answer: 'Lancez un <strong>écran bleu en ligne</strong> complet sur notre site en un clic. Entrez en plein écran pour simuler un <strong>faux écran bleu en ligne</strong> de manière sécurisée, ce qui est pratique pour des tests graphiques, des effets visuels ou des arrière-plans créatifs.'
      },
      {
        question: 'Existe-t-il un outil de simulation d\'écran bleu Sysinternals ?',
        answer: 'Les outils Sysinternals (comme NotMyFault) forcent de réels plantages système à des fins de diagnostic. Si vous désirez une alternative visuelle inoffensive pour simuler une interface bleue unie, notre site propose un écran bleu neutre sans aucun risque logiciel.'
      },
      {
        question: 'Comment utiliser un écran bleu pour le nettoyage d\'écran et tester les pixels morts ?',
        answer: 'Un bleu uni intense est parfait pour le <strong>nettoyage d\'écran avec écran bleu</strong> et le dépistage de défauts. Le fond bleu aide à <strong>trouver des pixels morts</strong> ou figés et à <strong>repérer des tâches de saleté</strong> sur la dalle de votre ordinateur.'
      },
      {
        question: 'Comment utiliser un effet d\'éclairage bleu pour mes réunions et selfies ?',
        answer: 'Transformez votre appareil en panneau de <strong>lumière bleue en ligne</strong> ou de <strong>lumière de couleur bleue</strong>. Il sert de <strong>lumière bleue pour visioconférence</strong> ou de <strong>lumière bleue pour selfie</strong>, diffusant une lueur LED moderne depuis votre navigateur.'
      }
    ],
    de: [
      {
        question: 'Was ist ein blauer Bildschirm? (Was bedeutet ein blauer Bildschirm?)',
        answer: 'Ein <strong>blauer Bildschirm</strong> ist eine einfarbig blaue Anzeigefläche. Obwohl historische Abstürze damit gemeint sein können, dient unser sauberer <strong>blauer Bildschirm online</strong> als Werkzeug zur Monitorreinigung, Pixelfehlerprüfung oder zur Erzeugung eines <strong>blaue Bildschirm-Lichteffekts</strong>.'
      },
      {
        question: 'Wie bekomme ich einen blauen Bildschirm online? (Absturz-Simulation / Falscher blauer Bildschirm)',
        answer: 'Sie können einen <strong>blauen Bildschirm online</strong> direkt über diesen Browser-Link im Vollbildmodus starten. Nutzen Sie ihn als <strong>falschen blauen Bildschirm online</strong> für Simulationen, Videobearbeitungen oder Design-Prototypen ohne Gefahr für Ihr Betriebssystem.'
      },
      {
        question: 'Gibt es eine Simulation des bekannten Sysinternals Blue Screen Tools?',
        answer: 'Sysinternals-Programme wie NotMyFault stürzen Windows-Systeme zu Testzwecken real ab. Suchen Sie nach einer sicheren farblichen Simulation für Video oder Anzeige, erhalten Sie hier einen unbedenklichen blauen Hintergrund ohne Gefahren.'
      },
      {
        question: 'Wie hilft ein blauer Bildschirm bei der Monitorreinigung und Pixelfehler-Suche?',
        answer: 'Ein sattes Blau eignet sich hervorragend zur <strong>Monitorreinigung mit blauem Bildschirm</strong> und Sichtprüfung. Das solide Blau hilft Ihnen dabei, <strong>Pixelfehler zu finden</strong> oder <strong>Schmutzflecken aufzuspüren</strong>, um die Glasoberfläche des Panels streifenfrei zu reinigen.'
      },
      {
        question: 'Wie nutze ich ein blaues Licht für Video-Bewerbungen und Selfies?',
        answer: 'Nutzen Sie das Display als <strong>blaues Licht online</strong> bzw. Quelle für <strong>blaues Farblicht</strong>. Das Tool strahlt ein weiches <strong>blaues Licht für Videocalls</strong> und <strong>blaues Licht für Selfies</strong> aus und erzeugt eine coole, technik-affine LED-Atmosphäre.'
      }
    ],
    hi: [
      {
        question: 'नीली स्क्रीन क्या है? (नीली स्क्रीन का क्या मतलब है?)',
        answer: '**नीली स्क्रीन** मॉनिटर पर एक ठोस नीला रंग क्षेत्र है। हालाँकि ऐतिहासिक रूप से यह कंप्यूटर क्रैश या सिस्टम एरर से जुड़ा है, लेकिन यह <strong>नीली स्क्रीन ऑनलाइन</strong> टूल डिस्प्ले साफ करने, खराब पिक्सल खोजने या <strong>ब्लू स्क्रीन लाइट इफेक्ट</strong> के लिए एक उपयोगी साधन है।'
      },
      {
        question: 'ऑनलाइन नीली स्क्रीन कैसे शुरू करें? (नकली नीली स्क्रीन ऑनलाइन)',
        answer: 'आप इस वेबसाइट से फुल-स्क्रीन <strong>नीली स्क्रीन ऑनलाइन</strong> खोल सकते हैं। यह प्रस्तुतिकरण, वीडियो प्रभावों या सॉफ्टवेयर परीक्षण के लिए एक सुरक्षित <strong>नकली नीली स्क्रीन ऑनलाइन</strong> के रूप में काम कर सकती है जिससे कंप्यूटर को कोई नुकसान नहीं होता।'
      },
      {
        question: 'क्या सिसइंटरनल्स (sysinternals) का कोई ब्लू स्क्रीन टूल उपलब्ध है?',
        answer: 'सिसइंटरनल्स का NotMyFault टूल वास्तव में ऑपरेटिंग सिस्टम को क्रैश करने में मदद करता है। यदि आप बिना सिस्टम क्रैश किए केवल एक ठोस नीला पृष्ठभूमि रंग चाहते हैं, तो हमारा ऑनलाइन टूल पूरी सुरक्षा के साथ नीली स्क्रीन का लाइव सिम्युलेटर देता है।'
      },
      {
        question: 'स्क्रीन क्लीनिंग और डेड पिक्सल परीक्षण के लिए नीली स्क्रीन का उपयोग कैसे करें?',
        answer: 'फुलस्क्रीन मोड में ठोस नीला रंग <strong>नीली स्क्रीन मॉनिटर क्लीनिंग</strong> और डिस्प्ले की खामियां जांचने का बेहतरीन तरीका है। नीला रंग आपको स्क्रीन पर <strong>डेड पिक्सल ढूंढने</strong> या <strong>धूल-मिट्टी के गंदे धब्बे खोजने</strong> में काफी मदद करता है।'
      },
      {
        question: 'वीडियो कॉल और सेल्फी के लिए ब्लू स्क्रीन लाइट इफेक्ट का उपयोग कैसे करें?',
        answer: 'अपनी स्क्रीन को एक <strong>ब्लू लाइट ऑनलाइन</strong> उत्पन्न करने वाले सुंदर पैनल में बदलें। यह टूल <strong>वीडियो कॉल के लिए ब्लू लाइट</strong> या <strong>सेल्फी के लिए ब्लू लाइट</strong> के रूप में काम करता है, जो कैमरे के सामने एक समान <strong>नीला रंग प्रकाश</strong> प्रभाव फेंकता है।'
      }
    ],
    ja: [
      {
        question: 'ブルースクリーンとは？（青い画面はどういう意味ですか？）',
        answer: '**ブルースクリーン（青い画面）**とは、液晶画面全体に表示された純粋な青いカラーフィールドです。エラーやPCの故障（ブルースクリーン）を連想させますが、この<strong>ブルースクリーンオンライン</strong>ツールは、液晶チェック、掃除、または<strong>青い画面の光効果</strong>用として使われます。'
      },
      {
        question: 'オンラインで青い画面を表示するには？（偽のブルースクリーンオンライン）',
        answer: '当サイトから簡単に全画面の<strong>ブルースクリーンオンライン</strong>を起動できます。システムに全く影響を与えずに<strong>偽のブルースクリーンオンライン</strong>として動作するため、プレゼンテーションのデモ、映像制作、テスト背景に安全に活用できます。'
      },
      {
        question: 'Sysinternalsのブルースクリーンツールと何が違いますか？',
        answer: 'Sysinternals of NotMyFault等の開発ツールは実際にシステムをクラッシュさせる特性があります。当サイトのツールは、危険なクラッシュを一切伴わず、単なる青色の全画面背景をブラウザ上で安全にエミュレートします。'
      },
      {
        question: 'モニター掃除やドット抜けテストに青い画面をどう使いますか？',
        answer: '液晶の手入れ時には、全面の<strong>掃除用ブルースクリーン</strong>を表示することでパネルの品質を細かく点検できます。<strong>モニター掃除用ブルースクリーン</strong>を利用することで、パネルに生じた<strong>ドット抜けを発見</strong>したり、<strong>液晶の汚れを発見</strong>することが非常に簡単になります。'
      },
      {
        question: 'ビデオ通話やセルフィー用の青色照明（LED）として使うには？',
        answer: 'ディスプレイの輝度を上げ、<strong>ブルーライトオンライン</strong>投光器や高彩度な<strong>青いカラーライト</strong>として使えます。自撮り用の<strong>セルフィー用ブルーライト</strong>や、<strong>ビデオ通話用ブルーライト</strong>として、寒色系のLED照明効果を手軽に作れます。'
      }
    ]
  },
  'red-screen': {
    en: [
      {
        question: 'What is a red screen and why is my screen red?',
        answer: 'A red screen is a solid color display panel running pure red (#ff0000). If you are asking why is my screen red on a laptop, TV, or phone, it could be due to active eye comfort configurations (like Night Shift), a GPU driver issue, or a hardware defect. However, launching a clean online red screen background is a controlled way to test your display or preserve night vision.'
      },
      {
        question: 'How to get a red screen on iPhone? (How to make iPhone screen red)',
        answer: 'To learn how to get red screen on iPhone, you can use our web-based tool. Select the Red Screen and click Fullscreen in Safari. If you want to know how to make iphone screen red permanently, go to iOS Settings > Accessibility > Display & Text Size > Color Filters, turn them on, and select Red Color Tint. Users also query how to get red screen on iphone for nocturnal reading and camera fill.'
      },
      {
        question: 'How to make Red Dead Online full screen? (How to full screen Red Dead Online)',
        answer: 'To learn how to make red dead online full screen or how to full screen red dead online on PC, press the Alt + Enter shortcut key on your keyboard while the game is active. You can also open the game settings, navigate to the graphics options, and change the screen mode from Windowed or Borderless Windowed to Fullscreen.'
      },
      {
        question: 'Is there a DS Lite red screen error? (What is red screen door?)',
        answer: 'A ds lite red screen of death indicates a boot failure, often caused by a loose BIOS chip or faulty cartridge slot. Some retro gamers also mention the red screen door effect, which relates to subpixel layouts on older LCD panels that make the pixel borders visible, resembling a screen door.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla roja y por qué mi pantalla está roja?',
        answer: 'Una pantalla roja es un fondo de color rojo puro (#ff0000). Si te preguntas por qué mi pantalla está roja en una portátil, TV o móvil, podría deberse a configuraciones de luz nocturna activa (Night Shift), un error del controlador de la GPU o un fallo físico. Sin embargo, abrir un fondo de pantalla roja controlado es muy útil para comprobar el estado del monitor o cuidar la vista en la oscuridad.'
      },
      {
        question: '¿Cómo poner la pantalla roja en iPhone? (Cómo hacer la pantalla del iPhone roja)',
        answer: 'Para saber cómo poner la pantalla roja en iPhone, puedes abrir nuestra herramienta web en Safari y pulsar el botón de Pantalla Completa. Si deseas hacer la pantalla del iPhone roja de forma permanente, ve a Ajustes > Accesibilidad > Pantalla y tamaño de texto > Filtros de color, actívalos y selecciona Matiz Rojo. Muchos usuarios aplican la pantalla roja en iPhone para leer de noche o usarlo como luz de relleno.'
      },
      {
        question: '¿Cómo poner Red Dead Online en pantalla completa? (Cómo hacer pantalla completa en Red Dead Online)',
        answer: 'Para saber cómo poner Red Dead Online en pantalla completa o cómo hacer pantalla completa en Red Dead Online en PC, presiona el atajo Alt + Enter en el teclado mientras juegas. También puedes abrir el menú de ajustes del juego, ir a opciones gráficas y cambiar el Modo de Pantalla de Ventana/Sin Bordes a Pantalla Completa.'
      },
      {
        question: '¿Existe un error de pantalla roja en DS Lite? (¿Qué es la puerta de pantalla roja?)',
        answer: 'La pantalla roja en DS Lite señala un error crítico de arranque, usualmente causado por un chip de BIOS suelto o problemas en la ranura del cartucho. La frase puerta de pantalla roja (Screen Door Effect) describe la separación visible entre píxeles en pantallas LCD antiguas, asemejándose a una rejilla o mosquitero.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela vermelha e por que minha tela está vermelha?',
        answer: 'Uma tela vermelha é um painel exibindo cor vermelha pura (#ff0000). Se você está perguntando por que minha tela está vermelha no notebook, TV ou celular, pode ser devido a filtros de conforto ocular ativados (como Night Shift), erro no driver da GPU ou defeito físico de hardware. Mas abrir uma tela vermelha de fundo completo na web é excelente para testes e para proteger a visão no escuro.'
      },
      {
        question: 'Como deixar a tela vermelha no iPhone? (Como colocar tela vermelha no iPhone)',
        answer: 'Para aprender como colocar tela vermelha no iPhone, abra nossa ferramenta no Safari e clique em Tela Cheia. Se você quer saber como deixar a tela do iPhone vermelha de forma contínua, acesse Ajustes > Acessibilidade > Tela e Tamanho do Texto > Filtros de Cor, ative a opção e selecione Filtro Vermelho. Criadores utilizam a tela vermelha no iPhone para ler à noite e obter iluminação de estúdio.'
      },
      {
        question: 'Como colocar o Red Dead Online em tela cheia? (Como deixar Red Dead Online em tela cheia)',
        answer: 'Para saber como colocar o Red Dead Online em tela cheia ou como deixar Red Dead Online em tela cheia no PC, aperte o atalho Alt + Enter no seu teclado enquanto o jogo roda. Alternativamente, acesse as configurações do game, vá em opções gráficas, e altere o modo da tela de Modo Janela para Tela Cheia (Fullscreen).'
      },
      {
        question: 'O que significa a tela vermelha no DS Lite? (O que é porta de tela vermelha?)',
        answer: 'A tela vermelha no DS Lite de boot indica falha de hardware, geralmente um chip de BIOS solto ou problema na entrada de cartuchos. Já a expressão efeito porta de tela vermelha refere-se à visibilidade da divisão dos subpixels em telas LCD retro antigas, deixando-as com aspecto de grade.'
      }
    ],
    fr: [
      {
        question: "Qu'est-ce qu'un écran rouge et pourquoi mon écran est-il rouge?",
        answer: "Un écran rouge désigne l'affichage d'un fond uni rouge vif (#ff0000). Si vous vous demandez pourquoi mon écran est rouge sur un ordinateur, une TV ou un téléphone, cela peut venir d'un mode de confort des yeux (comme Night Shift), d'un pilote graphique corrompu, ou d'une panne de dalle. Cependant, lancer un arrière-plan écran rouge contrôlé permet de diagnostiquer l'écran ou de préserver sa vision nocturne."
      },
      {
        question: "Comment mettre l'écran rouge sur iPhone? (Comment rendre l'écran de l'iPhone rouge)",
        answer: "Pour savoir comment mettre l'écran rouge sur iPhone, ouvrez Safari, accédez à notre appli web et activez le mode Plein écran. Pour rendre l'écran de l'iPhone rouge de façon permanente, allez dans Réglages > Accessibilité > Affichage et taille du texte > Filtres de couleur, activez-les et choisissez Nuance rouge. L'usage d'un écran rouge sur iPhone est parfait pour lire la nuit sans fatigue."
      },
      {
        question: "Comment mettre Red Dead Online en plein écran? (Comment passer Red Dead Online en plein écran)",
        answer: "Pour savoir comment mettre Red Dead Online en plein écran ou comment passer Red Dead Online en plein écran sur PC, appuyez sur le raccourci Alt + Entrée sur votre clavier lorsque le jeu tourne. Vous pouvez également ouvrir les paramètres du jeu, aller dans l'onglet des graphismes, puis changer le mode d'affichage de Fenêtré en Plein écran."
      },
      {
        question: "Qu'est-ce que l'erreur d'écran rouge sur DS Lite? (C'est quoi l'effet porte d'écran rouge?)",
        answer: "Un écran rouge sur DS Lite indique un échec critique du démarrage d'origine matérielle (BIOS ou slot cartouche défaillant). Le terme effet porte d'écran rouge (Screen Door Effect) fait référence à la grille de séparation des pixels visible sur de vieux écrans LCD rétro."
      }
    ],
    de: [
      {
        question: 'Was ist ein roter Bildschirm und warum ist mein Bildschirm rot?',
        answer: 'Ein roter Bildschirm ist eine vollflächige Farbausgabe von reinem Rot (#ff0000). Wenn Sie sich fragen, warum ist mein Bildschirm rot (z. B. auf Laptop, TV oder Smartphone), liegt das oft an aktiven Augenkomfort-Funktionen (wie Night Shift), Grafikkartentreiber-Fehlern oder Hardware-Defekten. Das Öffnen eines sauberen Online-roten Bildschirmhintergrunds dient jedoch zum sicheren Paneltest oder zur Schonung der Augen.'
      },
      {
        question: 'Wie bekomme ich einen roten Bildschirm auf dem iPhone? (Wie macht man den iPhone Bildschirm rot)',
        answer: 'Um einen roten Bildschirm auf dem iPhone zu aktivieren, nutzen Sie unser Tool in Safari und wählen Sie den Vollbildmodus. Wenn Sie wissen möchten, wie man den iPhone-Bildschirm dauerhaft rot macht, gehen Sie zu Einstellungen > Bedienungshilfen > Anzeige & Textgröße > Farbfilter, aktivieren Sie diese und wählen Sie Rotstich. Viele Nutzer verwenden den roten Bildschirm auf dem iPhone für Nachtlektüre oder als Ambient-Studiolicht.'
      },
      {
        question: 'Wie macht man Red Dead Online zum Vollbild? (Wie spiele ich Red Dead Online im Vollbildmodus)',
        answer: 'Um Red Dead Online ins Vollbild zu bringen oder Red Dead Online als Vollbild zu spielen auf dem PC, drücken Sie einfach das Tastenkürzel Alt + Enter während das Spiel läuft. Alternativ können Sie in den Grafikeinstellungen des Spiels den Anzeigemodus von Fenstermodus oder Rahmenloser Fenstermodus auf Vollbild ändern.'
      },
      {
        question: 'Was bedeutet der rote Bildschirm beim DS Lite? (Was ist der Rote-Screen-Door-Effekt?)',
        answer: 'Ein roter Bildschirm beim DS Lite deutet auf einen Boot-Fehler hin, der meist durch einen losen BIOS-Chip oder einen defekten Modulschacht verursacht wird. Als Rote-Screen-Door-Effekt bezeichnet man die sichtbare Pixelgitterstruktur auf älteren LCD-Bildschirmen, bei denen die Ränder der roten Subpixel wie eine Fliegengittertür wirken.'
      }
    ],
    hi: [
      {
        question: 'लाल स्क्रीन क्या है और मेरी स्क्रीन लाल क्यों है?',
        answer: 'एक लाल स्क्रीन शुद्ध लाल रंग (#ff0000) प्रदर्शित करने वाला एक ठोस कलर पैनल है। यदि आप पूछ रहे हैं कि लैपटॉप, टीवी या मोबाइल पर मेरी स्क्रीन लाल क्यों है, तो यह सक्रिय आई कम्फर्ट मोड (जैसे नाइट शील्ड), जीपीयू ड्राइवर की खराबी, या हार्डवेयर दोष के कारण हो सकता है। हालांकि, वेब पर लाल स्क्रीन बैकग्राउंड चलाना स्क्रीन की जांच करने और नाइट विजन बचाने का एक सुरक्षित साधन है।'
      },
      {
        question: 'आईफोन की स्क्रीन को लाल कैसे करें? (आईफोन पर लाल स्क्रीन कैसे लाएं)',
        answer: 'सीखने के लिए कि आईफोन पर लाल स्क्रीन कैसे लाएं, आप हमारे वेब टूल को सफारी पर खोलें और फुलस्क्रीन पर क्लिक करें। यदि आप आईफोन की स्क्रीन को हमेशा के लिए लाल करना चाहते हैं, तो आईओएस सेटिंग्स > एक्सेसिबिलिटी > डिस्प्ले एंड टेक्स्ट साइज > कलर फिल्टर पर जाएं, उन्हें चालू करें और रेड कलर टिंट चुनें। रात में रीडिंग और सॉफ्ट स्टूडियो लाइट के लिए लोग आईफोन पर लाल स्क्रीन का उपयोग करते हैं।'
      },
      {
        question: 'रेड डेड ऑनलाइन को फुल स्क्रीन कैसे करें? (Red Dead Online को स्क्रीन पर पूरा कैसे लाएं)',
        answer: 'यह जानने के लिए कि Red Dead Online को फुल स्क्रीन कैसे करें, पीसी पर गेम चालू होने के दौरान अपने कीबोर्ड पर Alt + Enter दबाएं। इसके अलावा, आप गेम की सेटिंग्स में जा सकते हैं, ग्राफिक्स विकल्पों पर नेविगेट कर सकते हैं, और डिस्प्ले मोड को विंडो मोड से बदलकर फुलस्क्रीन कर सकते हैं।'
      },
      {
        question: 'क्या DS Lite लाल स्क्रीन एरर कोई बड़ी समस्या है? (स्क्रीन डोर इफेक्ट क्या है?)',
        answer: 'एक DS Lite लाल स्क्रीन एरर कंसोल के सिस्टम बूट विफलता को दर्शाता है, जो ढीली BIOS चिप या खराब कार्ट्रिज स्लॉट के कारण होता है। वहीं, कुछ पुरानी एलसीडी स्क्रीन पर दिखाई देने वाली बारीक पिक्सेल ग्रिड की रेखाओं को स्क्रीन डोर इफेक्ट कहा जाता है, जो खिड़की की जाली जैसी दिखती हैं।'
      }
    ],
    ja: [
      {
        question: '赤い画面とは何ですか？なぜ画面が赤くなっているのですか？',
        answer: 'デジタルにおける赤い画面は、画面全体に純粋な赤色（#ff0000）を表示した配色です。もしパソコンやテレビ、スマホの画面でなぜ画面が赤いのか疑問に持たれた場合、OSの夜間モード（Night Shift）設定、グラフィックドライバの問題、または液晶のハード故障が考えられます。当機能のように全画面に赤い画面 背景をきれいに表示することは、ドット抜けチェックや夜間の暗順応保護に活用されます。'
      },
      {
        question: 'iPhoneで画面を赤くする（赤い画面を表示する）方法は？',
        answer: 'パソコンやブラウザを使わずにiPhoneで赤い画面を取得する方法として、Safariで当サイトを開き、全画面ボタンを押してください。iOS機能でiPhoneの画面を永続的に赤く設定する方法は、設定 > アクセシビリティ > 画面表示とテキストサイズ > カラーフィルタを「オン」にして「赤の色合い」を選びます。夜間の液晶読書や撮影用ライトとして活用されます。'
      },
      {
        question: 'レッド・デッド・オンラインをフルスクリーン表示にするには？',
        answer: 'PC版でゲーム画面をRDR2（レッド・デッド・オンライン）でフルスクリーンに変更するには、ゲームがアクティブな状態でキーボードの「Alt + Enter」キーを同時に押してください。または、ゲームのグラフィック設定メニューから表示モードをウィンドウモードや境界線なしウィンドウモードからフルスクリーン（全画面）に変更してください。'
      },
      {
        question: 'DS Liteの赤い画面エラーは何ですか？（レッド・スクリーンドア効果とは？）',
        answer: '海外で知られるDS Liteの赤い画面（Red Screen of Death）はブート失敗などの液晶의フリーズ系バグを指し、BIOSチップやカセット端子の接触不良が主原因です。また往年の液晶技術において、赤色サブピクセルの隙間が見えてしまう格子状の網目をスクリーンドア効果（網目効果）と呼びます。'
      }
    ]
  },
  'orange-screen': {
    en: [
      {
        question: 'Why is my screen turning orange?',
        answer: 'Your screen might turn orange due to active night light settings (like Windows 10 Night light or iPhone Night Shift) designed to reduce blue light. Other causes could include a faulty display cable, outdated graphics drivers, or a hardware defect (sometimes referred to as an orange screen of death on PC or orange screen iPhone freeze). Using a controlled orange screen online tool is a safe way to test if the issue is software or hardware-related.'
      },
      {
        question: 'What is the orange screen?',
        answer: 'The orange screen is a fullscreen display utility showing a pure, vibrant orange color. In display configuration and troubleshooting, it helps users test subpixel performance, check color accuracy, and identify panel issues like dead pixels, backlight bleeding, or dirty spots.'
      },
      {
        question: 'How do I turn my screen orange?',
        answer: 'You can easily turn your screen orange by opening our free online orange screen utility. Select the tool, adjust the brightness slider if needed, and click the Fullscreen button or press the "F" key on your keyboard to get a full orange screen for mobile or PC.'
      },
      {
        question: 'What is the orange screen method?',
        answer: 'The orange screen method is a creative tracing and drawing technique. By setting a tablet or display to a bright orange fullscreen background, you can place a piece of paper over it to copy an image that a classmate or artist drew, using the screen as a steady light box.'
      },
      {
        question: 'What color is orange in HTML?',
        answer: 'In HTML and CSS, standard orange is represented by the hexadecimal color code #FFA500 (or rgb(255, 165, 0)). Our orange screen online tool displays a curated, warm orange color (#FF8A00) designed for optimal display calibration and cozy ambient lighting.'
      }
    ],
    es: [
      {
        question: '¿Por qué mi pantalla se está poniendo naranja?',
        answer: 'Tu pantalla puede ponerse naranja debido al modo de luz nocturna activo (como Luz nocturna en Windows 10 o Night Shift en iPhone) diseñado para reducir la luz azul. Otras causas pueden ser un cable de pantalla defectuoso, controladores de tarjeta gráfica desactualizados o un problema de hardware (pantalla naranja de la muerte). Abrir una pantalla naranja online controlada es una forma segura de verificar si es un problema de software o de hardware.'
      },
      {
        question: '¿Qué es la pantalla naranja?',
        answer: 'La pantalla naranja es una utilidad de pantalla completa que muestra un color naranja puro y brillante. Se utiliza para probar el rendimiento de los subpíxeles, verificar la precisión de los colores en el panel y detectar píxeles muertos o manchas de suciedad.'
      },
      {
        question: '¿Cómo pongo mi pantalla en naranja?',
        answer: 'Puedes poner tu pantalla naranja fácilmente abriendo nuestra utilidad web gratuita. Selecciona la herramienta, ajusta el brillo si lo deseas y presiona el botón de Pantalla Completa o la tecla "F" en tu teclado para obtener una pantalla naranja completa en PC o móvil.'
      },
      {
        question: '¿Qué es el método de la pantalla naranja?',
        answer: 'El método de la pantalla naranja es una técnica creativa para calcar o copiar imágenes. Al configurar una tableta o monitor con un fondo naranja brillante a pantalla completa, puedes colocar un papel encima para calcar un dibujo que haya hecho un compañero de clase, usando el monitor como mesa de luz.'
      },
      {
        question: '¿Qué color es el naranja en HTML?',
        answer: 'En HTML y CSS, el color naranja estándar se representa con el código hexadecimal #FFA500 (o rgb(255, 165, 0)). Nuestra herramienta de pantalla naranja online utiliza un tono naranja cálido y optimizado (#FF8A00) para pruebas de pantalla y luz ambiental.'
      }
    ],
    pt: [
      {
        question: 'Por que minha tela está ficando laranja?',
        answer: 'A sua tela pode ficar laranja devido à ativação do modo de conforto ocular (como a Luz Noturna no Windows 10 ou o Night Shift no iPhone) para reduzir a luz azul. Outras causas incluem um cabo de vídeo com defeito, drivers da placa de vídeo desatualizados ou uma falha de hardware (conhecida como tela laranja da morte). Usar uma tela laranja online controlada é uma maneira segura de testar se o problema é físico ou de software.'
      },
      {
        question: 'O que é a tela laranja?',
        answer: 'A tela laranja é um utilitário de tela inteira que exibe uma cor laranja pura e vibrante. É usada para testar o desempenho dos subpixels do monitor, verificar a fidelidade das cores e identificar problemas como pixels mortos e manchas de sujeira.'
      },
      {
        question: 'Como faço para deixar minha tela laranja?',
        answer: 'Você pode deixar sua tela laranja facilmente usando nossa ferramenta online gratuita. Basta selecionar a ferramenta, ajustar o brilho e clicar no botão Tela Cheia ou pressionar a tecla "F" no seu teclado para ter uma tela laranja completa no PC ou celular.'
      },
      {
        question: 'O que é o método da tela laranja?',
        answer: 'O método da tela laranja é uma técnica de desenho e decalque. Ao exibir uma tela laranja brilhante em tela cheia no monitor ou tablet, você pode colocar uma folha de papel sobre ela para contornar e copiar um desenho feito por um colega ou artista, funcionando como uma mesa de luz estável.'
      },
      {
        question: 'Qual é o código da cor laranja em HTML?',
        answer: 'Em HTML e CSS, a cor laranja padrão possui o código hexadecimal #FFA500 (ou rgb(255, 165, 0)). Nossa ferramenta de tela laranja online utiliza um tom laranja quente customizado (#FF8A00), projetado para calibração de displays e iluminação decorativa.'
      }
    ],
    fr: [
      {
        question: 'Pourquoi mon écran devient-il orange ?',
        answer: 'Votre écran peut devenir orange en raison de l\'activation du mode nuit (comme la fonction Éclairage nocturne sous Windows 10 ou Night Shift sur iPhone) conçu pour limiter la lumière bleue. D\'autres causes possibles sont un câble d\'affichage défectueux, des pilotes graphiques obsolètes ou une panne matérielle (parfois appelée écran orange de la mort). Utiliser notre outil d\'écran orange contrôlé en ligne est un bon moyen de tester si le problème est logiciel ou matériel.'
      },
      {
        question: 'Qu\'est-ce que l\'écran orange ?',
        answer: 'L\'écran orange est un utilitaire en plein écran affichant une couleur orange pure et vive. Il permet de tester les performances des sous-pixels, de vérifier le rendu des couleurs d\'un moniteur et de détecter des pixels défectueux ou des poussières.'
      },
      {
        question: 'Comment mettre mon écran en orange ?',
        answer: 'Vous pouvez facilement afficher un écran orange en ouvrant notre outil gratuit en ligne. Sélectionnez le widget de couleur orange, réglez la luminosité et cliquez sur le bouton Plein écran ou appuyez sur la touche "F" de votre clavier pour obtenir un écran orange complet sur PC ou mobile.'
      },
      {
        question: 'Qu\'est-ce que la méthode de l\'écran orange ?',
        answer: 'La méthode de l\'écran orange désigne une méthode de dessin et de calque. En affichant un écran orange vif en plein écran sur une tablette ou un écran, vous pouvez poser une feuille de papier par-dessus afin de calquer et copier un dessin réalisé par un camarade de classe ou un artiste, l\'écran servant de table lumineuse.'
      },
      {
        question: 'Quelle est la couleur orange en HTML ?',
        answer: 'En HTML et CSS, l\'orange standard correspond au code hexadécimal #FFA500 (ou rgb(255, 165, 0)). Notre outil d\'écran orange en ligne affiche une teinte d\'orange chaude et optimisée (#FF8A00) parfaite pour calibrer les dalles ou éclairer une pièce.'
      }
    ],
    de: [
      {
        question: 'Warum wird mein Bildschirm orange?',
        answer: 'Ihr Bildschirm kann sich orange färben, wenn der Nachtmodus (wie das Nachtlicht in Windows 10 oder Night Shift auf dem iPhone) aktiv ist, um blaues Licht zu reduzieren. Weitere Ursachen sind ein defektes Bildschirmkabel, veraltete Grafikkartentreiber oder ein Hardware-Defekt (manchmal als oranger Bildschirm des Todes bezeichnet). Unser kontrollierter oranger Bildschirm online hilft Ihnen, die Ursache sicher einzugrenzen.'
      },
      {
        question: 'Was ist der orange Bildschirm?',
        answer: 'Der orange Bildschirm ist ein Vollbild-Utility, das ein reines, kräftiges Orange anzeigt. Es dient zum Testen der Subpixel-Performance, zur Überprüfung der Farbtreue des Monitors sowie zum Aufspüren von Pixelfehlern oder Schmutzflecken.'
      },
      {
        question: 'Wie mache ich meinen Bildschirm orange?',
        answer: 'Sie können Ihren Bildschirm ganz einfach über unser kostenloses Online-Tool orange färben. Wählen Sie das Werkzeug aus, passen Sie die Helligkeit an und klicken Sie auf Vollbild oder drücken Sie die Taste "F" auf Ihrer Tastatur für einen kompletten orangen Bildschirm auf dem PC oder Smartphone.'
      },
      {
        question: 'Was ist die Orange-Bildschirm-Methode?',
        answer: 'Die Orange-Bildschirm-Methode ist eine kreative Technik zum Abpausen und Zeichnen. Wenn Sie ein Tablet oder einen Monitor auf Vollbild-Orange einstellen, können Sie ein Blatt Papier darüberlegen, um ein von einem Mitschüler gezeichnetes Bild abzuzeichnen, wobei das Display als Leuchttisch fungiert.'
      },
      {
        question: 'Welche Farbe hat Orange in HTML?',
        answer: 'In HTML und CSS wird das Standard-Orange durch den Hex-Farbcode #FFA500 (oder rgb(255, 165, 0)) dargestellt. Unser Online-Tool verwendet ein warmes, optimiertes Orange (#FF8A00) für eine angenehme Beleuchtung und Monitorprüfungen.'
      }
    ],
    hi: [
      {
        question: 'मेरी स्क्रीन नारंगी (ऑरेंज) क्यों हो रही है?',
        answer: 'आपकी स्क्रीन नारंगी होने का मुख्य कारण नाइट लाइट सेटिंग (जैसे विंडोज 10 नाइट लाइट या आईफोन नाइट शिफ्ट) का सक्रिय होना हो सकता है, जो नीली रोशनी को कम करती है। अन्य कारणों में खराब डिस्प्ले केबल, पुराने ग्राफिक्स ड्राइवर, या हार्डवेयर खराबी (ऑरेंज स्क्रीन ऑफ डेथ) शामिल हैं। किसी सुरक्षित ऑनलाइन ऑरेंज स्क्रीन टूल को लॉन्च करना यह जांचने का एक आसान तरीका है कि समस्या सॉफ्टवेयर में है या हार्डवेयर में।'
      },
      {
        question: 'ऑरेंज स्क्रीन क्या है?',
        answer: 'नारंगी स्क्रीन एक फुलस्क्रीन डिस्प्ले टूल है जो एक शुद्ध और चटक नारंगी रंग प्रदर्शित करता है। इसका उपयोग सबपिक्सेल की सेहत जांचने, डिस्प्ले की रंग सटीकता (कलर कैलिब्रेशन) का परीक्षण करने और स्क्रीन पर मौजूद डेड पिक्सल या गंदगी के धब्बों का पता लगाने के लिए किया जाता है।'
      },
      {
        question: 'मैं अपनी स्क्रीन को नारंगी कैसे करूँ?',
        answer: 'आप हमारे मुफ्त ऑनलाइन ऑरेंज स्क्रीन यूटिलिटी का उपयोग करके अपनी स्क्रीन को आसानी से नारंगी रंग में बदल सकते हैं। टूल का चयन करें, आवश्यकतानुसार ब्राइटनेस बढ़ाएं और पीसी या मोबाइल पर पूरी ऑरेंज स्क्रीन खोलने के लिए फुलस्क्रीन बटन पर क्लिक करें या कीबोर्ड पर "F" दबाएं।'
      },
      {
        question: 'ऑरेंज स्क्रीन विधि (मेथड) क्या है?',
        answer: 'ऑरेंज स्क्रीन विधि एक रचनात्मक ट्रेसिंग (चित्र छापने) की तकनीक है। अपने टैबलेट या मॉनिटर पर एक चमकीली नारंगी फुलस्क्रीन बैकग्राउंड सेट करके, आप उसके ऊपर एक कागज रखकर अपने किसी सहपाठी या कलाकार द्वारा बनाए गए चित्र को आसानी से कॉपी (ट्रेस) कर सकते हैं।'
      },
      {
        question: 'HTML में नारंगी रंग का कोड क्या है?',
        answer: 'HTML और CSS में, मानक नारंगी रंग को हेक्साडेसिमल कोड #FFA500 (या rgb(255, 165, 0)) द्वारा दर्शाया जाता है। हमारा ऑनलाइन ऑरेंज स्क्रीन टूल एक विशेष वार्म नारंगी रंग (#FF8A00) प्रदर्शित करता है जो आँखों के आराम और स्क्रीन टेस्टिंग के लिए अनुकूल है।'
      }
    ],
    ja: [
      {
        question: '画面がオレンジ色になるのはなぜですか？',
        answer: '画面がオレンジ色になる主な原因は、ブルーライトを軽減するための夜間モード（Windows 10の夜間モードやiPhoneのNight Shiftなど）が調整・有効化されているためです。その他、ディスプレイケーブルの接触不良、グラフィックドライバの不具合、または物理的な液晶故障（オレンジスクリーン・オブ・デスなど）の可能性もあります。当サイトのオレンジ画面表示ツールを使って不具合がOS設定によるものか、またはハードウェアの異常かを確認できます。'
      },
      {
        question: 'オレンジスクリーン（オレンジの画面）とは何ですか？',
        answer: 'オレンジスクリーンとは、画面全体に純粋で鮮やかなオレンジ色を表示する全画面表示ユーティリティです。ディスプレイのサブピクセル検査、発色のキャリブレーション、画面のドット抜けや汚れの位置の特定などに使用されます。'
      },
      {
        question: '液晶画面をオレンジ色にする方法は？',
        answer: '当サイトの無料オンライン「オレンジスクリーン」ツールを使用すれば、簡単に画面をオレンジ色にできます。ツールを選択し、必要に応じて輝度を調整し、全画面ボタンをクリックするか、キーボードの「F」キーを押して全画面表示に切り替えます。'
      },
      {
        question: 'オレンジスクリーン・メソッド（方法）とは何ですか？',
        answer: 'オレンジスクリーン・メソッドとは、イラストのトレース（すかし写し）や模写に用いられるクリエイティブな技法です。タブレットやモニターを明るいオレンジ色の全画面背景に設定し、その上に紙を置くことで、クラスメートが描いた絵などを簡単にトレースするライトボックスとして画面を活用できます。'
      },
      {
        question: 'HTMLでのオレンジ色のカラーコードは何ですか？',
        answer: 'HTMLやCSSにおいて、標準のオレンジ色は16進数カラーコード #FFA500（または rgb(255, 165, 0））で表されます。当サイトのオレンジ画面ツールは、ディスプレイ調整や温かみのある間接照明として最適な、厳選されたウォームオレンジ（#FF8A00）を出力します。'
      }
    ]
  }
};

export function toolFaqs(locale: Locale, toolId: string, defaultFaqs: { question: string; answer: string }[]): { question: string; answer: string }[] {
  return localizedFaqs[toolId]?.[locale] ?? defaultFaqs;
}

export function getRelatedSearches(locale: Locale): string[] {
  const searches: Record<Locale, string[]> = {
    en: [
      'White screen Wallpaper',
      'White screen light',
      'White screen Windows',
      'White screen test',
      'White screen Photo',
      'White screen youtube',
      'White screen online',
      'White screen download',
      'White screen background',
      'White screen image'
    ],
    es: [
      'Fondo de pantalla blanca',
      'Luz de pantalla blanca',
      'Pantalla blanca Windows',
      'Prueba de pantalla blanca',
      'Foto con pantalla blanca',
      'Pantalla blanca youtube',
      'Pantalla blanca online',
      'Descargar pantalla blanca',
      'Fondo blanco pantalla',
      'Imagen de pantalla blanca'
    ],
    pt: [
      'Papel de parede tela branca',
      'Luz de tela branca',
      'Tela branca Windows',
      'Teste de tela branca',
      'Foto com tela branca',
      'Tela branca youtube',
      'Tela branca online',
      'Baixar tela branca',
      'Fundo branco tela',
      'Imagem de tela branca'
    ],
    fr: [
      "Fond d'écran blanc",
      "Lumière écran blanc",
      "Écran blanc Windows",
      "Test écran blanc",
      "Photo écran blanc",
      "Écran blanc youtube",
      "Écran blanc en ligne",
      "Télécharger écran blanc",
      "Arrière-plan écran blanc",
      "Image écran blanc"
    ],
    de: [
      'Weißer Bildschirm Hintergrund',
      'Weißer Bildschirm Licht',
      'Weißer Bildschirm Windows',
      'Weißer Bildschirm Test',
      'Weißer Bildschirm Foto',
      'Weißer Bildschirm youtube',
      'Weißer Bildschirm online',
      'Weißer Bildschirm herunterladen',
      'Weißer Hintergrund Bildschirm',
      'Weißer Bildschirm Bild'
    ],
    hi: [
      'सफेद स्क्रीन वॉलपेपर',
      'सफेद स्क्रीन लाइट',
      'सफेद स्क्रीन विंडोज़',
      'सफेद स्क्रीन परीक्षण',
      'सफेद स्क्रीन फोटो',
      'सफेद स्क्रीन यूट्यूब',
      'सफेद स्क्रीन ऑनलाइन',
      'सफेद स्क्रीन डाउनलोड',
      'सफेद स्क्रीन बैकग्राउंड',
      'सफेद स्क्रीन इमेज'
    ],
    ja: [
      '白い画面 壁紙',
      '白い画面 ライト',
      '白い画面 Windows',
      '白い画面 テスト',
      '白い画面 写真',
      '白い画面 youtube',
      '白い画面 オンライン',
      '白い画面 ダウンロード',
      '白い画面 背景',
      '白い画面 画像'
    ]
  };
  return searches[locale] ?? searches.en;
}

export function getBlogKeywordsContent(locale: Locale, toolId: string = 'white-screen'): { heading: string; paragraphs: string[] } {
  if (toolId === 'red-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Red Screen Online Tool & Use Cases',
        paragraphs: [
          'When creators and photographers need a vibrant solid backdrop, they look for a red screen online tool. Using a red fullscreen background is a wonderful way to experiment with color filters and effects in film. Our high-fidelity red screen page runs instantly in any browser without logging in or downloading bundles. It is excellent for generating a unique atmospheric vibe or serving as a dark red screen for nocturnal reading and eye comfort.',
          'For display testing or night vision preservation, having a solid red screen background helps you inspect panel quality. Running a bright red screen makes it convenient to use a red screen to find dead pixels or perform a red subpixel check. If you have an older portable console showing a ds lite red screen boot error, or want to understand what a red screen door effect is, this web utility is perfect for testing display response and checking color replication across the red channel.',
          'Aside from display tests, this utility functions as a brilliant red screen light effect generator. By casting a solid red light online, it serves as a soft color source. Perfect as a TikTok light cast, a night light for video calls, or a red light for selfie shots, it projects an ambient glow. You can also project the canvas as a red screen for projector setups, bringing a sleek, artistic neon light atmosphere to any room or bedroom studio. For game display queries, if you want to know how to get red screen on iPhone or how to make Red Dead Online full screen on PC, you can easily use our fullscreen mode or press Alt + Enter while playing.'
        ]
      },
      es: {
        heading: 'Optimización de Pantalla Roja y Casos de Uso',
        paragraphs: [
          'Cuando los creadores de contenido y fotógrafos necesitan un fondo sólido vibrante, recurren a una herramienta de pantalla roja online. Utilizar una pantalla roja de fondo completo es una excelente forma de experimentar con filtros de color y efectos de iluminación en películas. Nuestra página de pantalla roja online se ejecuta al instante desde el navegador, ideal para crear una atmósfera única o usar una pantalla roja oscura para leer de noche cuidando la vista.',
          'Para mantenimiento, diagnóstico o preservar la visión nocturna, contar con un fondo de pantalla roja ayuda a verificar la calidad del monitor. Cargar un color rojo brillante permite usar la pantalla roja para encontrar píxeles muertos y verificar el subpíxel rojo. Si tienes una consola portátil antigua con error de pantalla roja en DS Lite o quieres saber qué es el efecto de puerta de pantalla roja, este sitio web te ayuda a evaluar la fidelidad de los colores.',
          'Además, esta página sirve como un gran panel de efecto de luz de pantalla roja. Al proyectar una luz roja online, funciona como luz de color rojo ambiental para tus videos de TikTok o videollamadas. Si quieres saber cómo poner la pantalla roja en iPhone con los filtros de color de iOS, o cómo hacer pantalla completa en Red Dead Online en tu ordenador con la tecla Alt + Enter, nuestra guía rápida y controles interactivos te facilitan configurar la pantalla al instante.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Tela Vermelha e Cenários de Uso',
        paragraphs: [
          'Quando criadores de conteúdo e fotógrafos precisam de um fundo sólido vibrante, eles buscam uma tela vermelha online. Utilizar uma tela vermelha de fundo completo é excelente para experimentar filtros de cores e efeitos visuais em produções de vídeo. Nossa página de tela vermelha funciona no navegador sem downloads, ideal para gerar um clima único ou usar uma tela vermelha escura para leitura noturna confortável.',
          'Para manutenção de painéis e preservar a visão noturna nas trevas, a tela vermelha de fundo completo permite avaliar a qualidade do monitor. Uma tela vermelha brilhante ajuda a encontrar pixels mortos na tela ou fazer teste de subpíxel de cor. Se você está enfrentando o erro de tela vermelha no DS Lite ou quer aprender o que significa o efeito de porta de tela vermelha em LCDs antigos, nosso utilitário facilita a conferência de cores.',
          'Além disso, este site funciona como um ótimo gerador de efeito de luz de tela vermelha. Emitindo uma luz vermelha online, você tem uma luz de cor vermelha para vídeos do TikTok, selfies e chamadas. Caso queira saber como deixar a tela vermelha no iPhone usando os filtros de tela do aparelho, ou como colocar o Red dead online em tela cheia no computador apertando Alt + Enter, nosso painel de controle e tela cheia oferecem a solução imediata.'
        ]
      },
      fr: {
        heading: 'Outil Écran Rouge en Ligne & Cas d\'Usage',
        paragraphs: [
          'Lorsque les cinéastes et photographes ont besoin d\'un fond uni de couleur vive, ils recherchent un outil d\'écran rouge en ligne. L\'utilisation d\'un arrière-plan écran rouge plein écran est idéale pour tester des filtres de couleur et des effets artistiques en photo. Notre page d\'écran rouge en ligne se charge instantanément dans tout navigateur, parfaite pour instaurer une ambiance à l\'écran ou lire dans le noir avec un écran rouge sombre confortable.',
          'Pour le diagnostic d\'écran ou préserver sa vision nocturne, posséder un écran rouge de fond offre un excellent moyen d\'évaluer la dalle. Afficher un écran rouge vif permet de chercher des pixels morts ou faire un diagnostic de sous-pixels rouges. Si votre vieille console affiche un écran rouge sur DS Lite ou si vous désirez comprendre l\'effet porte d\'écran rouge des anciennes dalles LCD, cette page permet de tester le rendu du spectre rouge.',
          'Cet outil fait également office de panneau de lumière rouge en ligne. Très utile comme effet d\'éclairage rouge pour vos vidéos TikTok, vos visioconférences ou vos selfies. Pour savoir comment mettre l\'écran rouge sur iPhone via les réglages d\'accessibilité iOS, ou comment passer Red Dead Online en plein écran sur PC à l\'aide du raccourci clavier Alt + Entrée pendant la partie, notre application web et nos guides vous guident instantané.'
        ]
      },
      de: {
        heading: 'Roter Bildschirm Online-Tool & Anwendungen',
        paragraphs: [
          'Wenn Medienschaffende und Fotografen einen kräftigen einfarbigen Hintergrund benötigen, suchen sie nach einem roter Bildschirm Online-Tool. Ein roter Bildschirmhintergrund im Vollbildmodus ist ideal, um mit Farbfiltern und Beleuchtungseffekten beim Filmen zu experimentieren. Unsere rote Bildschirmseite läuft direkt im Browser ohne Anmeldung, perfekt für atmosphärisches Ambient-Licht oder als dunkler roter Bildschirm für augenschonendes Lesen in der Nacht.',
          'Für Display-Tests oder den Erhalt der Nachtsichtfähigkeit hilft ein roter Bildschirm zur Monitorreinigung oder Panelprüfung. Ein leuchtend roter Bildschirm erleichtert das Finden von Pixelfehlern und die Prüfung der roten Subpixel. Falls Sie bei einer älteren Spielekonsole einen DS Lite rote Bildschirm Bootfehler untersuchen möchten oder wissen wollen, was der rote Screen-Door-Effekt ist, bietet diese Anwendung eine sichere Testumgebung.',
          'Zudem lässt sich das Tool als rotes Licht online einsetzen. Es erzeugt eine rote Beleuchtung für TikTok-Videos, Videokonferenzen oder Selfies. Wenn Sie wissen möchten, wie Sie einen roten Bildschirm auf dem iPhone in den iOS-Farbfiltern einrichten oder wie Sie Red Dead Online ins Vollbild bringen am PC mit Alt + Enter, helfen Ihnen unsere einfachen Vollbild-Funktionen und Tipps sofort weiter.'
        ]
      },
      hi: {
        heading: 'लाल स्क्रीन ऑनलाइन टूल और सामान्य उपयोग',
        paragraphs: [
          'जब रचनाकारों और फोटोग्राफरों को एक चमकीले ठोस बैकग्राउंड की आवश्यकता होती है, तो वे लाल स्क्रीन ऑनलाइन टूल का उपयोग करते हैं। फिल्म और फोटोग्राफी में कलर फिल्टर और प्रभाव आजमाने के लिए लाल फुलस्क्रीन बैकग्राउंड एक शानदार विकल्प है। हमारा लाल स्क्रीन पेज बिना किसी शुल्क या डाउनलोड के तुरंत काम करता है, जो रात में रीडिंग के लिए डार्क लाल स्क्रीन और आंखों के आराम के लिए काफी उपयोगी है।',
          'डिस्प्ले परीक्षण या नाइट विजन (रात की दृष्टि) को सुरक्षित रखने के लिए लाल स्क्रीन बैकग्राउंड मददगार होता है। एक चमकीली लाल स्क्रीन चलाने से मॉनिटर की सफाई करने, डेड पिक्सल ढूंढने और लाल सबपिक्सेल की सेहत जांचने में मदद मिलती है। यदि आप डीएस लाइट लाल स्क्रीन एरर का सामना कर रहे हैं या स्क्रीन डोर इफेक्ट को समझना चाहते हैं, तो यह टूल रेड कलर चैनल की जांच करने का एक सुरक्षित विकल्प है।',
          'इसके अलावा, यह टूल एक बेहतरीन लाल लाइट ऑनलाइन स्रोत के रूप में काम करता है। यह टिकटॉक वीडियो, सेल्फी और वीडियो कॉल के लिए एक सॉफ्ट लाल रोशनी (सॉफ्ट रेड लाइट) प्रदान करता है। वहीं, अगर आप जानना चाहते हैं कि आईफोन पर लाल स्क्रीन कैसे लाएं या पीसी पर कीबोर्ड शॉर्टकट Alt + Enter दबाकर रेड डेड ऑनलाइन को फुल स्क्रीन कैसे करें, तो हमारे पास सभी उपयोगी गाइड उपलब्ध हैं।'
        ]
      },
      ja: {
        heading: '赤い画面（Red Screen）のSEO最適化と主な用途',
        paragraphs: [
          '映像制作や写真撮影で鮮やかな単色背景が必要な場合、赤い画面オンラインツールが役立ちます。全画面に赤い背景を表示することで、照明やカラーフィルターの効果を手軽に検証できます。当サイトの赤い画面はブラウザから直接開くことができ、暗い赤色の画面に設定することで、夜間のデジタル読書時の目の負担軽減にも最適です。',
          '液晶ディスプレイの検査や、暗闇での暗順応（ナイトビジョン）保護においても、赤い画面背景は大変重宝されます。明るい赤い画面を使用すれば、ドット抜けチェックや赤色サブピクセルの品質確認が容易に行えます。また、一部ゲーム機で発生するDS Liteの赤い画面エラーの検証や、スクリーンドア効果（格子状のすきま）の確認用としても活用されています。',
          'さらに、本機能はWEB上で使える赤色LEDライトとしても機能します。TikTok撮影の照明、ビデオ通話時のバックライト、自撮りのキャスティングライトとして最適です。iPhoneでアクセシビリティのカラーフィルタ機能を使って画面を永続的に赤く設定する方法や、PC版でAlt + Enterキーを押してレッドデッドオンラインをフルスクリーン切り替えする方法なども、全画面ツールを使って簡単にテスト可能です。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'orange-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Orange Screen Online Tool & Use Cases',
        paragraphs: [
          'When creators, designers, and e-learning instructors need a warm, vibrant solid backdrop, they look for an <strong>orange screen online free</strong> tool. Setting a display to an <strong>orange screen background</strong> is an excellent way to design virtual backdrops for online meetings, webinars, or social gatherings. Running an <strong>orange screen online aesthetic</strong> page casts a cozy <strong>orange screen light</strong> that helps make videos for YouTube and projects a beautiful orange glow during online calls. Parents and educators also use this page as an interactive learning tool, projecting a <strong>total orange screen</strong> or a <strong>full orange screen</strong> to highlight key information or act as an orange screen for kids.',
          'Beyond creative uses, a solid <strong>orange fullscreen background</strong> is a valuable technical utility. Setting a <strong>blank computer screen</strong> to orange is perfect as an <strong>orange screen for cleaning</strong> monitors, making it easy to perform monitor cleaning, find dead pixels, and spot dirty spots on the panel. For graphic designers and video editors, our tool allows you to perform device display calibration with an orange screen, verifying color rendering and fine-tuning device color settings. If you are preparing offline assets, you can configure your viewport layout to download an <strong>orange screen online png</strong> file for your design mockups.',
          'Many people use a warm, full orange display as a calming sleep aid before bedtime. By reducing harsh blue light, a soft <strong>orange screen phone</strong> or <strong>orange screen iphone</strong> background creates a relaxing, sleep-friendly environment for night reading. If you are wondering <strong>why is my screen turning orange</strong>, it is often due to features like <strong>orange screen Windows 10</strong> night light or eye comfort settings, but you can also use our page to manually set a comfortable orange aesthetic. Whether you are using the <strong>orange screen effect</strong> on a screen for projector installations, doing a tracing project (the <strong>orange screen method</strong> to copy an image that a classmate drew), or diagnosing an <strong>orange screen of death</strong> crash on a PC, this webpage is the ultimate tool to get an <strong>orange screen for pc</strong> or an <strong>orange screen for mobile</strong> instantly.'
        ]
      },
      es: {
        heading: 'Herramienta de Pantalla Naranja Online y Casos de Uso',
        paragraphs: [
          'Cuando los creadores, diseñadores e instructores de educación virtual necesitan un fondo sólido cálido y vibrante, buscan una herramienta de <strong>pantalla naranja online gratis</strong>. Tener un <strong>fondo de pantalla naranja</strong> es una forma maravillosa de diseñar fondos virtuales para reuniones en línea, seminarios web o eventos sociales. Usar una <strong>pantalla naranja online aesthetic</strong> proyecta una agradable <strong>luz de pantalla naranja</strong> que mejora los videos de YouTube y añade un brillo cálido durante las llamadas en línea. También sirve como un recurso interactivo para niños, proyectando una <strong>pantalla naranja completa</strong> o una <strong>pantalla naranja total</strong> para resaltar información clave u funcionar como pantalla naranja para niños.',
          'Más allá de los usos creativos, un <strong>fondo de pantalla naranja completo</strong> es una utilidad técnica para mantenimiento. Configurar una <strong>pantalla de ordenador en blanco</strong> (o color plano naranja) es ideal como una <strong>pantalla naranja para limpieza</strong> de monitores, facilitando la limpieza de la pantalla, encontrar píxeles muertos y localizar manchas sucias en el cristal físico. Para diseñadores gráficos y editores de video, esta utilidad permite realizar una calibración de colores con pantalla naranja, verificando la fidelidad del display. Además, puedes descargar una <strong>imagen de pantalla naranja png</strong> para tus maquetas de diseño.',
          'Muchas personas usan esta visualización naranja como ayuda para calmar el sueño antes de dormir. Al reducir la luz azul, una <strong>pantalla naranja en el móvil</strong> (teléfono) o una <strong>pantalla naranja en iPhone</strong> crea un entorno adecuado para lectura nocturna. Si te preguntas <strong>por qué mi pantalla se está poniendo naranja</strong>, puede deberse a la luz nocturna de <strong>pantalla naranja en Windows 10</strong> o configuraciones de comodidad visual, pero también puedes usar nuestra web para configurar este tono. Ya sea que uses la pantalla para proyector, para calcar (el <strong>método de la pantalla naranja</strong> para copiar un dibujo de un compañero de clase) o para inspeccionar un error de <strong>pantalla naranja de la muerte</strong>, esta página es la mejor opción para obtener una <strong>pantalla naranja para pc</strong> o una <strong>pantalla naranja para móvil</strong> al instante o probar el efecto de pantalla naranja.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Tela Laranja Online e Cenários de Uso',
        paragraphs: [
          'Quando criadores, designers e educadores virtuais precisam de um fundo sólido quente e vibrante, eles procuram por uma ferramenta de <strong>tela laranja online grátis</strong>. Exibir um <strong>fundo de tela laranja</strong> completo é excelente para criar planos de fundo virtuais em reuniões virtuais, webinars ou transmissões. Uma <strong>tela laranja online aesthetic</strong> emite uma <strong>luz de tela laranja</strong> relaxante, ideal para gravar vídeos no YouTube e adicionar um brilho caloroso em chamadas de vídeo. Pais e professores também usam a página como apoio interativo, projetando uma <strong>tela laranja completa</strong> ou <strong>tela laranja total</strong> como uma tela laranja para crianças.',
          'Além dos usos decorativos, um <strong>fundo de tela laranja completo</strong> é um recurso técnico indispensável. Definir uma <strong>tela de computador em branco</strong> (ou cor plana laranja) serve como uma <strong>tela laranja para limpeza</strong> do monitor, ajudando a limpar marcas físicas, encontrar pixels mortos na tela e localizar manchas sujas de gordura. Para designers gráficos e editores de imagem, o site permite fazer a calibração de cores com tela laranja, avaliando o painel de forma profissional. Também é possível baixar um arquivo de <strong>tela laranja png</strong> para integrar em projetos gráficos.',
          'Vários usuários aproveitam o brilho laranja como auxílio relaxante para dormir. Reduzindo o excesso de luz azul, a tela do celular (<strong>tela laranja no telefone</strong>) ou <strong>tela laranja no iPhone</strong> cria uma iluminação aconchegante para leitura antes de deitar. Se você está em dúvida sobre <strong>por que minha tela está ficando laranja</strong>, isso se deve frequentemente ao ajuste de <strong>tela laranja no Windows 10</strong>, mas você pode usar nossa ferramenta para definir essa cor manualmente. Seja para usar em telas de projetor, calcar imagens (o <strong>método da tela laranja</strong> para copiar um desenho feito de um colega) ou examinar o erro de <strong>tela laranja da morte</strong>, nosso site fornece uma <strong>tela laranja para pc</strong> ou <strong>tela laranja para celular</strong> com o melhor efeito de tela laranja.'
        ]
      },
      fr: {
        heading: 'Outil Écran Orange en Ligne & Cas d\'Usage',
        paragraphs: [
          'Quand les vidéastes, concepteurs et enseignants en ligne ont besoin d\'un fond uni chaud et vif, ils se tournent vers un outil d\'<strong>écran orange en ligne gratuit</strong>. L\'affichage d\'un <strong>arrière-plan écran orange</strong> plein écran est une superbe façon de concevoir des fonds virtuels pour vos réunions, webinaires ou appels en ligne. Un <strong>écran orange en ligne esthétique</strong> génère une douce <strong>lumière d\'écran orange</strong> idéale pour le tournage de vidéos YouTube ou pour donner un éclat chaleureux pendant des appels vidéo. Les parents l\'utilisent également comme support d\'apprentissage interactif en projetant un <strong>écran orange complet</strong> ou un <strong>écran orange total</strong> pour servir d\'écran orange pour enfants ou élèves.',
          'Au-delà des usages artistiques, un <strong>arrière-plan écran orange plein écran</strong> constitue un excellent outil de maintenance. Transformer un <strong>écran d\'ordinateur vide</strong> en orange est idéal comme <strong>écran orange pour le nettoyage</strong> des écrans, facilitant le nettoyage du moniteur, permettant de trouver des pixels morts et de repérer les taches de saleté sur la dalle. Pour les graphistes, ce portail permet d\'effectuer un calibrage d\'affichage d\'écran avec l\'écran orange afin de valider et ajuster la fidélité des couleurs. De plus, vous pouvez télécharger un fichier <strong>écran orange png</strong> pour vos visuels.',
          'Beaucoup de gens utilisent cet écran orange comme aide au sommeil pour se détendre avant de se coucher. En atténuant la lumière bleue agressive, un téléphone (<strong>écran orange sur téléphone</strong>) ou un <strong>écran orange sur iPhone</strong> crée une ambiance relaxante pour lire au lit. Si vous vous demandez <strong>pourquoi mon écran devient orange</strong>, c\'est bien souvent à cause du mode nuit d\'un <strong>écran orange sous Windows 10</strong>, mais vous pouvez aussi utiliser notre page pour le régler manuellement. Qu\'il s\'agisse de projeter la couleur sur un écran pour projecteur, de calquer des croquis (la <strong>méthode de l\'écran orange</strong> pour copier un dessin fait par un camarade de classe) ou de réparer un crash d\'<strong>écran orange de la mort</strong>, notre site est parfait pour obtenir un <strong>écran orange pour pc</strong> ou un <strong>écran orange pour mobile</strong> avec un effet d\'écran orange optimal.'
        ]
      },
      de: {
        heading: 'Oranger Bildschirm Online-Tool & Anwendungen',
        paragraphs: [
          'Wenn Webdesigner, Streamer und E-Learning-Lehrer einen warmen, kräftigen Hintergrund benötigen, suchen sie nach einem <strong>orangen Bildschirm online und kostenlos</strong>. Ein <strong>oranger bildschirmhintergrund</strong> eignet sich hervorragend, um einen virtuellen Hintergrund für Online-Meetings, Webinare oder Videokonferenzen zu gestalten. Die Nutzung eines <strong>orangen Bildschirms online und ästhetisch</strong> wirft ein gemütliches <strong>oranges Bildschirmlicht</strong>, das YouTube-Videos aufwertet und einen warmen Schein bei Videoanrufen erzeugt. Eltern und Lehrer nutzen diese Seite auch als Lernwerkzeug, indem sie einen <strong>vollständigen orangen Bildschirm</strong> oder einen <strong>ganzen orangen Bildschirm</strong> als orangen Bildschirm für Kinder projizieren.',
          'Neben kreativen Zwecken ist ein <strong>vollflächiger oranger Hintergrund</strong> ein nützliches technisches Hilfsmittel zur Wartung. Einen <strong>leeren Computerbildschirm</strong> auf Orange einzustellen, eignet sich hervorragend als <strong>oranger Bildschirm zur Reinigung</strong> von Monitoren. Dies erleichtert das Reinigen des Glases, hilft dabei, Pixelfehler zu finden und Schmutzflecken auf dem Panel zu lokalisieren. Grafikdesigner und Bildbearbeiter können mit dem orangen Bildschirm eine Monitorkalibrierung durchführen. Sie können auch ein <strong>oranger bildschirm png</strong>-Bild herunterladen, um es offline in Grafik-Mockups zu verwenden.',
          'Viele Menschen nutzen das warme orangefarbene Licht als beruhigende Schlafhilfe vor dem Zubettgehen. Durch die Reduzierung von blauem Licht schafft ein Handy (<strong>oranger Bildschirm auf Handy</strong>) oder ein <strong>oranger Bildschirm auf dem iPhone</strong> eine entspannte Umgebung zum Lesen im Bett. Wenn Sie sich fragen, <strong>warum wird mein Bildschirm orange</strong>, liegt das meist an Funktionen wie dem <strong>orangen Bildschirm unter Windows 10</strong> (Nachtlicht), aber Sie können unsere Seite auch für manuelles Ambient-Licht nutzen. Ob für Beamer-Projektionen, zum Abpausen (die <strong>Orange-Bildschirm-Methode</strong>, um ein Bild abzuzeichnen, das ein Mitschüler gezeichnet hat) oder zur Überprüfung nach einem <strong>orangen Bildschirm des Todes</strong>, diese Seite bietet Ihnen sofort einen <strong>orangen Bildschirm für PC</strong> oder ein **Handy** mit perfektem orangen Bildschirm-Effekt an.'
        ]
      },
      hi: {
        heading: 'नारंगी स्क्रीन ऑनलाइन टूल और सामान्य उपयोग',
        paragraphs: [
          'जब रचनाकारों, डिजाइनरों और शिक्षकों को एक गर्म और चटक ठोस पृष्ठभूमि की आवश्यकता होती है, तो वे एक <strong>ऑरेंज स्क्रीन ऑनलाइन फ्री</strong> टूल की खोज करते हैं। एक <strong>ऑरेंज स्क्रीन बैकग्राउंड</strong> का उपयोग ऑनलाइन बैठकों, वेबिनार या सोशल मीटिंग के लिए एक प्यारा वर्चुअल बैकग्राउंड डिज़ाइन करने का शानदार माध्यम है। एक <strong>ऑरेंज स्क्रीन ऑनलाइन एस्थेटिक</strong> पेज से निकलने वाली <strong>ऑरेंज स्क्रीन लाइट</strong> यूट्यूब वीडियो में बढ़िया कंट्रास्ट लाती है और ऑनलाइन कॉल के दौरान चेहरे पर सुंदर वार्म ग्लो देती है। माता-पिता और शिक्षक इसे बच्चों के लिए <strong>बच्चों के लिए ऑरेंज स्क्रीन</strong> दृश्य के रूप में या एक शिक्षाप्रद <strong>कुल ऑरेंज स्क्रीन</strong> या <strong>पूरी ऑरेंज स्क्रीन</strong> बनाकर उपयोग करते हैं।',
          'रचनात्मक उपयोगों के साथ-साथ, एक ठोस <strong>ऑरेंज फुलस्क्रीन बैकग्राउंड</strong> रखरखाव के लिए एक मूल्यवान तकनीकी टूल है। अपने <strong>खाली कंप्यूटर स्क्रीन</strong> को ठोस नारंगी रंग पर सेट करना <strong>सफाई के लिए ऑरेंज स्क्रीन</strong> के रूप में एकदम सही है। इससे मॉनिटर की सफाई करना, डेड पिक्सल ढूंढना, और पैनल पर जमा गंदगी के धब्बे खोजना काफी आसान हो जाता है। ग्राफिक्स डिजाइनरों के लिए, यह डिस्प्ले कलर कैलिब्रेशन करने और रंग सटीकता जांचने में मदद करता है। इसके अलावा, आप डिज़ाइन प्रोजेक्ट्स के लिए <strong>ऑरेंज स्क्रीन ऑनलाइन पीएनजी</strong> डाउनलोड का उपयोग भी कर सकते हैं।',
          'बहुत से लोग सोने से पहले एक आरामदायक नींद सहायता के रूप में वार्म ऑरेंज डिस्प्ले प्रज्वलित करना पसंद करते हैं। नीली रोशनी को कम करके, एक <strong>ऑरेंज स्क्रीन फोन</strong> या <strong>ऑरेंज स्क्रीन आईफोन</strong> बैकग्राउंड रात में पढ़ने के लिए एक आरामदायक माहौल बनाता है। यदि आप सोच रहे हैं कि <strong>मेरी स्क्रीन नारंगी क्यों हो रही है</strong>, तो यह अक्सर <strong>ऑरेंज स्क्रीन विंडोज 10</strong> नाइट लाइट सुविधा के कारण होता है, लेकिन आप हमारे पेज से इसे मैन्युअल रूप से सेट कर सकते हैं। चाहे प्रोजेक्टर स्क्रीन पर वार्म वाइब बनानी हो, कोई ड्रॉइंग कॉपी करनी हो (जैसे सहपाठी के चित्र को छापने के लिए <strong>ऑरेंज स्क्रीन मेथड</strong>), या कंप्यूटर के क्रैश होने वाले <strong>ऑरेंज स्क्रीन ऑफ डेथ</strong> एरर की जांच करनी हो, यह पेज पीसी और मोबाइल के लिए झटपट ऑरेंज लुक पाने का सर्वोत्तम साधन है जिसमें बढ़िया ऑरेंज स्क्रीन इफ़ेक्ट मिलता है।'
        ]
      },
      ja: {
        heading: 'オレンジスクリーン（Orange Screen）のSEO最適化と主な用途',
        paragraphs: [
          'クリエイター、デザイナー、オンライン講師が温かみのある鮮明な単色背景を必要とする際、便利な <strong>オレンジスクリーンオンライン無料</strong> ツールが検索されます。全画面に <strong>オレンジの画面背景</strong> を表示することは、リモート会議やウェビナー、またはソーシャル通話のバーチャル背景として高い効果を発揮します。 <strong>オレンジ画面オンラインエステ</strong> 設定で発光される <strong>オレンジ画面ライト</strong> は、YouTube用の動画制作やオンラインミーティング時にお肌を元気に見せるオレンジ色のグロウ照明として役立ちます。また、教育用の視覚教材や <strong>子供用オレンジ画面</strong> としても、 <strong>全画面オレンジ</strong> または <strong>総オレンジ画面</strong> を投影してキー情報を目立たせることができます。',
          'クリエイティブな用途に加え、均一な <strong>オレンジ全画面背景</strong> はメンテナンス時の技術的なユーティリティとしても優れています。 <strong>空白のPC画面</strong> をオレンジ色に点灯させることは、ディスプレイの <strong>掃除用オレンジ画面</strong> として最適で、モニター掃除、ドット抜けチェック、液晶ガラス面に固着した汚れや埃の発見が容易に行えます。グラフィックデザイナーや動画編集者にとっては、このオレンジの画面を使ったカラーキャリブレーションでパネルの色表現をテスト・微調整するのに適しています。また、オフラインのデザインモックアップ用に <strong>オレンジ画面オンラインpng</strong> 画像をエクスポートすることも可能です。',
          '多くのユーザーが、就寝前のリラックスしたひとときにウォームオレンジ画面を睡眠補助ライトとして活用しています。刺激の強いブルーライトを和らげることで、スマホの <strong>オレンジ画面スマホ</strong> あるいは <strong>オレンジの画面iPhone</strong> ビジュアルは、ベッドでの夜間読書に快適な睡眠環境を整えます。もし自分のパソコンやスマホの <strong>画面がオレンジ色になるのはなぜ</strong> と疑問に感じたら、それは多くの場合 <strong>オレンジの画面Windows 10</strong> の夜間モード設定によるものですが、当サイトを使用して手動で心地よいオレンジの雰囲気を設定することも可能です。プロジェクター用スクリーンで温かいムードを作ったり、イラストをすかし写しするトレース方法（クラスメートの描いたイラストをコピーする <strong>オレンジ画面トレース方法</strong>）、PCのエラーである <strong>オレンジ画面の死（オレンジスクリーンオブデス）</strong> を検証する際など、当サイトはPCやスマホで瞬時にオレンジ画面を取得するための最もシンプルなウェブユーティリティであり、魅力的なオレンジ画面効果をもたらします。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'blue-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Blue Screen Online Tool & Use Cases',
        paragraphs: [
          'When creators and professionals need a vibrant solid backdrop, they look for a <strong>blue screen online</strong> tool. Using a <strong>blue fullscreen background</strong> is a wonderful alternative to green screens for compiling YouTube videos, or acting as a clear visual aid in presentations to make text jump out. Our high-fidelity <strong>blue screen online</strong> page runs instantly in any browser without logging in or downloading bundles. It is excellent for generating a unique atmospheric vibe or even serving as a <strong>blue screen for kids</strong> with educational canvas projections.',
          'For display testing, having a solid <strong>blue screen for cleaning</strong> helps you inspect panel quality. Running a <strong>blue screen for monitor cleaning</strong> makes it convenient to use a <strong>blue screen to find dead pixels</strong> and a <strong>blue screen to find dirty spots</strong> on your display. If you are a developer testing crash routines, instead of running a crash-inducing <strong>sysinternals blue screen tool</strong> (like NotMyFault) that risks corrupting files, you can use our safe <strong>fake blue screen online</strong> simulator to display a harmless blue field on your laptop or secondary monitors.',
          'Aside from display tests, this utility functions as a brilliant <strong>blue screen light effect</strong> panel. By casting a solid <strong>blue light online</strong>, it serves as a soft <strong>blue color light</strong> source. Perfect as a <strong>blue light for video calls</strong>, a <strong>blue light for selfie</strong> shots, or simulating <strong>blue led lights online</strong>, it projects a cool LED glow on your face. You can also project the canvas as a <strong>blue screen for projector</strong> setups, bringing a sleek, artistic neon light atmosphere to any room or bedroom studio.'
        ]
      },
      es: {
        heading: 'Optimización de Pantalla Azul y Casos de Uso',
        paragraphs: [
          'Cuando los creadores de contenido y profesionales necesitan un fondo sólido vibrante, recurren a una herramienta de <strong>pantalla azul online</strong>. Utilizar un <strong>fondo de pantalla azul completo</strong> es una excelente alternativa a las pantallas verdes para editar videos de YouTube o servir de ayuda visual en presentaciones profesionales. Nuestra página de <strong>pantalla azul online</strong> se ejecuta al instante sin descargas, ideal para crear una atmósfera relajante, inspirar la creatividad artística o configurar una <strong>pantalla azul para niños</strong> de uso educativo.',
          'Para mantenimiento y diagnóstico, contar con una <strong>pantalla azul para limpieza</strong> te ayuda a verificar la calidad del monitor. Hacer un mantenimiento de <strong>pantalla azul para limpieza de monitores</strong> permite usar una <strong>pantalla azul para encontrar píxeles muertos</strong> y una <strong>pantalla azul para encontrar manchas sucias</strong> en el panel físico. Si necesitas simular un error sin forzar la herramienta de <strong>pantalla azul de sysinternals</strong> (NotMyFault) que podría dañar tus archivos, nuestra utilidad proporciona una simulación inofensiva de <strong>pantalla azul falsa online</strong> perfecta para tus pruebas.',
          'Además, esta página sirve como un gran panel de <strong>efecto de luz de pantalla azul</strong>. Al proyectar una <strong>luz azul online</strong>, funciona como fuente de <strong>luz de color azul</strong> ambiental. Es ideal como <strong>luz azul para videollamadas</strong>, <strong>luz azul para selfies</strong> o para simular un conjunto de <strong>luces led azules online</strong>, proyectando una tonalidad fría en el rostro. También funciona como una <strong>pantalla azul para proyector</strong> en salas de estudio o estudios de fotografía.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Tela Azul e Cenários de Uso',
        paragraphs: [
          'Quando criadores e profissionais precisam de um fundo sólido vibrante, eles buscam uma ferramenta de <strong>tela azul online</strong>. Utilizar um <strong>fundo de tela azul completo</strong> serve como ótima alternativa às telas verdes para produzir vídeos do YouTube ou como apoio visual em apresentações de slides. Nossa página de <strong>tela azul online</strong> funciona em qualquer dispositivo sem precisar baixar arquivos, ajudando a criar uma vibe relaxante no quarto, servir de inspiração artística ou entreter com uma <strong>tela azul para crianças</strong>.',
          'Para manutenção de painéis, a <strong>tela azul para limpeza</strong> permite verificar a integridade física do seu monitor. Utilizar a <strong>tela azul para limpeza de monitor</strong> ajuda a ter uma <strong>tela azul para encontrar pixels mortos</strong> ou travados e uma <strong>tela azul para achar manchas de sujeira</strong>. Caso precise simular erros de código sem utilizar a ferramenta de <strong>tela azul da sysinternals</strong> (como NotMyFault), que induz crashes reais, nosso simulador oferece uma <strong>tela azul falsa online</strong> inofensiva e segura para computadores.',
          'Além disso, o utilitário funciona como um excelente <strong>efeito de luz de tela azul</strong>. Ao emitir uma <strong>luz azul online</strong> contínua, serve como um painel de <strong>luz de cor azul</strong>. É excelente como <strong>luz azul para videochamadas</strong>, <strong>luz azul para selfie</strong> ou para simular <strong>luzes de led azul online</strong>. Você também pode projetar o sinal como uma <strong>tela azul para projetores</strong>, trazendo uma atmosfera neon minimalista a qualquer cômodo de trabalho.'
        ]
      },
      fr: {
        heading: 'Outil Écran Bleu en Ligne & Cas d\'Usage',
        paragraphs: [
          'Lorsque les créateurs et professionnels ont besoin d\'un fond uni coloré, ils recherchent un outil d\'<strong>écran bleu en ligne</strong>. Utiliser un <strong>arrière-plan écran bleu plein écran</strong> constitue une superbe alternative aux écrans verts pour le montage de vidéos YouTube ou comme support visuel dans vos présentations. Notre page d\'<strong>écran bleu en ligne</strong> se charge en un instant sans inscription, idéale pour créer une ambiance sereine, stimuler l\'inspiration artistique ou servir d\'<strong>écran bleu pour enfants</strong> lors d\'activités ludiques.',
          'Pour l\'entretien, disposer d\'un <strong>écran bleu pour le nettoyage</strong> vous permet d\'inspecter l\'état de votre écran. Utiliser un <strong>écran bleu pour le nettoyage de moniteur</strong> facilite la tâche pour utiliser un <strong>écran bleu pour trouver des pixels morts</strong> et un <strong>écran bleu pour repérer des tâches de saleté</strong>. Si vous êtes développeur et désirez simuler un plantage système sans utiliser l\'outil d\'<strong>écran bleu de sysinternals</strong> (NotMyFault) qui crash réellement l\'OS, notre site propose un <strong>faux écran bleu en ligne</strong> inoffensif.',
          'Cet outil fait également office de panneau d\'<strong>effet de lumière d\'écran bleu</strong>. En diffusant une <strong>lumière bleue en ligne</strong>, il agit comme source de <strong>lumière de couleur bleue</strong> douce. C\'est parfait comme <strong>lumière bleue pour visioconférence</strong>, <strong>lumière bleue pour selfie</strong> ou pour simuler des <strong>lumières led bleues en ligne</strong>. Vous pouvez également projeter ce rendu comme <strong>écran bleu pour projecteur</strong>, éclairant votre studio ou chambre d\'un éclat bleuté moderne.'
        ]
      },
      de: {
        heading: 'Blauer Bildschirm Online-Tool & Anwendungen',
        paragraphs: [
          'Wenn Web-Kreative und professionelle Anwender einen einfarbigen Hintergrund benötigen, greifen sie auf ein <strong>blauer Bildschirm Online-Tool</strong> zurück. Ein <strong>vollflächiger blauer bildschirmhintergrund</strong> ist eine hervorragende Alternative zu Greenscreens für YouTube-Videos oder dient als visuelle Hilfe bei Vorträgen. Unser <strong>blauer Bildschirm online</strong> ist werbefrei und läuft ohne Downloads, um eine entspannende Atmosphäre zu schaffen, die Kreativität anzuregen oder einen <strong>blauen Bildschirm für Kinder</strong> als Lernhilfe bereitzustellen.',
          'Zur Inspektion von Displays hilft ein <strong>blauer Bildschirm zur Reinigung</strong>, um die Panel-Qualität zu prüfen. Mit dem Tool für <strong>blauer Bildschirm zur Monitorreinigung</strong> können Sie bequem ein <strong>blauer bildschirm zum pixelfehler finden</strong> und ein <strong>blauer bildschirm zum schmutzflecken aufspüren</strong> nutzen. Wenn Sie Systemfehler simulieren wollen, ohne das absturzauslösende <strong>sysinternals blue screen tool</strong> (NotMyFault) auszuführen, liefert unsere Anwendung eine problemlose <strong>falsche blaue Bildschirm Online-Simulation</strong> für Ihr Notebook oder PC.',
          'Zudem eignet sich die Seite ideal als <strong>blaue Bildschirm-Lichteffekt</strong>-Quelle. Durch die Ausstrahlung von <strong>blaues Licht online</strong> erhalten Sie ein weiches <strong>blaues Farblicht</strong>. Perfekt als <strong>blaues Licht für Videocalls</strong>, <strong>blaues Licht für Selfies</strong> oder um eine <strong>blaue led-beleuchtung online</strong> zu simulieren, wirft das Display ein kühles Licht auf Ihr Gesicht. Sie können es auch als <strong>blauer Bildschirm für projektoren</strong> nutzen und ein modernes Neon-Ambient-Licht zaubern.'
        ]
      },
      hi: {
        heading: 'नीली स्क्रीन ऑनलाइन टूल और सामान्य उपयोग',
        paragraphs: [
          'जब कलाकारों और पेशेवरों को एक जीवंत ठोस पृष्ठभूमि की आवश्यकता होती है, तो वे एक <strong>नीली स्क्रीन ऑनलाइन</strong> टूल की तलाश करते हैं। यूट्यूब वीडियो संपादन के लिए ग्रीन स्क्रीन के विकल्प के रूप में या प्रस्तुति के दौरान टेक्स्ट को उभारने के लिए <strong>नीला फुलस्क्रीन बैकग्राउंड</strong> एक बेहतरीन सहायता है। हमारा <strong>नीली स्क्रीन ऑनलाइन</strong> पेज किसी भी ब्राउज़र में तुरंत चलता है, जो कमरे में एक शांत माहौल बनाने, कलात्मक प्रेरणा जगाने या बच्चों के लिए <strong>बच्चों के लिए नीली स्क्रीन</strong> प्रोजेक्टर के रूप में काम करता है।',
          'डिस्प्ले रखरखाव के लिए, एक <strong>सफाई के लिए नीली स्क्रीन</strong> होने से पैनल की गुणवत्ता की जांच आसान हो जाती है। <strong>मॉनिटर की सफाई के लिए नीली स्क्रीन</strong> का उपयोग करने से स्क्रीन पर <strong>डेड पिक्सल ढूंढने</strong> और <strong>गंदगी के धब्बे खोजने</strong> में मदद मिलती है। यदि आप ओएस त्रुटि का अनुकरण करना चाहते हैं और सिसइंटरनल्स के असली क्रैश करने वाले <strong>sysinternals ब्लू स्क्रीन टूल</strong> (NotMyFault) से बचना चाहते हैं, तो हमारा टूल एक सुरक्षित और हानिरहित <strong>नकली नीली स्क्रीन ऑनलाइन</strong> प्रदान करता है।',
          'इसके अतिरिक्त, यह टूल एक शानदार <strong>ब्लू स्क्रीन लाइट इफेक्ट</strong> के रूप में कार्य करता है। ठोस <strong>ब्लू लाइट ऑनलाइन</strong> डालकर, यह एक शांत <strong>नीला रंग प्रकाश</strong> स्रोत बनाता है। यह <strong>वीडियो कॉल के लिए ब्लू लाइट</strong>, <strong>सेल्फी के लिए ब्लू लाइट</strong> या ऑनलाइन <strong>ब्लू एलईडी लाइट्स सिम्यूलेटर</strong> के रूप में आपके चेहरे पर बढ़िया ग्लो फेंकता है। आप इसे <strong>प्रोजेक्टर के लिए नीली स्क्रीन</strong> के रूप में भी कास्ट कर सकते हैं, जिससे आपके स्टूडियो या कमरे में एक आधुनिक नियॉन लाइट्स का फील आता है।'
        ]
      },
      ja: {
        heading: 'ブルースクリーン（青い画面）のSEO最適化と主な用途',
        paragraphs: [
          'クリエイターやビジネス用途で鮮明な単色背景が必要な場合、便利な<strong>ブルースクリーンオンライン</strong>が重宝されます。編集素材として <strong>ブルー全画面背景</strong>を使用することは、ユーチューブ動画制作でグリーンバックの代わりとして使うのに最適で、スライド講義で視覚的な注目度を高めるのにも効果的です。当サイトの<strong>ブルースクリーンオンライン</strong>はインストール不要で素早く開き、部屋を落ち着いた雰囲気にしたり、絵画の発想を練る空間にしたり、<strong>子供用ブルースクリーン</strong>の投影画面としても活用できます。',
          '液晶の手入れ時には、全面の<strong>掃除用ブルースクリーン</strong>を表示することでパネルの品質を細かく点検できます।। **モニター掃除用ブルースクリーン**を利用することで、パネルに生じた<strong>ドット抜けを発見</strong>したり、<strong>液晶の汚れを発見</strong>することが非常に簡単になります。開発などでエラー画面を検証する際、PCを本当に強制ダウンさせる<strong>sysinternalsブルースクリーンツール</strong> (NotMyFault) を使用する代わりに、当サイトの安全な<strong>偽のブルースクリーンオンライン</strong>シミュレータが役立ちます。',
          'また、このWebツールは高輝度な<strong>青い画面の光効果</strong>用としても評価されています。全面に明るい<strong>ブルーライトオンライン</strong>を表示することで、冷涼感のある<strong>青いカラーライト</strong>を照射できます।। これは<strong>ビデオ通話用ブルーライト</strong>や、自撮りでの<strong>セルフィー用ブルーライト</strong>として利用でき、<strong>青いledライトオンライン</strong>照明のような雰囲気を演出します。さらに<strong>プロジェクター用ブルースクリーン</strong>として壁に投射すれば、部屋にモダンなネオンの輝きをもたらします。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'green-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Green Screen Online Tool & Use Cases',
        paragraphs: [
          'When configuring chroma key environments, video creators and remote workers look for a reliable <strong>green screen online tool</strong>. By using our <strong>full green screen online</strong> utility, you gain a stable, <strong>real green screen free</strong> of watermarks or overlays. It is a seamless <strong>green screen online tool free</strong> of charges or signups, serving as a dynamic <strong>green screen generator</strong> for high-quality video content creation, Photoshop superimpositions, and virtual meetings on Zoom or Teams where a clean <strong>green screen background</strong> is required.',
          'Many users visit a <strong>full green screen free</strong> page to create a soothing visual experience or cast a calming green glow. Running a <strong>green screen backgrounds</strong> page mimics the relaxing frequency of trees and grass, which works beautifully as a silent background to reduce eye strain during computer work pauses. It also serves as a premium <strong>green color light</strong> source, functioning as a <strong>green light online</strong> or <strong>green light for video calls</strong> and a <strong>green light for selfie</strong> shots, generating rich <strong>green screen lighting</strong> on your face.',
          'For display calibration, setting up a <strong>green screen test online</strong> or a <strong>green screen display problem</strong> check helps identify panel defects. When checking a laptop screen, monitor, or home projector, casting a solid green field makes it easy to spot dead pixels, dirty spots, and dark zones. The utility lets you run a detailed <strong>green screen test online</strong> sequence across different devices, from desktop panels to smartphone screens, ensuring absolute color channel uniformity and helping in physical monitor cleaning.',
          'To support offline workflows, our panel lets you initiate <strong>green screen backgrounds free</strong> downloads. Creators can export a <strong>real green screen png</strong> file or configure high-density layouts like <strong>green screen backgrounds 4k</strong> settings. This makes it simple to obtain <strong>free green screen backgrounds no copyright</strong> restrictions for editing, gaming backdrops, or classroom projections. With simple sidebar controls, you can customize your <strong>green fullscreen background</strong> or run a fast <strong>green led lights online</strong> simulation for kids and creators alike.'
        ]
      },
      es: {
        heading: 'Optimización de Pantalla Verde y Casos de Uso',
        paragraphs: [
          'Al configurar entornos de chroma key, los creadores de contenido y profesionales remotos buscan una <strong>herramienta de pantalla verde online</strong> confiable. Al utilizar nuestra utilidad de <strong>pantalla verde completa online</strong>, obtienes un recurso de <strong>pantalla verde real gratis</strong> de marcas de agua o anuncios invasivos. Es una <strong>herramienta de pantalla verde online gratis</strong> e inmediata, ideal como un <strong>generador de pantalla verde</strong> para la creación de videos de calidad profesional, montajes en Photoshop o fondos virtuales en Teams y Zoom donde se requiere un fondo de <strong>pantalla verde</strong> limpio para superponer imágenes.',
          'Muchos usuarios acceden a una <strong>pantalla verde completa gratis</strong> para crear una experiencia visual relajante o proyectar un agradable brillo verde. Configurar una página de <strong>fondos de pantalla verde</strong> imita la frecuencia relajante de árboles y plantas, lo cual es excelente como un fondo estático para reducir la fatiga visual durante las pausas laborales. También funciona como una fuente de <strong>luz verde online</strong> o <strong>luz verde para videollamadas</strong> y <strong>luz verde para selfies</strong>, proyectando una <strong>iluminación de pantalla verde</strong> uniforme en tu rostro en cualquier habitación.',
          'Para calibrar pantallas, realizar una <strong>prueba de pantalla verde online</strong> o una comprobación de <strong>problema en la pantalla verde</strong> te ayuda a revelar defectos de visualización. Al revisar un portátil, monitor externo o proyector, este fondo sólido de color verde facilita la búsqueda de píxeles muertos, manchas sucias o anomalías de color en el panel físico. El sitio permite ejecutar una <strong>prueba de pantalla verde online</strong> interactiva e inspeccionar la uniformidad del color, lo que también ayuda en el mantenimiento y la limpieza del monitor.',
          'Para proyectos fuera de línea, puedes iniciar una <strong>descarga de fondos de pantalla verde gratis</strong> desde el panel. Guarda una <strong>imagen de pantalla verde png</strong> real de alta calidad o plantillas en resolución <strong>fondos de pantalla verde 4k</strong>. Esto te permite obtener <strong>fondos de pantalla verde gratis sin derechos de autor</strong> para edición o fondos de videojuegos personalizados. Con controles laterales sencillos, regula tu <strong>pantalla verde de fondo completo</strong> o simula un panel de luces led verdes en tu dispositivo para uso educativo con niños.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Tela Verde e Cenários de Uso',
        paragraphs: [
          'Ao configurar ambientes chroma key, criadores de vídeo e profissionais remotos buscam uma <strong>ferramenta de tela verde online</strong> confiável. Ao usar nosso recurso de <strong>tela verde completa online</strong>, você garante uma <strong>tela verde real grátis</strong> de marcas d\'água ou banners irritantes. É uma <strong>ferramenta de tela verde online grátis</strong> e rápida de carregar, operando como um <strong>gerador de tela verde</strong> dinâmico para edição avançada de vídeo, sobreposições em Photoshop e reuniões virtuais em que um fundo limpo de <strong>tela verde</strong> é essencial.',
          'Muitas pessoas acessam a <strong>tela verde completa grátis</strong> para obter uma visualização suavizante ou emitir um brilho verde relaxante. Exibir nossa página de <strong>fundos de tela verde</strong> ajuda a simular os tons verdes da floresta e da grama, um visual silencioso para descansar a vista durante pausas no trabalho de computador. A página também funciona como fonte de <strong>luz verde online</strong>, <strong>luz verde para videochamadas</strong> e <strong>luz verde para selfie</strong>, gerando uma <strong>iluminação de tela verde</strong> contínua sobre o rosto.',
          'Para calibração de displays, iniciar um <strong>teste de tela verde online</strong> ou uma inspeção de <strong>problema de exibição na tela verde</strong> ajuda a detectar falhas de pixels. Ao examinar a tela do notebook, monitor ou projetor, a cor verde brilhante ajuda a encontrar pixels mortos, manchas de sujeira no vidro e vazamento de luz. A ferramenta suporta a execução de um <strong>teste de tela verde online</strong> preciso em qualquer dispositivo, otimizando o processo de calibração e limpeza do monitor físico.',
          'Para trabalhos salvos localmente, nosso painel suporta <strong>baixar fundos de tela verde grátis</strong>. Desenvolvedores podem baixar um arquivo <strong>tela verde real png</strong> de alta resolução ou fazer o download em <strong>fundos de tela verde 4k</strong>. Isso facilita conseguir <strong>fundos de tela verde grátis sem direitos autorais</strong> para gameplay, apresentações de professores ou efeitos. Com a barra de ferramentas, controle a <strong>tela de fundo verde completa</strong> ou crie painéis de led educativos.'
        ]
      },
      fr: {
        heading: 'Outil Écran Vert en Ligne & Cas d\'Usage',
        paragraphs: [
          'Pour configurer des environnements avec incrustation chroma key, les créateurs de contenu recherchent un <strong>outil d\'écran vert en ligne</strong> performant. En ouvrant notre utilitaire d\'<strong>écran vert complet en ligne</strong>, vous profitez d\'un <strong>écran vert virtuel gratuit</strong> sans publicité intrusive. C\'est un <strong>outil d\'écran vert en ligne gratuit</strong> et direct, agissant comme un <strong>générateur d\'écran vert</strong> complet pour la production de vidéos, les retouches complexes sous Photoshop, et l\'affichage d\'un <strong>arrière-plan d\'écran vert</strong> neutre lors de réunions Zoom ou Teams.',
          'Nombre d\'internautes affichent un <strong>écran vert complet gratuit</strong> pour instaurer une ambiance apaisante ou projeter un halo lumineux vert. Notre page d\'<strong>arrière-plans d\'écran vert</strong> imite les fréquences végétales de la nature pour réduire la fatigue oculaire lors des pauses de travail. C\'est également une excellente source de <strong>lumière verte en ligne</strong>, de <strong>lumière verte pour réunions</strong> ou de <strong>lumière verte pour selfie</strong>, diffusant un <strong>éclairage d\'écran vert</strong> homogène pour vos tournages ou diffusions en direct.',
          'Pour la calibration d\'affichages, effectuer un <strong>test d\'écran vert en ligne</strong> ou cibler un <strong>problème d\'affichage d\'écran vert</strong> permet de détecter les anomalies de dalle. Que ce soit sur un écran de pc portable, un écran de bureau ou un projecteur, le vert solide met immédiatement en valeur les pixels défectueux ou la poussière. Lancez un <strong>test d\'écran vert en ligne</strong> pour vérifier la colorimétrie et faciliter le nettoyage de vos moniteurs.',
          'Pour vos besoins graphiques, notre application permet de lancer le <strong>téléchargement d\'arrière-plans d\'écran vert gratuits</strong>. Enregistrez une image d\'<strong>écran vert réel png</strong> haute définition ou configurez des formats d\'<strong>arrière-plans d\'écran vert 4k</strong>. Vous disposez ainsi d\'<strong>arrière-plans d\'écran vert gratuits sans droits d\'auteur</strong> pour la vidéo, le streaming de jeux ou des présentations scolaires. Utilisez nos contrôles d\'<strong>écran vert de fond plein écran</strong> pour animer l\'espace.'
        ]
      },
      de: {
        heading: 'Grüner Bildschirm Online-Tool & Anwendungen',
        paragraphs: [
          'Für die Erstellung von Chroma-Key-Effekten benötigen Videoproduzenten ein verlässliches <strong>grünes Bildschirm Online-Tool</strong>. Durch unsere <strong>grüner Bildschirm vollbild online</strong>-Anwendung erhalten Sie einen <strong>echten grünen Bildschirm kostenlos</strong> und ohne störende Werbebanner. Es handelt sich um ein <strong>grüner bildschirm online-tool kostenlos</strong>, das als <strong>Grünschirm-Generator</strong> arbeitet, um professionelle Videos, Fotobearbeitungen in Photoshop und virtuelle Meetings zu unterstützen, die einen sauberen <strong>Grünschirm-Hintergrund</strong> voraussetzen.',
          'Viele Besucher rufen einen <strong>vollständigen grünen Bildschirm kostenlos</strong> auf, um eine beruhigende Atmosphäre zu schaffen oder ein angenehmes grünes Leuchten zu erzeugen. Die Seite für <strong>Grünschirm-Hintergründe</strong> ahmt die erholsame Wirkung von Wald und Wiesen nach, um die Augen in Arbeitspausen am PC zu entspannen. Sie eignet sich zudem als Quelle für ein <strong>grünes Licht online</strong> bzw. <strong>grünes Licht für Videocalls</strong> und <strong>grünes Licht für Selfies</strong>, das eine weiche <strong>grüne Bildschirm-Beleuchtung</strong> liefert.',
          'Für Monitorkalibrierungen hilft ein <strong>grüner bildschirm test online</strong> oder eine Prüfung auf <strong>anzeigeprobleme bei grünem bildschirm</strong>, Panel-Fehler aufzubecken. Auf Laptops, Fernsehern oder Projektoren macht das solide Grün Pixelfehler, Staubreste und Farbverzerrungen sofort sichtbar. Testen Sie das Panel mit unserer interaktiven <strong>grüner bildschirm test online</strong>-Sequenz auf Reinheit, um das Display gründlich zu reinigen.',
          'Für Offline-Projekte ermöglicht unsere Steuerung den einfachen <strong>kostenlosen download grüner bildschirmhintergründe</strong>. Sie können ein <strong>echtes grüner bildschirm png</strong>-Bild speichern oder hochauflösende <strong>grüne bildschirmhintergründe 4k</strong>-Daten generieren. Damit erhalten Sie <strong>gratis grüne bildschirmhintergründe ohne urheberrecht</strong> für den Videoschnitt, Livestreams oder Schulprojekte. Gestalten Sie Ihren <strong>vollflächigen grünen hintergrund</strong> passend für Kinder und Kreative.'
        ]
      },
      hi: {
        heading: 'ग्रीन स्क्रीन ऑनलाइन टूल और सामान्य उपयोग',
        paragraphs: [
          'क्रोमा की (chroma key) सेटअप के लिए वीडियो क्रिएटर्स और रिमोट प्रोफेशनल्स एक विश्वसनीय <strong>ग्रीन स्क्रीन ऑनलाइन टूल</strong> खोजते हैं। हमारे <strong>फुल ग्रीन स्क्रीन ऑनलाइन</strong> टूल का उपयोग करके, आपको वॉटरमार्क या विज्ञापनों के बिना एक <strong>वास्तविक ग्रीन स्क्रीन फ्री</strong> में मिलती है। यह एक त्वरित <strong>ग्रीन स्क्रीन ऑनलाइन टूल फ्री</strong> प्रोग्राम है जो फोटोशॉप कंपोजिट, वीडियो कॉल्स और वीडियो एडिटिंग के लिए एक सहज <strong>ग्रीन स्क्रीन बैकग्राउंड</strong> प्रदान करने वाले <strong>ग्रीन स्क्रीन जनरेटर</strong> की तरह काम करता है।',
          'कई उपयोगकर्ता एक सुखद विज़ुअल अनुभव बनाने या हरी चमक फैलाने के लिए <strong>फुल ग्रीन स्क्रीन फ्री</strong> पेज चालू करते हैं। यह <strong>ग्रीन स्क्रीन बैकग्राउंड</strong> प्राकृतिक पत्तों और घास के रंगों की याद दिलाता है, जो कंप्यूटर पर काम के दौरान आँखों के तनाव को कम करने और रिलैक्स करने में मदद करता है। इसके अलावा, यह वीडियो कॉल और सेल्फी के लिए एक सुंदर <strong>ग्रीन लाइट ऑनलाइन</strong>, <strong>वीडियो कॉल के लिए ग्रीन लाइट</strong>, और <strong>सेल्फी के लिए ग्रीन लाइट</strong> का स्रोत बनकर चेहरे पर एक समान <strong>ग्रीन स्क्रीन लाइटिंग</strong> भी प्रदान करता है।',
          'डिस्प्ले विश्लेषण के लिए, <strong>ग्रीन स्क्रीन टेस्ट ऑनलाइन</strong> चलाना या <strong>ग्रीन स्क्रीन डिस्प्ले समस्या</strong> की जांच करना स्क्रीन के दोषों को प्रकट करता है। लैपटॉप, मॉनिटर या प्रोजेक्टर स्क्रीन की जांच करते समय, यह ठोस हरा रंग डेड पिक्सेल, गंदगी की धूल, और बैकलाइट समानताओं को आसानी से दिखा देता है। यह ऐप प्रत्येक डिवाइस पर बेहतर कलर चैनल जांच के लिए <strong>ग्रीन स्क्रीन टेस्ट ऑनलाइन</strong> करना आसान बनाता है ताकि मॉनिटर क्लीनिंग सरलता से की जा सके।',
          'ऑफ़लाइन आवश्यकताओं के लिए, यह पैनल आपको बिना किसी शुल्क के <strong>फ्री ग्रीन स्क्रीन बैकग्राउंड</strong> डाउनलोड करने देता है। आप उच्च गुणवत्ता वाला <strong>वास्तविक ग्रीन स्क्रीन PNG</strong> डाउनलोड कर सकते हैं या <strong>ग्रीन स्क्रीन बैकग्राउंड 4k</strong> रेजोल्यूशन सहेज सकते हैं। इससे आपको संपादन और गेमिंग बैकड्रॉप के लिए <strong>फ्री ग्रीन स्क्रीन बैकग्राउंड नो कॉपीराइट</strong> प्रतिबंधों के साथ मिल जाता है। हमारी नियंत्रण बार के साथ अपनी <strong>ग्रीन फुलस्क्रीन बैकग्राउंड</strong> को प्रबंधित करें या बच्चों के लिए कलर लाइटिंग बनाएं।'
        ]
      },
      ja: {
        heading: 'グリーンスクリーン（緑の画面）のSEO最適化と主な用途',
        paragraphs: [
          'クロマキー合成環境を設定する際、多くの映像制作者が実用的な<strong>グリーンスクリーンオンラインツール</strong>を探します。当サイトの<strong>グリーンバック全画面オンライン</strong>を活用することで、広告や透かし表示等の一切ない<strong>リアルなグリーンスクリーン無料</strong>版を体験できます。登録不要ですぐに使える便利な<strong>グリーンスクリーンオンラインツール無料</strong>ソフトとして、高品質な動画制作、フォトショップでの人物合成、さらにはビデオ会議用のクリーンな<strong>グリーンバック</strong>として機能する<strong>グリーンスクリーンジェネレーター</strong>です。',
          'リラックス効果や, 通話時のグリーンな光量調整を求めて<strong>全画面グリーンスクリーン無料</strong>ページを使用するユーザーも多くいます。エコロジーな<strong>グリーンバック背景</strong>を表示することは、木々や芝生の持つ色彩に近いリラックス感をもたらし、PC作業の休憩中に目のストレスを軽減するのに効果적です。また、自撮り用の<strong>グリーンライトオンライン</strong>や、<strong>ビデオ通話用グリーンライト</strong>、<strong>セルフィー用グリーンライト</strong>としても高輝度な<strong>グリーンスクリーン照明</strong>を提供します。',
          'モニターのドット抜けテストやキャリブレーション等では、<strong>グリーンスクリーンテストオンライン</strong>機能や<strong>グリーンスクリーン表示問題</strong>のチェックが色斑の検知に役立ちます。ノートPC、サブモニター、プロジェクターなどの表示精度を検証する際、均一な緑色を表示することでドット落ちや色むら、ホコリ汚れを目立たせることができます。これにより<strong>グリーンスクリーンテストオンライン</strong>が簡単に行え、モニターの清掃やメンテナンス工程を能率化します。',
          'オフラインでの編集作業用に、サイドツールから<strong>グリーンスクリーン背景無料ダウンロード</strong>を行えます。映像素材に適した透過対応の<strong>グリーンスクリーンpng</strong>データや、高精細な<strong>グリーンスクリーン背景4K</strong>サイズのエクスポートに対応しています。これにより、動画編集、ストリーマーのゲーム背景、教具用プロジェクション等で使える<strong>著作権フリーグリーンスクリーン背景</strong>を速やかに入手できます。自在に<strong>グリーン全画面背景</strong>を調整してお楽しみください。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'black-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Black Screen Optimization & Use Cases',
        paragraphs: [
          'When you need a solid dark background, users search for options like a <strong>black screen wallpaper</strong>, a <strong>black screen download</strong>, or a <strong>full black screen</strong> utility. If you are operating on a <strong>black screen full screen laptop</strong> or using <strong>black screen full screen windows 11</strong> setups, this free utility acts as a <strong>full black screen website</strong> that functions without ads or banners. It is an excellent alternative to running a <strong>black screen full screen YouTube</strong> loop, providing a stable <strong>black screen full screen online windows 11</strong> application.',
          'For display evaluation, this tool offers a comprehensive <strong>black screen test laptop</strong> option and an <strong>OLED black screen test</strong>. You can perform a <strong>black screen AMOLED test</strong>, check for backlight bleeding with a <strong>black screen test phone</strong> routine, or complete a <strong>black screen test iPhone</strong> diagnostics check. Running this test displays a pure <strong>black screen test image</strong> to identify stuck subpixels.',
          'For content creation and hardware workflows, creators often require specific sizes like a <strong>full black screen 1920x1080</strong>, a <strong>1080p black screen full screen</strong> layout, or a mobile-ready <strong>full black screen 9:16</strong> frame. You can use the sidebar options for rapid <strong>black screen full screen download</strong> to capture a <strong>black screen full screen image</strong> or a <strong>black full screen image</strong>. This serves as a <strong>free black screen online no copyright</strong> template, avoiding the need to search for a <strong>free black screen online video</strong> or look up a <strong>free black screen online download</strong> elsewhere, letting you quickly access pure <strong>black</strong>.',
          'People use a black screen for several key reasons. For display QA, a pure #000000 background helps reveal dead pixels and backlight bleed during monitor calibration. On OLED and AMOLED screens, using a dark screen switches off individual pixels, providing effective battery saving. Video editors use black screen backgrounds to check chroma-key margins and colors, while gamers use it to pad screen ratios. It is also perfect for cleaning dust off physical monitors, preventing static logo burn-in on plasma TVs, and creating a minimalist visual environment to concentrate or relax the eyes.'
        ]
      },
      es: {
        heading: 'Optimización de Pantalla Negra y Casos de Uso',
        paragraphs: [
          'Cuando se requiere un fondo oscuro sólido, los usuarios buscan opciones como un <strong>fondo de pantalla negra</strong>, una <strong>descarga de pantalla negra</strong> o un recurso de <strong>pantalla negra completa</strong>. Ya sea que lo use en una <strong>pantalla negra completa para portátil</strong> o en configuraciones de <strong>pantalla negra completa en Windows 11</strong>, esta utilidad gratuita funciona como un sitio de <strong>pantalla negra completa web</strong> limpio. Es una alternativa perfecta a transmitir una reproducción de <strong>pantalla negra completa en YouTube</strong>, actuando como una aplicación de <strong>pantalla negra completa online para Windows 11</strong>.',
          'Para inspección de paneles, esta página proporciona una <strong>prueba de pantalla negra en portátil</strong> y una <strong>prueba de pantalla negra en OLED</strong> dedicada. Permite ejecutar una <strong>prueba de pantalla negra en AMOLED</strong>, comprobar problemas con una <strong>prueba de pantalla negra en teléfono</strong>, o iniciar una <strong>prueba de pantalla negra en iPhone</strong> para identificar fugas de retroiluminación. Al usarla, se obtiene una <strong>imagen de prueba de pantalla negra</strong> pura para documentar fallos.',
          'En producción multimedia, los diseñadores necesitan dimensiones exactas como una <strong>pantalla negra completa de 1920x1080</strong>, un lienzo de <strong>pantalla negra completa de 1080p</strong> o un formato vertical de <strong>pantalla negra completa de 9:16</strong>. Las opciones de la barra permiten una <strong>descarga de pantalla negra completa</strong> instantánea para guardar una <strong>imagen de pantalla completa negra</strong> o una <strong>imagen negra en pantalla completa</strong>. Sirve como plantilla de <strong>pantalla negra online gratis sin derechos de autor</strong>, eliminando la necesidad de buscar un <strong>video de pantalla negra gratis online</strong> o recurrir a una <strong>descarga de video de pantalla negra gratis online</strong> para obtener el color <strong>negro</strong>.',
          'La gente utiliza una pantalla negra para diversos fines prácticos: calibrar monitores y revelar píxeles muertos, ahorrar batería en teléfonos móviles OLED al apagar fuentes de luz innecesarias, editar videos cromáticos como fondo neutro, oscurecer monitores secundarios sin apagarlos, reducir el gasto eléctrico y ocultar el brillo de ordenadores activos. También facilita limpiar motas de polvo del cristal físico, evita el quemado de imagen en pantallas de plasma y ofrece un espacio de minimalismo digital para estudiar o relajar la vista.'
        ]
      },
      pt: {
        heading: 'Cenários de pesquisa para tela preta',
        paragraphs: [
          'Quando as pessoas necessitam de um fundo escuro sólido, procuram termos como <strong>papel de parede tela preta</strong>, <strong>baixar tela preta</strong> ou a ferramenta de <strong>tela preta completa</strong>. Se você estiver operando em um <strong>notebook com tela preta cheia</strong> ou configurando uma <strong>tela preta cheia no Windows 11</strong>, esta página serve de <strong>site de tela preta completa</strong> limpo e imediato, superando a reprodução de uma <strong>tela preta cheia no YouTube</strong> e oferecendo uma <strong>tela preta completa online no Windows 11</strong> estável.',
          'Para testes de visor, este site oferece uma <strong>tela preta de teste para notebook</strong> e um <strong>teste de tela preta OLED</strong> de alta precisão. Você pode rodar um <strong>teste de tela preta AMOLED</strong>, verificar vazamento de luz com um <strong>teste de tela preta para celular</strong>, ou fazer um diagnóstico com um <strong>teste de tela preta para iPhone</strong>. O teste gera uma <strong>imagem de teste de tela preta</strong> ideal para capturar subpixels travados.',
          'Para fluxos de trabalho de vídeo e imagem, criadores buscam resoluções como <strong>tela preta completa 1920x1080</strong>, <strong>tela preta cheia em 1080p</strong> ou o enquadramento <strong>tela preta completa 9:16</strong> para dispositivos portáteis. O painel inclui a opção de <strong>baixar tela preta completa</strong> para arquivar localmente uma <strong>imagem de tela preta completa</strong> ou uma <strong>imagem preta em tela cheia</strong>. Esta ferramenta funciona como um modelo de <strong>tela preta online grátis sem direitos autorais</strong>, sem precisar procurar por um <strong>vídeo de tela preta grátis online</strong> ou <strong>baixar vídeo de tela preta grátis online</strong> para conseguir um fundo <strong>preto</strong>.',
          'As principais aplicações da tela preta incluem a detecção de pixels travados e backlight bleed na calibragem de monitores, economia de bateria em telas AMOLED desligando pixels inativos, revisão de chroma key de filmagens para editores de vídeo, e escurecimento de TVs ou monitores extras enquanto funcionam à noite. Além disso, expõe manchas de sujeira facilitando a limpeza física da tela, previne burn-in estático em TVs de plasma e apoia o foco visual para relaxar os olhos ou estudar.'
        ]
      },
      fr: {
        heading: "Usages et scénarios de recherche de l'écran noir",
        paragraphs: [
          'Pour obtenir un arrière-plan sombre, les utilisateurs recherchent un <strong>fond d\'écran noir</strong>, un <strong>téléchargement d\'écran noir</strong> ou un <strong>écran noir complet</strong>. Que vous travailliez sur un <strong>ordinateur portable avec écran noir complet</strong> ou une configuration sous <strong>écran noir complet Windows 11</strong>, ce site propose un <strong>site Web d\'écran noir complet</strong> immédiat. C\'est une excellente alternative à une boucle d\'<strong>écran noir complet sur YouTube</strong>, fonctionnant comme une application d\'<strong>écran noir complet en ligne pour Windows 11</strong>.',
          'Pour évaluer des panneaux d\'affichage, notre outil intègre un <strong>test d\'écran noir pour ordinateur portable</strong> et un <strong>test d\'écran noir OLED</strong>. Vous pouvez facilement lancer un <strong>test d\'écran noir AMOLED</strong>, déceler les fuites de rétroéclairage avec un <strong>test d\'écran noir pour téléphone</strong>, ou réaliser un diagnostic précis avec un <strong>test d\'écran noir pour iPhone</strong>. Ce processus génère une <strong>image de test d\'écran noir</strong> de référence pour repérer les anomalies.',
          'Pour la conception vidéo et graphique, les concepteurs exigent des formats comme un <strong>écran noir complet 1920x1080</strong>, une mise en page d\'<strong>écran noir complet 1080p</strong> ou un cadre de <strong>téléchargement écran noir complet 9:16</strong> vertical. Utilisez nos commandes latérales pour effectuer un <strong>téléchargement d\'écran noir complet</strong> afin d\'enregistrer une <strong>image d\'écran noir complet</strong> ou une <strong>image noire plein écran</strong>. Le service fait office de gabarit d\'<strong>écran noir en ligne gratuit sans droit d\'auteur</strong>, évitant d\'avoir à rechercher une <strong>vidéo d\'écran noir gratuit en ligne</strong> ou de chercher à <strong>télécharger une vidéo d\'écran noir gratuit en ligne</strong> pour obtenir du <strong>noir</strong>.',
          'Les utilisateurs exploitent l\'écran noir pour tester l\'uniformité de la dalle, économiser la batterie sur les téléphones mobiles OLED individuels, éditer et détourer des vidéos sur fond neutre, et éteindre visuellement un second moniteur sans couper le PC. De plus, il fait ressortir la poussière pour le nettoyage des écrans physiques, limite les risques de burn-in sur d\'anciens téléviseurs plasma, et favorise la concentration sous un environnement minimaliste.'
        ]
      },
      de: {
        heading: 'Schwarzer Bildschirm Optimierung & Einsatzzwecke',
        paragraphs: [
          'Wenn Sie ein solides dunkles Hintergrundbild benötigen, eignen sich Suchphrasen wie <strong>schwarzer bildschirm hintergrund</strong>, <strong>schwarzer bildschirm download</strong> oder <strong>schwarzer bildschirm vollbild</strong>. Ob auf einem <strong>schwarzer bildschirm vollbild laptop</strong> oder bei der Nutzung von <strong>schwarzer bildschirm vollbild windows 11</strong>, dieses kostenfreie Webtool fungiert als barrierefreie <strong>schwarzer bildschirm vollbild website</strong>. Es stellt eine erstklassige Alternative zu einem <strong>schwarzer bildschirm vollbild youtube</strong>-Video dar und bietet eine stabile <strong>schwarzer bildschirm vollbild online windows 11</strong>-Oberfläche.',
          'Zwecks Panel-Überprüfung enthält dieses Tool Optionen für einen <strong>schwarzer bildschirm test laptop</strong> und einen <strong>OLED schwarzer bildschirm test</strong>. Nutzer können einen <strong>schwarzer bildschirm AMOLED test</strong> starten, die Lichtverteilung mit einem <strong>schwarzer bildschirm test handy</strong> validieren oder einen <strong>schwarzer bildschirm test iPhone</strong> durchführen. Dabei wird ein reines <strong>schwarzer bildschirm test bild</strong> generiert, um fehlerhafte Pixel sichtbar zu machen.',
          'Für die Erstellung von Medieninhalten sind oft Abmessungen wie ein <strong>schwarzer bildschirm vollbild 1920x1080</strong>, eine <strong>1080p schwarzer bildschirm vollbild</strong>-Anzeige oder ein Hochformat-Ausschnitt in <strong>schwarzer bildschirm vollbild 9:16</strong> gefragt. Verwenden Sie die Seitenleiste für einen schnellen <strong>schwarzer bildschirm vollbild download</strong>, um ein <strong>schwarzer bildschirm vollbild bild</strong> oder ein <strong>schwarzes vollbild bild</strong> lokal zu speichern. So erhalten Sie eine Vorlage für einen <strong>freien schwarzer bildschirm online ohne urheberrecht</strong>, statt nach einem <strong>freien schwarzer bildschirm online video</strong> oder einem <strong>freien schwarzer bildschirm online download</strong> suchen zu müssen, um echtes <strong>schwarz</strong> darzustellen.',
          'Zu den beliebtesten Anwendungsbereichen gehören die Monitor-Kalibrierung (Erkennung von Pixelfehlern und Backlight-Bleeding), die Reduzierung des Energieverbrauchs bei OLED-Handys, das Maskieren beim Videoschnitt, das Abdunkeln von Zweitbildschirmen und der Schutz des Bildschirms vor statischem Einbrennen (Burn-In-Schutz bei Plasma-TVs). Zudem werden Staubflecken auf dem Glas beim Reinigen optimal sichtbar, und die dunkle Ästhetik hilft bei Meditation, konzentriertem Lernen oder der Entspannung geplagter Augen.'
        ]
      },
      hi: {
        heading: 'व्हाइट और ब्लैक स्क्रीन अनुकूलन और उपयोग',
        paragraphs: [
          'जब आपको एक ठोस गहरे बैकग्राउंड की आवश्यकता होती है, तो उपयोगकर्ता <strong>ब्लैक स्क्रीन वॉलपेपर</strong>, <strong>ब्लैक स्क्रीन डाउनलोड</strong>, या <strong>फुल ब्लैक स्क्रीन</strong> टूल की खोज करते हैं। चाहे आप <strong>ब्लैक स्क्रीन फुल स्क्रीन लैपटॉप</strong> का उपयोग कर रहे हों या <strong>ब्लैक स्क्रीन फुल स्क्रीन विंडोज़ 11</strong> सेटअप का, यह मुफ़्त यूटिलिटी एक <strong>फुल ब्लैक स्क्रीन वेबसाइट</strong> के रूप में कार्य करती है। यह <strong>ब्लैक स्क्रीन फुल स्क्रीन यूट्यूब</strong> वीडियो चलाने का एक उत्कृष्ट विकल्प है जो एक स्थिर <strong>ब्लैक स्क्रीन फुल स्क्रीन ऑनलाइन विंडोज़ 11</strong> वातावरण देता है।',
          'डिस्प्ले मूल्यांकन के लिए, यह टूल एक व्यापक <strong>ब्लैक स्क्रीन टेस्ट लैपटॉप</strong> विकल्प और विश्वसनीय <strong>ओएलईडी ब्लैक स्क्रीन टेस्ट</strong> प्रदान करता है। आप हमारे माध्यम से <strong>ब्लैक स्क्रीन एमोलेड टेस्ट</strong> कर सकते हैं, <strong>ब्लैक स्क्रीन टेस्ट फोन</strong> से बैकलाइट लीकेज की जांच कर सकते हैं, या <strong>ब्लैक स्क्रीन टेस्ट आईफोन</strong> डायग्नोस्टिक्स चला सकते हैं। यह टेस्ट डिस्प्ले पर एक शुद्ध <strong>ब्लैक स्क्रीन टेस्ट इमेज</strong> प्रस्तुत करता है।',
          'मीडिया संपादन के लिए, डिजाइनरों को अक्सर विशिष्ट आकारों की आवश्यकता होती है जैसे <strong>फुल ब्लैक स्क्रीन 1920x1080</strong>, <strong>1080p ब्लैक स्क्रीन फुल स्क्रीन</strong> लेआउट, या मोबाइल-रेडी <strong>फुल ब्लैक स्क्रीन 9:16</strong> फ्रेम। आप टूलबार से त्वरित <strong>ब्लैक स्क्रीन फुल स्क्रीन डाउनलोड</strong> का उपयोग करके एक <strong>ब्लैक स्क्रीन फुल स्क्रीन इमेज</strong> या एक <strong>ब्लैक फुल स्क्रीन इमेज</strong> प्राप्त कर सकते हैं। यह मुफ़्त <strong>फ्री ब्लैक स्क्रीन ऑनलाइन नो कॉपीराइट</strong> टेम्पलेट है, जिससे आपको <strong>फ्री ब्लैक स्क्रीन ऑनलाइन वीडियो</strong> या <strong>फ्री ब्लैक स्क्रीन ऑनलाइन डाउनलोड</strong> खोजने की आवश्यकता नहीं होगी, और आपको तुरंत गहरा <strong>काला</strong> रंग मिल जाएगा।',
          'लोग ब्लैक स्क्रीन का उपयोग कई कार्यों के लिए करते हैं: मॉनिटर कैलिब्रेशन के दौरान डेड पिक्सेल का परीक्षण, ओएलईडी फोन की स्क्रीन पर पिक्सेल बंद करके बैटरी बचाना, वीडियो संपादन में क्रोमा की का मूल्यांकन करना, बिना बंद किए सेकेंडरी मॉनिटर की चमक धीमा करना और आंखों को तनाव से बचाना। यह मॉनिटर से धूल साफ करने, प्लाज्मा टीवी पर स्क्रीन बर्न-इन को रोकने और विज़ुअल शांति के साथ पढ़ाई पर ध्यान केंद्रित करने में भी मदद करता है।'
        ]
      },
      ja: {
        heading: '黒い画面（Black Screen）のSEO最適化と主な用途',
        paragraphs: [
          '真っ暗な背景が必要な場合、ユーザーは <strong>黒い画面 壁紙</strong> や、<strong>黒い画面 ダウンロード</strong>、あるいは <strong>全画面 黒い画面</strong> といった用語を検索します。持ち運び用PCの <strong>黒い画面 全画面 ノートパソコン</strong> や、デスクトップの <strong>黒い画面 全画面 windows 11</strong> で作業をする場合、当ツールは完全に広告のない <strong>全画面 黒い画面 ウェブサイト</strong> として動作します。時間のかかる <strong>黒い画面 全画面 youtube</strong> 動画を再生するより簡単で、安定した <strong>黒い画面 全画面 オンライン windows 11</strong> ツールとして日常的に使えます。',
          '画面パネルのチェックにおいては、本ツールは詳細な <strong>黒い画面 テスト ノートパソコン</strong> や、定番の <strong>OLED 黒い画面 テスト</strong> 用途に最適です。画面の検査項目である <strong>黒い画面 AMOLED テスト</strong> や、モバイルディスプレイ向けの <strong>黒い画面 テスト スマホ</strong>、また <strong>黒い画面 テスト iPhone</strong> などを実行できます。このテストを実行すると、純粋な <strong>黒い画面 テスト 画像</strong> が出力され、初期確認などのドット抜け検知に役立ちます。',
          'メディア制作の現場では、映像クリエイターが <strong>全画面 黒い画面 1920x1080</strong> や、動画比率の <strong>1080p 黒い画面 全画面</strong>、スマホ向きの <strong>全画面 黒い画面 9:16</strong> などのサイズを必要とします。サイドメニューを使えば素早く <strong>黒い画面 全画面 ダウンロード</strong> を実行でき、<strong>黒い画面 全画面 画像</strong> や <strong>黒い全画面 画像</strong> をエクスポートできます。これにより <strong>無料 黒い画面 オンライン 著作権なし</strong> のテンプレート素材として使え、わざわざ <strong>無料 黒い画面 オンライン 動画</strong> を検索したり <strong>無料 黒い画面 オンライン ダウンロード</strong> で探す手間なしに、純粋な <strong>黒</strong> （ブラック）カラーを出力できます。',
          '黒い画面（無表示状態）は多くの目的で活用されます：モニターのキャリブレーションでスタックピクセルやバックライト漏れをチェックする、有機EL（OLED）スマートフォンの消灯ピクセル特性を利用してバッテリーを節約する、動画編集時のクロマキーチェックや合成動画の背景に使用する、パソコン本体を稼働させたまま（ダウンロードやエンコード中など）でサブモニターの輝度のみを暗くする、液晶テレビの焼き付き防止（Burn-in防止）、液晶表面のホコリ除去を楽にするためのクリーニング補助、または目の疲れを癒したり読書時の集中環境を整えるミニマリズム用途など、多岐にわたります。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
    en: {
      heading: 'White Screen Utility Search Scenarios',
      paragraphs: [
        'When looking for screen setups, users frequently seek terms like a <strong>white screen wallpaper</strong>, a <strong>white screen light</strong> panel, or a dedicated <strong>white screen test</strong> utility. Whether you are using this on <strong>white screen Windows</strong> devices or running a <strong>white screen youtube</strong> loop for soft facial illumination, this tool serves as a pure <strong>white screen online</strong> without interruptions.',
        'For offline use and photography prep, click <strong>white screen download</strong> to save different device layouts. This allows you to generate a <strong>white screen background</strong> or stage the device as a <strong>white screen photo</strong> fill light. You can easily export the canvas to produce a high-luminance <strong>white screen image</strong> directly from the tool panel.'
      ]
    },
    es: {
      heading: 'Escenarios de búsqueda de la pantalla blanca',
      paragraphs: [
        'Para configurar la pantalla, la gente suele buscar términos como un <strong>fondo de pantalla blanca</strong>, un panel de <strong>luz de pantalla blanca</strong> o una herramienta de <strong>prueba de pantalla blanca</strong> específica. Ya sea que lo use en dispositivos con <strong>pantalla blanca Windows</strong> o mediante un bucle de <strong>pantalla blanca youtube</strong> para iluminación de retratos, este sitio web funciona como una <strong>pantalla blanca online</strong> limpia.',
        'Para uso sin conexión y producción fotográfica, use la opción de <strong>descargar pantalla blanca</strong> para guardar diseños de imagen. Esto le permite crear un <strong>fondo blanco pantalla</strong> personalizado o configurar su pantalla como una <strong>foto con pantalla blanca</strong> de relleno. Guarde una <strong>imagen de pantalla blanca</strong> limpia usando la barra de control.'
      ]
    },
    pt: {
      heading: 'Cenários de pesquisa para tela branca',
      paragraphs: [
        'Ao preparar monitores, as pessoas comumente procuram termos como <strong>papel de parede tela branca</strong>, um painel de <strong>luz de tela branca</strong>, ou um utilitário de <strong>teste de tela branca</strong>. Se você estiver configurando em dispositivos com <strong>tela branca Windows</strong> ou reproduzindo um clipe de <strong>tela branca youtube</strong> para iluminação suave, este site serve de <strong>tela branca online</strong> perfeita.',
        'Para fins criativos e off-line, utilize a opção de <strong>baixar tela branca</strong> para salvar layouts. Isso permite que você configure um <strong>fundo branco tela</strong> limpo ou configure seu estúdio para uma <strong>foto com tela branca</strong> de apoio. Exporte a <strong>imagem de tela branca</strong> ideal usando as configurações de corte na barra.'
      ]
    },
    fr: {
      heading: "Usages et scénarios de recherche de l'écran blanc",
      paragraphs: [
        "Pour ajuster un écran, on recherche fréquemment des expressions comme <strong>fond d'écran blanc</strong>, panneau de <strong>lumière écran blanc</strong>, ou outil de <strong>test écran blanc</strong>. Que vous l'affichiez sur des ordinateurs sous <strong>écran blanc Windows</strong> ou que vous lisiez une vidéo <strong>écran blanc youtube</strong> en boucle pour éclairer vos vidéoconférences, notre outil constitue un excellent <strong>écran blanc en ligne</strong>.",
        "Pour des projets de photographie, le bouton <strong>télécharger écran blanc</strong> permet de sauvegarder le rendu. Cela vous aide à générer un <strong>arrière-plan écran blanc</strong> uniforme ou à utiliser la dalle comme <strong>photo écran blanc</strong> éclairante. Récupérez instantanément l'<strong>image écran blanc</strong> de votre choix par les commandes."
      ]
    },
    de: {
      heading: 'Suchbegriffe und Szenarien für weißen Bildschirm',
      paragraphs: [
        'Zur Kalibrierung oder Ausleuchtung suchen Anwender oft nach Begriffen wie <strong>weißer bildschirm hintergrund</strong>, einem <strong>weißer bildschirm licht</strong> oder einem speziellen <strong>weißer bildschirm test</strong>. Unabhängig davon, ob Sie dieses Werkzeug für <strong>weißer bildschirm windows</strong>-Monitore nutzen oder ein <strong>weißer bildschirm youtube</strong>-Video zur Ausleuchtung abspielen, erhalten Sie hier einen idealen <strong>weißer bildschirm online</strong>.',
        'Für Fotografie und Offline-Grafiken können Sie die Option <strong>weißer bildschirm herunterladen</strong> verwenden. So erstellen Sie unkompliziert einen passenden <strong>weißer hintergrund bildschirm</strong> oder nutzen das Display als <strong>weißer bildschirm foto</strong>-Hilfsmittel. Erzeugen und speichern Sie das <strong>weißer bildschirm bild</strong> direkt über die Seitenleiste.'
      ]
    },
    hi: {
      heading: 'सफ़ेद स्क्रीन के लिए सामान्य खोज परिदृश्य',
      paragraphs: [
        'जब उपयोगकर्ता डिस्प्ले सेटअप की खोज करते हैं, तो वे अक्सर <strong>सफेद स्क्रीन वॉलपेपर</strong>, <strong>सफेद स्क्रीन लाइट</strong> स्रोत, या एक समर्पित <strong>सफेद स्क्रीन परीक्षण</strong> टूल खोजते हैं। चाहे आप इसे <strong>सफेद स्क्रीन विंडोज़</strong> सिस्टम पर उपयोग कर रहे हों या प्रकाश के लिए <strong>सफेद स्क्रीन यूट्यूब</strong> वीडियो चला रहे हों, यह टूल बिना किसी रुकावट के एक <strong>सफेद स्क्रीन ऑनलाइन</strong> के रूप में कार्य करता है।',
        'ऑफ़लाइन उपयोग और फोटोग्राफी के लिए, विभिन्न लेआउट सहेजने के लिए <strong>सफेद स्क्रीन डाउनलोड</strong> पर क्लिक करें। यह आपको <strong>सफेद स्क्रीन बैकग्राउंड</strong> तैयार करने या डिस्प्ले को <strong>सफेद स्क्रीन फोटो</strong> फिल लाइट के रूप में उपयोग करने की अनुमति देता है। आप सीधे पैनल से एक शानदार <strong>सफेद स्क्रीन इमेज</strong> निर्यात कर सकते हैं।'
      ]
    },
    ja: {
      heading: '白い画面の検索意図とよくあるキーワード',
      paragraphs: [
        'ディスプレイ設定の確認や照明用途として、多くの人が <strong>白い画面 壁紙</strong> や、ビデオ通話時の <strong>白い画面 ライト</strong>、ドット抜けチェックに使う <strong>白い画面 テスト</strong> などを探します。デスクトップPCの <strong>白い画面 Windows</strong> の検査や、長時間再生 of <strong>白い画面 youtube</strong> 代替用途など、広告等のないクリーンな <strong>白い画面 オンライン</strong> を提供します。',
        '撮影用の背景素材やオフライン環境で使用する場合は、<strong>白い画面 ダウンロード</strong> 機能を利用して画像を保存してください。これにより用途にあわせた <strong>白い画面 背景</strong> を瞬時に設定でき、ポートレート撮影時の <strong>白い画面 写真</strong> 照明機材としても役立ちます。必要な <strong>白い画面 画像</strong> をエクスポートしてご利用ください。'
      ]
    }
  };
  return content[locale] ?? content.en;
}
