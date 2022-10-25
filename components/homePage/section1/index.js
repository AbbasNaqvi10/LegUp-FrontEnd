import Image from "next/image";
import HomeImg from '../../../public/img/homeImgFirst.png';
import SectionMover from "../../shared/sectionMover";

export default function Section1(props) {

    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className='p-4 md:p-8 space-y-6'>
                    <h1 className='text-3xl px-6 py-4 md:text-2xl md:px-8 md:py-0 text-black font-bold lg:text-6xl'>We connect consumers and lenders to expand access to credit</h1>
                    <h6 className="text-lg px-6 py-6 md:text-lg md:px-8">Millions of consumers are left out due to gaps in the traditional credit system. We’re building a financially inclusive world using trusted data and analytics.</h6>
                </div>
                <Image
                    src={HomeImg}
                    className='p-4'
                />
            </div>
            <SectionMover paragraph='Explore our options for newcomers and businesses.' sectionId={props.sectionId} />
        </>
    )
}