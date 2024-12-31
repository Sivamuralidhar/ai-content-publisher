const { createClient } = require('@supabase/supabase-js');

// const ConnectModel = require('../src/data/ConnectModel');
// const connectModel = new ConnectModel();

const uuid = require('uuid');
process.env["SUPABASE_URL"] = "https://lnundxtwsnralnzsbzzr.supabase.co";
process.env["SUPABASE_ANON_KEY"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxudW5keHR3c25yYWxuenNienpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MDAwNDksImV4cCI6MjA1MDk3NjA0OX0.CSt3F-n6Kk3J9caRsHgtux2Rsdjpqx9uboecYVxEly8";


describe("Below test methods are to connect to supabase db", () => {

    it('should insert into users table', async () => {
        // Initialize the JS client
        const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
        let createUser = {
            profilePic: uuid.v4(),
            userName: "ultra pro max",
            phoneNumber: "8789632541",
            isActive: true,
            userPlan: "professional",
            countryCode: "IND"
        };
        const isInserted = await supabase.from('users').insert([createUser]).select()
        expect(isInserted.status).toEqual(201);
    });

    it('should read data from users table', async () => {
        // Initialize the JS client
        const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
        const data = await supabase.from('users').select('*')
        console.log(`data: ${data}`);
        expect(data.status).toEqual(200);
    });

    it('should read data from pricingModels table', async () => {
        // Initialize the JS client
        const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
        const pricingModelsData = await supabase.from('pricingModels').select('*')
        console.log(`pricingModels Data: ${pricingModelsData}`);
        expect(pricingModelsData.status).toEqual(200);
    });

    it('should read data from pricingModels table', async () => {
        try {
            // Initialize the JS client
            const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
            const insertData = await supabase
                .from('pricingModels')
                .insert([
                    { price: '100', planName: 'Premium', isActive: true },
                ])
                .select()

            console.log(`insertData: ${insertData}`);
            expect(insertData.status).toEqual(201);
        } catch (error) {
            console.error(`error in inserting: ${error}`);
        }
    });



})




