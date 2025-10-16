import bankLogo from '../images/banklogo.png';
import backgroundImage from '../images/backgroundImage.jpg'; // Import your background image

export default function Page1() {
    return (
        <div className="min-w-screen min-h-screen p-10 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center text-gray-600">
                    <img src={bankLogo} alt="Logo" className="w-15 h-10 mr-2" />
                   
                </div>
             
            </div>
            <div>
                <p className="flex pt-20 mb-5 m-20 text-8xl text-yellow-300">BANK <br/>FINANCE</p>
                <p className="flex justify-end items-center mx-20 my-10 text-sm text-white max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus eleifend mi,eu facilisis nibh efficitur nec. Proin non venenatis nunc, ac congue enim.Etiam sed est luctus, dignissim nisl eget, iaculis magna. In hendrerit metus etpurus tempus fringilla. Suspendisse viverra erat sed pharetra vehicula.</p>
            </div>
        </div>
    );
}