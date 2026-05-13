import { useState } from "react";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {

    if(email === "stark@gmail.com" && password === "1234"){

      setIsLoggedIn(true);

    }else{
      alert("Invalid Credentials ");
    }

  };

  // LOGIN SUCCESS PAGE
  if(isLoggedIn){
    return (
      <div style={styles.successContainer}>
        <h1> Hey Jolly </h1>
        <h2>Login Successfully </h2>
      </div>
    );
  }

  // LOGIN PAGE
  return (
    <div style={styles.container}>

      <div style={styles.box}>

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

      </div>

    </div>
  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdfcfc",
  },

  box: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },

  input: {
    padding: "10px",
    fontSize: "16px",
  },

  button: {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

  successContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f19635",
  },

};

export default App;