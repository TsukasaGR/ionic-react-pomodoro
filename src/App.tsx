import React from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <IonApp>
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonTitle>IonicReactApp</IonTitle>
            </IonToolbar>
          </IonHeader>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <IonButton href="https://reactjs.org">Learn React</IonButton>
        </IonContent>
      </IonApp>
    </div>
  );
}

export default App;
