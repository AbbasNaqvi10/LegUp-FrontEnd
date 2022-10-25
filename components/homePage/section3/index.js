import LegupCredit from '../../../public/img/aboutLegupCredit.png';
import Image from 'next/image';

export default function Section3() {

    return (
        <>
            <div className="flex flex-col p-4 items-start justify-center py-10 space-y-16 md:py-10 md:space-y-0 md:items-center md:h-screen md:flex-row">
                <div className="md:basis-1/2 space-y-6 px-6 md:px-0 md:space-y-2">
                    <h6 className=''>ABOUT LEGUP</h6>
                    <h1 className="text-3xl md:text-4xl text-black font-bold lg:text-7xl">We’re building a fair and inclusive financial system for the world</h1>
                </div>
                <div className="md:basis-1/2 px-4 py-6 md:px-0 md:py-6">
                    <Image
                        src={LegupCredit}
                    />
                </div>
            </div>
        </>
    )
}