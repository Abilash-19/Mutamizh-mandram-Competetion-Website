import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <section className="min-h-screen w-screen mt-12 " id="about">
      <h1 className="text-3xl font-bold text-center my-6">எங்களைப்பற்றி</h1>
      <div className="container mx-auto flex md:mt-10 flex-col gap-20">
        <div className="flex flex-col-reverse   md:flex-row-reverse  px-6  gap-6 justify-center items-center">
          <p className=" text-base  md:text-left  leading-8 font-normal  tamil  ">
            பண்ணாரி அம்மன் தொழில்நுட்பக் கல்லூரி,, ஒரு தன்னாட்சி, சுயநிதி
            பொறியியல் கல்லூரி ஆகும், இது AICTE, புது தில்லி மற்றும் சென்னை அண்ணா
            பல்கலைக்கழகத்துடன் இணைக்கப்பட்டுள்ளது. பவானி ஆற்றின் கரையில்
            அமைந்துள்ள BIT வளாகம், நகர வாழ்க்கையின் முரண்பாடுகளிலிருந்து விலகி,
            இயற்கையோடு இயைந்து கற்கும் சூழலை வழங்குகிறது.நிலப்பரப்பு முற்றங்கள்
            மற்றும் பாதைகளுடன் நிறுத்தப்பட்ட விசாலமான மற்றும் பூமியைக்
            கட்டிப்பிடிக்கும் கட்டிடங்கள் வணிக நெறிமுறைகள் அல்லது கற்றலுக்கான
            சிறந்த மையத்தின் பண்புகளை வலியுறுத்தும் வகையில்
            வடிவமைக்கப்பட்டுள்ளன. இந்த வளாகத்தில் நன்கு திட்டமிடப்பட்ட கல்வித்
            தொகுதிகள், கணினி மையங்கள், விரிவுரை அரங்குகள், நூலகங்கள்,
            ஆய்வகங்கள், மாநாட்டு அரங்குகள், பணியாளர்கள் தங்கும் விடுதிகள்,
            விடுதிகள் மற்றும் மாணவர் மையங்கள் உள்ளன.{" "}
          </p>

          <Image
            src="/Assets/img/bit-logo-tamil.png"
            width={200}
            height={200}
          />
        </div>
        <div className="flex   flex-col-reverse md:flex-row text px-6   gap-6 justify-center items-center">
          <p className="text-base  leading-8 font-normal">
            முத்தமிழ் மன்றம் என்பது நம் தாய் தமிழுக்காக மட்டுமே. இந்த கடுமையான
            மற்றும் வளர்ந்து வரும் உலகில், முத்தமிழ் மன்ற மக்களாகிய நாம் நமது
            வருங்கால சந்ததியினருக்கு தமிழ் கலாச்சாரம் மற்றும் பாரம்பரியத்தை
            எடுத்துச் செல்லவும், மேலும் பேச்சு, கவிதை எழுதுதல், விவாதம் போன்ற
            திறன்களை வளர்ப்பதற்காகவும் இருக்கிறோம். மன்ற உறுப்பினர்கள் அனைவரும்
            ஒன்றிணைந்து செயல்படுகிறோம். இதில் தாய்மொழியான தமிழ் மீது மிகுந்த
            ஆர்வத்துடனும் அன்புடனும். முத்தமிழ் மன்றத்தின் செயல்பாடுகள் நம்
            தமிழ் மொழியின் வளங்களை பாதுகாப்பதற்கும், பரப்புவதற்கும் மிக்க
            முக்கியத்துவம் வாய்ந்தவை. இதில் நமது முன்னோர்களின் பெருமைக்குரிய
            இலக்கியங்கள், இசைகள், நடனங்கள் மற்றும் கலைகளை இன்றைய தலைமுறைக்கு
            அறிமுகப்படுத்துவதில் நாம் பெருமைப்படுகிறோம். மன்றத்தின்
            உறுப்பினர்களாகிய நாம், தமிழ் மொழியின் அழகையும் தனித்துவத்தையும்
            கொண்டாடும் விதமாக பல்வேறு நிகழ்ச்சிகள், பட்டிமன்றங்கள், போட்டிகள்
            மற்றும் கருத்தரங்குகள் நடத்துகிறோம். தமிழ் மொழியின் அழகையும்
            அமுதத்தையும் இனி வரும் தலைமுறையினருக்கு மேலும் ஆழமாக கற்றுக் கொடுக்க
            வேண்டியது நமக்கு பெரும் பொறுப்பு. இம்முறையில், முத்தமிழ் மன்றம்
            என்பது ஒன்றை மட்டுமே நோக்கமாகக் கொண்டுள்ளது - நம் தமிழை சீராகவும்
            சிறப்பாகவும் பாதுகாத்து, வளர்த்து, தன் மகத்தான பெருமைகளை உலகிற்கு
            பரப்புவது.
          </p>

          <Image
            src="/Assets/img/logo-final-low.png"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-3xl font-bold text-center"> போட்டியைப்பற்றி</h1>
        <div className="flex   flex-col-reverse md:flex-row text px-6   gap-6 justify-center items-center">
          <p className="text-base  leading-8 font-normal">
            இன்றும் என்றும் எங்களை வழிநடத்தும் பைந்தமிழின் பாதையில்... எண்ணற்ற
            மாணவர்களுக்கு வழிகாட்டியாக திகழ்ந்து பாதைகள் அமைத்து பயணங்கள் தந்த
            ஆசிரிய பெருமக்களுக்கு முத்தமிழை முன்னிலையாக வைத்து பண்ணாரி அம்மன்
            தொழில்நுட்ப கல்லூரி நடத்தும் "மதிநுட்பசுரபி" கட்டுரை போட்டியிற்கு
            வரவேற்கிறோம். எத்திசையும் வசிக்கும் ஆசிரியர்களையும் மற்றும்
            முத்தமிழையும் பறைசாற்றும் வகையில் இப்போட்டி அமைய உள்ளது. உங்கள்
            எண்ணற்ற எண்ணங்களை எழுத்தாக்க நினைக்கிறோம்.உங்கள் எழுத்துக்களை
            அரங்கேற்ற நினைக்கிறோம். சிறந்த கட்டுரைகளுக்கு பரிசுகள் வழங்கப்படும்.
            உங்கள் எண்ணங்களை எழுத்தாக்கி, எழுத்துக்களை கட்டுரைக்குள் அடக்கி,
            எங்களிடம் வந்தடைய முகவரி தந்து எதிர்பார்த்து காத்திருக்கிறோம்.
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center my-6"> தலைப்புகள்</h1>

      <div className="flex flex-col gap-3 mt-4  md:flex-row justify-center items-center container mx-auto w-[88%] ">
        <ol className=" bg-[#543310] rounded-md p-5 text-xl text-[#f9dec2] font-semibold flex flex-col gap-5 shadow-lg">
          <li className="hover:text-[#d8b59e] transition-colors duration-300">
            பண்டைய தமிழர்களின் ஆய்வுகள்
          </li>
          <li className="hover:text-[#d8b59e] transition-colors duration-300">
            இசைகள்
          </li>
          <li className="hover:text-[#d8b59e] transition-colors duration-300">
            மருத்துவம்
          </li>
          <li className="hover:text-[#d8b59e] transition-colors duration-300">
            திருவிழாக்கள்
          </li>
          <li className="hover:text-[#d8b59e] transition-colors duration-300">
            அணிகலன்கள்
          </li>
        </ol>

        <ol className=" bg-[#543310] rounded-md p-5 text-xl text-[#f9dec2] font-semibold flex flex-col gap-5 shadow-lg">
          <li className="hover:text-[#d8b59e] transition-colors duration-300">
          சங்க கால பெண் புலவர்களின் படைப்புகள்
          </li>
          <li className="hover:text-[#d8b59e] transition-colors duration-300">
          பருவநிலை மாற்றங்கள் 
          </li>
          <li className="hover:text-[#d8b59e] transition-colors duration-300">
          வர்ம கலைகள்
          </li>
          <li className="hover:text-[#d8b59e] transition-colors duration-300">
          தமிழர்களின் கட்டிடக்கலைகள்
          </li>
          <li className="hover:text-[#d8b59e] transition-colors duration-300">
          தமிழர்களின் விளையாட்டுகள்
          </li>
        </ol>
      </div>
    </section>
  );
}
