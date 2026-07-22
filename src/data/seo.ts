import { defaultLocale, localeOrder, locales, type Locale } from './locales';
import { tools, type Tool } from './tools';
import { toolName, toolSummary, toolFaqs } from './translations';

export const siteName = 'Free Online Screen';
export const siteUrl = 'https://freeonlinescreen.com';
export const defaultDescription =
  'Free Online Screen is a premium collection of fullscreen color screens, display tests, screen savers, prank screens, and fake update screens.';

export function toolPath(tool: Tool, locale: Locale = defaultLocale) {
  const slug = locale === defaultLocale ? tool.slug : tool.localizedSlugs[locale as Exclude<Locale, 'en'>] ?? tool.slug;
  const prefix = locales[locale].pathPrefix;
  return `${prefix}/${slug}/`;
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function allToolPaths() {
  return tools.flatMap((tool) => localeOrder.map((locale) => ({ tool, locale, path: toolPath(tool, locale) })));
}

export function alternatesForTool(tool: Tool) {
  return localeOrder.map((locale) => ({
    locale,
    lang: locales[locale].lang,
    href: absoluteUrl(toolPath(tool, locale)),
  }));
}

const customTitles: Partial<Record<string, Partial<Record<Locale, string>>>> = {
  'gradient-screen': {
    en: 'Gradient Screen Online - Fullscreen Color Banding & Calibration Test',
    es: 'Pantalla de Degradado Online - Test de Banding de Color y Calibración',
    pt: 'Tela de Degradê Online - Teste de Color Banding e Calibragem',
    fr: 'Écran Dégradé en Ligne - Test de Banding de Couleur & Calibration',
    de: 'Farbverlauf-Bildschirm Online - Color Banding Test & Kalibrierung',
    hi: 'ग्रेडिएंट स्क्रीन ऑनलाइन - कलर बैंडिंग टेस्ट और मॉनिटर जांच',
    ja: 'グラデーション画面 オンライン - カラーバンディングテスト＆表示色診断',
  },
  'rgb-screen': {
    en: 'RGB Screen Test Online - Fullscreen Subpixel & Color Calibration',
    es: 'Prueba de Pantalla RGB Online - Test de Subpíxeles y Calibración',
    pt: 'Teste de Tela RGB Online - Teste de Subpixels e Calibragem',
    fr: 'Test Écran RGB en Ligne - Étalonnage Sous-Pixels & Couleurs',
    de: 'RGB-Bildschirmtest Online - Subpixel & Farb-Kalibrierung',
    hi: 'आरजीबी स्क्रीन टेस्ट ऑनलाइन - फुलस्क्रीन सब-पिक्सेल और कलर कैलिब्रेशन',
    ja: 'RGB画面テスト オンライン - 全画面サブピクセル＆カラーキャリブレーション',
  },
  'hex-screen': {
    en: 'HEX Screen Test Online - Fullscreen Color Code Preview & Palette Tool',
    es: 'Pantalla HEX Online - Vista Previa de Códigos de Color y Paletas',
    pt: 'Tela HEX Online - Pré-visualização de Códigos de Cor e Paletas',
    fr: 'Écran HEX en Ligne - Aperçu des Codes Couleur & Palette Plein Écran',
    de: 'HEX-Bildschirm Online - Farbcode-Vorschau & Paletten-Tool',
    hi: 'हेक्स स्क्रीन ऑनलाइन - फुलस्क्रीन कलर कोड प्रीव्यू और पैलेट टूल',
    ja: 'HEX画面 オンライン - 全画面カラーコードプレビュー＆パレットツール',
  },
};

const customDescriptions: Partial<Record<string, Partial<Record<Locale, string>>>> = {
  'gradient-screen': {
    en: 'Smooth multi-stop color transitions across the display for color banding tests, display calibration, and ambient backdrops. Open in fullscreen.',
    es: 'Una pantalla de degradado a pantalla completa para pruebas de banding de color, calibración de monitores y fondos creativos. Abrir en pantalla completa.',
    pt: 'Uma tela de degradê em tela cheia para testes de color banding, calibragem de monitor e fundos criativos. Abra em tela cheia.',
    fr: 'Un écran dégradé plein écran pour tester le banding de couleur, calibrer les moniteurs et créer des arrière-plans créatifs. Basculer en plein écran.',
    de: 'Ein Vollbild-Farbverlauf-Bildschirm für Color Banding Tests, Monitor-Kalibrierung und kreative Hintergründe. Im Vollbildmodus öffnen.',
    hi: 'कलर बैंडिंग परीक्षण, मॉनिटर कैलिब्रेशन और एम्बिएंट बैकग्राउंड के लिए एक फुलस्क्रीन ग्रेडिएंट स्क्रीन टूल। फुलस्क्रीन में खोलें।',
    ja: '液晶のカラーバンディング試験、表示色キャリブレーション、動画用背景に最適な全画面グラデーション表示ツール。全画面で開く。',
  },
  'rgb-screen': {
    en: 'Perform an RGB screen test online in full screen. Inspect red, green, and blue subpixels, test for stuck or dead pixels, check monitor color channels, and calibrate displays.',
    es: 'Realiza un test de pantalla RGB online a pantalla completa. Analiza subpíxeles rojos, verdes y azules, detecta píxeles muertos y calibra los colores de tu monitor.',
    pt: 'Faça um teste de tela RGB online em tela cheia. Inspecione subpixels vermelhos, verdes e azuis, encontre pixels mortos e calibre as cores do seu monitor.',
    fr: 'Testez votre écran RGB en ligne en plein écran. Inspectez les sous-pixels rouge, vert et bleu, détectez les pixels morts et étalonnez la couleur de votre moniteur.',
    de: 'Führen Sie einen RGB-Bildschirmtest online im Vollbildmodus durch. Überprüfen Sie Rot-, Grün- und Blau-Subpixel, finden Sie Pixelfehler und kalibrieren Sie Monitore.',
    hi: 'ऑनलाइन फुलस्क्रीन आरजीबी स्क्रीन टेस्ट चलाएं। लाल, हरे और नीले सब-पिक्सेल की जांच करें, खराब पिक्सल खोजें और मॉनिटर रंग चैनलों को कैलिब्रेट करें।',
    ja: 'オンラインで全画面RGB画面テストを実行。赤・緑・青のサブピクセル診断、ドット抜け検出、液晶ディスプレイのカラーキャリブレーションに最適。',
  },
  'hex-screen': {
    en: 'Preview exact CSS HEX color codes in full screen. Test brand colors, compare 4-color palettes, inspect dark mode shades (#121212, #000000), and download 4K wallpapers.',
    es: 'Visualiza códigos de color HEX exactos en pantalla completa. Prueba colores de marca, compara paletas de 4 colores, evalúa tonos de modo oscuro y descarga fondos 4K.',
    pt: 'Visualize códigos de cor HEX exatos em tela cheia. Teste cores de marca, compare paletas de 4 cores, inspecione tons de modo escuro e baixe papéis de parede 4K.',
    fr: 'Affichez des codes couleur HEX exacts en plein écran. Testez vos couleurs de marque, comparez des palettes de 4 couleurs, évaluez les teintes sombres et téléchargez des fonds 4K.',
    de: 'Vorschau exakter CSS-HEX-Farbcodes im Vollbildmodus. Testen Sie Markenfarben, vergleichen Sie 4-Farben-Paletten, prüfen Sie Dunkelmodus-Töne und laden Sie 4K-Wallpaper herunter.',
    hi: 'फुलस्क्रीन में सटीक CSS हेक्स कोड का प्रीव्यू करें। ब्रांड रंग टेस्ट करें, 4-कलर पैलेट की तुलना करें, डार्क मोड रंगों (#121212) की जांच करें और 4K वॉलपेपर डाउनलोड करें।',
    ja: 'CSSのHEXカラーコードを全画面で即座にプレビュー。ブランドカラーの検証、4色パレット比較、ダークモードシェード診断、4K壁紙ダウンロードに対応。',
  },
};

export function titleForTool(tool: Tool, locale: Locale = defaultLocale) {
  if (customTitles[tool.id]?.[locale]) {
    return customTitles[tool.id]![locale]!;
  }
  const tName = toolName(locale, tool);
  return `${tName} Online - Free Fullscreen Tool`;
}

export function descriptionForTool(tool: Tool, locale: Locale = defaultLocale) {
  if (customDescriptions[tool.id]?.[locale]) {
    return customDescriptions[tool.id]![locale]!;
  }
  const tSummary = toolSummary(locale, tool);
  return `${tSummary} Open in fullscreen, adjust brightness, and test your display.`;
}

export function alternatesForHome() {
  return localeOrder.map((locale) => ({
    locale,
    lang: locales[locale].lang,
    href: absoluteUrl(locales[locale].pathPrefix || '/'),
  }));
}

export function landingJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

export function toolJsonLd(tool: Tool, path: string, locale: Locale = defaultLocale) {
  const url = absoluteUrl(path);
  const tName = toolName(locale, tool);
  const baseSchemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: titleForTool(tool, locale),
      url,
      description: descriptionForTool(tool, locale),
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
      mainEntity: {
        '@type': 'SoftwareApplication',
        name: tName,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: tName, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: toolFaqs(locale, tool.id, tool.faqs).map((faq) => ({
        '@type': 'Question',
        name: stripHtml(faq.question),
        acceptedAnswer: {
          '@type': 'Answer',
          text: stripHtml(faq.answer),
        },
      })),
    },
  ];

  if (tool.id === 'rgb-screen') {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Perform an RGB Subpixel & Display Test',
      description: 'A step-by-step guide to testing monitor subpixels, detecting stuck or dead pixels, and calibrating RGB color channels.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Open Fullscreen RGB Tool',
          text: 'Click the Fullscreen button or press "F" to launch full screen mode without browser UI distortion.'
        },
        {
          '@type': 'HowToStep',
          name: 'Inspect Primary RGB Channels',
          text: 'Cycle through Pure Red (#FF0000), Pure Green (#00FF00), and Pure Blue (#0000FF) screens to isolate and test each subpixel channel.'
        },
        {
          '@type': 'HowToStep',
          name: 'Spot Stuck vs. Dead Subpixels',
          text: 'Look closely for permanently illuminated bright dots (stuck subpixels) or dark unlit spots (dead pixels) across the panel.'
        },
        {
          '@type': 'HowToStep',
          name: 'Calibrate Monitor Color Gain',
          text: 'Adjust your monitor Hardware OSD menu for Red, Green, and Blue gains until screen luminance and white points match your desired reference.'
        }
      ]
    });
  }

  if (tool.id === 'hex-screen') {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Preview and Test HEX Color Codes Fullscreen',
      description: 'A step-by-step guide to testing CSS HEX color codes, dark mode shades, and color palettes on real monitor displays.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Enter Your HEX Color Code',
          text: 'Type or paste any 6-digit or 3-digit HEX code (e.g. #0070F3, #121212) into the color input box.'
        },
        {
          '@type': 'HowToStep',
          name: 'Launch Fullscreen View',
          text: 'Click Fullscreen or press "F" to project your exact HEX color across the entire display without browser UI interference.'
        },
        {
          '@type': 'HowToStep',
          name: 'Compare Palettes and Contrast',
          text: 'Select up to 4 HEX color swatches to compare side-by-side split screens or evaluate dark mode contrast.'
        },
        {
          '@type': 'HowToStep',
          name: 'Download HD/4K Wallpapers',
          text: 'Choose your desired screen orientation and download crisp PNG wallpapers rendered directly from your HEX color codes.'
        }
      ]
    });
  }

  return baseSchemas;
}
