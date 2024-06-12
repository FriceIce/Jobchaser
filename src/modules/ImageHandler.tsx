type ImageProp = {
  src: string; 
  className: string; 
  role: string;
  alt: string;
}

const ImageHandler = ({src, className, role, alt}: ImageProp) => {
  return (
    <picture>
      <source 
        type="image/avif"
        srcSet={`
          ${src}?width=100 100w, 
          ${src}?width=200 200w, 
          ${src}?width=400 400w, 
          ${src}?width=800 800w`}
      />
      <source 
        type="image/webp"
        srcSet={`
          ${src}?width=100 100w, 
          ${src}?width=200 200w, 
          ${src}?width=400 400w, 
          ${src}?width=800 800w`}
      />
        <img 
          srcSet={`
          ${src}?width=100 100w, 
          ${src}?width=200 200w, 
          ${src}?width=400 400w, 
          ${src}?width=800 800w`}
          className={className}
          loading='lazy'
          role={role} 
          src={src}
          alt={alt}
        />
    </picture>
  )
}

export default ImageHandler
