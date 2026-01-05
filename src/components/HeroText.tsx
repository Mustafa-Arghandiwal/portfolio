import { TextEffect } from "../../components/motion-primitives/text-effect";
export default function HeroText() {
	return (
		<div className="text-text  font-orbitron font-bold">
			<TextEffect delay={0} speedReveal={0.6} className='text-2xl big-tablet:text-6xl' per='char' as='h2' preset='blur'>Hey &mdash; I am Mustafa</TextEffect>
			<TextEffect delay={1.5} speedReveal={0.6} className='text-lg xs:text-xl big-tablet:text-5xl mt-2 big-tablet:mt-8' per='char' as='h3' preset='blur'>I Build Websites,</TextEffect>
			<TextEffect delay={3} speedReveal={0.6} className='text-lg xs:text-xl big-tablet:text-5xl' per='char' as='h3' preset='blur'>and share what I learn along the way</TextEffect>
		</div>
	);
}
