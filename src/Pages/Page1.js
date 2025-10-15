export default function Page1() {
    return (
        <div className="min-w-screen min-h-screen  bg-rose-100 p-10">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center text-gray-600">
                    <img src="../images/bankLogo.png" alt="Logo" className="w-8 h-8 mr-2" />
                    AstraBank <br/>15-10-2025
                </div>
                <p className="text-right">Empowering Every Dream with Smart, Secure Banking.</p>
            </div>
            <div>
                <p className="flex justify-center items-center pt-20 mb-5 m-20 text-5xl font-bold ">At AstraBank, we redefine banking for the digital <br/> generation — where innovation meets trust.
                   From savings to investments, from payments to loans, we’re here to make your financial journey simple, secure, and rewarding.</p>
            
                <p className="flex justify-end items-center mx-20 text-l font-bold">Over 2.5 million customers trust AstraBank to manage, grow, and protect their wealth across India.</p>
            </div>
            
            {/* <p className="flex justify-center items-end fixed bottom-0 left-0 right-0 py-4 bg-black border-t text-white">
                © 2025 AstraBank Ltd. | RBI Licensed | Customer Care: 1800 210 1001 | contact@astrabank.in
            </p> */}
        </div>
    );
}