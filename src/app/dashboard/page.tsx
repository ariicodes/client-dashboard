import LogInForm from '@/components/LogIn/LogInForm';

export default function Dashboard() {
	return (
		<section className='flex flex-col gap-5 h-dvh w-dvw'>
			<div className='flex flex-col mt-12 p-20 rounded-2xl w-1/2 self-start'>
				<h1 className='uppercase mb-5 font-semibold text-5xl'>Admin Log In</h1>
				<LogInForm />
			</div>
			<h1 className='text-white/50 drop-shadow-lg text-right text-[12rem] uppercase font-black self-end mx-12 leading-[10rem]'>
				Dash
				<br />
				board
			</h1>
		</section>
	);
}
