import profilePic from "../assets/modified1.png"
const Hero = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-white pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Bhushan Jadhao
              </h1> 
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-text text-transparent">
                Full Stack Developer
              </span>
              <p className="text-white my-2 max-w-xl py-6 font-light tracking-tighter">
              I’m a passionate full stack developer with a flair for creating dynamic web applications using the MERN stack.
               My experience includes a transformative 
              internship at Elite Software, where I tackled backend 
              challenges and optimized server performance. Driven by a love for 
              seamless user experiences and problem-solving, I continuously 
              push the boundaries of innovation and excellence in web development.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                   <img src={profilePic} alt="BhushanImage"   className="max-w-full h-auto lg:max-w-md rounded-lg" />
                </div>
              </div>
        </div>
      </div>
    )
  }
  
  export default Hero;
  
  