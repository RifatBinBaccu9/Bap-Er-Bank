function pageLogin (){
    const gmailFieldId=document.getElementById('mail');
    const gmailValue=gmailFieldId.value;
    const passwordFieldId=document.getElementById('password');
    const passwordValue=passwordFieldId.value;
   
    if(gmailValue === 'baperbank@gmail.com' && passwordValue === '1234'){
    // Login Page remove
      const loginPages=document.getElementById('loginPage');
      loginPages.classList.add('hidden');
      
    //  Accunt Page Show
    const accuntPage=document.getElementById('accuntPage');
    accuntPage.classList.remove('hidden');
    }else{
        const wrong=document.getElementById('wrong');
        const wrongMsp=document.createElement('p');
        wrongMsp.classList=`text-red-600 mb-4 text-md font-medium`;
        wrongMsp.innerText=`Your account information is incorrect...`;
        wrong.appendChild(wrongMsp);
    }
    gmailFieldId.value='';
    passwordFieldId.value='';
}

// deposit amout
const depositBalance = () =>{
    // Deposit input Field id
    const depositField=document.getElementById('depositField');
    const depositDataValu=depositField.value;
    const depositValue=parseInt(depositDataValu);
    // deposit Balance
    const depositBalanceAdd=document.getElementById('depositBalance');
    const depositBalanceText=depositBalanceAdd.innerText;
    const depositBalanceConvart=parseInt(depositBalanceText);
    // deposit balance and prebalance +
    const depositTotalBalance=depositBalanceConvart + depositValue;
    depositBalanceAdd.innerText=depositTotalBalance;

    // add total balance
    const totalBalance=document.getElementById('totalBalance')
    const totalBalanceConvart=totalBalance.innerText;
    const totalBalanceValue=parseInt(totalBalanceConvart);

    const totalBalanceAmunt=totalBalanceValue + depositValue;
    totalBalance.innerText=totalBalanceAmunt;

    depositField.value = '';
}

const withdraw = () =>{
    // withdraw call value
    const withdrawField=document.getElementById('withdraw');
    const withdrawValue=withdrawField.value;
    const withdrawInt=parseInt(withdrawValue);

    // totle amount show withdraw amount
    const totalBalanceWithOut=document.getElementById('totalBalance')
    const totalBalanceWithOutConvart=totalBalanceWithOut.innerText;
    const totalBalanceValueWithOut=parseInt(totalBalanceWithOutConvart);


    if(withdrawInt <= totalBalanceValueWithOut){

        // withdraw amount showcall
        const withdrawShow=document.getElementById('withdrawShow');
        const withdrawShowText=withdrawShow.innerText;
        const withdrawTextInt=parseInt(withdrawShowText);
    
        // withdraw amount totle show
        const withdrawTotalAmount=withdrawTextInt + withdrawInt;
        withdrawShow.innerText=withdrawTotalAmount;
    
    
        // totle amount +/-
        const totle=totalBalanceValueWithOut - withdrawInt;
        totalBalanceWithOut.innerText=totle;
    }else{
        const withdrawWrong=document.getElementById('withdrawWrong');
        const withdrawWrongP=document.createElement('p');
        withdrawWrongP.classList=`text-red-600 mb-4 text-md font-medium`;
        withdrawWrongP.innerText=`Your account does not have sufficient balance...`;
        withdrawWrong.appendChild(withdrawWrongP);
    }
    withdrawField.value='';
}
