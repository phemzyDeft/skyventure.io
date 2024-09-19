/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			textShadow: {
				"2xl": "2px 2px 1px #6F00FF",
				"3xl": "0 0 3px rgba(0, 0, 0, .8), 0 0 5px red",
			},
			boxShadow: {
				"custom-shadow": "0px 0px 16px 0px #9498FF33;",
			},
			colors: {
				"app-purple": "#6F00FF",
			},
			textStrokeWidth: {
				1: "1px",
			},
			textStrokeColor: {
				purple: "#6F00FF",
			},
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(135deg, #6F00FF 0%, #DED4FA 0%, #A9A8FC 0%, #C1BFFD 16%, #F1ECFF 36%, #FFF8F0 76%, #FFEEDD 100%, #FCFCFF 100%)",
				"hero-section": "url('/public/images/background-image.png')",
				"founder-section": "url('/public/images/ellipse-gradient.png')",
				"svlab-section": "url('/public/images/lab.svg')",
				"contact-bg": "url('/public/images/contact-footer-bg.png')",
				"contact-bg-m": "url('/public/images/contact-bg-m.png')",
				"about-bg": "url('/public/images/about-bg.png')",
				"about-section-2-bg": "url('/public/images/section-image.png')",
				"meet-bg": "url('/public/images/meet-bg.svg')",
				"partners-background":
					"url('/public/images/radial-gradient-image.png')",
				"why-choose-us-bg": "url('/public/images/why-choose-us-bg.png')",
				"finance-bg": "url('/public/images/finance-bg.png')",
				"contact-hero-bg": "url('/public/images/contact.png')",
				"card-gradient":
					"linear-gradient(rgba(0, 0, 0, 0),rgba(110, 32, 211, 1),rgba(111, 0, 255, 1))",
				"coming-soon-bg": "url('/public/images/coming-soon-bg.svg')",
				"ai-bg": "url('/public/images/ai-bg.png')",
				"ai-section-2-bg": "url('/public/images/ai-section-2-bg.svg')",
				"marquee-bg": "url('/public/images/marque-bg.svg')",
				"text-gradient":
					"linear-gradient(rgba(111, 0, 255, 1),rgba(145, 148, 252, 1))",

				"bg-ai-1": "url('/public/images/ai-1.png')",
				"bg-ai-2": "url('/public/images/ai-2.png')",
				"bg-ai-3": "url('/public/images/ai-3.png')",
				"bg-ai-4": "url('/public/images/ai-4.png')",
				"bg-ai-5": "url('/public/images/ai-5.png')",
				"bg-ai-6": "url('/public/images/ai-6.png')",
				"bg-ai-7": "url('/public/images/ai-7.png')",
				"bg-ai-8": "url('/public/images/ai-8.png')",

				"bg-web-1": "url('/public/images/web-1.png')",
				"bg-web-2": "url('/public/images/web-2.png')",
				"bg-web-3": "url('/public/images/web-3.png')",
				"bg-web-4": "url('/public/images/web-4.png')",
				"bg-web-5": "url('/public/images/web-5.png')",

				"bg-game-1": "url('/public/images/game-1.png')",
				"bg-game-2": "url('/public/images/game-2.png')",
				"bg-game-3": "url('/public/images/game-3.png')",

				"bg-create-1": "url('/public/images/create-1.png')",
				"bg-create-2": "url('/public/images/create-2.png')",
				"bg-create-3": "url('/public/images/create-3.png')",
				"bg-create-4": "url('/public/images/create-4.png')",

				"bg-lead-1": "url('/public/images/lead-1.png')",

				"bg-soft-1": "url('/public/images/soft-1.png')",
				"bg-soft-2": "url('/public/images/soft-2.png')",
				"bg-soft-3": "url('/public/images/soft-3.png')",
				"bg-soft-4": "url('/public/images/soft-4.png')",
				"bg-soft-5": "url('/public/images/soft-5.png')",

				"bg-strat-1": "url('/public/images/strat-1.png')",
				"bg-strat-2": "url('/public/images/strat-2.png')",
				"bg-strat-3": "url('/public/images/strat-3.png')",
				"bg-strat-4": "url('/public/images/strat-4.png')",
				"bg-strat-6": "url('/public/images/strat-6.png')",
				"bg-strat-7": "url('/public/images/strat-7.png')",
				"bg-strat-8": "url('/public/images/strat-8.png')",
				//rgba(0, 0, 0, 0.5)
				"bg-offer-1": "url('/public/images/section/image2.png')",
				"bg-offer-2": "url('/public/images/section/image3.png')",
				"bg-offer-3": "url('/public/images/section/image1.png')",
				"bg-offer-4": "url('/public/images/offer-4.png')",
				"bg-offer-5": "url('/public/images/offer-5.png')",
				"bg-offer-6": "url('/public/images/offer-6.png')",
				"bg-offer-7": "url('/public/images/offer-7.png')",
				"bg-offer-8": "url('/public/images/offer-8.png')",

				"bg-offer-1-variant": "url('/public/images/offer-1-variant.png')",
				"bg-offer-2-variant": "url('/public/images/offer-2-variant.png')",
				"bg-offer-3-variant": "url('/public/images/offer-3-variant.png')",
				"bg-offer-4-variant": "url('/public/images/offer-4-variant.png')",
				"bg-offer-5-variant": "url('/public/images/offer-5-variant.png')",
				"bg-offer-6-variant": "url('/public/images/offer-6-variant.png')",
				"bg-offer-7-variant": "url('/public/images/offer-7-variant.png')",
				"bg-offer-8-variant": "url('/public/images/offer-8-variant.png')",
			},
			fontSize: {
				"app-14": [
					"14px",
					{
						lineHeight: "30px",
					},
				],
				"app-sm": [
					"15px",
					{
						lineHeight: "24px",
					},
				],
				"app-15": [
					"15px",
					{
						lineHeight: "35px",
					},
				],
				"app-base": [
					"16px",
					{
						lineHeight: "30px",
					},
				],
				"app-xl": [
					"18px",
					{
						lineHeight: "21.94px",
					},
				],
				"app-22": [
					"22px",
					{
						lineHeight: "26.38px",
					},
				],
				"app-25": [
					"25px",
					{
						lineHeight: "28.06px",
					},
				],
				"app-3xl": [
					"30px",
					{
						lineHeight: "50px",
					},
				],
				"app-3xl-2": [
					"30px",
					{
						lineHeight: "44px",
					},
				],
				"app-32": [
					"32px",
					{
						lineHeight: "41px",
					},
				],
				"app-35": [
					"35px",
					{
						lineHeight: "42px",
					},
				],
				"app-36": [
					"36px",
					{
						lineHeight: "42px",
					},
				],
				"app-40": [
					"40px",
					{
						lineHeight: "40px",
					},
				],
				"app-40-48": [
					"40px",
					{
						lineHeight: "48px",
					},
				],
				"app-46": [
					"46px",
					{
						lineHeight: "24px",
					},
				],
				"app-50": [
					"50px",
					{
						lineHeight: "59px",
					},
				],
				"app-64": [
					"64px",
					{
						lineHeight: "67px",
					},
				],
				"app-80": [
					"80px",
					{
						lineHeight: "93px",
					},
				],
				"app-100": [
					"100px",
					{
						lineHeight: "122px",
					},
				],
				"app-126": [
					"126px",
					{
						lineHeight: "156px",
					},
				],
				"app-100-2": [
					"100px",
					{
						lineHeight: "100px",
					},
				],
				"app-100-24": [
					"100px",
					{
						lineHeight: "70px",
					},
				],
				"app-200-n": [
					"200px",
					{
						lineHeight: "0px",
					},
				],
				"app-150-n": [
					"150px",
					{
						lineHeight: "0px",
					},
				],
				"app-100-n": [
					"100px",
					{
						lineHeight: "0px",
					},
				],
				"app-183": [
					"189.34px",
					{
						lineHeight: "331.34px",
					},
				],
			},
		},
	},
	plugins: [require("tailwindcss-textshadow")],
};
