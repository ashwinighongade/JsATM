console.log("welcome to state bank of india,swipe you card:-")
balance=20000
c=require("readline-sync")
card=c.question("enter your card:-")
if (card=="atm"){
    console.log("in Process")
    l=require("readline-sync")
    language=l.question("enter the language ")
    if (language=="english" ){
        console.log("in process")
        p=require("readline-sync")
        pin=p.question("enter your pin code:-")
        if (pin==1995){
            console.log("in process")
            t=require("readline-sync")
            type=t.question("enter the type:-")
            if (type=="current" | type=="saving"){
                console.log("loading")
                t=require("readline-sync")
                trans=t.question("enter your transection ")
                if (trans=="withdraw"){
                    console.log("please wait")
                    a=require("readline-sync")
                    ammount=a.question("enter your ammount:-")
                    if (ammount>=0 && ammount<=10000){
                        console.log(balance-ammount,"is remaining in your account")
                        r=require("readline-sync")
                        reciept=r.question("did you collect your cash")
                        if (reciept=="yes"){
                            console.log("take a printed receipt,if needed")
                            console.log("ok your withdrawal successful thank you so much")

                        }
                        else{
                            console.log("wait for reciept")
                        }

                    } 
                    else{
                        console.log("you cant withdraw your maney")
                    }
                }
                else{
                    console.log("incorrect option")
                }
            }
            else{
                console.log("please check your option")
            }
        }
        else{
            console.log("incorrect pin code")
        }
    }
    else{
        console.log("this language is not available")
    }
}
else{
    console.log("this card is invalid")
}