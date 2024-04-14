import style from './loadingScreen.module.css'

const LoadingScreen = ({type}: {type: string}) => {
  return (
    <div className={type === 'loaderProgress' ? style.loaderProgress : style.loaderCircle}>

    </div>
  )
}

export default LoadingScreen
