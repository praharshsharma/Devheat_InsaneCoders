
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
        // import firebase from 'firebase/compat/app';
        const firebaseConfig = {
            apiKey: "AIzaSyDPXRgeyf-_ubBfqM8j99L9Yqt1_0w_nj0",
            authDomain: "firev9jsdb-4c1a2.firebaseapp.com",
            databaseURL: "https://firev9jsdb-4c1a2-default-rtdb.firebaseio.com",
            projectId: "firev9jsdb-4c1a2",
            storageBucket: "firev9jsdb-4c1a2.appspot.com",
            messagingSenderId: "326924521814",
            appId: "1:326924521814:web:10481b3c2dbb15d98b06f7"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        export default app;