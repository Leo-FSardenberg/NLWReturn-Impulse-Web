
import { FeedbackData, FeedbacksRepository } from "../feedbacks-repos";
import { prisma } from "../../prisma";



export class PrismaFeedbackRepository implements FeedbacksRepository{
   async create({type, comment, screenshot}: FeedbackData){
        await prisma.feedback.create({
            data:{
                type,
                comment,
                screenshot,
            }
        })
    }
}