import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
    return (
        <div className="app">

            <h1>User Profile</h1>

            <ProfileCard
                name="Jay Finaviya"
                image="https://i.pravatar.cc/200"
                description="MCA student and aspiring software developer interested in web development and modern technologies."
            />

        </div>
    );
}

export default App;