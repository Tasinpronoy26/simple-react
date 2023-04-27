import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [userid, setUserId] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogle = () => {

        signInWithPopup(auth, googleProvider)

            .then(result => {

                const user = result.user;
                console.log(user);
                setUserId(user);

            })

            .catch(error => {

                console.log(error.message)


            })

    }

    const handleGithub = () => {

        signInWithPopup(auth, githubProvider)
        .then(result => {

            const user = result.user;
            console.log(user)
            setUserId(user);
        })
        .catch(error => {
            console.log(error);
        })
    }
 
    const handleGoogleSignOut = () => {

        signOut(auth)
            .then(result => {
                setUserId(null);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>

            {userid ? <button onClick={handleGoogleSignOut}>Sign Out</button> :
                <div> <button onClick={handleGoogle}>Google Log In</button>
                    <button onClick={handleGithub}>Github</button>
                </div>}
            {userid && <div>
                <h1> user name : {userid.displayName}</h1>
                <p> user email : {userid.email}</p>
                <img src={userid.photoURL} alt="" />
            </div>}

        </div>
    );
};

export default Login;