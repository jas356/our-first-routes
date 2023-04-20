export default function Signup({setUser}) {
    return(
        <section style={{background: "#ffff000030"}}>
            <h1>Sign Up</h1>
            <button onClick={() => setUser('Returning User')}>Sign Up</button>
        </section>
    )
}