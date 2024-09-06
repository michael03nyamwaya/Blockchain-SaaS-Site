import React from 'react';
import { twMerge } from 'tailwind-merge';
import { TextButton } from '../components/TextButton';

const cardData = [
    {
        image: "/assets/images/pill.png",
        title: "Revolutionary Blockchain API",
        description: "Effortlessly build and deploy blockchain applications with our revolutionary APIs",
        color: "fuchsia"
    },
    {
        image: "/assets/images/cuboid.png",
        title: "Advanced AI Solutions",
        description: "Unlock the potential of artificial intelligence with our cutting-edge machine learning algorithms.",
        color: "lime"
    },
    {
        image: "/assets/images/cone.png",
        title: "Seamless Cloud Integration",
        description: "Integrate your applications with our robust cloud services for unparalleled scalability and performance.",
        color: "cyan"
    },
    {
        image: "/assets/images/icosahedron.png",
        title: "Enhanced Security Suite",
        description: "Protect your data with our state-of-the-art security features designed to prevent breaches and ensure privacy.",
        color: "violet"
    }
];

export const FeaturedCardsSection = () => {
    return (
        <section className="py-24 overflow-x-clip md:-mt-28">
            <div className="container">
                <h2 className="font-heading font-black text-4xl mx-auto md:text-5xl lg:text-6xl">
                    Discover the Future of Blockchain with Blockforge
                </h2>
                <div className="mt-36 flex lg:mt-48">
                    <div className='flex flex-none gap-8'>
                    {cardData.map(({ image, title, description, color }) => (
                        <div className="relative z-0 p-8 max-w-xs group md:max-w-md md:p-10" key={title}>
                            <div className={twMerge("absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100"
                                ,color === "lime" && "bg-lime-500"
                                ,color === "cyan" && "bg-cyan-500"
                                ,color === "violet" && "bg-violet-500"
                            )}></div>
                            <div className={twMerge("absolute size-16 rounded-xl bg-bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 top-1.5 right-1.5 -z-10",
                                color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
                                color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
                                color === "violet" && "bg-violet-500 group-hover:bg-violet-400"
                            )}></div>
                            <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
                            <div className="flex justify-center -mt-28">
                                <div className="relative inline-flex">
                                    <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] group-hover:bg-zinc-950/50 [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                                    <img
                                        src={image}
                                        alt={title}
                                        className="size-40 group-hover:-translate-y-6 transition duration-300"
                                    />
                                </div>
                            </div>
                            <h3 className="font-heading font-black text-3xl mt-12">{title}</h3>
                            <p className="text-lg text-zinc-400 mt-4">{description}</p>
                            <div className="flex justify-between mt-12">
                              <TextButton color={color}>Learn More</TextButton>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
                        {cardData.map(({title}) => (
                            <div key={title} className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
