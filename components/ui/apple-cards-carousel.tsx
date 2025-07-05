"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const CarouselContext = createContext<any>({});
type CardItem = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 384, gap: 32 });
  const originalLength = items.length;

  // Responsive card dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window === "undefined") return;
      const isMobile = window.innerWidth < 768;
      setDimensions({
        width: isMobile ? 230 : 384,
        gap: isMobile ? 16 : 32,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-10 md:py-20">
      <div
        ref={containerRef}
        className="flex w-full animate-scroll gap-4 pl-4"
        style={{
          animationDuration: `${originalLength * 5}s`,
          width: `${originalLength * (dimensions.width + dimensions.gap) * 2}px`,
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="rounded-3xl flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

// ... rest of your components (Card, BlurImage) remain mostly the same ...

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardItem;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
  layoutId={layout ? `card-${card.title}` : undefined}
  onClick={handleOpen}
  className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900"
>
  <div className="relative z-40 p-8">
    <motion.p
      layoutId={layout ? `category-${card.category}` : undefined}
      className="text-left font-sans text-sm font-medium text-white md:text-base"
    >
      {card.category}
    </motion.p>
    <motion.p
      layoutId={layout ? `title-${card.title}` : undefined}
      className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
    >
      {card.title}
    </motion.p>
  </div>
  <BlurImage
    src={card.src}
    alt={card.title}
    className="absolute inset-0 z-10"
  />
</motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: any) => {
  const [blurIntensity, setBlurIntensity] = useState(30); // Start with 30% blur

  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          className
        )}
        src={src}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        alt={alt ? alt : "Background of a beautiful view"}
        style={{
          filter: `blur(${blurIntensity}px)`,
          transition: 'filter 1s ease-out',
          transform: 'scale(1.05)',
        }}
        onLoad={() => {
          // Gradually reduce blur from 30px to 0 over 1 second
          const startTime = Date.now();
          const duration = 1000; // 1 second
          
          const animateBlur = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const newBlur = 30 * (1 - progress);
            
            setBlurIntensity(newBlur);
            
            if (progress < 1) {
              requestAnimationFrame(animateBlur);
            }
          };
          
          requestAnimationFrame(animateBlur);
        }}
        {...rest}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
    </div>
  );
};