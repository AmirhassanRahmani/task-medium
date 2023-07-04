import "./App.css";
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";

function App() {
  return (
    <div>
      
      <div className="flex justify-between gap-5 py-8 px-10 max-[1200px]:pl-0 max-[1200px]:h-auto max-[1024px]:flex-col max-[1024px]:px-[1rem] max-[500px]:px-[0.5rem]">
        <Right />
        <Middle />
        <Left />
      </div>
    </div>
  );
}

export default App;
