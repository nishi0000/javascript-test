

const onClickSubmitButton = (e) =>{
    e.preventDefault(); // フォームのデフォルトの送信を防止
    alert("送信！");
   

};

document.querySelector("#loginForm").addEventListener('submit',onClickSubmitButton);