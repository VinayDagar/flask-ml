import React, { useState } from 'react'
import DefaultLayout from 'layout/default-layout';

// export default function ClassifyImage(props) {

//     const [image, setImage] = useState('')
//     const [imageRef, setRef] = useState('')

//     const classifyImage = (event) => {
//         event.preventDefault();
//         console.log(event.target.files)
//     }

//     return (
//         <DefaultLayout>
//             <div className="text-monospace"> Upload the Image to Classify it as CAT or DOG. </div>
//             {/* <div className="form-group has-feedback">
//                 <button onClick={() => { imageRef.click() }}> Upload the file</button>
//                 <input
//                     type="file"
//                     ref={(ref) => setRef(ref)}
//                     className="d-none"
//                     onChange={e => classifyImage(e)}
//                 />
//             </div> */}
//         </DefaultLayout>
//     )
// }

export default function ClassifyImage(props) {
    const [image, setImage] = useState('')
    const [imageRef, setRef] = useState('')

    return (
        <DefaultLayout>
            <div className="text-monospace"> Upload the Image to Classify it as CAT or DOG. </div>
        </DefaultLayout>
    )
}
