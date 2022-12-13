import prisma from '../prisma'
import { Request, Response } from 'express'

class ResultController{

    static async getResults(req: Request, res: Response){
        try{
            const results = await prisma.result.findMany({
                include:{
                    quiz: true,
                }
            })
            res.json({results})
        }catch(error){
            if(error) throw error
        }
    }

    static async createResult(req: Request, res: Response) {
        try {
          const result = await prisma.result.create({
            data: req.body,
          });
    
          res.json({ result });
        } catch (err) {
          console.log(`error is ${err}`);
        }
      }

    


}

export default ResultController;