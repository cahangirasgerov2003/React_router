function Home() {
    return (
        <div className="contact">
            <h2>Contact us !</h2>
            <form>
                <div>
                   <label htmlFor="email">Email:</label>
                   <input type="email" id="email" />
                </div>
                <div>
                   <label htmlFor="message">Message:</label>
                   <textarea id="message"></textarea>
                </div>

                <button type="button">Send</button>
            </form>
        </div>
    );
}

export default Home;