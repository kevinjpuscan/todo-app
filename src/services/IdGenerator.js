import { v4 as uuidv4 } from 'uuid';

class IdGenerator{
    generate(){
        return uuidv4(); 
    }
}

export default IdGenerator;