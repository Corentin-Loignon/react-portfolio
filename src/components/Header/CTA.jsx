import React from 'react'
import CV from '../../assets/CV_Corentin_Loignon.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Télécharger mon CV</a>
        <a href="#contact" className='btn'>Me contacter</a>
    </div>
  )
}

export default CTA