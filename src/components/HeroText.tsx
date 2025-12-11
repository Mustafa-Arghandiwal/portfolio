import { TextEffect } from '../../components/motion-primitives/text-effect';
export default function() {
	return (


		<div className='text-white font-orbitron font-bold '>
			<TextEffect
				delay={0} speedReveal={0.4}
				className='text-6xl' per='char' as='h2' preset='blur'>Hey &mdash; I am Mustafa</TextEffect>
			<TextEffect
				delay={0} speedReveal={0.6}
				className='text-5xl mt-8' per='char' as='h3' preset='blur'>I Build Websites,</TextEffect>
			<TextEffect
				delay={0} speedReveal={0.6}
				className='text-5xl' per='char' as='h3' preset='blur'>and share what I learn along the way</TextEffect>
		</div>

	)
}
