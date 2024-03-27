
export default function NavBar() {
    return(
        <div>
            <div className='flex justify-between px-5 h-vh[10] items-center bg-white opacity-80 mx-20 rounded-full'>
                <div>
                    <p className=' text-black'>Logo</p>
                </div>
                <div className=' text-black flex justify-center space-x-4'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className='text-black rounded-full'>
                    <button>Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}