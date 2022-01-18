// Write class below
class ShiftCipher {
  constructor(shiftNum) {
    this.shiftNum = shiftNum;
  }

  encrypt(message) {
    let encryptedMessage = "";
    const tempMessage = message.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      let charNum = tempMessage.charCodeAt(i);

      if (charNum <= 90 && charNum >= 65) {
        charNum = charNum + this.shiftNum;
        if (charNum > 90) {
          charNum = charNum - 26;
        }
        if (charNum < 65) {
          charNum = charNum + 26;
        }
      }
      encryptedMessage = encryptedMessage + String.fromCharCode(charNum);
    }

    return encryptedMessage;
  }

  decrypt(message) {
    let decryptedMessage = "";
    const tempMessage = message.toLowerCase();

    for (let i = 0; i < message.length; i++) {
      let charNum = tempMessage.charCodeAt(i);

      if (charNum <= 122 && charNum >= 97) {
        charNum = charNum - this.shiftNum;
        if (charNum > 122) {
          charNum = charNum - 26;
        }
        if (charNum < 97) {
          charNum = charNum + 26;
        }
      }
      decryptedMessage = decryptedMessage + String.fromCharCode(charNum);
    }

    return decryptedMessage;
  }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt("I love to code!"));
console.log(cipher.decrypt("K <3 OA RWRRA"));
