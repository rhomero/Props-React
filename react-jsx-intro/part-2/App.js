const App = () => 
(
    <div>
        <Tweet 
        username="XxGokuXX" 
        name="Henry Martin " 
        date="8-12-16" 
        message="This app sucks"
        />
        <Tweet 
        username="_Bill_Gates" 
        name="Karim Benzema" 
        date="8-13-17" 
        message="#goals"
        />
        <Tweet 
        username="faze-snoop" 
        name="Snoop Dawg" 
        date="4-20-20" 
        message="Hello Guys"
        />

    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);