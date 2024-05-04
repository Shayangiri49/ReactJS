import { X, Download } from 'lucide-react';

export const Modal = ({onClose}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className='mt-10 flex flex-col gap-5 text-white'>
                <button onClick={onClose} className='place-self-end'><X size={30} /></button>
                <div className='bg-indigo-600 rounded-xl px-20 py-10 gap-5 flex flex-col justify-center items-center mx-4'>
                    <h1 className='text-3xl font-extrabold'>DOWNLOAD FREE EBOOK</h1>
                    <p className='text-3xl font-bold max-w-md text-center'>Want to Learn How to Crack Web Development Interviews Like a Pro!</p>
                    <form>
                        <input type="email" placeholder='Enter your email' required className='w-full px-4 py-3 text-black border-gray-300 rounded-md' />
                        <button className='flex items-center w-full mt-4 justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black'><Download/> Download eBook</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
