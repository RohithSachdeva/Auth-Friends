import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsForm = () => {
    const [addFriend, setAddFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = e => {
        e.preventDefault();
        setAddFriend({
            ...addFriend,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', addFriend)
        .then(res => {
            console.log(res);
            setAddFriend({name: '', age: '', email: ''})
        });
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            required
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            onChange={handleChange}
            value={addFriend.name}
            />
            <input
            required
            type='number'
            name='age'
            id='age'
            placeholder='Age'
            onChange={handleChange}
            value={addFriend.age}
            />
            <input
            required
            type='email'
            name='email'
            id='email'
            placeholder='JohnDoe@email.com'
            onChange={handleChange}
            value={addFriend.email}
            />
            <button>Add Friend</button>
        </form>
    )
}


export default FriendsForm;









// function SmurfForm(props) {
//     const [addSmurf, setAddSmurf] = useState({
//         name: '',
//         age: '',
//         height: ''
//     });

//     const handleChanges = e => {
//         setAddSmurf({
//             ...addSmurf,
//             [e.target.name]: e.target.value
//         });
//     }

//     const handleSubmit = e => {
//         e.preventDefault();

//         props.addedSmurf(addSmurf);
//         setAddSmurf({
//             name: '',
//             age: '',
//             height: '',
//         });
//     }
    
//     return (
//         <div>
//             <form>
//                 <input
//                     placeholder='Name'
//                     type="text"
//                     name="name"
//                     value={addSmurf.name}
//                     onChange={handleChanges}
//                 />
//                 <input
//                     placeholder='Age'
//                     type="text"
//                     name="age"
//                     value={addSmurf.age}
//                     onChange={handleChanges}
//                 />
//                 <input
//                     placeholder='Height'
//                     type="text"
//                     name="height"
//                     value={addSmurf.height}
//                     onChange={handleChanges}
//                 />
//                 <button onClick={handleSubmit}>Add Smurf</button>
//             </form>
//         </div>

//     )
// }

// export default SmurfForm;

