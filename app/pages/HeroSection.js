export default function HeroSection() {
  return (
    <section className="h-screen w-screen ivb  " id="home">
      <div className="container mx-auto flex flex-col text-white justify-center gap-3 h-full w-full p-1">
        <p className="text-center text-lg md:text-xl font-semibold">
          பண்ணாரி அம்மன் தொழில்நுட்பக் கல்லூரி{" "}
        </p>
        <p className="text-center text-lg md:text-xl  font-semibold ">
          மற்றும்
        </p>

        <p className="text-center text-lg md:text-xl font-semibold">
          முத்தமிழ் மன்றம்
        </p>
        <h1 className="font-extrabold text-4xl md:text-6xl  text-white text-center">
          மதிநுட்பசுரபி - 2024
        </h1>
        <p
          className="text-center font-medium text-lg md:text-xl"
          data-aos-duration="800"
        >
          "இளமை காக்கும் அருமைமொழி துன்பம் போக்கும் துடிப்புமொழி நன்மை
          விளைக்கும் நற்செம்மொழி உயிர் நாவில் உருவான உலகமொழி நம் செம்மொழியான
          தமிழ் மொழியே..."
        </p>
      </div>
    </section>
  );
}
