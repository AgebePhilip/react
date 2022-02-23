import './intro.css';
import possibility from "../../assets/possibility.png";

const Intro =()=>{
    return(
        <div className="i">
            <div className="i-left">
            <div className="i-wrapper">
        <h2 className="i-Intro"> Hello my name is--</h2>
        <h1 className="i-name"> PRO-EXPONENTIAL</h1>
        <div className="i-title">
            <div className="i-title-wrapper">
                <div className="i-title-items">Web designer/ Developer</div>
                <div className="i-title-items">Mobile designer/ Developer</div>
                <div className="i-title-items">Web designer/ Developer</div>
                <div className="i-title-items">Digital designer/ Developer</div>
                <div className="i-title-items">Content creator/ Developer</div>
            </div>
        </div>
        <p className="i-desc">
            Pro-Exponential Tech is your number one 
            programming Institute that helps 
            developers of all kind to become
             mastery of their prospective 
             field of eandeavour from 
             beginers to advance level with different operations like backed and front end technologies
        </p>
       
        
        

        </div>
        </div>
            <div className="i-right"> 
            <div className="i-bg"></div>
            <img src= {possibility} alt='possibility ' className='i-img'/>
            </div>
            
            
                    
                
        </div>
    )
}
export  default Intro;