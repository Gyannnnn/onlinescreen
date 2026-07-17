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
