import bankLogo from '../images/banklogo.png';

export default function Intro() {
    return (
        <div className="flex min-h-screen bg-[#06332B] text-white">
            <div className="flex flex-row w-full">
                {/* Left Content */}
                <div className="flex-1">
                    <div>
                        <img src={bankLogo} alt="Logo" className="max-w-15 max-h-10 m-10" />
                        <h1 className='text-4xl ml-10 pl-20 pt-16'>Introduction</h1>
                        <p className='flex justify-start flex-items-center ml-10 pl-20 pt-6 max-w-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus eleifend mi,eu facilisis nibh efficitur nec. Proin non venenatis nunc, ac congue enim.Etiam sed est luctus, dignissim nisl eget, iaculis magna. In hendrerit metus etpurus tempus fringilla. Suspendisse viverra erat sed pharetra vehicula,</p>
                    </div>
                    <div className='flex flex-row mt-14 pt-10'>
                        <div className='flex flex-col justify-start rounded-2xl ml-28 p-5 min-w-l text-green-900 bg-yellow-300'>
                            <p className='text-5xl'>1999</p>
                            <p className='mt-5'>Lorem ipsum dolor isit <br/>amet, consectetur <br/>adipiscing elit.</p>
                        </div>
                        <p className='flex justify-start flex-items-top pl-20 max-w-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus eleifend mi,eu facilisis nibh efficitur nec. Proin non venenatis nunc, ac congue enim.Etiam sed est luctus, dignissim nisl eget, iaculis magna. In hendrerit metus et purus tempus fringilla. Suspendisse viverra erat sed pharetra vehicula.</p>
                        <div className='flex flex-col justify-start rounded-2xl ml-10 p-5 w-[200px] h-[200px]'>
                            <img src="https://assets.isu.pub/document-structure/230815081326-0f3589ff2c75b1256ac414faabd8ef24/v1/66fac12054d49cc2036585aa9d4df785.jpeg" alt="Logo" className="w-full h-full object-cover rounded-xl" />    
                        </div>
                        <div className='flex flex-col justify-start rounded-2xl ml-10 p-5 w-[200px] h-[200px]'>
                            <img src="https://c.wallhere.com/photos/af/12/paris_france_reflection_building_architecture_nikon_tripod_sigma-603812.jpg!d" alt="Logo" className="w-full h-full object-cover rounded-xl" />    
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}