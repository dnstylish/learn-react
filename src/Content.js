import {useEffect, useState} from "react";

function Content() {

    const [avatar, setAvatar] = useState('')

    const handleSelectedFile = (event) => {
        const file = event.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    })

    return (
        <div>
            <input type='file' onChange={event => handleSelectedFile(event)}/>
            <div>
                { avatar && <img src={avatar.preview}  alt='' /> }
            </div>
        </div>
    );
}

export default Content
