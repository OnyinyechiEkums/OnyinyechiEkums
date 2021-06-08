import React, { useEffect, useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant.

const Urllink: React.FC = () => {
    const QRCode = require('qrcode.react'); 

    const [url, setUrl] = useState('');

    const ShowURL = (event: any) => {
        setUrl(event.target.value)
    }

    useEffect(() => {
        window.alert(`Welcome to ONYINYECHIEKUMANKAMASQR Generator`);
      
    }, []);

    useEffect(() => {
        document.title = 'ONYINYECHIEKUMANKAMASQR Generator';
    });

    {/**For Urllink */}
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
                <div className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <QRCode value={url} size={256} fgColor="pink" />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="box">
                        <div className="field">
                            <label className="label">URL</label>
                            <div className="control">
                                <input className="input is-link" type="text" placeholder="Input Link" onInput={ShowURL} />
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    )
}

export default Urllink;