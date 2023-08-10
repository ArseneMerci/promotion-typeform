import { useEffect, useState } from 'react';
import styles from '../../styles/checkout.module.css';
import CircularProgress from "@mui/material/CircularProgress";
// import pic from '../../public/assets/1.jpg'
import Image from "next/image";
import { AiFillCheckCircle } from 'react-icons/ai';
import { toast } from "react-toastify";
import validatePromoCode from '../../utils/data/validatePromoCode.js';
import { useDispatch, useSelector } from "react-redux";
import { designs } from "../../utils/data/data.js";
import { saveOrderAsync } from "../../state/slices/steps.slice";
import { useRouter } from "next/router";


const StepCheckout = () => {
    const selector = useSelector((state) => state.steps);
    const router = useRouter();
    const dispatch = useDispatch();

    const [code,setCode]=useState("");
    const [validCode,setValidCode]=useState("");
    const [isCodeValid,setIsCodeValid]=useState(false);
    const [codeOwner,setCodeOwner]=useState('');
    const [inspirationalStyles,setInspirationalStyles]=useState([]);
    const [budget, setBudget] = useState('0');
    const [requestTechnician, setRequestTechnician] = useState(false);
    const [space, setSpace] = useState('');
    const [spacePrice, setSpacePrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);

    useEffect(() => {
        const { space, styles } = selector;
        setBudget(space.budget);
        const cost = Number(space.cost);
        setSpacePrice(cost);
        setSpace(space.space.toUpperCase());
        setRequestTechnician(selector.request);
        if(selector.request){
            setTotalPrice(cost+10000);
        }else{
            setTotalPrice(cost);
        }
        const designSpace = designs.find((design) => design.name === space.space);
        const images = designSpace.data.filter((design) =>
            styles.styles.includes(design.name))
            .map((design) => design.image);
        setInspirationalStyles(images);
    }, []);
    const handleVerifyCode = async(e) => {
        e.preventDefault();
        const {valid, promo, name} = await validatePromoCode(code);
        if(valid){
            setIsCodeValid(true);
            setCodeOwner(name);
            setValidCode(promo.code);
            setDiscountPercentage(promo.discount);
            const totalPriceBeforeDiscount = spacePrice + (requestTechnician ? 10000 : 0);
            const discount = (totalPriceBeforeDiscount * promo.discount) / 100;
            if(name === 'Testing'){
                setDiscount(totalPriceBeforeDiscount-101);
                setTotalPrice(101);
            } else{
                setDiscount(discount);
                setTotalPrice(totalPriceBeforeDiscount-discount);
            }
            toast.success(`${name}'s promo code applied`);
        } else{
            setIsCodeValid(false);
            setCodeOwner('');
            setValidCode('');
            setDiscount(0);
            setDiscountPercentage(0);
            if(requestTechnician){
                setTotalPrice(spacePrice+10000);
            } else{
                setTotalPrice(spacePrice);
            }
            toast.error("Invalid promo code");
        }
    }
    const successFull = (response) => {
    return router.push(response.data.link);
    };
    const handleSubmit = () => {
        const { space, styles, info } = selector;
        // const image=dataURItoBlob(selector.pictures[0].files);
        const formdata = new FormData();
        formdata.append("space", space.space);
        formdata.append("spaceBudget", space.budget);
        formdata.append("spaceCost", space.cost);
        formdata.append("style", styles.styles);
        formdata.append("inspirationalPics",JSON.stringify(styles.images));
        formdata.append("colorStyle", styles.colors.status);
        formdata.append("colorLiked", styles.colors.like);
        formdata.append("colorNotLiked", styles.colors.not);
        formdata.append("improvements", selector.improvements);
        formdata.append("modification", selector.modification);
        formdata.append("furnitureToKeep", selector.furnatureToKeep);
        formdata.append("pictures", JSON.stringify(selector.pictures));
        formdata.append("plan", selector.plan[0]?.data_url);
        formdata.append("request", selector.request);
        formdata.append("fname", info.fname);
        formdata.append("address", info.city);
        formdata.append("email", info.email);
        formdata.append("phoneNumber", info.phone);
        formdata.append("totalPrice", totalPrice);
        formdata.append("referralCodeOwner", codeOwner);
        formdata.append("referralCode", validCode);
        formdata.append("discountedAmount",discount);
        formdata.append("discountedPercentage",discountPercentage);
        dispatch(saveOrderAsync({ data: formdata, success: successFull }));
    };
  return (
    <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Double-check, before making payment</h1>
                <p className={styles.p}>Double-check your choices before finalizing payment to ensure accuracy and satisfaction with your order.</p>
                <div className={styles.card}>
                    <div>
                        <h1 className={`${styles.styl} font-medium`}>Inspiration styles:</h1>
                        <div className={styles.photoCard}>
                            {
                                inspirationalStyles && inspirationalStyles.map((pic, index) => (
                                    <div className={styles.photo} key={index}  style={{marginRight:'5px'}}>
                                        <Image
                                            src={pic}
                                            className={styles.blogPhoto1}   
                                            alt="Picture of process"
                                            layout="fill"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        {/* <h1 className={styles.styl}>Inspiration styles</h1> */}
                    </div>
                    
                    <div className={styles.cardDetails}>
                        <h1 className={styles.headTitle}>{space}</h1>
                        <div style={{display:"flex ",marginBottom:"10px"}}>
                            <AiFillCheckCircle style={{color:"green",marginRight:"5px", fontSize:"20px",marginTop:"-1px"}}/>
                            <h1 className={styles.h1} ><span className='text-black font-medium'>Budget:</span>{budget}</h1>
                        </div>
                        <div style={{display:"flex ",marginBottom:"10px"}}>
                            <AiFillCheckCircle style={{color:"green",marginRight:"5px", fontSize:"20px",marginTop:"-1px"}}/>
                            <h1 className={styles.h1} ><span className='text-black font-medium'>Concept price:</span>{spacePrice}</h1>
                        </div>
                        {/* <div style={{display:"flex",marginBottom:"10px"}}>
                            <AiFillCheckCircle style={{color:"green",marginRight:"5px", fontSize:"20px",marginTop:"-1px"}}/>
                            <h1 className={styles.h1}><span className='text-black font-medium'>Color:</span>{" "}Red,Yellow</h1>
                        </div> */}
                        <div style={{display:"flex"}}>
                            <AiFillCheckCircle style={{color:"green",marginRight:"5px", fontSize:"20px",marginTop:"-1px"}}/>
                            <h1 className={styles.h1}><span className='text-black font-medium'>Technician request:</span>{" "} {requestTechnician? 'true': 'false'}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.hr} ></div>
            <div className={`${styles.container1} w-[30%] h-[100%]`}>
                <div className={styles.container2}>
                    <div style={{width:"100%"}}>
                        <h1 style={{fontSize:"13px" ,color:"gray", fontWeight:"400",marginBottom:"10px"}}>{`You've to pay,`}</h1>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"40px"}}>
                        <div style={{display:"flex"}}><h1 className={styles.fff} style={{fontSize:"30px",marginRight:"8px"}}>RWF</h1><h1 className={styles.fff} style={{fontSize:"30px"}}>{new Intl.NumberFormat().format(totalPrice)}</h1></div>
                        <h1 className={styles.fff} style={{fontSize:"20px",alignSelf:"center"}}>Total</h1>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
                        <h1 style={{fontSize:"15px",fontWeight:"400"}}>Space Design</h1>
                        <h1 style={{fontSize:"15px",fontWeight:"400"}}>{new Intl.NumberFormat().format(spacePrice)}RWF</h1>
                    </div>
                    {
                        requestTechnician && (
                        <div style={{display:"flex",justifyContent:"space-between", marginBottom:"10px"}}>
                            <h1 style={{fontSize:"15px",fontWeight:"400"}}>Technician fee</h1>
                            <h1 style={{fontSize:"15px",fontWeight:"400"}}>{new Intl.NumberFormat().format(10000)}RWF</h1>
                        </div>
                        )
                    }
                    {
                        isCodeValid && (
                            <div style={{display:"flex",justifyContent:"space-between", marginBottom:"10px"}}>
                            <h1 style={{fontSize:"15px",fontWeight:"400"}}>{codeOwner}&rsquo;s Discount Applied: {discountPercentage}%</h1>
                            <h1 style={{fontSize:"15px",fontWeight:"400"}}>-{new Intl.NumberFormat().format(discount)}RWF</h1>
                        </div>
                        )
                    }
                        <div className="flex-center">
                            {selector.loading &&(
                                <CircularProgress size={20} color="inherit" />
                            )}
                        </div>
                    <button 
                        className={styles.btn} 
                        onClick={handleSubmit}
                        style = {selector.loading ? { opacity: "0.2", cursor: "not-allowed" } : {}}
                        disabled={selector.loading}
                    >
                            <p>{selector.loading? 'Loading...': 'Checkout'}</p>
                    </button>
                </div>
                <div className={`${styles.promo} mt-10`}>
                    <form action="" className={styles.form}>
                        <label htmlFor="" className="mr-2">Promo code :</label>
                        <div>
                            <input 
                                type="text" 
                                className="border-[1px] border-black" 
                                onChange={(e) => setCode(e.target.value)}
                                // disabled={isCodeValid}
                                value={code} 
                            />
                            <button 
                                type="submit" 
                                className="bg-green-700 py-2 px-4 rounded text-white ml-5 text-xs font-medium" 
                                // style = {isCodeValid ? { opacity: "0.2", cursor: "not-allowed" } : {}}
                                onClick={handleVerifyCode} 
                                // disabled={isCodeValid}
                            >
                                Verify
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
  )
}

export default StepCheckout
