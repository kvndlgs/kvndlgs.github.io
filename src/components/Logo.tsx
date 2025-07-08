interface LogoProps {
  size?: string;
  color?: string;
}

export default function Logo({ size, color }: LogoProps) {
  return (
    <div className={`w-${size ? size : '148'} h-auto flex items-center justify-center`}>
      <svg width="66" height="38" viewBox="0 0 66 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.5449 38L40.887 23.8616L45.905 13.152L40.3295 22.3115L33.6156 0.187887H47.3221C57.66 0.187887 66 8.64277 66 19.0939C66 29.5451 57.5903 38 47.2756 38H34.5449ZM31.8268 38L21.9303 19.6341L16.7033 28.2534L21.4192 17.7318L29.132 0L0 0.0469709V38H31.8268Z" fill={ color ? color : "#3D1556" } />
      </svg>
    </div>
  )
}
