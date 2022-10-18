import { useEffect, useRef, useState } from 'react';

interface PropTypes {
  style: React.CSSProperties;
}

const Visibility: React.FC<PropTypes> = ({ children, style }) => {
  const [visible, setVisible] = useState(false);

  const wrapper = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionOberserver);
    wrapper.current && observer.current.observe(wrapper.current);
    return () => {
      wrapper.current && observer.current?.disconnect();
    };
  }, []);

  const intersectionOberserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  };

  return (
    <div ref={wrapper} style={style}>
      {visible ? children : <></>}
    </div>
  );
};

export default Visibility;
