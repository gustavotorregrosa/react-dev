import { useEffect, useRef, useState } from "react";
import MyAppBar from './components/navBar'
import { Route, Routes } from "react-router-dom"
import io from "socket.io-client";
import MarketData from './pages/marketData'

const ENDPOINT = `http://${window.location.hostname}:3003`;

const App = () => {
  const socketIo = useRef(null);
  const [client, setClient] = useState(null);

  useEffect(() => {
    socketIo.current = io(ENDPOINT);

    socketIo.current.on(
      "client-connected",
      (client) => client && setClient(client)
    );

    socketIo.current.on("market-data", (data) => console.log({ data }));

    return () => socketIo.current.disconnect();
  }, []);

  return <>
    <MyAppBar />
    <br/><br/><br/><br/><br/><br/><br/>
    <Routes>
        <Route path="/user" exact />
        <Route path="/table" element={<MarketData />} exact />
    </Routes>
  </>

};

export default App;
