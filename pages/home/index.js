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
            <div>
                <div class="flex mb-4">
                    <div class="w-1/2 bg-gray-400 h-12"></div>
                    <div class="w-1/2 bg-gray-500 h-12">
                        {/* <Image
                            src='/img1.jpg'
                        /> */}
                    </div>
                </div>
            </div>
            <div>
                <div class="flex mb-4">
                    <div class="w-1/2 bg-gray-400 h-12"></div>
                    <div class="w-1/2 bg-gray-500 h-12"></div>
                </div>
            </div>
        </>
    )
}