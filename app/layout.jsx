import '@styles/globals.css';

export const metadata = {
    title: "Stormhacks 2024",
    description: 'This is our project for stormhacks 2024'
}

const Rootlayout = ({ children }) => {
  return (
    <html lang="en"> 
        <body>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout;