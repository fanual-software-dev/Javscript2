const CurrentTime= new Date()

const GetTime = {
    hour: CurrentTime.getHours(),
    minute: CurrentTime.getMinutes(),
    second: CurrentTime.getSeconds()
}

function PrintTime(){

    if (GetTime.hour>12){
        
        return GetTime.hour%12 + ':' + GetTime.minute + ':' + GetTime.second + ' PM' 
    }

    else{
        return GetTime.hour + ':' + GetTime.minute + ':' + GetTime.second + ' AM' 
    }
}

console.log(PrintTime())