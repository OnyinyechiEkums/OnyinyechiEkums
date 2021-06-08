import React, { useEffect, useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const Text: React.FC = () => {
    const QRCode = require('qrcode.react'); 

    const [num, setNum] = useState('');
    const [message, setMessage] = useState('');

    const ShowNum = (event: any) => {
        setNum(event.target.value)
    }

    const ShowMessage = (event: any) => {
        setMessage(event.target.value)
    }

    useEffect(() => {
        window.alert(`ONYINYECHIEKUMANKAMASQR Generator`);
       
    }, []);

    useEffect(() => {
        document.title = 'ONYINYECHIEKUMANKAMASQR Generator';
    });

    {/**For Text */}
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
                <div className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <QRCode value={`SMS:${num}:${message}`} size={256} />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="box">
                        <div className="field">
                            <label className="label">Phone Number</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Number" onInput={ShowNum} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Message</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Type Message" onInput={ShowMessage}></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    )
}

export default Text;
