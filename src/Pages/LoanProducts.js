import banklogogreen from '../images/banklogogreen.png';
export default function LoanProducts() {

    const loanProductsData = {
  title: "Loan Products",
  products: [
    {
      id: 1,
      type: "Personal Loans",
      description: "Unsecured financing for personal consumption and immediate financial needs",
      details: "Flexible credit solutions designed for individual requirements including medical expenses, education funding, travel, and debt consolidation without collateral requirements.",
      features: ["Quick disbursement", "No collateral needed", "Flexible repayment tenure", "Competitive interest rates"]
    },
    {
      id: 2,
      type: "Business Loans",
      description: "Working capital and term loans for operational or expansion purposes",
      details: "Comprehensive business financing solutions supporting SME growth, inventory management, equipment purchase, and enterprise scaling with customized repayment structures.",
      features: ["Working capital support", "Equipment financing", "Business expansion", "Customized repayment plans"]
    },
    {
      id: 3,
      type: "Home Loans",
      description: "Mortgage financing for property purchase and construction",
      details: "Long-term housing finance solutions for home buyers and builders with attractive interest rates and extended repayment periods.",
      features: ["Property purchase", "Home construction", "Balance transfer", "Top-up loans"]
    },
    {
      id: 4,
      type: "Vehicle Loans",
      description: "Automobile financing for personal and commercial vehicles",
      details: "Specialized vehicle financing options for cars, bikes, and commercial transport with quick approval and minimal documentation.",
      features: ["New car loans", "Used vehicle finance", "Commercial vehicles", "Insurance bundled"]
    }
  ]
};

     return (
        <div>
            <div className='flex flex-col text-white'>
                <img src={banklogogreen} alt="Logo" className="w-20 h-12 my-12 mx-20" />
            </div>
            <div className='text-5xl font-bold ml-20 text-green-950'>{loanProductsData.title}</div>
            <div className='flex flex-row flex-wrap justify-between mt-10'>
    {loanProductsData.products.map((product, index) => (
        <div key={product.id} className={`p-3 w-[50%] ${
            index === 1 || index === 2 
                ? 'bg-yellow-300 text-green-900' 
                : 'bg-green-950 text-white'
        }`}>
            <div className='text-2xl font-bold mb-2'>
                {product.type}
            </div>
            <div className='text-lg font-semibold mb-3'>
                {product.description}
            </div>
            <div className='text-sm mb-4'>
                {product.details}
            </div>
            <ul className='text-sm list-disc list-inside'>
                {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                ))}
            </ul>
        </div>
    ))}
</div>
        </div>
    );
}