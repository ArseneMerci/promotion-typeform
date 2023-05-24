import styles from '../../styles/checkout.module.css';
import pic from '../../public/assets/1.jpg'
import Image from "next/image";
import { AiFillCheckCircle } from 'react-icons/ai';


const StepCheckout = () => {
  return (
    <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Double-check, before making payment</h1>
                <p className={styles.p}>Double-check your choices before finalizing payment to ensure accuracy and satisfaction with your order.</p>
                <div className={styles.card}>
                    <div>
                        <h1 className={`${styles.styl} font-medium`}>Inspiration styles:</h1>
                        <div className={styles.photoCard}>
                            <div className={styles.photo} style={{marginRight:'5px'}}>
                                <Image
                                    src={pic}
                                    className={styles.blogPhoto1}   
                                    alt="Picture of process"
                                    layout="fill"
                                />
                            </div>
                            <div className={styles.photo}>
                                <Image
                                    src={pic}
                                    className={styles.blogPhoto1}   
                                    alt="Picture of process"
                                    layout="fill"
                                />
                            </div>
                        </div>
                        {/* <h1 className={styles.styl}>Inspiration styles</h1> */}
                    </div>
                    
                    <div className={styles.cardDetails}>
                        <h1 className={styles.headTitle}>Kids bedroom</h1>
                        <div style={{display:"flex ",marginBottom:"10px"}}>
                            <AiFillCheckCircle style={{color:"green",marginRight:"5px", fontSize:"20px",marginTop:"-1px"}}/>
                            <h1 className={styles.h1} ><span className='text-black font-medium'>Budget:</span>{" "}300,000-500,000 RWF</h1>
                        </div>
                        <div style={{display:"flex",marginBottom:"10px"}}>
                            <AiFillCheckCircle style={{color:"green",marginRight:"5px", fontSize:"20px",marginTop:"-1px"}}/>
                            <h1 className={styles.h1}><span className='text-black font-medium'>Color:</span>{" "}Red,Yellow</h1>
                        </div>
                        <div style={{display:"flex"}}>
                            <AiFillCheckCircle style={{color:"green",marginRight:"5px", fontSize:"20px",marginTop:"-1px"}}/>
                            <h1 className={styles.h1}><span className='text-black font-medium'>Technician request:</span>{" "} True</h1>
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
                        <div style={{display:"flex"}}><h1 className={styles.fff} style={{fontSize:"30px",marginRight:"8px"}}>RWF</h1><h1 className={styles.fff} style={{fontSize:"30px"}}>300K</h1></div>
                        <h1 className={styles.fff} style={{fontSize:"20px",alignSelf:"center"}}>Total</h1>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
                        <h1 style={{fontSize:"15px",fontWeight:"400"}}>Item</h1>
                        <h1 style={{fontSize:"15px",fontWeight:"400"}}>280K</h1>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h1 style={{fontSize:"15px",fontWeight:"400"}}>Technician fee</h1>
                        <h1 style={{fontSize:"15px",fontWeight:"400"}}>20K</h1>
                    </div>
                    <button className={styles.btn}>Checkout</button>
                </div>
                <div className={`${styles.promo} mt-10`}>
                    <form action="" className={styles.form}>
                        <label htmlFor="" className="mr-2">Promo code :</label>
                        <div>
                            <input type="text" className="border-[1px] border-black"/>
                            <button type="submit" className="bg-green-700 py-2 px-4 rounded text-white ml-5 text-xs font-medium">Verify</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
  )
}

export default StepCheckout