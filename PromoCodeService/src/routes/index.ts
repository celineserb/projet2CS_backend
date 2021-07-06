import { Router } from 'express';
import { get, getAllPromoCodes, updatePromoCode,addPromoCode, deletePromoCode, 
    getAllPromoCodesPages, getPoints } from '../controllers/PromoCodeController'
const router = Router();


router.get('/', get);
router.get('/getPromoCodes', getAllPromoCodes);
router.get('/getPoints/:idTenant', getPoints);
router.get('/getPromoCodesWeb', getAllPromoCodesPages);
router.post('/addPromoCode', addPromoCode);
router.post('/updatePromoCode', updatePromoCode);
router.post('/deletePromoCode/:idPromoCode', deletePromoCode);

export default router;