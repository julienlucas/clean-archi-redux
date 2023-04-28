module.exports = {
  endOfLine: 'lf',
  jsxBracketSameLine: true,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  importOrder: ['^react$', '^(?!^react$|^@/|^[./]).*', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['jsx', 'typescript', 'decorators-legacy'],
};
