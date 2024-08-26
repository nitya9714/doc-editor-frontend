import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { auth } from '../firebase';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const { pre } = UserAuth();
    const navigate = useNavigate();

    const UsersCol = collection(db, 'users');
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();        
        signInWithPopup(auth, provider)
            .then((result) => {
                const q = query(UsersCol, where("email", "==", result.user.email));
                getDocs(q)
                    .then((snapshot) => {
                        let el = [];
                        snapshot.docs.forEach((doc) => {
                            el.push({ ...doc.data(), id: doc.id });
                        })
                        if (el.length === 0) {
                            addDoc(UsersCol, {
                                email: result.user.email,
                                docs: [],
                            })
                        }
                    });
                if (pre) {
                    navigate(pre);
                }
                else {
                    navigate('/');
                }

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };



    return (
        <div className='Login'>
            <div style={{ width: '40%', fontSize: '2.6em', fontWeight: '600' }}>Unlock the power of words and ideas. Login to embark on a seamless journey of editing and collaboration.</div>
            <div className='outer' onClick={handleGoogleSignIn}>
                <div className='icon' ><FcGoogle style={{ padding: '0', margin: '0', fontSize: '2.75em' }} /></div>
                <div className='inner'>Sign in with Google</div>
            </div>
        </div>
    );
}

export default Login;