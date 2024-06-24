import React from "react";

export default function Details() {
  return (
    <section
      className="min-h-[50vh] relative w-screen container mx-auto "
      id="details"
    >
      <h1 className="text-3xl font-bold text-center my-6">அட்டவணை</h1>

      <ol class="items-center sm:flex w-screen container mx-auto px-6  justify-between  md:px-0   ">
        <li class="relative mb-6 sm:mb-0 border md:border-none p-3 md:p-0 rounded-md ">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-amber-900 dark:bg-amber-900 sm:ring-8 dark:ring-amber-600 shrink-0"></div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 ">
            பதிவு துவக்கம்

            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            27.6.2024
            </time>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-amber-900 dark:bg-amber-900 sm:ring-8 dark:ring-amber-600 shrink-0"></div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 ">
            கட்டுரை சமர்ப்பிக்கும் தொடக்க தேதி 
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            01.8.2024
            </time>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-amber-900 dark:bg-amber-900 sm:ring-8 dark:ring-amber-600 shrink-0"></div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 ">
            பதிவு மற்றும் கட்டுரை சமர்ப்பிக்கும் கடைசி தேதி 
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            15.8.2024
            </time>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-amber-900 dark:bg-amber-900 sm:ring-8 dark:ring-amber-600 shrink-0"></div>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 ">
            போட்டியின் முடிவு அறிவித்தல் 
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            30.8.2024
            </time>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-amber-900 dark:bg-amber-900 sm:ring-8 dark:ring-amber-600 shrink-0"></div>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 ">
            பரிசளிப்பு விழா 

            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            செப்டம்பர் 2024
            </time>
          </div>
        </li>
       
      </ol>

     
      <div className="flex flex-col  md:flex-row border shadow rounded-md justify-between items-center p-4 my-20  bg-slate-900   text-slate-200  ">
        <h1 className="text-3xl font-bold text-center my-12 md:my-0 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
          பதிவு செய்வதற்கான மென்படிவம் &rarr;
        </h1>

        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
<span class="relative px-5 py-3  text-lg transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
<a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfeIVl1OVQhwxd5eNKCv7VDKmbfar-hLCVJQ-lo_gcowrz6mA/viewform "
          target="_blank"
          // className="border-2 font-bold text-xl hover:border-green-600 rounded-sm border-none px-4 py-4 hover:text-white cursor-pointer bg-green-600 text-green-200"
        >
          பதிவு செய்யுங்கள்
        </a>
</span>
</button>

        
      </div>
    </section>
  );
}
