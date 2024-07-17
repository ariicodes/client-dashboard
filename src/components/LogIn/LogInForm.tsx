const LogInForm = () => {
	return (
		<form className='flex flex-col gap-8'>
			<div className='flex flex-col gap-2'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					className='rounded-md p-2 bg-white/20 border border-white'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					name='password'
					className='rounded-md p-2 bg-white/20 border border-white'
				/>
			</div>
			<button type='submit' className='mt-4 rounded-md py-2 px-4 bg-pink-500 text-pink-950 uppercase font-bold'>
				Log in
			</button>
		</form>
	);
};

export default LogInForm;
