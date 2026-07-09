import { defaultLocale, localeOrder, locales, type Locale } from './locales';
import { tools, type Tool } from './tools';

export const siteName = 'Free Online Screen';
export const siteUrl = 'https://freeonlinescreen.com';
export const defaultDescription =
  'Free Online Screen is a premium collection of fullscreen color screens, display tests, screen savers, prank screens, and fake update screens.';

export function toolPath(tool: Tool, locale: Locale = defaultLocale) {
  const slug = locale === defaultLocale ? tool.slug : tool.localizedSlugs[locale] ?? tool.slug;
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

export function titleForTool(tool: Tool) {
  return `${tool.name} Online - Fullscreen ${tool.shortName} Tool`;
}

export function descriptionForTool(tool: Tool) {
  return `${tool.summary} Open ${tool.name.toLowerCase()} in fullscreen, adjust brightness, copy color values, and jump to related screen utilities.`;
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

export function toolJsonLd(tool: Tool, path: string) {
  const url = absoluteUrl(path);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: titleForTool(tool),
      url,
      description: descriptionForTool(tool),
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
      mainEntity: {
        '@type': 'SoftwareApplication',
        name: tool.name,
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
        { '@type': 'ListItem', position: 2, name: tool.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: tool.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];
}
