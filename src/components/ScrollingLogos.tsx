import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { gameData } from '../data/gameData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

export default function ScrollingLogos() {
  const games = Object.values(gameData);
  const [isInteracting, setIsInteracting] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden bg-black/30 py-6 md:py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10 pointer-events-none" />
      
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={16}
        centeredSlides={false}
        loop={true}
        freeMode={{
          enabled: true,
          sticky: false,
          momentumRatio: 0.25,
          momentumVelocityRatio: 0.5,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        speed={5000}
        allowTouchMove={true}
        grabCursor={true}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
        className="!overflow-visible px-4 md:px-8"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className="!w-auto">
            <Link
              to={`/games?game=${game.id}`}
              className="block group"
              onClick={(e) => isInteracting && e.preventDefault()}
            >
              <div className="w-20 h-20 md:w-32 md:h-32 relative rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 hover:border-blue-600/50 transition-all duration-300">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}