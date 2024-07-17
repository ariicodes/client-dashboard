'use client';

import LogInForm from '@/components/LogIn/LogInForm';
import { motion } from 'framer-motion';

export default function Dashboard() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
			className='flex flex-col gap-5 h-dvh w-dvw justify-between'
		>
			<div className='flex flex-col xl:mt-12 p-10 xl:p-20 rounded-2xl xl:w-1/2 xl:self-start'>
				<h1 className='uppercase mb-5 font-semibold text-5xl'>Admin Log In</h1>
				<LogInForm />
			</div>
			<h1 className='text-white/50 drop-shadow-lg text-right text-8xl xl:text-[12rem] uppercase font-black xl:self-end mx-8 leading-[5rem] xl:leading-[10rem]'>
				Dash
				<br />
				<span className='text-pink-300/50'>board</span>
			</h1>
		</motion.section>
	);
}
