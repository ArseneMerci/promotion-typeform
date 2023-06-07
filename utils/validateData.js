import { clearAll, getItem } from "./persist";


const validaData = (currentStep) => {
    let result = false;
    let error = "";
    if(currentStep === 0) {
        if(localStorage.getItem('space')){
            const space  = getItem('space');
            if(space.space && space.cost) {
                result = true
                localStorage.removeItem('styles');
            }
            else error = "Please select a space";  
        }
        else error = "Please select a space";       
    }
    if(currentStep === 1) {
        if(localStorage.getItem('styles')){
            const styles  = getItem('styles');
            if(styles.styles.length !== 0) result = true;
            else error = "Please select atleast one style";  
        }
        else error = "Please select atleast one style";       
    }
    if(currentStep === 2) {
        if(localStorage.getItem('styles')){
            const styles  = getItem('styles');
            if(styles.colors.status) result = true;
            else result = true
            // else error = "Please select and fill all fields";  
        }
        else error = "Please select and fill all fields";       
    }
    if(currentStep === 3) {
        if(localStorage.getItem('stageThree')){
            const stageThree  = getItem('stageThree');
            if(stageThree.improvements.length !==0 && stageThree.modification) result = true;
            else error = "Please select and fill all fields";  
        }
        else error = "Please select and fill all fields";       
    }
    if(currentStep === 4) {
        if(localStorage.getItem('stageFour')){
            const stageFour  = getItem('stageFour');
            if((stageFour.pictures.length !==0 && stageFour.plan.length !==0) || stageFour.request) result = true;
            else error = "Please upload both images and plan or check the request box";  
        }
        else error = "Please upload both images and plan or check the request box";       
    }
    if(currentStep === 5) {
        if(localStorage.getItem('space')){
            const space  = getItem('space');
            if(space.budget) result = true;
            else error = "Please select your budget";  
        }
        else error = "Please select your budget";       
    }
    if(currentStep === 6) {
        result = true;      
    }
    return {
        result,
        error
    };
}
export default validaData;
