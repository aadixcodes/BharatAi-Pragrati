/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		//   keyframes: {
		// 	'spotlight-1': {
		// 	  '0%, 100%': { transform: 'translate(0, 0)' },
		// 	  '50%': { transform: 'translate(50px, 50px)' },
		// 	},
		// 	'spotlight-2': {
		// 	  '0%, 100%': { transform: 'translate(0, 0)' },
		// 	  '50%': { transform: 'translate(-50px, -50px)' },
		// 	},
		// 	'spotlight-3': {
		// 	  '0%, 100%': { transform: 'translate(0, 0)' },
		// 	  '50%': { transform: 'translate(25px, -25px)' },
		// 	},
		// 	'fade-in': {
		// 	  '0%': { opacity: '0' },
		// 	  '100%': { opacity: '1' },
		// 	},
		// 	'slide-up': {
		// 	  '0%': { transform: 'translateY(20px)', opacity: '0' },
		// 	  '100%': { transform: 'translateY(0)', opacity: '1' },
		// 	},
		// 	'fade-in-up': {
		// 	  '0%': { transform: 'translateY(20px)', opacity: '0' },
		// 	  '100%': { transform: 'translateY(0)', opacity: '1' },
		// 	},
		//   },
		//   animation: {
		// 	'spotlight-1': 'spotlight-1 15s ease-in-out infinite',
		// 	'spotlight-2': 'spotlight-2 18s ease-in-out infinite',
		// 	'spotlight-3': 'spotlight-3 20s ease-in-out infinite',
		// 	'fade-in': 'fade-in 1s ease-out',
		// 	'slide-up': 'slide-up 1s ease-out',
		// 	'fade-in-up': 'fade-in-up 1.2s ease-out',
		//   },
		keyframes: {
			float: {
			  '0%, 100%': { transform: 'translateY(0)' },
			  '50%': { transform: 'translateY(-10px)' },
			},
			'float-delayed': {
			  '0%, 100%': { transform: 'translateY(-10px)' },
			  '50%': { transform: 'translateY(0)' },
			}
		  },
		  animation: {
			'float': 'float 3s ease-in-out infinite',
			'float-delayed': 'float-delayed 3s ease-in-out infinite',
		  }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
