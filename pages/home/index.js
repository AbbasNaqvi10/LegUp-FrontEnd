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
            <div class="flex flex-col">
                <div class="flex justify-center">Explore our options for newcomers and businesses.</div>
                <div class="flex justify-center">
                    <a href="#newscomers">
                        <svg fill="none" viewBox="0 0 26 26" strokeWidth={2}
                            stroke="rgb(37 99 235)" class="animate-bounce w-10 h-10 my-3 cursor-pointer mt-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>
                </div>
            </div>
            <div id='newscomers' class="flex flex-row mb-5 mt-20">
                <div class="flex flex-row basis-1/2 h-max pl-40 pr-10 pb-5 border-r-2 border-gray-400">
                    <div class="flex flex-row">
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
                            <div class="mt-5">
                                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Join Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row basis-1/2 h-max pr-40 pl-10 pb-5">
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
                        <div class="mt-5">
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Join Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col px-40 mt-20">
                <div class="flex justify-center">
                    <h3 class="text-2xl">As featured in:</h3>
                </div>
                <div class="flex justify-between mt-20">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>08</div>
                </div>
            </div>
            <div class="flex flex-row mb-5 mt-60">
                <div class="flex flex-row basis-1/2 h-max pl-40 pr-10 pb-5">
                    <div class="flex flex-row">
                        <div>
                            <h6 class="text-xs mb-3">
                                ABOUT NOVA CREDIT
                            </h6>
                            <h1 class="text-6xl mb-5">
                                We’re building a fair and inclusive financial system for the world
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row basis-1/2 h-max pr-40 pl-10 pb-5">
                    Image
                </div>
            </div>
            <div class="flex flex-row mb-5 mt-60">
                <div class="flex flex-row basis-1/2 h-max pl-40 pr-10 pb-5">
                    Image
                </div>
                <div class="flex flex-row basis-1/2 h-max pr-40 pl-10 pb-5">
                    <div>
                        <p class="text-base">
                            <b>Nova Credit is a consumer credit</b> bureau that uses first-party data to enable consumers
                            to paint a complete picture of their financial identity and allows businesses
                            to lend more fairly and responsibly. We connect consumers and lenders with trusted data
                            and analytics where the traditional credit system falls short.
                        </p>
                        <p class="text-base mt-5">
                            Founded by immigrants, Nova Credit has a diverse team from around the globe who believe in a
                            world where anyone can realize their potential, and businesses can see people for who they can become.
                        </p>
                        <div class="mt-5">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Watch Video
                            </button>
                            <button class="mx-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-20">
                <hr />
            </div>
            <div class="mt-10 pl-40 pr-60">
                <div class="flex justify-between pr-80">
                    <div class="flex flex-col">
                        <h6 class="mb-4 font-bold">LegUp</h6>
                        <div>Arrive and Thrive</div>
                        <div>For Business</div>
                        <div>Refer a Friend</div>
                    </div>
                    <div class="flex flex-col">
                        <h6 class="mb-4 font-bold">Resources</h6>
                        <div>Credit cards for no credit</div>
                        <div>How to build credit</div>
                        <div>Best credit cards for newcomers</div>
                        <div>How to use your international credit</div>
                        <div>Help center</div>
                    </div>
                    <div class="flex flex-col">
                        <h6 class="mb-4 font-bold">Company</h6>
                        <div>About us</div>
                        <div>Leadership</div>
                        <div>Careers</div>
                        <div>Contact us</div>
                        <div>Press</div>
                        <div>Corporate blog</div>
                        <div>Disputes</div>        
                    </div>
                </div>
            </div>
        </>
    )
}