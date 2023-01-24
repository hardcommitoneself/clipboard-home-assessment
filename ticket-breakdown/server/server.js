const puppeteer = require('puppeteer');
const express = require('express');

const app = express();

app.get('/screenshot', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(req.query.url); // URL is given by the "user" (your client-side application)
    
    await page.pdf({
        path: './pdfts/react.pdf', // path (relative to CWD) to save the PDF to.
        printBackground: true,// print background colors
        width: '612px', // match the css width and height we set for our PDF
        height: '792px',
    });

    await browser.close();
})

app.listen(4000, () => console.log(`Server running on port 4000`));