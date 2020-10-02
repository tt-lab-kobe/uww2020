module.exports = {
  theme: {
    fontFamily: {
      body: [
        'Noto Sans JP',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'Hiragino Sans',
        'ヒラギノ角ゴシック',
        'メイリオ',
        'Meiryo',
        'YuGothic',
        'Yu Gothic',
        'MS Pゴシック',
        'MS PGothic',
        'sans-serif',
      ],
    },
    textShadow: {
      default: '1px 1px 2px rgba(0, 0, 0, 1)',
    },
  },
  variants: {
    // tailwindcss-typography
    textShadow: ['responsive'],
  },
  plugins: [require('tailwindcss-typography')()],
}
