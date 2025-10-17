import bankLogo from '../images/banklogo.png';
export default function Overview() {

    const bankingContent = {
  title: "Role of Banks",
  description: "Banks serve as the cornerstone of the modern financial ecosystem, facilitating economic growth and stability through systematic financial intermediation and service delivery.",
  paragraphs: [
    "Financial institutions play a pivotal role in capital formation by channeling savings into productive investments, thereby accelerating economic development and creating sustainable value chains across sectors.",
    "Through robust regulatory frameworks and advanced risk management systems, banks ensure monetary stability while providing secure platforms for domestic and international financial operations."
  ],
  services: [
    "Mobilizing Savings: Aggregating deposits from retail and institutional clients to create lending pools.",
    "Providing Credit: Extending customized financing solutions to businesses, entrepreneurs, and individual consumers.",
    "Facilitating Payments: Operating secure digital and traditional payment gateways for seamless fund transfers.",
    "Financial Advisory: Delivering comprehensive wealth management and strategic investment guidance.",
    "Liquidity Creation: Expanding money supply through responsible credit allocation and fractional reserve banking."
  ]
};

  return (
    <div className="flex flex-row min-h-screen bg-[#06332B] text-white">
                <div className="flex flex-row  ">
                    {/* Left Section - Text */}
                    <div className="flex-1 pl-10 max-w-xl">
                        <div >
                            <img src={bankLogo} alt="Logo" className="w-20 h-12 m-16" />
                            <h1 className="text-5xl font-semibold mb-8 m-20 pt-10  max-w-4xl">{bankingContent.title}</h1>
                            <p className="text-gray-200 leading-relaxed  mx-20">
                                {bankingContent.description}
                            </p>
                        </div>
                        <div className='mx-20 my-10'>
                            {bankingContent.paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-gray-200 leading-relaxed max-w-2xl">
                                    {paragraph}
                                </p>
                            ))}
                        </div>    
                    </div>               
                </div>
                <div className='flex flex-col justify-center ml-20 pl-20'>
                      <div className=''>
                            {bankingContent.services.map((services,index) => 
                            <div key={index} className="text-gray-200 l text-sm max-w-3xl mt-2">
                              <li>
                                <ul>{services}</ul>
                              </li>
                            </div>
                            )}
                       </div>
                            
                  </div>
            </div>
  );
}