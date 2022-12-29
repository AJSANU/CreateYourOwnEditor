import * as React from "react";
import ReactMde from "react-mde";
import ReactDOM from "react-dom";
import * as Showdown from "showdown";
import "./styles.css";
import "react-mde/lib/styles/css/react-mde-all.css";
import Header from "./Header";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

export default function App() {
  const data =
    "!!! Start Writing !!!";

  console.log("data", data);

  const [value, setValue] = React.useState(`${data} `);
  const [values, setValues] = React.useState(`${data} `);
  const [selectedTab, setSelectedTab] = React.useState("write");

  function handleChange(value) {
    setValue(value);
    setValues(value);
  }
  function handleChanges(value) {
    setValues(value);
    setValue(value);
  }
  const save = async function* (data) {
    // Promise that waits for "time" milliseconds
    const wait = function (time) {
      return new Promise((a, r) => {
        setTimeout(() => a(), time);
      });
    };

    // Upload "data" to your server
    // Use XMLHttpRequest.send to send a FormData object containing
    // "data"
    // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

    await wait(2000);
    // yields the URL that should be inserted in the markdown
    yield "https://picsum.photos/300";
    await wait(2000);

    // returns true meaning that the save was successful
    return true;
  };

  return (
    <div className="MainBox">
        <Header/>
    <div className="container" style={{border:"border: 15px solid green", padding: "50px", margin:"margin: 20px"}}>
      <ReactMde
        value={value}
        onChange={handleChange}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        childProps={{
          writeButton: {
            tabIndex: -1
          }
        }}
        paste={{
          saveImage: save
        }}
      />
    </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
