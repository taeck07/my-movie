import { useEffect, useRef, useState } from 'react';

interface PropTypes {
  src: string;
  style?: React.CSSProperties;
}

const LazyImageLoading: React.FC<PropTypes> = ({ src, style }) => {
  const [isLoading, setIsLoading] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionOberserver);
    imgRef.current && observer.current.observe(imgRef.current);
  }, []);

  const intersectionOberserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setIsLoading(true);
      }
    });
  };

  return <img ref={imgRef} src={isLoading ? src : ''} style={style} />;
};

export default LazyImageLoading;
