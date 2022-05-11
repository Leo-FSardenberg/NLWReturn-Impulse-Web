import { useEffect, useState, useRef, useLayoutEffect  } from "react";
import {tips} from './FeaturedTips' ;
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";



let count = 0;
let slideInterval;
export function Tips(){
    const featuredTips = [tips[0], tips[1], tips[2],tips[3]];
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef= useRef();
    const pauseSlider = () => {
      clearInterval(slideInterval);
    };
    const removeAnimation = () => {
      slideRef.current.classList.remove("fade-anim");};
    const handleOnNextClick = () => {
        count = (count + 1) % featuredTips.length;
        setCurrentIndex(count)
        slideRef.current.classList.add("fade-anim");
        slideRef.current.classList.remove("fade-anim")}
       
      const handleOnPrevClick = () => { const productsLength = featuredTips.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count)
        slideRef.current.classList.add("fade-anim");
        slideRef.current.classList.remove("fade-anim")
        };
        
        const startSlider = () => {
          slideInterval = setInterval(() => {
            handleOnNextClick();
          },3000);
          
        
        useEffect(() => {
          startSlider();
          slideRef.current.addEventListener("animationend", removeAnimation);
          slideRef.current.addEventListener("mouseenter", pauseSlider);
          slideRef.current.addEventListener("mouseleave", startSlider);
      
          return () => {
              clearInterval(slideInterval);
          };
        }, []);
      
         
          };
return (
    <>     
  <header>
      <span className="flex justify-center text-xl leading-4 md:p10 items-cemter">Aqui encontram-se algumas dicas</span>
    </header>

        <div className=" flex py-8 gap-2 w-full">
          <div ref={slideRef}  className="w-full relative select-none">
          <div className="w-full relative select-none">{featuredTips[currentIndex]} 
           </div> 
    
            <div className="relative top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
              <button className="right-end bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
               onClick={handleOnPrevClick}
               ><AiOutlineVerticalRight size={35} />
               </button>
              <button className="left-end bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition" 
              onClick={handleOnNextClick}><AiOutlineVerticalLeft size={35}/></button>
            </div>
          </div>
        </div>
        </>  
      );
    }

  

