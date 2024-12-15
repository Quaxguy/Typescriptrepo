// import Greetings from "./Greetings"
import Profile from "./profile"

function App() {


  return (
    <div style={{textAlign:"center", marginTop:'20px'}}>
      <Profile name="John" age={20} bio="I am a software developer i work very hard and i am kawai cute"/>
      <Profile name="Jane" age={22} bio="I am a software" />
      <Profile name="Doe" age={25} bio="I am a developer"/>
    </div>
  )
}

export default App
