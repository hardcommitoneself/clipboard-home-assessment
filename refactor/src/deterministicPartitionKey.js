// Refactoring
// This challenge is in JavaScript. Even if it's not your primary language, you should still give it a shot!


// You've been asked to refactor the attached function to make it easier to read and understand without changing its functionality. For this task, you should:


// Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
// Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
// Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

// const crypto = require("crypto");


// exports.deterministicPartitionKey = (event) => {
//   const TRIVIAL_PARTITION_KEY = "0";
//   const MAX_PARTITION_KEY_LENGTH = 256;
//   let candidate;


//   if (event) {
//     if (event.partitionKey) {
//       candidate = event.partitionKey;
//     } else {
//       const data = JSON.stringify(event);
//       candidate = crypto.createHash("sha3-512").update(data).digest("hex");
//     }
//   }


//   if (candidate) {
//     if (typeof candidate !== "string") {
//       candidate = JSON.stringify(candidate);
//     }
//   } else {
//     candidate = TRIVIAL_PARTITION_KEY;
//   }
//   if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
//     candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
//   }
//   return candidate;
// };

import crypto from 'crypto'

const deterministicPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = "0";
    const MAX_PARTITION_KEY_LENGTH = 256;
    let candidate;

    if(event) {
        const data= JSON.stringify(event)
        candidate = event.partitionKey ? event.partitionKey : crypto.createHash("sha3-512").update(data).digest("hex");

        if(typeof candidate !== "string") {
            candidate = JSON.stringify(candidate)
        } else if(candidate.length > MAX_PARTITION_KEY_LENGTH) {
            candidate = crypto.createHash("sha3-512").update(candidate).digest("hex")
        }
    } else {
        candidate = TRIVIAL_PARTITION_KEY;
    }

    return candidate
}
export default deterministicPartitionKey;

console.log(deterministicPartitionKey())
console.log(deterministicPartitionKey("123"))
console.log(deterministicPartitionKey({partitionKey: {key: "value"}}))
console.log(deterministicPartitionKey({partitionKey: "fjwjfjwojfowejfjwoifjoejfoejwo owjfjeofjejfowjofjwoejfo234284932jf92j9fj9j34fjfjjf9w4f948f92jf93j9j9f3fj239jf92jfowfowj23jf982jf9 owf9j923f32jf98jf9j32f fjj 29j32jf982fjwf2983fj23f9j39ffwenf239f9fj93hf923jf23j9fjfj9wefj2398f2jfj3fh239f2jowiehf98232j"}))