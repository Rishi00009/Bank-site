import Overviewimage from '../images/overviewimage.jpg'
export default function Overview(){

        const aboutContent = [
  {
    id: 1,
    type: "intro",
    title: "Intro Paragraph",
    content: "Founded in 2012, AstraBank has emerged as one of India's fastest-growing digital banks, built on trust, innovation, and transparency. We combine cutting-edge technology with a human-first approach to simplify everyday banking for individuals, entrepreneurs, and enterprises alike."
  },
  {
    id: 2,
    type: "mission",
    title: "Our Mission",
    content: "To deliver seamless, secure, and inclusive financial experiences that empower people to save smarter, spend better, and achieve their goals confidently."
  },
  {
    id: 3,
    type: "vision", 
    title: "Our Vision",
    content: "To become India's most trusted digital-first bank — where every customer, regardless of background, has access to modern, transparent, and sustainable banking solutions."
  }
];

const coreValues = [
  {
    id: 1,
    title: "Integrity",
    description: "We uphold honesty, fairness, and responsibility in every transaction."
  },
  {
    id: 2, 
    title: "Innovation",
    description: "We continuously evolve our products to meet tomorrow's financial needs."
  },
  {
    id: 3,
    title: "Customer-First", 
    description: "Every decision begins and ends with the customer experience."
  },
  {
    id: 4,
    title: "Security",
    description: "We safeguard your data and funds with world-class digital protection."
  },
  {
    id: 5,
    title: "Sustainability",
    description: "We invest in eco-friendly initiatives for a greener, better future."
  }
];

    return(
        <div className="flex min-w-screen min-h-screen flex-row bg-rose-100">
            <div className="flex flex-col justify-center items-center w-[60%] max-w-md p-6 bg-rose-100 bg-opacity-100 rounded-lg shadow-md">
                {aboutContent.map((items)=>
                <div className='flex flex-col m-5' key={items.id}>
                    <h1 className='font-bold'>{items.title}</h1>
                    <p className='text-sm'>{items.content}</p>
                </div>)}
            </div>
                    
            <div>
                  <img src={Overviewimage} alt="OverviewImage" className=" h-screen" />
            </div>

            <div className="flex flex-col justify-center items-center w-[60%] max-w-md p-6 bg-rose-100 bg-opacity-100 rounded-lg shadow-md">
                  {coreValues.map((items)=> 
                  <div className='flex flex-col m-5' key={items.id}>
                    <h1 className='font-bold'>{items.title}</h1>
                    <p className='text-sm'>{items.description}</p>
                  </div>
                  )}
            </div>
        </div>
    )
}