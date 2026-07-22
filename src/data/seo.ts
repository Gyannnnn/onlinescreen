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
  return [
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
}
