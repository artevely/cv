# Artemii Velikii

### Contact Information:

**E-mail:** artemyveliky02@gmail.com<br>
**Phone:** +7 (910) 664 51 63<br>
**Telegram:** [@artevely](https://t.me/artevely)<br>
**VK:** [link](https://vk.com/artevely)<br>
**Github:** [link](https://github.com/artevely)<br>
**Discord:** artevely

---

### About me:
My acquaintance with programming began in my first year at university. Now I am getting an education as an Information Security Specialist. And during the summer holidays, I decided to try Frontend development for general information. And I'm really interested in and want to develop in Front.<br>
I guess my strengths are that I am active and curious, always want to learn something new. I am organized, keep my word and fulfill my responsibilities. I'm really calm and reserved but also like to have fun.<br>


---

### Skills:

- HTML5, CSS3, Bootstrap
- CSS3, Sass, Less
- Native Js, Jquery
- Gulp, Grant, npm
- Git, GitHub
- VS Code, PhpStorm
- Adobe Photoshop, Figma

---

### Code example:

**Morse code decoder from Stage0:**

Your task is to write a function, that decodes Morse code and returns a string. Write your solution in src/index.js

Input: String. Its length is multiple of 10.
Each letter from alphabet encoded with dots(.) and dashes(-). 10 stands for dot(.), 11 stands for dash(-).
Each encoded letter's length is 10.
If the length of the encoded letter is less then 10, it left padded with 0.
Space in string is **********. Output: String (decoded) Example: me -> m === -- === 0000001111, e === . === 0000000010 -> 00000011110000000010*

```javascript
function toLength(elem) {
    let elemStr = elem.toString();
    if (elemStr.length < 10) {
        elemStr = '0'.repeat(10 - elemStr.length) + elemStr;
    }
    return elemStr;
}

function replaceSignToNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {arr[i] = '**********'};
        arr[i] = toLength(arr[i].replaceAll('.', '10').replaceAll('-', '11'));

    } return arr;
}

function decode(expr) {
    let list = expr.toLowerCase().split('');
    for (let j = 0; j < list.length; j++) {
        let index = 0;
        for (let i of Object.values(MORSE_TABLE)) {
            if (list[j] === i) {
                list[j] = Object.keys(MORSE_TABLE)[index];
                break;
            }
            index += 1;

        }
    }

    list = replaceSignToNumbers(list).join('');
    return list;
}
```
---

### Education: 
 - Saratov State University, faculty CSIT, Computer Security, full-time, 2020-2026 (studying...)

### Courses:
- Itlogia Course «Frontent-developer» (in progress)<br>
- RS Schools Course «JavaScript/Front-end. Stage 0»<br>
- RS Schools Course «JavaScript/Front-end.» (in progress)

---

### Languages:

- English \- B2 Upper-intermediate (according to the online test at [www.efset.org](https://www.efset.org/cert/iyqYfi))<br>
    Twice a week have a lesson with native speaker.
- Russian \- Native
- Chinese \- Beginner