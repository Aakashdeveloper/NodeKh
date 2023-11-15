const readline = require('readline');
const crypto = require('crypto');

const ENCRYPTION_ALGORITHM = "aes-256-ctr";
const ENCRYPTION_PASSWORD = "SuperSecert";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`Server started! waiting for user input......`)


r1.on("line",(input) => {
    const encryptedMessage = encryptedMessage1(input)
    console.log(`Encrypted Message is : ${encryptedMessage}`);

    const decryptedMessage = decryptedMessage1(encryptedMessage);
    console.log(`Decrypted message is : ${decryptedMessage}`)
});


function encryptedMessage1(message){
    const cipher = crypto.createCipher(ENCRYPTION_ALGORITHM,ENCRYPTION_PASSWORD);
    let encrypted = cipher.update(message,'utf8',"hex");
    encrypted += cipher.final("hex");
    return encrypted
}

function decryptedMessage1(encryptedMessage){
    const decipher = crypto.createDecipher(ENCRYPTION_ALGORITHM,ENCRYPTION_PASSWORD);
    let decrypted = decipher.update(encryptedMessage,"hex","utf8");
    decrypted += decipher.final("utf8");
    return decrypted
}
