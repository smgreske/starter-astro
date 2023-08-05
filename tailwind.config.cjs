/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        clr: {
          'n1':'#ffffff',
          'n2':'#cccccc',
          'n3':'#888888',
          'n4':'#444444',
          'n5':'#000000',
          1:'#XXXXX',
          2:'#XXXXX',
          3:'#XXXXX',
          4:'#XXXXX',
          5:'#XXXXX',
          6:'#XXXXX',
          7:'#XXXXX',
          8:'#XXXXX',
          9:'#XXXXX',
        }
      },
      fontFamily: {
        'primary': ['Poppins'],
        'secondary': ['"Space Grotesk"'],
      },
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
      screens: {
        sm : {'max':'650px'},
        md: '650px',
        lg: '1000px',
      },
      spacing: {
        sm:'1rem',
        md:'2rem',
        lg:'4rem',
      },
      maxWidth: {
        maxx:'1110px'
      }
    },
	},
	plugins: [],
}
