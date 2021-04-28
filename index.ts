import * as express from 'express';

const app = express();
const {PORT = 80, API_KEY} = process.env;

if (!API_KEY) {
    console.error('Set up the api key');
    process.exit(1);
}

app.get('/ping', (req, res) => {
    res.end('pong');
});

app.listen(PORT, () => {
    console.log('Server has been started');
})
