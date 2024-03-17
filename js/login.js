
import initializeApp from '../firebase/app';
import  getFirestore  from "../firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCt711E1QJ59Q3AxiTPfJG3brXZXDaDPmA",
    authDomain: "javascript-test-5c003.firebaseapp.com",
    projectId: "javascript-test-5c003",
    storageBucket: "javascript-test-5c003.appspot.com",
    messagingSenderId: "769365442499",
    appId: "1:769365442499:web:8375422eb4c1b9e26a8776"
  };

  // Firebaseアプリを初期化
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

const onClickSubmitButton = (e) =>{
    e.preventDefault(); // フォームのデフォルトの送信を防止
    alert("送信！");

   

};

document.querySelector("#loginForm").addEventListener('submit',onClickSubmitButton);