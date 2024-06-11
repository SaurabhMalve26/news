const express = require('express');
const router = express.Router();
require('./dbConnect');
const app =express()
const port = 5000
const newsRoute = require('./routes/newsRoute')
const NewsItemModel = require('./models/NewsItem');
const cors = require('cors');
const userRoute = require('./routes/userRoute')

app.use(cors({
    origin: 'http://localhost:3000' // Allow only this origin
  }));

  app.get('/api/newsitems/getnewsitembyid/:id', async (req, res) => {
    const newsItemId = req.params.id;
    console.log(`Request received for news item ID: ${newsItemId}`);

    try {
        const newsItem = await NewsItemModel.findById(newsItemId);
        if (newsItem) {
            res.json(newsItem);
        } else {
            res.status(404).json({ message: 'News item not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  

app.use(express.json());
app.use('/api/newsitems/',newsRoute)
app.use('/api/users/', userRoute)
app.listen(port, () => console.log(`News app listening on port ${port}`));

module.exports = router;