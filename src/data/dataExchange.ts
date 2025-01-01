import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Initialize Supabase Client
const supabaseUrl = 'https://lnundxtwsnralnzsbzzr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxudW5keHR3c25yYWxuenNienpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MDAwNDksImV4cCI6MjA1MDk3NjA0OX0.CSt3F-n6Kk3J9caRsHgtux2Rsdjpqx9uboecYVxEly8';


const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Define a TypeScript interface for the table
interface UserInfo {
    id: string,
    created_at: string,
    profilePic: string,
    userName: string,
    phoneNumber: string,
    isActive: boolean,
    userPlan: string,
    countryCode: string
}

// CREATE Operation: Insert a new task
export async function createUser(user: Partial<UserInfo>): Promise<void> {
    const { data, error } = await supabase.from('user').insert(user);
    if (error) {
        console.error('Error creating user:', error.message);
    } else {
        console.log('user created successfully:', data);
    }
}

// READ Operation: Fetch all tasks
export async function getTasks(): Promise<void> {
    const { data, error } = await supabase
        .from('tasks')
        .select('*');

    if (error) {
        console.error('Error fetching tasks:', error.message);
    } else {
        console.log('Fetched tasks:', data);
    }
}

// READ Operation: Fetch tasks for a specific user
async function getUserTasks(userId: string): Promise<void> {
    const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        console.error('Error fetching user tasks:', error.message);
    } else {
        console.log(`Fetched tasks for user ${userId}:`, data);
    }
}

// UPDATE Operation: Update a specific task
async function updateUser(taskId: number, updates: Partial<UserInfo>): Promise<void> {
    const { data, error } = await supabase
        .from('tasks')
        .update(updates)
        .eq('id', taskId);

    if (error) {
        console.error('Error updating task:', error.message);
    } else {
        console.log(`Task with id ${taskId} updated successfully:`, data);
    }
}

// DELETE Operation: Delete a specific task
async function deleteTask(taskId: number): Promise<void> {
    const { data, error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId);

    if (error) {
        console.error('Error deleting task:', error.message);
    } else {
        console.log(`Task with id ${taskId} deleted successfully:`, data);
    }
}



// Handle sign-up
export async function handleSignUp(email: string, password: string, fullName: string): Promise<boolean> {

    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                first_name: fullName,
                planName: "free"
            },
        },
    })
    if (error) {
        return false;
    } else {
        return true;
    }
};

// Handle login 
export async function handleLogin(email: string, password: string): Promise<void> {

    const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        alert("Error logging in: " + error.message);
    } else {
        alert("Logged in successfully!");
    }
};

// Handle logout 
async function handleLogout(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) {
        alert("Error logging out: " + error.message);
    } else {
        alert("Logged out successfully!");
    }
};


//// Usage Examples
(async () => {
    // Replace 'your-user-id' with a real user ID
    const userId = 'your-user-id';

    // Create a new task
    await createUser({
        id: userId,
        userPlan: "plan",
    });

    // Fetch all tasks
    await getTasks();

    // Fetch tasks for a specific user
    await getUserTasks(userId);

    // Update a task (e.g., mark it as completed)
    await updateUser(1, { userPlan: "plan" });

    // Delete a task
    await deleteTask(1);
})();
