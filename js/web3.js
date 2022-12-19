const YAAF_MinerAddress = '0x812cfCce03dAb36466bDcb3B204fA3775d10852D';//original
//const YAAF_MinerAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
let UserURl = '0x0000000000000000000000000000000000000000';
let refLint;

let YAAF_Miner;
async function login_In_button(){
    await ethereum.request({ method: 'eth_requestAccounts' });
    window.location.reload();
}


async function setConect(){

    const chainID = await web3.eth.net.getId();
    console.log(chainID);
    if(await web3.eth.net.getId()!="56"){
        alert("Please change to BSC chain");
        return;
    }


    let ContractBNBbalance = await web3.eth.getBalance(YAAF_MinerAddress);
    ContractBNBbalance = web3.utils.fromWei(ContractBNBbalance, 'ether');
    ContractBNBbalance = ContractBNBbalance.substring(0,6);
    $("#BNBBalance").text(ContractBNBbalance +" BNB");



    let account = await web3.eth.getAccounts();
    coinbase = account[0];

    if(coinbase == undefined){
        return;
    }

    $("#btn2").text(coinbase);

    let ETHbalance = await web3.eth.getBalance(coinbase);
    ETHbalance = web3.utils.fromWei(ETHbalance, 'ether');
    ETHbalance = ETHbalance.substring(0,6);

    $("#WalletBalance").text(ETHbalance +" BNB");



    let add = coinbase.substring(0,7)
    connt = add;
    console.log(add);
    $("#Coon").text(add);
    $("#input1").val(coinbase);

}

async function splitURL(url){


    if(url.indexOf('?')!=-1){
        var ary1 = url.split('?id=');

        UserURl = ary1[1];
        console.log(ary1[1]);

        refLint = ary1[0]+"?id="+coinbase;
        $("#refLint").val(refLint);
        $("#refLint").attr("placeholder", refLint);
    }else{

        if(coinbase){
            refLint = url+"?id="+coinbase;
            $("#refLint").val(refLint);
            $("#refLint").attr("placeholder", refLint);
        }else{
            refLint = url;
            $("#refLint").val(refLint);
            $("#refLint").attr("placeholder", refLint);
        }

    }
}

async function Copy(){
    navigator.clipboard.writeText(refLint);
    alert("Copied!");
}

async function setNFT_ABI(){
    let url = location.href;
    console.log(url);
    await setConect();
    await splitURL(url);

    YAAF_Miner = new web3.eth.Contract(YAAF_MinerABI,YAAF_MinerAddress);
    if(coinbase == undefined){
        return;
    }
    GetMyYAAF_Miner(coinbase);


}




async function CreateYAAF_Miner(){

    let sendeValue = $("#inputBNB").val();
    if(sendeValue < 0.1){
        alert("Can't input under 0.1 BNB");

        return;
    }


    await YAAF_Miner.methods.createYAAF_Miner(UserURl).send({from:coinbase,value:web3.utils.toWei(sendeValue, "ether")});

    window.location.reload();
}

async function GetMyYAAF_Miner(){

    const Breeding = await YAAF_Miner.methods.getBreedingBreeders(coinbase).call();

    $("#YAAF_MinerAmount").text(Breeding);

    let GetReferralAllRebate = await YAAF_Miner.methods.getReferralAllInvitee(coinbase).call();

    $("#inv").text(GetReferralAllRebate);

    CalculateYAAF_MinerMerge();
}


async function CalculateYAAF_MinerMerge(){


    let WithDrawBValue = await YAAF_Miner.methods.YAAF_MinerRewards(coinbase).call();
    console.log(typeof WithDrawBValue);
    WithDrawBValue = (parseInt(WithDrawBValue)/8)*5;
    WithDrawBValue = web3.utils.fromWei(WithDrawBValue.toString(), 'ether');
    console.log(WithDrawBValue);



    let Rabate = await YAAF_Miner.methods.getReferralAllRebate(coinbase).call();
    let unWithdraw = await YAAF_Miner.methods.getClaimYAAF_Miner(coinbase).call();

    if(unWithdraw == 0){

    }else{
        unWithdraw = await YAAF_Miner.methods.calculateYAAF_MinerMerge(unWithdraw).call();
        console.log(parseInt(Rabate) + (parseInt(unWithdraw)/8)*5);
        Rabate = parseInt(Rabate) + (parseInt(unWithdraw)/8)*5;
        console.log(Rabate);
        Rabate = parseInt(Rabate);
        Rabate = Rabate.toString();
    }
    console.log(Rabate);
    Rabate = web3.utils.fromWei( Rabate, 'ether');
    $("#rat").text(Rabate.substring(0,6) + " BNB ");


    $("#YourRewards").text(WithDrawBValue.substring(0,6) + " BNB ");


}

async function party(){
    if(MerageStartTime() > 1 ){
        return;
    }
    await YAAF_Miner.methods.mergeYAAF_Miner().send({from:coinbase});
    window.location.reload();
}

async function cultivate(){
    if(MerageStartTime() > 1 ){
        return;
    }
    await YAAF_Miner.methods.divideYAAF_Miner(UserURl).send({from:coinbase});
    window.location.reload();
}

//7.14updates
async function MerageStartTime(){
    const StartTime=  await YAAF_Miner.methods.startTime().call();
    const nowTime = await YAAF_Miner.methods.TimeCheck().call();
    const FiinalstartTime = StartTime - nowTime;
    return FiinalstartTime;
}
const msleep= async (time)=> new Promise((resolve)=>{
    setTimeout(resolve,time)
})

async function countDown() {
    const second = 1,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    // while(1) {
        const blocktime = await MerageStartTime();
        console.log( blocktime);
        var timeleft = blocktime * -1;
        const  x = setInterval(function() {
            timeleft = timeleft+1;
            if (timeleft>0){
                document.getElementById("days").innerText = Math.floor(timeleft / (day)),
                document.getElementById("hours").innerText = Math.floor((timeleft % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((timeleft % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((timeleft % (minute)) / second);
            }
            else{
                document.getElementById("days").innerText = 0,
                document.getElementById("hours").innerText = 0,
                document.getElementById("minutes").innerText = 0,
                document.getElementById("seconds").innerText = 0;
            }
        }, 1000)
        //更新秒數
    //     await msleep(10000);
    //     clearInterval(x);
    // }
}

setNFT_ABI().then(()=>{
    countDown();
})
