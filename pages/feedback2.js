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
            <div className="h-[200px] w-[30%] border-[1px] border-amber-500 rounded py-3">
                <h1 className="text-black font-medium text-center text-2xl">{`We'd love to hear from you`}</h1>
                <h1 className="text-black text-center">Choose one based on service you experienced</h1>
                <div className="flex justify-between px-5 mt-5">
                    <button className="bg-amber-600 text-white cursor-pointer px-4 py-2 rounded font-medium" onClick={()=> dispatch(setConcept())}>Concept</button>
                    <button className="bg-amber-600 text-white cursor-pointer px-4 py-2 rounded font-medium" onClick={()=> dispatch(setManagement())}>Project management</button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default feedback2