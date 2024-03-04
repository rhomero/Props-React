const App = () =>
(
    <div>
        <FirstComponent/>
        <NamedComponent name="john"/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
