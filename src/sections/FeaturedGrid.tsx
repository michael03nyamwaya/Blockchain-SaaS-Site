import { CutCornerButton } from "../components/CutCornerButton"
import { TextButton } from "../components/TextButton"

const listItems = [
    'Ensuring transparency and security through cryptographic hashing, blockchain technology',
    "Reduces the risk of fraud and increases trust between parties by enabling secure,",
    "peer-to-peer transactions without the need for intermediaries",
]

export const FeaturedGridSection = () =>{
    return(
        <section className="py-24 overflow-x-clip">
         <div className="container">
            <div className="flex flex-col gap-56">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="col-span-2">
                <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">Emporing the future pof blockchain</h2>
                <p className="mt-8 text-xl text-zinc-400">BlockForge provides a good infrastructure and a secure network for optimization and next generation usability</p>
                <ul className="flex flex-col mt-12 gap-8">
                  {listItems.map(item=>(
                    <li key={item} className="flex items-center gap-3">
                        <div className="inline-flex flex-shrink-0 justify-center items-center outline outline-4 outline-offset-4 outline-fuchsia-500/20 rounded-full">
                            <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                        </div>
                        <span className="text-xl font-bold">{item}</span>
                    </li>
                  ))}  
                </ul>
                <div className="flex gap-8 mt-12">
                    <CutCornerButton>Get Started</CutCornerButton>
                    <TextButton>learn More</TextButton>
                </div>
                </div> 
                <div>
                    <div className="relative inline-flex z-0">
                    <img src="/assets/images/torus-knot.png" alt="torus-knot" 
                    className="size-96 max-w-none"
                    />
                    <img src="/assets/images/hemisphere.png" alt="hemisphere" 
                    className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                    />
                    </div>
                </div>
                </div>
            </div >
            <div className='mt-60'>
            <div className="grid grid-cols-3 gap-8">
                <div className="relative ">
                    <div className="absolute right-0 z-0">
                   <img src="/assets/images/cone.png" alt="cone" className="size-96 max-w-none" />
                   <img src="/assets/images/hemisphere.png" alt="cone" className="absolute rotate-12 top-3/4 -z-10" />
                   </div>
                </div>
            <div className='col-span-2'>
                <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">BlocKForge leads the way</h2>
                <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6 ">
                <p>Blockchain is a decentralized digital ledger that records transactions across many computers in a way that the registered transactions cannot be altered retroactively.</p>
                <p>Blockchain's distributed nature reduces the risk of fraud and increases trust between parties by enabling secure, peer-to-peer transactions without the need for intermediaries</p>
                </div>
                <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>learn More</TextButton>
                </div>
            </div>
            </div>
            </div>
            </div>
        
        </section>
    )
}