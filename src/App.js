import './App.css';
import Input from './components/Form/Input';
import Select from './components/Form/Select';
import Radio from './components/Form/Radio';
function App() {
  const radioButtonData = ['Male', 'Female', 'Other'];
  return (
    <div className="App">
      <div className="container">
        <form>
          <div>
            <Input label="Name" placeholder="Enter your name" />
          </div>
          <div>
            <Select label="Location" placeholder="Select your location" />
          </div>
          <div>
            <Radio
              name="Gender"
              label="Choose your gender"
              options={radioButtonData}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
