import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '<YOUR_SUPABASE_URL>';
// const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '<YOUR_SUPABASE_ANON_KEY>';

const supabaseUrl = 'https://lnundxtwsnralnzsbzzr.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxudW5keHR3c25yYWxuenNienpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MDAwNDksImV4cCI6MjA1MDk3NjA0OX0.CSt3F-n6Kk3J9caRsHgtux2Rsdjpqx9uboecYVxEly8`;

const supabase = createClient(supabaseUrl, supabaseKey);

// Function to create tables
export const createTables = async () => {
  try {
    // Create 'users' table
    const { error: userError } = await supabase
      .rpc('create_table', {
        table_name: 'users',
        table_schema: `
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT NOW()
        `
      });

    if (userError) throw userError;

    // Create 'userposts' table
    const { error: postError } = await supabase
      .rpc('create_table', {
        table_name: 'userposts',
        table_schema: `
          id SERIAL PRIMARY KEY,
          user_id INTEGER NOT NULL REFERENCES users(id),
          title VARCHAR(255) NOT NULL,
          content TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT NOW()
        `
      });

    if (postError) throw postError;

    // Create 'pricing_models' table
    const { error: pricingError } = await supabase
      .rpc('create_table', {
        table_name: 'pricing_models',
        table_schema: `
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          price NUMERIC NOT NULL,
          description TEXT,
          created_at TIMESTAMP DEFAULT NOW()
        `
      });

    if (pricingError) throw pricingError;

    console.log('Tables created successfully!');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
};

// Example usage: Insert data into the tables
export const exampleInsert = async () => {
  try {
    // Insert a user
    const { data: user, error: userInsertError } = await supabase
      .from('users')
      .insert({ name: 'John Doe', email: 'john.doe@example.com' })
      .select();

    if (userInsertError) throw userInsertError;
    console.log('User inserted:', user);

    // Insert a post for the user
    const { data: post, error: postInsertError } = await supabase
      .from('userposts')
      .insert({
        user_id: user[0].id,
        title: 'My First Post',
        content: 'This is the content of the first post.'
      })
      .select();

    if (postInsertError) throw postInsertError;
    console.log('Post inserted:', post);

    // Insert a pricing model
    const { data: pricing, error: pricingInsertError } = await supabase
      .from('pricing_models')
      .insert({
        name: 'Basic Plan',
        price: 9.99,
        description: 'This is the basic subscription plan.'
      })
      .select();

    if (pricingInsertError) throw pricingInsertError;
    console.log('Pricing model inserted:', pricing);
  } catch (error) {
    console.error('Error inserting example data:', error);
  }
};

// Execute the functions
(async () => {
  await createTables();
  await exampleInsert();
})();
