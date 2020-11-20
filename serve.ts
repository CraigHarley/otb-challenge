import express from 'express';

// Spin up a very simple server for serving assets.
// Serving static assets in Parcel is a whole thing...
// https://github.com/parcel-bundler/parcel/issues/1080
const app = express();
app.use(express.static('assets'))

const PORT = 9999;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
