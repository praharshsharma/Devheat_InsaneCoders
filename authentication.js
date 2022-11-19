import app from "./firebaseconfig.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendSignInLinkToEmail, getRedirectResult, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

//const submit = document.getElementById('sub_btn');
const google = document.getElementById('gog_btn');
//const sub2 = document.getElementById('sub2_btn');


// const actionCodeSettings = {
//     // URL you want to redirect back to. The domain (www.example.com) for this
//     // URL must be in the authorized domains list in the Firebase Console.
//     url: 'http://127.0.0.1/',
//     // This must be true.
//     handleCodeInApp: true,
//     iOS: {
//       bundleId: 'com.example.ios'
//     },
//     android: {
//       packageName: 'com.example.android',
//       installApp: true,
//       minimumVersion: '12'
//     },
//     dynamicLinkDomain: 'http://127.0.0.1/'
// };




// function AuthenticateUser() {
//     const email = document.getElementById('userInp');
//     const password = document.getElementById('passInp');



//     console.log(email.value, password.value)
//     sendSignInLinkToEmail(auth, email.value, actionCodeSettings)
//         .then(() => {
//             // The link was successfully sent. Inform the user.
//             // Save the email locally so you don't need to ask the user for it again
//             // if they open the link on the same device.
//             window.localStorage.setItem('emailForSignIn', email.value);
//             console.log("then");
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode);
//             console.log(errorMessage);
//             console.log("catch");
//             // ...
//         });
//     // createUserWithEmailAndPassword(auth, email.value, password.value)
//     //     .then((userCredential) => {
//     //         // Signed in 

//     //         const user = userCredential.user;
//     //         // ...
//     //         console.log("then in authenticate user");
//     //         console.log(user);
//     //         window.location = "home.html";
//     //     })
//     //     .catch((error) => {
//     //         console.log("catch in authenticate user");

//     //         const errorCode = error.code;
//     //         const errorMessage = error.message;
//     //         console.log(errorCode);
//     //         console.log(errorMessage);


//     //         // ..
//     //     });
// }

// submit.addEventListener('click', AuthenticateUser);
function googlepopup() {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            alert(credential);
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            localStorage.setItem('user_email' , user.email)
            window.location = "home.html";
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            alert(errorMessage);
        });
}
google.addEventListener('click', googlepopup);

// function login() {
//     const email = document.getElementById('userInp');
//     const password = document.getElementById('passInp');
//     console.log(email.value, password.value)



//     signInWithEmailAndPassword(auth, email.value, password.value)
//         // console.log(email.value, password.value);
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log(user.emailVerified);
//             console.log(auth);
//             if (!(user.emailVerified)) {
//                 console.log("in if");
//                 auth.currentUser.sendSignInLinkToEmail(auth, email.value, actionCodeSettings)
//                     .then(() => {
//                         // The link was successfully sent. Inform the user.
//                         // Save the email locally so you don't need to ask the user for it again
//                         // if they open the link on the same device.
//                         window.localStorage.setItem('emailForSignIn', email.value);
//                         console.log("then");
//                         // ...
//                     })
//                     .catch((error) => {
//                         const errorCode = error.code;
//                         const errorMessage = error.message;
//                         console.log(errorCode);
//                         console.log(errorMessage);
//                         console.log("catch");
//                         // ...
//                     });
//             }
//             console.log(user);
//             // ...
//             //window.location = "home.html";
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode);
//             console.log(errorMessage);
//             alert("wrong email or password");
//         });

// }
// sub2.addEventListener('click', login);
