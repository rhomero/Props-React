const App = () =>
(
    <div>
        <Person
        name="Henry"
        age={18}
        hobbies={["drawing", "dancing", "watching tv" ]}
        />
        <Person
        name="Beda"
        age={20}
        hobbies={["reading", "drawing", "sleeping"]}
        />
        <Person
        name="Johnathan"
        age={15}
        hobbies={["sports", "video games", "singing"]}
        />
        
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);