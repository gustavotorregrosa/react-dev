import { useEffect, useRef, useState } from "react";
import MyAppBar from './components/navBar'
import { Route, Routes } from "react-router-dom"
import io from "socket.io-client";
import MarketData from './pages/marketData'
import UserPage from "./pages/user";
import { Container } from "@mui/material";
import uuid from 'uuid-random';

const ENDPOINT = `http://${window.location.hostname}:3003`;

const App = () => {
  const socketIo = useRef(null);
  const [client, setClient] = useState(null);
  const [marketData, setMarketData] = useState([])

  useEffect(() => {
    socketIo.current = io(ENDPOINT);

    socketIo.current.on(
      "client-connected",
      (client) => client && setClient(client)
    );

    socketIo.current.on("market-data", (data) => {
      console.log({data})

      /**
      * 
      * Fake ID to use DataGrid
      */
      const dataWithID = {
        ...data,
        id: uuid()
      }
      setMarketData(prev => [
        ...prev,
        dataWithID
      ])
    });

    return () => socketIo.current.disconnect();
  }, []);

  return <>
      <MyAppBar />
      <br/><br/>
      <Container>
        <Routes>
            <Route path="/user" element={<UserPage client={client} />} exact />
            <Route path="/table" element={<MarketData rows={marketData} />} exact />
        </Routes>
      </Container>
  </>

};

export default App;
