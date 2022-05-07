import express from 'express';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedback-repos';
import { SubmitFeedback } from './services/submit-feedback';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';


export const routes = express.Router()

routes.post('/feedbacks', async (req,res) => {
    const {type, comment, screenshot} = req.body
    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter
    const submitFeedbackService = new SubmitFeedback(prismaFeedbackRepository, nodemailerMailAdapter)
 
   await submitFeedbackService.execute({
     type,
     comment,
     screenshot,
   })



    return res.status(201).send();
    });
  


