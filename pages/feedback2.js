import Image from "next/image";
import Link from "next/link";
import log from "../public/assets/logo.png";
import { useDispatch } from "react-redux";
import { setConcept, setManagement } from "../state/slices/pageSlice";

const feedback2 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();

  return (
    <div className='h-screen px-10'>
        <div style={{ cursor: "pointer" }}>
            <Link href='/'>
                <Image src={log} width='120px' height='90px' alt='logg' />
            </Link>
        </div>
        <div className='flex justify-center items-center'>
            <div className=" w-[30%] border-[1px] border-amber-500 rounded py-3 2xl:w-[40%] larg:w-[60%] md:w-[80%] md:mt-32 sm:w-[90%] xtra:w-full">
                <h1 className="text-black font-medium text-center text-2xl xs:text-xl">{`We'd love to hear from you`}</h1>
                <h1 className="text-black text-center xs:text-sm">Choose one based on service you experienced</h1>
                <div className="flex justify-between mx-auto w-[80%] mt-5 xs:text-sm xs:w-[90%]">
                    <button className="bg-amber-600 text-white cursor-pointer px-3 py-2 rounded font-medium sm:text-sm xs:text-xs" onClick={()=> dispatch(setConcept())}><Link href='/feedback'>Concept</Link></button>
                    <button className="bg-amber-600 text-white cursor-pointer px-3 py-2 rounded font-medium sm:text-sm xs:text-xs" onClick={()=> dispatch(setManagement())}><Link href='/feedback'>Project management</Link></button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default feedback2