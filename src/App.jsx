import Panel from "./components/Panel";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-max max-w-[1366px] flex-col justify-start overflow-x-hidden bg-page-bg bg-coffee-bg bg-[length:1366px_320px] bg-top bg-no-repeat px-32 py-40 text-center font-DM">
        <Panel />
      </div>
    </div>
  );
}

export default App;
