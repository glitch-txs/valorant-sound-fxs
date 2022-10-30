import React, { useEffect, useMemo, useState } from 'react'
import style from './Valorant.module.scss'
import {Howl, Howler} from 'howler'



const Valorant = () => {

  const [allowed, setAllowed] = useState<boolean>(false)
  const [playing, setPlaying] = useState<boolean>(false)
  const [soundId, setSoundId] = useState<number>()

  const bgSound = useMemo(()=>{
    return new Howl({
      src: ['/sounds/background-sound.mp3'],
      volume: 0.3
    });
  }, [])
  
  const gunSound = useMemo(()=>{
    return new Howl({
      src: ['/sounds/gun-sound.wav'],
      volume: 0.3
    });
  }, [])

  const swordSound = useMemo(()=>{
    return new Howl({
      src: ['/sounds/sword-sound.wav'],
      volume: 0.3
    });
  }, [])

const playGun = ()=>{
  gunSound?.play();
}

const playSword = ()=>{
  swordSound?.play();
  
}

const handleAllowance = ()=>{
  setAllowed(true)
}

const handleBackground = ()=>{

  if(playing){
    bgSound?.fade(0.3, 0, 1000, soundId)
    setPlaying(false)
  } else {
    const id_ = bgSound?.play()
    setSoundId(id_)
    setPlaying(true)
  }

}

  return (
    <div className={style.container} >
      {
        allowed ?
        <>
          <a href="#" onMouseEnter={playGun} onClick={playSword}>
          <p><span className={style.bg}></span><span className={style.base}></span><span className={style.text}>Play Valorant</span></p></a>
          <a className={style.white} href="#" onMouseEnter={playGun} onClick={playSword}>
          <p><span className={style.bg}></span><span className={style.base}></span><span className={style.text}>Play Valorant</span></p></a>
          <a className={style.transparent} href="#" onMouseEnter={playGun} onClick={handleBackground}>
          <p><span className={style.bg}></span><span className={style.base}></span><span className={style.text}>{ playing ? 'Stop Soundtrack' : 'Play Soundtrack' }</span></p></a>
        </> :
        <>         
        <a style={{position:'absolute', bottom:'30px'}} href="#" onClick={handleAllowance}>
        <p><span className={style.bg}></span><span className={style.base}></span><span className={style.text}>Allow Audio</span></p></a>
        </>
      }
    </div>
  )
}

export default Valorant