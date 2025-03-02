import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import vdo from "../../../../assets/vdo.mp4";

const Feedback = () => {
    const clients = [
        { name: "Manish", university: "University of Tribhuvan ~ Nepal", video: vdo },
        { name: "Manish", university: "University of Tribhuvan ~ Nepal", video: vdo },
        { name: "Manish", university: "University of Tribhuvan ~ Nepal", video: vdo },
    ];

    return (
        <section className='py-12 bg-gray-100 text-center'>
            <h3 className='text-purple-700 font-semibold text-sm'>FEEDBACKS</h3>
            <h1 className='text-3xl font-bold mt-2'>
                Our clients shared their{" "}
                <span className='relative inline-block'>
                    Views on Us
                    <svg className="absolute -z-1 -bottom-3 right-2 object-cover" width="355" height="15" viewBox="0 0 355 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M351.66 12.6362C187.865 -6.32755 49.6478 6.37132 3.41142 12.6362" stroke="#764AF1" strokeWidth="3" strokeLinecap="square"></path>
                        <path d="M351.66 13C187.865 -5.96378 49.6478 6.73509 3.41142 13" stroke="#764AF1" strokeWidth="3" strokeLinecap="square"></path>
                        <path d="M2.5 5.5C168.5 2.0001 280.5 -1.49994 352.5 8.49985" stroke="#FFC44E" strokeWidth="3" strokeLinecap="square"></path>
                    </svg>
                </span>
            </h1>

            <div className='mt-8 flex flex-wrap justify-center gap-6'>
                {clients.map((client, index) => {
                    const videoRef = useRef(null);
                    const [isPlaying, setIsPlaying] = useState(false);

                    const togglePlayPause = () => {
                        if (videoRef.current) {
                            if (isPlaying) {
                                videoRef.current.pause();
                            } else {
                                videoRef.current.play();
                            }
                            setIsPlaying(!isPlaying);
                        }
                    };

                    return (
                        <div key={index} className='relative w-72 bg-gray-100 rounded-lg shadow-lg overflow-hidden group'>
                            <video ref={videoRef} src={client.video} className='w-full h-80 object-cover' />

                            <button
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50  transition-all duration-300"
                                onClick={togglePlayPause}
                            >
                                <span className='absolute inset-0 bg-gradient-to-t from-transparent to-fuchsia-800 opacity-0 group-hover:opacity-100 transition-all duration-300'></span>
                                {isPlaying ? <Pause size={48} className="text-white relative bg-purple-900 z-10" /> : <Play size={48} className="text-white relative bg-purple-900 z-10" />}
                            </button>


                            <div className='absolute bottom-0 bg-slate-900 bg-opacity-75 text-white p-2 w-full text-center'>
                                <h4 className='font-semibold'>{client.name}</h4>
                                <p className='text-sm'>{client.university}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Feedback;
