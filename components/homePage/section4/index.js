import LegupConsumerCredit from '../../../public/img/legupCreditConsumer.png'
import Image from 'next/image';
let videoIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
</svg>


export default function Section4() {

    return (
        <>
            <div className="flex flex-col p-4 items-start justify-center py-4 space-y-16 md:py-10 lg:mt-40 md:space-y-0 md:items-center md:h-screen md:flex-row">
                <div className="md:basis-1/2 px-6 md:px-4">
                    <Image
                        src={LegupConsumerCredit}
                    />
                </div>
                <div className="md:basis-1/2 space-y-6 px-6 md:p-6 md:px-20 md:space-y-6">
                    <p className="text-sm md:text-2xl text-black ">
                        <b>LegUp is a consumer credit</b> bureau that uses first-party data to enable consumers to paint a
                        complete picture of their financial identity and allows businesses to lend more fairly and responsibly.
                        We connect consumers and lenders with trusted data and analytics where the traditional
                        credit system falls short.
                    </p>
                    <p className="text-sm md:text-2xl text-black">
                        Founded by immigrants, LegUp Credit has a diverse team from around the globe who believe in a world where anyone can realize their potential, and businesses can see people
                        for who they can become.
                    </p>
                    <div className='flex flex-row space-x-10'>
                        <div className='my-4 md:my-3 py-2 flex justify-around rounded-lg bg-blue-900 text-white border-2 border-blue-900/100 hover:bg-blue-900 hover:shadow-xl hover:shadow-blue-900/80 cursor-pointer'>
                            <button className='flex flex-row p-1 md:p-2'>{videoIcon}Watch Video</button>
                        </div>
                        <div className='my-4 md:my-3 py-2 flex justify-around rounded-lg bg-white border-2 border-blue-900/100 hover:bg-blue-900 hover:shadow-xl hover:shadow-blue-900/80 cursor-pointer text-blue-900 hover:text-white'>
                            <button className='p-1 md:p-2'>Learn More</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}