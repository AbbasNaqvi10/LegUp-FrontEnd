import Newcomers from '../../../public/img/forNewcomers.svg'
import Business from '../../../public/img/forBusiness.svg'
import TheEconomist from '../../../public/img/the-economist.svg'
import NyTimes from '../../../public/img/ny-times.svg'
import Inc from '../../../public/img/inc.svg'
import AmericaBank from '../../../public/img/american-bank.svg'
import Cnbc from '../../../public/img/cnbc-stacked.svg'
import FastComapny from '../../../public/img/fast-company.svg'
import Image from 'next/image'

export default function Section2() {

    return (
        <>
            <div className='flex flex-col md:flex-row ml-4 py-10 md:mt-10 md:p-10 px-2'>
                <div className='flex flex-row md:basis-1/2 md:p-4'>
                    <div className='lg:w-28'>
                        <Image
                            src={Newcomers}
                        />
                    </div>
                    <div className='flex flex-col px-4 lg:px-0'>
                        <div className='flex flex-col'>
                            <div className='text-xs'>
                                <p>FOR NEWCOMERS</p>
                            </div>
                            <div className='font-bold my-3 text-xl lg:text-4xl lg:pr-12'>
                                <h6>Take your international credit history with you when you move</h6>
                            </div>
                        </div>
                        <div className='text-base my-2 md:my-0 lg:text-2xl lg:pr-16 lg:py-6'>
                            <p>Access financial products like credit cards, student loans, mobile phone financing, and more.</p>
                        </div>
                        <div className='w-40 my-4 md:my-3 py-2 flex justify-around rounded-lg bg-white border-2 border-blue-900/100 hover:bg-blue-900 hover:shadow-xl hover:shadow-blue-900/80 cursor-pointer text-blue-900 hover:text-white'>
                            <button className=''>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row md:basis-1/2 md:p-4'>
                    <div className='lg:w-28'>
                        <Image
                            src={Business}
                        />
                    </div>
                    <div className='flex flex-col px-4 lg:px-0'>
                        <div className='flex flex-col'>
                            <div className='text-xs'>
                                <p>FOR BUSINESS</p>
                            </div>
                            <div className='font-bold my-3 text-xl lg:text-4xl lg:pr-12'>
                                <h6>Sign up millions of new customers for a bright financial future</h6>
                            </div>
                        </div>
                        <div className='text-base my-2 md:my-0 lg:text-2xl lg:pr-16 lg:py-6'>
                            <p>Work with us to expand your consumer base to high potential, financially underserved segments.</p>
                        </div>
                        <div className='w-40 my-4 md:my-3 py-2 flex justify-around rounded-lg bg-white border-2 border-blue-900/100 hover:bg-blue-900 hover:shadow-xl hover:shadow-blue-900/80 cursor-pointer text-blue-900 hover:text-white'>
                            <button className=''>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:mt-16'>
                <h5 className='flex justify-center text-sm font-bold'>As featured in:</h5>
                <div className="flex flex-wrap space-x-3 space-y-0 md:space-x-20 justify-center px-2 py-2 md:py-0">
                    <div className='w-12 lg:w-20'>
                        <a href='https://www.economist.com/' target="_blank"><Image src={TheEconomist} /></a>
                    </div>
                    <div className='w-12 lg:w-20'>
                        <a href='https://www.nytimes.com/' target="_blank"><Image src={NyTimes} /></a>
                    </div>
                    <div className='w-12 lg:w-20'>
                        <a href='https://www.inc.com/' target="_blank"><Image src={Inc} /></a>
                    </div>
                    <div className='w-12 lg:w-20'>
                        <a href='https://www.americanbanker.com/' target="_blank"><Image src={AmericaBank} /></a>
                    </div>
                    <div className='w-12 lg:w-20'>
                        <a href='https://www.cnbc.com/' target="_blank"><Image src={Cnbc} /></a>
                    </div>
                    <div className='w-12 lg:w-20'>
                        <a href='https://www.fastcompany.com/' target="_blank"><Image src={FastComapny} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}