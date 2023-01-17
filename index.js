const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-kr1Sa9uS0KJVkipH2xETLBh8",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

app.post('/', async (req, res) => {
  const {message}= req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:`${message}`,
    max_tokens: 7,
    temperature: 0,
  });
  res.json({
    message: response.data.choices[0].text
  })
  }
)

app.listen(port, ()=> {
  console.log(`Example app listening att http://localhost:${port}`)
})