require('dotenv').config(); // For loading environment variables from .env
const app = require('./src/app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
