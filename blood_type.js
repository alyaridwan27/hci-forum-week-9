function canGiveBlood(donor, receiver){
    let bloodTypes = ["O+", "O-", "A+", "A-","AB+", "AB-","B+", "B-",]
    let compatible = [];
    let i;

    if(a.charAt(0) === "O"){
        if (donor.slice(-1) === "+"){
            for(i = 0; i < bloodTypes.length; i += 2){
                compatible.push(bloodTypes[i]);
            }
        } else {compatible = bloodTypes}

    } else if (donor.slice(0,2) === "AB"){
        if (donor.slice(-1) === "+"){
            for(i = 2; i < bloodTypes.length; i += 2){
                compatible.push(bloodTypes[i]);
            }
        } else {compatible = bloodTypes.slice(2)}


    } else if (donor.charAt(0) === "A"){
        if (donor.slice(-1) === "+"){
            for(i = 2; i < 6; i += 2){
                compatible.push(bloodTypes[i]);
            }
        } else { compatible = bloodTypes.slice(2,6); }
    } else if (donor.charAt(0) === "B"){
        if (donor.slice(-1) === "+"){
            for(i = 4; i < bloodTypes.length; i += 2){
                compatible.push(bloodTypes[i]);
            }
        } else { compatible = bloodTypes.slice(4); }
    }

    console.log(compatible.includes(receiver))

}

canGiveBlood("O+", "A+");
canGiveBlood("A-", "B-");
canGiveBlood("A-", "AB+");