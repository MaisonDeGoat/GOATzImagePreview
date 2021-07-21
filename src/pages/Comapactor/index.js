import React, {useState, useRef} from 'react';
import styles from './compactor.module.scss'
import html2canvas from 'html2canvas'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import button from '../../button.jpg';
import button1 from '../../button1.jpg';

const Compactor = () => {
    //test
    const previewUploaderRef = useRef(null);
    const layoutUploaderRef = useRef(null);
    const [upload, setUpload] = useState({
        preview: null,
        layout: null
    });


    const [image, setImage] = useState({ preview: '', raw: '' })
    const [state, setState] = useState({
        mouth: null,
        horn: null,
        eyes: null,
        outfit: null,
        fur: null,
        earring:null,
        background: null
    });
    const {mouth, horn, eyes, outfit, fur, background, earring} = state;
    const urls = {
        fur: 'https://goatz.mypinata.cloud/ipfs/QmXSGrnbjkgPZx8YNcFA3VrNC76b1QqKd4v4MsEK1qmGLf/',
        mouth: 'https://goatz.mypinata.cloud/ipfs/QmVhbezPHBPjC7DdcCHi9iejy84uC5h89gLn1F7h6vhfyx/',
        outfit: 'https://goatz.mypinata.cloud/ipfs/QmWUtJ9G2AZshX1juHucphHGBPdBiNtcT1rkqAbVXFmJtb/',
        eyes: 'https://goatz.mypinata.cloud/ipfs/QmPWmBTgKWzny6S7X2ttTuz1Tn9oF3DZTacVFpJ2YAmfKA/',
        horn: 'https://goatz.mypinata.cloud/ipfs/QmeicGvFaxTmD4yrrv9Myv5ZoKMTZ9wRK5CzuH3sShixKw/',
        earring : 'https://goatz.mypinata.cloud/ipfs/QmV4Qsf53XrLxdbysZXZVqUHbnkdoWvWJjTrdnMEwNpevx/',
        background:'https://goatz.mypinata.cloud/ipfs/QmT7Exx662DCzqH8C6VVh3EhbNe93u15RVe3ysTyYFt5WU/'
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({...state, [name]: `${urls[name]}${value}`})
    }

    const {preview, layout} = state;
    const handleFileChange = (event) => {
        alert(event.target.name);
        const reader = new FileReader();
        reader.onload = function() {
            console.log("inside onload");
            setState({...state, [event.target.name]: reader.result});
        }
        reader.readAsDataURL(event.target.files[0]);
    }


   const  handleSave =  async ()=>{

       let element = document.getElementById('capture')
       html2canvas(element,
       {
           useCORS: true,
               onRendered: function(canvas) {
           console.log(canvas);
       }
       }).then(canvas => {
           const imgData = canvas.toDataURL('image/png',)
           const screenCaptureSource = imgData;
           const downloadLink = document.createElement('a');
           const fileName = 'capture.png';
           downloadLink.href = screenCaptureSource;
           downloadLink.download = fileName;
           downloadLink.click();
       });
    }
    const stateReset = ()=>{
        setState({...state,
            mouth: null,
            horn: null,
            eyes: null,
            outfit: null,
            fur: null,
            earring:null,
            background: null
        })
    }
    return (
        <div className={styles.Main} id="capture">
            <div className={styles.Forge}>
                <div className={styles.middiv}>
                    <h2>The Forge</h2>
                    <span>Upload Two of your GOATZ <br/> and create a preview of your Forged GOAT</span>
                    <div className={styles.second}>
                        <div className={styles.uploadbtn}>
                            <input ref={previewUploaderRef}
                                   type='file'
                                   style={{display: 'none'}}
                                   name='preview'
                                   onChange={handleFileChange} />
                            <input ref={layoutUploaderRef}
                                   type='file'
                                   style={{display: 'none'}}
                                   name='layout'
                                   onChange={handleFileChange} />
                            <img src={button} onClick={() => previewUploaderRef.current.click()}/>

                            <img src={button1} onClick={() => layoutUploaderRef.current.click()}/>
                        </div>
                        <div className={styles.last}>
                            <div className={styles.image}>
                                {
                                    preview ? <img src={preview} className={styles.upload}/> : null
                                }
                            </div>
                            <div className={styles.image}>
                                {
                                    layout ? <img src={layout} className={styles.upload}/> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container} >
                <h2>Your Forged Goat</h2>
                <div className={styles.center}>

                    {
                        background ? <img src={background}/> : null
                    }
                    {
                        fur ? <img src={fur}/> : null
                    }
                    {
                        outfit ? <img src={outfit}/> : null
                    }
                    {
                        earring ? <img src={earring}/> : null
                    }
                    {
                        eyes ? <img src={eyes}/> : null
                    }
                    {
                        mouth ? <img src={mouth}/> : null
                    }
                    {
                        horn ? <img src={horn}/> : null
                    }
                </div>

            </div>
            <div className={styles.selector}>
                <h2>Personalization</h2>
                <div className={styles.options}>


                <div>
                        <label>Horn</label><br/>
                        <select name='horn' onChange={handleChange}>
                            <option value={null} disabled selected>Horn</option>
                            <option value='Angel.png'> Angle </option>
                            <option value='Cowboy.png'> Cowboy </option>
                            <option value='Alt Jockey.png'> Alt Jockey </option>
                            <option value='Bald.png'> Bald </option>
                            <option value='Beanie.png'> Beanie </option>
                            <option value='Black.png'> Black </option>
                            <option value='Blue Bows.png'> Blue Bows </option>
                            <option value='Blue.png'> Blue </option>
                            <option value='Captain.png'> Captain </option>
                            <option value='Crown.png'> Crown </option>
                            <option value='Devil.png'> Devil </option>
                            <option value='Ethereal.png'> Ethereal </option>
                            <option value='Fedora.png'> Fedora </option>
                            <option value='Firefighter.png'> Firefighter </option>
                            <option value='Ghost.png'> Ghost </option>
                            <option value='Gold.png'> Gold </option>
                            <option value='Grey.png'> Grey </option>
                            <option value='Headband.png'> Headband </option>
                            <option value='Jockey.png'> Jockey </option>
                            <option value='Mystical.png'> Mystical </option>
                            <option value='Pilot.png'> Pilot </option>
                        </select>
                    </div>
                    <div>
                        <label>Mouth</label><br/>
                        <select name='mouth' onChange={handleChange}>
                            <option value={null} disabled selected>Mouth</option>
                            <option value='Cig.png'> Cig </option>
                            <option value='Diamond Grill.png'> Grill </option>
                            <option value='Cigar.png'> Cigar </option>
                            <option value='Determined.png'> Determined </option>
                            <option value='Grin.png'> Grin </option>
                            <option value='Martini.png'> Martini </option>
                            <option value='Mic.png'> Mic </option>
                            <option value='Money.png'> Money </option>
                            <option value='Paintbrush.png'> Paintbrush </option>
                            <option value='Pipe.png'> Pipe </option>
                            <option value='Radiant.png'> Radiant </option>
                            <option value='Toothpick.png'> Toothpick </option>
                            <option value='Rainbow.png'> Tainbow </option>
                            <option value='Whistle.png'> Whistle </option>
                        </select>
                    </div>
                    <div>
                        <label>Eyes</label><br/>
                        <select name='eyes' onChange={handleChange}>
                            <option value={null} disabled selected>Eyes</option>
                            <option value='Goggles.png'> Goggles </option>
                            <option value='Love.png'> Love </option>
                            <option value='3D.png'> 3D </option>
                            <option value='Aviator.png'> Aviator </option>
                            <option value='BTC.png'> BTC </option>
                            <option value='Black Cat.png'> Black Cat </option>
                            <option value='Blue.png'> Blue </option>
                            <option value='Brown.png'> Brown </option>
                            <option value='ETH.png'> ETH </option>
                            <option value='FIAT.png'> FIAT </option>
                            <option value='Green.png'> Green </option>
                            <option value='Heterochromia.png'> Heterochromia </option>
                            <option value='Monocle.png'> Monocle </option>
                            <option value='Jockey Goggles.png'> Jockey Goggles </option>
                            <option value='On Fire.png'> On Fire </option>
                            <option value='Red Cat.png'> Red Cat </option>
                            <option value='Round Frames.png'> Round Frames </option>
                            <option value='Shades.png'> Shades </option>
                            <option value='Stoned.png'> Stoned </option>
                            <option value='Trophy.png'> Trophy </option>
                            <option value='VR.png'> VR </option>
                            <option value='Vibes.png'> Vibes </option>
                        </select>
                    </div>
                    <div>
                        <label>Earring</label><br/>
                        <select name='earring' onChange={handleChange}>
                            <option value={null} disabled selected>Earring</option>
                            <option value='Double.png'> Double </option>
                            <option value='Gold Dice.png'> Gold Dice </option>
                            <option value='Black Pearl.png'> Black Pearl </option>
                            <option value='Diamond Cross.png'> Diamond Cross </option>
                            <option value='Gold Cross.png'> Gold Cross </option>
                            <option value='Gold Hoop.png'> Gold Hoop </option>
                            <option value='Gold Stud.png'> Gold Stud </option>
                            <option value='None.png'> None </option>
                            <option value='Pearl.png'>Pearl </option>
                            <option value='Silver Cross.png'> Silver Cross </option>
                            <option value='Silver Dice.png'> Silver Dice </option>
                            <option value='Silver Stud.png'> Silver Stud </option>
                        </select>
                    </div>
                    <div>
                        <label>Outfit</label><br/>
                        <select name='outfit' onChange={handleChange}>
                            <option value={null} disabled selected>Outfit</option>
                            <option value='Cowboy.png'> Cowboy </option>
                            <option value='Artist.png'> Artist </option>
                            <option value='Wall Street.png'> Wall Street </option>
                            <option value='Alt Basketball.png'> Alt Basketball </option>
                            <option value='Alt Captain.png'> Alt Captain </option>
                            <option value='Alt Jockey.png'> Alt Jockey </option>
                            <option value='Alt Soccer.png'> Alt Soccer </option>
                            <option value='Astronaut.png'> Astronaut </option>
                            <option value='Author.png'> Author </option>
                            <option value='Baseball.png'> Baseball </option>
                            <option value='Basketball.png'> Basketball </option>
                            <option value='Body Builder.png'> Body Builder </option>
                            <option value='Captain.png'> Captain </option>
                            <option value='Dad.png'> Dad </option>
                            <option value='Developer.png'> Developer </option>
                            <option value='Doctor.png'> Doctor </option>
                            <option value='Firefighter.png'> Firefighter </option>
                            <option value='Football.png'> Football </option>
                            <option value='Golfer.png'> Golfer </option>
                            <option value='Jockey.png'> Jockey </option>
                            <option value='Maison Staff.png'> Maison Staff </option>
                            <option value='Mom.png'> Mom </option>
                            <option value='Musician.png'> Musician </option>
                            <option value='NFT Collector.png'> NFT Collector </option>
                            <option value='Nurse.png'> Nurse </option>
                            <option value='Olympian.png'> Olympian </option>
                            <option value='Photographer.png'> Photographer </option>
                            <option value='Pilot.png'> Pilot </option>
                            <option value='Politician.png'> Politician </option>
                            <option value='Power Suit.png'> Power Suit </option>
                            <option value='Racecar Driver.png'> Racecar Driver </option>
                            <option value='Retired.png'> Retired </option>
                            <option value='Soccer.png'> Soccer </option>
                            <option value='Soldier.png'> Soldier </option>
                            <option value='Spy.png'> Spy </option>
                            <option value='Stay at Home Spouse.png'> Stay at Home Spouse </option>
                            <option value='Student.png'> Student </option>
                            <option value='Tennis.png'> Tennis </option>
                            <option value='Trust Fund.png'> Trust Fund </option>
                            <option value='Visionary.png'> Visionary </option>
                        </select>
                    </div>

                    <div>
                        <label>Fur</label><br/>
                        <select name='fur' label='Fur' onChange={handleChange}>
                            <option value={null} disabled selected>Fur</option>
                            <option value='Ethereal.png'> Ethereal </option>
                            <option value='Black.png'> Black </option>
                            <option value='Ghost.png'> Ghost </option>
                            <option value='Blue.png'> Blue </option>
                            <option value='Gold.png'> Gold </option>
                            <option value='Grey.png'> Grey </option>
                            <option value='Mythical.png'> Mythical </option>
                            <option value='Pink.png'> Pink </option>
                            <option value='Purple.png'> Purple </option>
                            <option value='Red.png'> Red </option>
                            <option value='Silver.png'> Silver </option>
                            <option value='Tan.png'> Tan </option>
                            <option value='Tiger.png'> Tiger </option>
                            <option value='White.png'> White </option>
                            <option value='Zebra.png'> Zebra </option>
                            <option value='Zombie.png'> Zombie </option>
                        </select>
                    </div>

                    <div>
                        <label>Background</label><br/>
                        <select name='background' onChange={handleChange}>
                            <option value={null} disabled selected>Background</option>
                            <option value='Blue.png'> Blue </option>
                            <option value='Burgandy.png'> Burgandy </option>
                            <option value='Forest.png'> Forest </option>
                            <option value='Peach.png'> Peach </option>
                            <option value='Purple.png'> Purple </option>
                            <option value='Rose.png'> Rose </option>
                            <option value='Slate.png'> Slate </option>
                            <option value='Rose.png'> Rose </option>
                            <option value='Turquoise.png'> Turquoise </option>
                            <option value='Wheat.png'> Wheat </option>
                            <option value='Yellow.png'> Yellow </option>
                        </select>
                    </div>
                    <div>
                        <button  onClick={handleSave}>save</button>
                        <p onClick={stateReset}><FontAwesomeIcon className={styles.icon} icon={faTrashAlt}/></p>
                    </div>
                </div>


                </div>
        </div>
    )
}

export default Compactor;
