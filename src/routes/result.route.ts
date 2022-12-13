import {Router} from 'express'
import {ResultController} from '../controllers'


const ResultRouter = Router();

ResultRouter.get('/', ResultController.getResults);
ResultRouter.post('/', ResultController.createResult);


export default  ResultRouter