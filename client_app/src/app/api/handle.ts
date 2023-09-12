// pages/api/uploadfile.ts
'use server';
import { NextApiRequest, NextApiResponse } from 'next';
//import axios from 'axios';
async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // Forward the form data to your FastAPI backend
      const response = await fetch('http://localhost:3500/uploadfile', {
        method: 'POST',
        body: req.body,
      });

      if (response.ok) {
        // Handle success response
        res.status(200).json({ message: 'Form data sent successfully' });
      } else {
        // Handle error response
        const data = await response.json();
        console.log('this happened')
        res.json(data);
      }
    } catch (error) {
      // Handle network error
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405); // Method Not Allowed
  }
}

// posttest function to handle formdata
async function postTest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // Forward the form data to your FastAPI backend
      const response = await fetch('http://localhost:3500/posttest', {
        method: 'POST',
        body: req.body,
      });

      if (response.ok) {
        // Handle success response
        res.json({ message: 'Form data sent successfully' });
      } else {
        // Handle error response
        const data = await response.json();
        console.log('this happened')
        res.json(data);
      }
    } catch (error) {
      // Handle network error
      res.json({ message: 'Internal server error' });
    }
  } else {
    console.log('not allowed')
  }
}


export { handler, postTest }