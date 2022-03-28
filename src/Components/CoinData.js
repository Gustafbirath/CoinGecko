import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

const CoinData = (props) => {
    const params = useParams();
    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(365);
    const [currency, setCurrency] = useState("sek");
    const [coin, setCoin] = useState();


    async function fetchCoinsHandler() {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${params.name}`);
        const data = await response.json();
        setCoin(data);
    }

    async function getHistoricData(){
        const chartResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${params.name}/market_chart?vs_currency=sek&days=365`);
        const chartData = await chartResponse.json();
        setHistoricData(chartData);
    };

    useEffect(() => {
        fetchCoinsHandler()
        getHistoricData()
    }, []);

    return (
        <div>
            {coin ? (
                <div className="trending mt-5">
                    <img src={coin.image.large} />
                    <h1>{coin.name}</h1>
                    <h2>{coin.symbol}</h2>
                    <a href={coin.links.homepage[0]}>{coin.links.homepage[0]}</a>
                    <p> Beskrivning: {coin.description.en}</p>
                </div>
            ) : (
                <div>{params.name}</div>
            )
            }
        </div >
    )
}

export default CoinData