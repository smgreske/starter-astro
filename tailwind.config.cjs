/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [],
	theme: {
    fontSize: {
      '14': '.875rem',
      '15': '.9375rem',
      '16': '1rem',
      '18': '1.125rem',
      '20': '1.25rem',
      '24': '1.5rem',
      '32': '2rem',
      '40': '2.5rem',
      '48': '3rem',
      '56': '3.5rem',
      '64': '4rem',
      '72': '4.5rem',
    },
		extend: {
      borderWidth: {
        1: '1px'
      },
      colors: {
        clr: {
          default:'var(--clrDefault)',
          bg:'var(--clrBackground)',
          over: 'rgb(var(--clrOverlay) / .3)',
          hover: 'var(--clrHover)',
          1:'var(--clr1)',
          2:'var(--clr2)',
          3:'var(--clr3)',
          4:'var(--clr4)',
          5:'var(--clr5)',
        }
      },
      fontFamily: {
        'primary': ['var(--fontPrimary)'],
        'secondary': ['var(--fontSecondary)'],
      },
      
      screens: {
        sm: {'max':'650px'},
        md: '650px',
        lg: '1000px',
      },
      spacing: {
        mobile:'var(--marginMobile)',
        tablet:'var(--marginTablet)',
        desktop:'var(--marginDesktop)',
      },
      maxWidth: {
        maxx:'var(--maxWidth)'
      }
    },
	},
}
