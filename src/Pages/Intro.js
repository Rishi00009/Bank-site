import bankLogo from '../images/banklogo.png';

export default function Intro() {
    return (
        <div className="flex min-h-screen bg-[#06332B] text-white">
            <div className="flex flex-row w-full items-center justify-between">
                {/* Left Section - Text */}
                <div className="flex-1 px-20">
                    <div>
                        <img src={bankLogo} alt="Logo" className="w-20 h-12 mb-6" />
                        <h1 className="text-4xl font-semibold mb-6">Introduction</h1>
                        <p className="text-gray-200 leading-relaxed max-w-2xl">
                            Established with a vision to make banking simpler and more inclusive, 
                            our institution has been serving individuals and businesses with trust, 
                            transparency, and technology-driven financial solutions. We are dedicated 
                            to empowering customers by offering safe, reliable, and innovative services 
                            tailored to meet their financial goals.
                        </p>
                    </div>

                    <div className="flex flex-row mt-14 items-start">
                        <div className="flex flex-col justify-start rounded-2xl p-5 min-w-[200px] text-green-900 bg-yellow-300 shadow-md">
                            <p className="text-5xl font-bold">1999</p>
                            <p className="mt-5 text-base leading-relaxed">
                                The year our journey began — with a mission to redefine traditional banking 
                                and build long-term trust with our customers through innovation and integrity.
                            </p>
                        </div>

                        <p className="pl-10 max-w-2xl leading-relaxed text-gray-200">
                            Over the decades, we have grown from a small community bank into a leading 
                            financial institution recognized for excellence in service and customer satisfaction. 
                            Our commitment to digital transformation has allowed us to bring banking closer to people, 
                            ensuring secure transactions, seamless experiences, and financial empowerment for all.
                        </p>
                    </div>
                </div>

                {/* Right Section - Images */}
                <div className="flex flex-col gap-6 pr-20">
                    <div className="w-[300px] h-[200px] rounded-2xl overflow-hidden">
                        <img 
                            src="https://assets.isu.pub/document-structure/230815081326-0f3589ff2c75b1256ac414faabd8ef24/v1/66fac12054d49cc2036585aa9d4df785.jpeg" 
                            alt="Corporate Building" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-[300px] h-[200px] rounded-2xl overflow-hidden">
                        <img 
                            src="https://c.wallhere.com/photos/af/12/paris_france_reflection_building_architecture_nikon_tripod_sigma-603812.jpg!d" 
                            alt="Head Office" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
