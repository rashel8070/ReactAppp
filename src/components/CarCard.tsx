import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import brazilFlag from "/workspaces/ReactAppp/src/assets/brazil.jpg";
import englandFlag from "/workspaces/ReactAppp/src/assets/england.jpg"; 
import germanyFlag from "/workspaces/ReactAppp/src/assets/germany.jpg";
import { getfootballdata } from "../api/actions";

const Footballcard: React.FC = () => {
  const [data, setData] = useState<FootBallData>();
  const [loadingState, setLoadingState] = useState(false);
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    console.log("Fetching Football Data...");
    console.log(country);
    setLoadingState(true);
    getfootballdata(country)
      .then((res) => {
        setError("");
        if (res) {
          console.log(res);
          setData(res);
          setLoadingState(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoadingState(false);
        setData(undefined);
        setError(error);
      });
  };

  const getLogo = (country: string) => {
    switch (country) {
      case "brazil":
        return brazilFlag;
      case "england":
        return englandFlag;
      case "germany":
        return germanyFlag;

      default:
        return ""; // Default case if no logo is found
    }
  };

  return (
    <Card className="max-w-[400px] items-center">
      <CardHeader className="flex gap-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex flex-col w-full p-2 space-y-4">
            <Input
              id="countryname"
              type="text"
              label="football"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
            <Button
              className=""
              color="primary"
              isLoading={loadingState}
              type="submit"
            >
              Search
            </Button>
          </div>
        </form>
      </CardHeader>
      <Divider />
      {data ? (
        <CardBody>
          <div className="flex flex-col items-center">
          <img
              src={getLogo(data.country)} // Get logo based on manufacturer
              alt={`${data.country} logo`}
              className="w-40 h-40 mb-4"
            />
            <h1 className="text-3xl font-bold">{data.country}</h1>
            <p className="text-3xl font-bold">{data.title}</p>
            <p className="text-lg">Year: {data.runnerup}</p>
            <p className="text-lg">Color: {data.ranking} </p>
            
          </div>
        </CardBody>
      ) : (
        <CardBody>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Please enter a country name</p>
          </div>
        </CardBody>
      )}
      <Divider />
      <CardFooter>
        <div className="flex flex-col items-left">
          {error && <p className="text-xs text-red-600 ">{error}</p>}
          {data && (
            <p className="text-xs  text-gray-600 ">Last update successful.</p>
          )}
          {!data && (
            <p className="text-xs  text-gray-600 ">Waiting for input...</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Footballcard;
