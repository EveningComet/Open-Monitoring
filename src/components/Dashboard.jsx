import NavigationBar from "./navigation/NavigationBar";

/**
 * Keeps track of things that will always need to be displayed to
 * to the user.
 * 
 * @returns All the components the user would want to see.
 */
function Dashboard()
{
    return(
        <div>
            <h1>Open Monitoring</h1>
            <NavigationBar />
        </div>
    );
}

export default Dashboard;