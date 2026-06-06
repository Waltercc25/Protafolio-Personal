export function ThemeScript() {
  const script = `
    (function () {
      try {
        var theme = localStorage.getItem('portfolio-theme');
        document.documentElement.setAttribute(
          'data-theme',
          theme === 'light' || theme === 'dark' ? theme : 'dark'
        );
        var locale = localStorage.getItem('portfolio-locale');
        document.documentElement.lang =
          locale === 'en' || locale === 'es' ? locale : 'es';
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
