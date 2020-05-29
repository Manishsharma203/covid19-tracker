import React, {useState,useEffect} from 'react';
import styles from './popup.module.css'

export default function PopUp() {
    const [popupFlag,popupStatus]= useState(true)
    useEffect(()=>{
        popupStatus(false)
    },[])
    return (
        <div>
            {!popupFlag?
            <div id="myModal" className={styles.modal}>
            <div className={styles.modalContent}>
                <button onClick={()=>popupStatus(true)} className={styles.close}>&times;</button>
                <div>
                    <img src='thank-you.webp' alt='No_Image'/>
                    <div className='text-wrap py-3'>Please remember that the numbers here are not just numbers, these are real people.
                    <br></br>
                    We express our gratitude to all the frontline superheroes (medical workers, sanitation workers, police, community volunteers) for their contribution in this fight against the coronavirus.
                    <br></br>
                    Together we can stop corona. Let's take care of each other
                    </div>
                </div>
            </div>
            </div>:
            <div></div>
        }
        </div>
    )
}
