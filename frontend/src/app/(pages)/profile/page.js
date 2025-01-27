'use client';

const RegisterPage = () => {

    return (
        <div className="w-full max-w-sm">
            <div className='mb-4'>
                <h1 className="text-2xl font-bold mb-2">Profile</h1>
                <p className='text-sm'>Profile information</p>
            </div>
            <div>
                <div className='border-b py-2'>
                    <label className='text-xs'>Name</label>
                    <p className='text-md'>Kenan Gündoğan</p>
                </div>
                <div className='border-b py-2'>
                    <label className='text-xs'>Email</label>
                    <p className='text-md'>kenangundogan@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
