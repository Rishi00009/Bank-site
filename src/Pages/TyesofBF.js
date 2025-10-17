import banklogogreen from '../images/banklogogreen.png';
export default function TyesofBF() {
    const financeData = {
  title: "Types of Bank Finance",
  intro: "Banks provide diverse financial solutions tailored to meet varying business and individual requirements across different time horizons and purposes.",
  categories: [
    {
      id: 1,
      type: "Short-Term Finance",
      description: "Working capital loans, overdrafts, cash credit facilities",
      items: [
        { year: "Up to 1 Year", description: "Bridge financing for immediate operational needs and cash flow management" },
        { year: "Flexible Tenure", description: "Revolving credit facilities for seasonal business requirements" }
      ]
    },
    {
      id: 2,
      type: "Medium-Term Finance",
      description: "Equipment financing, vehicle loans, machinery loans",
      items: [
        { year: "1-5 Years", description: "Capital asset acquisition for business expansion and modernization" },
        { year: "3-7 Years", description: "Commercial vehicle and transport infrastructure funding" }
      ]
    },
    {
      id: 3,
      type: "Long-Term Finance",
      description: "Mortgages, project financing, infrastructure loans",
      items: [
        { year: "5-20 Years", description: "Real estate development and property acquisition financing" },
        { year: "10-30 Years", description: "Large-scale infrastructure and industrial project funding" }
      ]
    },
    {
      id: 4,
      type: "Trade Finance",
      description: "Letters of credit, export/import financing, guarantees",
      items: [
        { year: "90-180 Days", description: "International trade settlement and cross-border payment solutions" },
        { year: "Customized", description: "Supply chain financing and receivables discounting services" }
      ]
    }
  ]
};
    return (
        <div className="min-h-screen"> 
            <div className='flex flex-col text-white'>
                <img src={banklogogreen} alt="Logo" className="w-20 h-12 my-10 mx-20" />
            </div>
            <div>
                <p className='text-green-900 text-3xl font-semibold mx-20 m-10 mb-10 max-w-2xl leading-tight'>
                    Types of Bank <br/> Finance
                </p>
            </div>
            <div className='flex flex-row mt-20 mx-20'>
                    {financeData.categories.map((category, index) => (
                        <div key={category.id} className={`p-4 mx-4 rounded-2xl w-80 mb-4 ${
                            index % 2 === 0 
                                ? 'bg-[#DED628] text-black' 
                                : 'bg-green-950 text-white'
                        }`}>
                            <h3 className="text-2xl font-semibold mb-2">{category.type}</h3>
                            <p className="leading-relaxed mb-4 text-sm">{category.description}</p>
                            <ul>
                                {category.items.map(item => (
                                    <li key={item.year} className="leading-relaxed mb-2 text-sm">
                                        <span className="font-semibold text-sm">{item.year}:</span> {item.description}
                                    </li>
                                ))}
                            </ul>
              </div>
    ))}
</div>
        </div>
    );
}