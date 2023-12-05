import { v4 as uuidv4 } from 'uuid';

export function generateUniqueCode() {
    const uuid = uuidv4();
    const shortCode = uuid.replace(/-/g, '').substr(0, 7); 

    return shortCode;
}


