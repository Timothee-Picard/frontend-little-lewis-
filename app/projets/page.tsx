import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className="mx-10 lg:mx-[10rem]">
            <h1 className="uppercase font-secondary text-9xl italic font-extrabold mb-6 mt-20 text-shadow-title text-stroke text-customPurple" data-text={"Work"}>Work</h1>
            <ul className="flex flex-wrap flex-col md:flex-row uppercase font-semibold text-custompurple gap-5 text-customPurpleDark">
                <li className="whitespace-nowrap border-4 border-customPurpleDark rounded-full px-8 py-2 shadow-filters cursor-pointer hover:activeFilter activeFilter">Show all</li>
                <li className="whitespace-nowrap border-4 border-customPurpleDark rounded-full px-8 py-2 shadow-filters cursor-pointer hover:activeFilter">branding</li>
                <li className="whitespace-nowrap border-4 border-customPurpleDark rounded-full px-8 py-2 shadow-filters cursor-pointer hover:activeFilter">Strategy</li>
                <li className="whitespace-nowrap border-4 border-customPurpleDark rounded-full px-8 py-2 shadow-filters cursor-pointer hover:activeFilter">graphism</li>
                <li className="whitespace-nowrap border-4 border-customPurpleDark rounded-full px-8 py-2 shadow-filters cursor-pointer hover:activeFilter">reset</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-32">
                {[...Array(9)].map((_, index) => (
                    <Link key={index} href={`/projets/${index}`}>
                        <svg width="100%" height="100%" viewBox="0 0 373 627" preserveAspectRatio={"xMidYMid slice"}>
                            <defs>
                                <clipPath id={`projectClipPath-${index}`}>
                                    <path fill="#24529e"
                                          d="M363.97 439.118L363.969 439.166L363.969 439.214L363.969 588.507C363.969 593.927 360.021 598.54 354.665 599.375L281.458 610.798C280.897 610.885 280.33 610.929 279.762 610.929L187.661 610.929L187.385 610.929L187.11 610.96L96.0248 621.058C95.2171 621.147 94.402 621.147 93.5943 621.057L17.1091 612.533C11.5739 611.916 7.37321 607.259 7.3279 601.69L4.99996 315.725L5.0003 315.685L7.31576 27.9212C7.36435 21.8808 12.2748 17.0097 18.3154 17.0097L94.8081 17.0097L95.1301 17.0097L95.4494 16.9684L187.983 4.99999L350.881 5C356.86 5 361.744 9.77545 361.879 15.7527L367.389 260.792L363.97 439.118Z"/>
                                </clipPath>
                            </defs>
                            <image href="https://picsum.photos/2000/3000" width="120%" height="120%" x="-10%"
                                   y="-10%"
                                   clipPath={`url(#projectClipPath-${index})`}/>
                        </svg>
                    </Link>
                ))}
            </div>
        </div>
    );
}
