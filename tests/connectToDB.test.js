import { dbConnect } from '../src/components/Data/ConnectDB';


it('should connect to db', () => {
    dbConnect.createTables();
});
