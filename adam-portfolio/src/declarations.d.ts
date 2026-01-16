declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Swiper CSS modules
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
declare module 'swiper/css/effect-coverflow';

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '@iconscout/react-unicons';
