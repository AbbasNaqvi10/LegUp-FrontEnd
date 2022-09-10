import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import Img1 from '../../public/img/img1.jpg'

export default function Home() {

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div class="flex flex-row mb-4">
                <div class="basis-1/2 h-max">
                    <h1 class="text-6xl px-20 pt-20 pb-5 mb-5">We connect consumers and lenders to expand access to credit</h1>
                    <p class="text-xl pl-20">Millions of consumers are left out due to gaps in the traditional credit system. We’re building a financially inclusive world using trusted data and analytics.</p>
                </div>
                <div class="basis-1/2 h-max">
                    {/* <Image
                            src='/img1.jpg'
                        /> */}
                </div>
            </div>
            <div class="grid justify-items-center mt-10">
                <div>Explore our options for newcomers and businesses.</div>
                <div>
                    <a href="#newscomers">
                        <svg fill="none" viewBox="0 0 26 26" strokeWidth={2}
                            stroke="rgb(37 99 235)" class="animate-bounce w-10 h-10 my-3 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>
                </div>
            </div>
            <div id='newscomers' class="flex flex-row mb-5">
                <div class="flex flex-row basis-1/2 h-max pl-40 pr-10 pt-10 pb-5 border-r-2 border-gray-400">
                    <div class="basis-1/6">
                        <p>Image</p>
                    </div>
                    <div class="basis-5/6">
                        <h6 class="text-xs mb-3">
                            FOR NEWCOMERS
                        </h6>
                        <h1 class="text-4xl mb-5">
                            Take your international credit history with you when you move
                        </h1>
                        <p class="text-base">
                            Access financial products like credit cards, student loans, mobile phone financing, and more.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row basis-1/2 h-max pr-40 pl-10 pt-10 pb-5">
                    <div class="basis-1/6">
                        <p>Image</p>
                    </div>
                    <div class="basis-5/6">
                        <h6 class="text-xs mb-3">
                            FOR BUSINESS
                        </h6>
                        <h1 class="text-4xl mb-5">
                            Sign up millions of new customers for a bright financial future
                        </h1>
                        <p class="text-base">
                            Work with us to expand your consumer base to high potential, financially underserved segments.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}