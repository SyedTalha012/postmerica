import React, { useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const videos = [
        "https://player.vimeo.com/video/956109942?h=88d40cfa58",
        "https://player.vimeo.com/video/956133191?badge=0&autopause=0&player_id=0&app_id=58479",
        "https://player.vimeo.com/video/956127938?badge=0&autopause=0&player_id=0&app_id=58479",
        "https://nullship.gg/testimonial/3.mov",
        "https://nullship.gg/testimonial/2.mov",
      ];
    const scrollLeft = () => {
        if (scrollContainerRef.current && currentVideoIndex > 0) {
            scrollContainerRef.current.scrollBy({
                left: -scrollContainerRef.current.clientWidth,
                behavior: "smooth",
            });
            setCurrentVideoIndex(currentVideoIndex - 1);
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current && currentVideoIndex < videos.length - 1) {
            scrollContainerRef.current.scrollBy({
                left: scrollContainerRef.current.clientWidth,
                behavior: "smooth",
            });
            setCurrentVideoIndex(currentVideoIndex + 1);
        }
    };
    return (

        <div className='lg:px-[5rem] px-[1rem] py-[3rem] lg:py-[5rem] lg:block flex justify-center items-center flex-col'>


                <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center mb-15">
                    <div>
                        <h2 className={`text-[3rem] font-bold`}>Client testimonials</h2>
                        <p className={``}>Discover how our clients have transformed their businesses with our solutions.</p>
                    </div>
                    <div className="flex gap-2 items-center w-[300px] justify-between">
                        <button onClick={scrollLeft} className={`w-10 h-10 flex items-center justify-center rounded-full ${currentVideoIndex === 0 ? "bg-transparent text-black" : "bg-black text-white animate-pulse" }`} disabled={currentVideoIndex === 0}>
                            <FaArrowLeft />
                        </button>

                        <button onClick={scrollRight} className={`w-10 h-10 flex items-center justify-center rounded-full ${currentVideoIndex === videos.length - 1 ? "bg-transparent text-black" : "bg-black text-white animate-pulse" }`} disabled={currentVideoIndex === videos.length - 1}>
                            <FaArrowRight/>
                        </button>
                        {currentVideoIndex < videos.length - 1 && (
                            <span className="ml-5 text-sm font-medium">Next Video</span>
                        )}

                        <span className="ml-10 text-sm font-medium">{`${currentVideoIndex + 1
                            } / ${videos.length}`}</span>
                    </div>
                </div>
                <div ref={scrollContainerRef} className="flex overflow-hidden rounded-xl gap-4 scrollbar-hide snap-x snap-mandatory mt-[3rem]" style={{ scrollSnapType: "x mandatory" }}>
                    {videos.map((video, index) => (
                        <div key={index} className={`flex-shrink-0 w-[100%] transition-transform duration-500 ${index === currentVideoIndex ? "" : "opacity-50"}`}>
                            {index < 3 ? (
                                <iframe title="vimeo-player" src={video} width="100%" height="100%" className="w-full rounded-2xl" frameBorder="0" allowfullscreen></iframe>
                            ) : (
                                <video src={video} controls className="w-full rounded-2xl"style={{filter:index !== currentVideoIndex ? "blur(5px)" : "none",}} />
                            )}
                        </div>
                    ))}
                </div>
            {/* <h1 className='text-[3rem] font-bold'>Client testimonials</h1> */}

            {/* <div className='lg:flex justify-between items-center'>
                <p>Discover how our clients have transformed their businesses with our solutions.</p>

                <div className='flex items-center justify-center lg:justify-start gap-x-[3rem] lg:mt-0 mt-3'>
                    <div className='flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-full hover:bg-blueColor hover:text-white cursor-pointer'>
                        <FaArrowLeft onClick={scrollLeft} />
                    </div>
                    <div className='flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-full hover:bg-blueColor hover:text-white cursor-pointer'>
                        <FaArrowRight onClick={scrollRight} />
                    </div>
                    <p>{currentVideoIndex + 1} / {videos.length}</p>
                </div>
            </div> */}

            {/* <video src={videos[currentVideo]} controls={true} className="w-[80%] rounded-2xl"></video> */}
            {/* <div className='mt-[5rem] flex justify-center items-center'>
                {currentVideo < 3 ? (
                  <iframe title="vimeo-player" src={videos[currentVideo]} className="w-[80%] rounded-2xl" height="100%" frameBorder="0" allowfullscreen></iframe>
                ) : (
                  <video src={videos[currentVideo]} controls className="w-full rounded-2xl"/>
                )}
            </div> */}


            {/* <div ref={scrollContainerRef} className="flex overflow-hidden rounded-2xl gap-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollSnapType: "x mandatory" }}>
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-[94%]  transition-transform duration-500 ${index === currentVideoIndex ? "" : "opacity-50"
                            }`}
                    >
                        {index < 3 ? (
                            <iframe title="vimeo-player" src={video} width="100%" height="100%" className="w-full rounded-2xl" frameBorder="0" allowfullscreen></iframe>
                        ) : (
                            <video src={video} controls className="w-full rounded-2xl" style={{ filter: index !== currentVideoIndex ? "blur(5px)" : "none", }} />
                        )}
                    </div>
                ))}
            </div> */}

        </div>

    )
}

export default Testimonials