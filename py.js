
const { spawn } = require('child_process');

function callPythonScript(scriptPath, params) {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', [scriptPath, params]);

    let output = '';

    pythonProcess.stdout.on('data', (data) => {
      output += data.toString();
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(`Python process exited with code ${code}`));
      }
    });
  });
}

const testPythonAPI = async (req, res) => {
  try {
    // const text = "I am a female, my size is medium. i need a formal dress for a buisness event. the colour should be dark"
    const text = req.body.text
    const result = await callPythonScript('python_script.py', text);
    console.log(result); // Output: 5
    res.json(result.trim());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to Fetch Data' });
  }
}

module.exports = { testPythonAPI}

// testPythonAPI();












// _________________________________________________________________________________________________________________





// const { AutoTokenizer, AutoModelForSequenceClassification } = require('transformers');

// const extractKeywords = async (text) => {
//   try {
//     const tokenizer = await AutoTokenizer.fromPretrained('distilbert-base-uncased');
//     const model = await AutoModelForSequenceClassification.fromPretrained('distilbert-base-uncased-finetuned-sst-2-english');

//     const input = tokenizer.encode(text, { truncation: true, padding: 'longest' });
//     const tensorInput = {
//       input_ids: [input.input_ids],
//       attention_mask: [input.attention_mask]
//     };

//     const output = model.forward(tensorInput);
//     const logits = output.logits[0];
//     const probabilities = logits.softmax(0);
//     const predictedClass = probabilities.indexOf(Math.max(...probabilities));

//     const keywords = {};

//     // Map predicted class to keywords
//     if (predictedClass === 0) {
//       keywords.color = 'dark';
//     } else if (predictedClass === 1) {
//       keywords.size = 'L';
//     } else if (predictedClass === 2) {
//       keywords.gender = 'male';
//     }

//     return keywords;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };

// // Example usage
// const rentalRequirements = 'I need a suit for an event, it should be a dark color, the size should be L and it is for a male.';
// extractKeywords(rentalRequirements)
//   .then((keywords) => {
//     console.log('Keywords:', keywords);
//     // Use the extracted keywords for further processing
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });





// // const tras = require('transformers');


// // const { Configuration, OpenAIApi } = require("openai");
// // require('dotenv').config()
// // const express = require('express')



// // const app = express()

// // app.use(express.json())


// // const configuration = new Configuration({
// //     apiKey: process.env.OPENAI_API_KEY,
// // });

// // const openai = new OpenAIApi(configuration);

// // app.post('/api', async (req, res) => {
// //     try {

// //         const response = await openai.createCompletion({
// //             // engine: "davinci",
// //             model: "text-davinci-003",
// //             prompt: "Hi How are you ?",
// //             maxTokens: 64,
// //             temperature: 0,
// //             topP: 1,
// //             presencePenalty: 0,
// //             frequencyPenalty: 0,
// //             // bestOf: 1,
// //             // n: 1,
// //             // stream: false,
// //             stop: ["\n"]
// //         })
// //         console.log(response.data.choices[0].text)
// //         return res.status(200).json({message: "Success",
// //         data: response.data.choices[0].text})
// //     } catch (error) {
// //         return res.status(500).json({error: error.response.data,
// //         message: "Something went wrong"
// //         })
// //     }
     
// // })











// // const port = process.env.PORT || 3000

// // app.listen(port, () => {
// //     console.log(`Listening on port ${port}`)
// // })




// // //   console.log(configuration)
// // //   const openai = new OpenAIApi(configuration);

// // //   console.log("//////////////////////////////////////////////////////////////////////////////////////////////////////////////////")
// // // //   console.log(openai)

// // //   async function runCompletion () {
// // //     const completion = await openai.createCompletion({
// // //       model: "gpt-3.5-turbo",
// // //       prompt: "How are you today?",
// // //     });
// // //     // console.log(completion);
// // //     // console.log(completion.data.choices[0].text);
// // //     }

// // //     // runCompletion();

    