
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import manu3 from '../assets/manu3.jpg'; // Import your hero image
import manu2 from '../assets/manu2.jpg';
import manu1 from '../assets/manu1.jpg';






export default function Example() {

    useEffect(() => {
        AOS.init();
      }, []);
    
    return (
     
      <>
      
      <div class=" -mx-auto flex flex-wrap items-center mt-6 mb-6">
          <div class="w-full px-4 lg:w-1/2">
            <div class="mb-12 lg:mb-0">
              <h2 class="mb-5 text-3xl font-bold leading-tight text-black sm:text-[40px] sm:leading-tight md:text-[45px] md:leading-tight lg:text-[38px] lg:leading-tight xl:text-[45px] xl:leading-tight">
                FIND OUR SCENTS HERE.
              </h2>
              <p class="mb-10 text-base font-medium leading-relaxed text-body-color md:text-lg md:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at egestas tortor. Morbi sed odio id purus pellentesque iaculis.
                Nulla facilisi.
              </p>

              <p class="mb-5 text-lg font-semibold text-body-color">
                Subscribe to get notified when we launch 🎉
              </p>

              <form class="mb-7 flex max-w-[445px] flex-wrap">
                <input type="email" class="mr-3 mb-3 h-[50px] w-full rounded border border-form-stroke bg-white px-5 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none sm:max-w-[220px] md:max-w-[315px] lg:max-w-[250px] xl:max-w-[315px]" placeholder="Your work mail"/>
                <button class="mb-3 h-[50px] rounded bg-primary px-6 text-sm text-white transition hover:bg-opacity-90">
                  Notify Me!
                </button>
              </form>
            </div>
          </div>

          <div class="w-full px-4 lg:w-1/2 mt-10 mb-10">
            <div class="-mx-2 flex flex-wrap sm:-mx-4">
              <div class="w-1/2 px-2 sm:px-4">
                <div class="mb-4 h-[256px] sm:mb-8 sm:h-[442px] lg:h-[332px] xl:h-[442px]">
                  <img src={manu3} alt="hero " class="h-full w-full object-cover object-center"/>
                </div>
              </div>
              <div class="w-1/2 px-2 sm:px-4">
                <div class="mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]">
                  <img src={manu2} alt="hero " class="h-full w-full object-cover object-center"/>
                </div>
                <div class="mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]">
                  <img src={manu1} alt="hero " class="h-full w-full object-cover object-center"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </>


    )
  }
  